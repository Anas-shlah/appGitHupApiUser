import React, {useState} from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import Repo from '../Repo';

const RepoScreen = props => {
  const {repo} = props.route.params;
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.innerWrapper}>
        <Repo item={repo} />

        <Text style={styles.boold}>
          name: <Text style={styles.data}>{repo.name || ' no name'}</Text>
        </Text>

        <Text style={styles.boold}>
          language:{' '}
          <Text style={styles.data}>{repo.language || ' no language'}</Text>
        </Text>

        <Text style={styles.boold}>
          forks: <Text style={styles.data}>{repo.forks}</Text>
        </Text>

        <Text style={styles.boold}>
          open issues: <Text style={styles.data}>{repo.open_issues_count}</Text>
        </Text>

        <Text style={styles.boold}>
          watchers: <Text style={styles.data}>{repo.watchers_count}</Text>
        </Text>

        <Text style={styles.boold}>
          size: <Text style={styles.data}>{repo.size}</Text>
        </Text>

        <Text style={styles.boold}>
          description:{' '}
          <Text style={styles.data}>
            {repo.description || ' no description'}
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

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

export default RepoScreen;
