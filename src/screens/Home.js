import React from 'react';
import {
  SafeAreaView,
  StatusBar, Text, View, Button, StyleSheet, TextInput,
} from 'react-native';

// CSSを適用するときに使用
const styles = StyleSheet.create({
  headerButtonDisplay: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  headerInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'white',
    backgroundColor:'#9A8AB7',
  },
  headerButton: {
    color: 'white',
    border: '1px solid white',
    borderRadius: 5,
  },
});

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar />
        <View>
          <TextInput 
            placeholder="検索"
            style={styles.headerInput}
          />
          <View style={styles.headerButtonDisplay}>
            <Button
              title='人気のクリエイター'
              style={{color:'black'}} 
            />
            <Button
              title='あなたにあったクリエイター'
              style={styles.headerButton} 
            />
          </View>
        </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
