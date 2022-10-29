import {StatusBar} from 'react-native';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserScreens from './src/components/screens/UserScreens';
import RepoScreen from './src/components/screens/RepoScreen';
import Home from './src/components/screens/Home';

const HomeStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen name="User" component={UserScreens} />
        <HomeStack.Screen name="Repo" component={RepoScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
