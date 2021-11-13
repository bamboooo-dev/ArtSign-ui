import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar, Text, View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const HomeScreen = () => {
  i = -1;
  tabs = ["デザイン", "イラスト", "油画", "日本画", "写真", "建築","彫刻"];
  nums = [];
  list = tabs.map(() => {
    i+=1;
    nums[i] = Math.pow(i, 2);
    return (
      <TouchableOpacity onPress={() => {this.setState({selectedNum: i,});}}>
        <Text style={detectTab((nums[i] >> this.state.selectedNum) & 0b01)}>
          {tabs[i]}
        </Text>
      </TouchableOpacity>
    );
  });
  /*constructor(props){
    super(props);
    this.state = {tab: "hot", selectedNum: 0};
  }*/
  switchTab = () => {
    if(this.state.tab == "hot"){
      this.setState({tab: "recommend"});
    }
    else{
      this.setState({tab: "hot"});
    }
  };

  detectCurrentTab = ()=> {
    if(this.state.tab == "hot"){
      return true;
    }else{
      return false;
    }
  }

  detectIsHot = (b) => {
    if(b){
      return selectedButton;
    }
    else{
      return notSelectedButton;
    }
  };
  detectTab = (b) => {
    if(b){
      return styles.selectedButton;
    }else{
      return styles.notSelectedButton;
    }
  }
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.switchingTab}>
        <TouchableOpacity onPress={switchTab()}>
          <Text style={detectIsHot(detectCurrentTab())}>
            急上昇
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={switchTab()}>
          <Text style={detectIsHot(!detectCurrentTab())}>
            あなたへのおすすめ
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.switchingTab}>
        <ScrollView horizontal={true}>
          /*<TouchableOpacity>
            <Text style={styles.selectedButton}>
              デザイン
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.selectedButton}>
              イラスト
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.selectedButton}>
              油画
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.selectedButton}>
              日本画
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.selectedButton}>
              写真
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.selectedButton}>
              建築
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.selectedButton}>
              彫刻
            </Text>
          </TouchableOpacity>
        </ScrollView>*/
        <ScrollView horizontal={true}>
          <li>
            {list}
          </li>
        </ScrollView>
        <ScrollView>
          
        </ScrollView>
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
