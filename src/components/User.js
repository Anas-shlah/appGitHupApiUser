import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';

const User = props => {
  const {user} = props;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => {
        //const navigation = useNavigation();
        navigation.navigate('User', {user: user});
      }}>
      <Image source={{uri: user.avatar_url}} style={styles.image} />
      <View>
        <Text style={styles.userNameText}>{user.name} </Text>
        <Text>{user.bio}</Text>
        <Text>Followers: {user.followers}</Text>
        <Text>Folowing: {user.following}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 20,
    padding: 10,
  },
  userNameText: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  image: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
    marginEnd: 10,
  },
});

export default User;
