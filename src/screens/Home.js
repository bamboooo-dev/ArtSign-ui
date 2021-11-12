import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar, Text, View,
  Button,
  TouchableOpacity,
} from 'react-native';

const HomeScreen = () => {
  constructor(props){
    super(props);
    this.state = {tab: "hot"};
  }
  switchTab = () => {
    if(this.state.tab == "hot"){
      this.setState({tab: "recommend"});
    }
    else{
      this.setState({tab: "hot"});
    }
  };
  detectTabState = () => {
    if(this.state.tab == "hot"){

    }
    else{
      
    }
  };
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.switchingTab}>
        <Text style={styles.selectedButton}>
          急上昇
        </Text>
        <Text style={styles.notSelectedButton}>
          あなたへのおすすめ
        </Text>
      </View>
    </SafeAreaView>
  );
};

const colors = {
  white: '#ffffff',
  gray: '#696969',
  lightGray: '#aaaaaa',
}

const padds = {
  percent: '5%'
}

const styles = StyleSheet.create({
  switchingTab: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selectedButton: {
    paddingHorizontal: padds.percent,
    marginRight: '3%',
    backgroundColor: colors.gray,
    color: colors.white,
    borderRadius: 10,
    fontSize: 25,
  },
  notSelectedButton: {
    paddingHorizontal: padds.percent,
    backgroundColor: colors.white,
    color: colors.lightGray,
    borderRadius: 10,
    fontSize: 25,
  },
});
export default HomeScreen;
