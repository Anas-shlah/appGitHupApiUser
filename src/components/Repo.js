import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';

const Repo = props => {
  const {item} = props;
  const navigate = useNavigation();

  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => {
        navigate.navigate('Repo', {repo: item});
      }}>
      <Text style={styles.repoNameText}>{item.name}</Text>
      <Text style={styles.languageText}>{item.language || 'no Language'}</Text>
      <Text>Forks:{item.forks_count}</Text>
      <Text>Open issues:{item.open_issues_count}</Text>
      <View style={styles.horiaon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 10,
  },
  repoNameText: {
    fontWeight: 'bold',
  },
  languageText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  horiaon: {
    height: 1,
    backgroundColor: '#bbb',
  },
});

export default Repo;
