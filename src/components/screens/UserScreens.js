import React from 'react';
import {
  View,
  Text,
  Linking,
  Button,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import User from '../User';

const Home = props => {
  const {user} = props.route.params;

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.innerWrapper}>
        {user ? <User user={user} /> : null}

        <Text style={styles.boold}>
          name: <Text style={styles.data}>{user.name || ' no name'}</Text>
        </Text>

        <Text style={styles.boold}>
          Bio: <Text style={styles.data}>{user.bio || ' no bio'}</Text>{' '}
        </Text>

        <Text style={styles.boold} selectable selectionColor="#3A3C5C">
          Email:
          <Text style={styles.data}>{user.email || ' no Email'}</Text>
        </Text>

        <Text style={styles.boold}>
          followers: <Text style={styles.data}>{user.followers}</Text>{' '}
        </Text>

        <Text style={styles.boold}>
          following: <Text style={styles.data}>{user.following}</Text>{' '}
        </Text>

        <Text style={styles.boold}>
          Location:{' '}
          <Text style={styles.data}>{user.location || ' no Location'}</Text>{' '}
        </Text>

        <Text style={styles.boold} selectable>
          company:{' '}
          <Text style={styles.data}>{user.company || ' no company'}</Text>{' '}
        </Text>

        <Button
          title="Your Github Profile"
          onPress={() => Linking.openURL('https://github.com/' + user.login)}
        />

        <Button
          title="Your blog"
          onPress={() => {
            user.blog == '' ? alert('no blog') : Linking.openURL(user.blog);
          }}
        />

        <Button
          title="Twitter"
          onPress={() => {
            user.twitter_username == null
              ? alert('no Twitter')
              : Linking.openURL('https://twitter.com/' + user.twitter_username);
          }}
        />
      </View>
    </SafeAreaView>
  );
};
//  || ' no'
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  innerWrapper: {
    padding: 20,
  },
  data: {
    fontWeight: 'normal',
  },
  boold: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Home;
