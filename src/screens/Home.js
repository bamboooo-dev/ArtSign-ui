import React from 'react';
import {
  SafeAreaView,
  StatusBar, Text, View
} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text>
          Home View
          かかかか55
        </Text>
        <Text>
          あいうえお
          かきくけこ
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
