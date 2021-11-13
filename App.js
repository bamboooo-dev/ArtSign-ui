/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import CommunityScreen from './src/screens/Community';
import HomeScreen from './src/screens/Home';
import TreasureScreen from './src/screens/Treasure';
import ExploreScreen from './src/screens/Explore';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          name="Community"
          component={CommunityScreen}
        />
        <Tab.Screen
          name="Treasure"
          component={TreasureScreen}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
