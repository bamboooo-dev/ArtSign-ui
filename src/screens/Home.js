import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar, Text, View,
  Button,
  TouchableOpacity,
} from 'react-native';

const HomeScreen = () => {
  /*constructor(props){
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
  };*/
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.switchingTab}>
        <TouchableOpacity>
          <Text style={styles.selectedButton}>
            急上昇
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.notSelectedButton}>
            あなたへのおすすめ
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.switchingTab}>

      </View>
    </SafeAreaView>
  );
};

const rad = 10;

const colors = {
  white: '#ffffff',
  gray: '#696969',
  lightGray: '#aaaaaa',
  black: '#000000',
}

const padds = {
  hori: '4%',
  vert: '1%',
};

const margs = {
  hori: '1%',
  vert: '2%',
};

const styles = StyleSheet.create({
  switchingTab: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selectedButton: {
    marginHorizontal: margs.hori,
    marginVertical: margs.vert,
    paddingVertical: padds.vert,
    paddingHorizontal: padds.hori,
    backgroundColor: colors.gray,
    color: colors.white,
    borderRadius: rad,
    fontSize: 26,
  },
  notSelectedButton: {
    marginHorizontal: margs.hori,
    marginVertical: margs.vert,
    paddingVertical: padds.vert,
    paddingHorizontal: padds.hori,
    backgroundColor: colors.white,
    color: colors.lightGray,
    borderRadius: rad,
    fontSize: 26,
  },
});
export default HomeScreen;
