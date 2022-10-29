import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  ActivityIndicator,
} from 'react-native';

const Form = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState('');

  const fetchUserData = async () => {
    setIsLoading(true);
    try {
      const userResponse = await fetch('https://api.github.com/users/' + input);
      const user = await userResponse.json();
      const reposResponse = await fetch(
        'https://api.github.com/users/' + input + '/repos',
      );
      const repos = await reposResponse.json();
      props.setRepos(repos);
      props.setUser(user);
      setIsLoading(false);
    } catch (err) {
      console.log('err', err);
    }
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        value={input}
        placeholder="Enter your username"
        onChangeText={val => {
          setInput(val);
        }}
      />
      <View style={styles.button}>
        <Button
          title="DONE"
          onPress={() => {
            if (input) {
              fetchUserData();
            }
          }}
        />
      </View>

      {isLoading ? <ActivityIndicator size="large" /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 20,
    padding: 10,
  },
  button: {
    margin: 10,
  },
});

export default Form;
