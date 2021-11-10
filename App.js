/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Config from 'react-native-config';
import {createClient, Provider} from 'urql';
import CommunityScreen from './src/screens/Community';
import HomeScreen from './src/screens/Home';
import TreasureScreen from './src/screens/Treasure';
import UrqlTestScreen from './src/screens/UrqlTest';

const Tab = createBottomTabNavigator();

const client = createClient({
  url: 'https://api.github.com/graphql',
  fetchOptions: () => {
    const token = Config.REACT_APP_GITHUB_AUTH_TOKEN;
    return {
      headers: {authorization: token ? `Bearer ${token}` : ''},
    };
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Community" component={CommunityScreen} />
        <Tab.Screen name="Treasure" component={TreasureScreen} />
        <Tab.Screen name="UrqlTest" component={UrqlTestScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const AppRoot = () => {
  return (
    <Provider value={client}>
      <App />
    </Provider>
  );
};

export default AppRoot;
