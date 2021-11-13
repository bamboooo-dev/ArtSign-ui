import React, {useState} from 'react';
import {
  SafeAreaView, ScrollView, Image,
  StatusBar, Text, View, TouchableOpacity, StyleSheet, TextInput,
} from 'react-native';

// CSSを適用するときに使用
const styles = StyleSheet.create({
  headerButtonDisplay: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  headerDisplay: {
    backgroundColor: '#9A8AB7',
    paddingBottom: 20,
  },
  headerInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 15,
    marginBottom: 20,
    color: 'white',
    backgroundColor:'#9A8AB7',
  },
  headerButton: {
    padding: 7,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
  },
});

const ExploreScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar />
        {/* ヘッダー部分 */}
        <View style={styles.headerDisplay}>
          <TextInput 
            placeholder="検索"
            style={styles.headerInput}
          />
          <View style={styles.headerButtonDisplay}>
            <TouchableOpacity
              style={styles.headerButton}
            >
              <Text style={{color:'white'}}>人気のクリエイター</Text>
            </TouchableOpacity>
            <TouchableOpacity
              title='あなたにあったクリエイター'
              style={styles.headerButton} 
            >
              <Text style={{color:'white'}}>あなたにあったクリエイター</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          {/* 本当はmapする */}
          <View>
            <View style={{display:'flex', flexDirection: 'row', paddingBottom: 20}}>
                {/* アバター */}
              <Image
                style={{width:100, height:100, borderRadius:50}}
                source={{uri: 'https://source.unsplash.com/random',}}
              />
              <View>
                {/* クリエイター詳細 */}
                <Text>クリエイター名</Text>
                <Text>aaaa</Text>
                <Text>Bio</Text>
                <Text>aaaaaaaaaaaaaaaaaaaaaaaaa</Text>
              </View>
            </View>
            <ScrollView
              horizontal={true}
              showScrollIndicator
            >
              {/* 作品詳細をmapで横に並べる */}
              <View>
                <Image
                  style={{width: 120, height: 120, borderColor:'black', borderWidth:3}}
                  source={{uri: 'https://source.unsplash.com/random',}} 
                />
                <View> 
                  <Text>コメント数51</Text>
                  <Text>Bbbbbbbbbbbb</Text>
                  <Text>Bbbbbbbbbbbb</Text>
                </View>
              </View>
              <View>
                <Image
                  style={{width: 120, height: 120, borderColor:'black', borderWidth:3}}
                  source={{uri: 'https://source.unsplash.com/random',}} 
                />
                <View> 
                  <Text>コメント数51</Text>
                  <Text>Bbbbbbbbbbbb</Text>
                  <Text>Bbbbbbbbbbbb</Text>
                </View>
              </View>
              <View>
                <Image
                  style={{width: 120, height: 120, borderColor:'black', borderWidth:3}}
                  source={{uri: 'https://source.unsplash.com/random',}} 
                />
                <View> 
                  <Text>コメント数51</Text>
                  <Text>Bbbbbbbbbbbb</Text>
                  <Text>Bbbbbbbbbbbb</Text>
                </View>
              </View>
              <View>
                <Image
                  style={{width: 120, height: 120, borderColor:'black', borderWidth:3}}
                  source={{uri: 'https://source.unsplash.com/random',}} 
                />
                <View> 
                  <Text>コメント数51</Text>
                  <Text>Bbbbbbbbbbbb</Text>
                  <Text>Bbbbbbbbbbbb</Text>
                </View>
              </View>
              <View>
                <Image
                  style={{width: 120, height: 120, borderColor:'black', borderWidth:3}}
                  source={{uri: 'https://source.unsplash.com/random',}} 
                />
                <View> 
                  <Text>コメント数51</Text>
                  <Text>Bbbbbbbbbbbb</Text>
                  <Text>Bbbbbbbbbbbb</Text>
                </View>
              </View>
              <View>
                <Image
                  style={{width: 120, height: 120, borderColor:'black', borderWidth:3}}
                  source={{uri: 'https://source.unsplash.com/random',}} 
                />
                <View> 
                  <Text>コメント数51</Text>
                  <Text>Bbbbbbbbbbbb</Text>
                  <Text>Bbbbbbbbbbbb</Text>
                </View>
              </View>
            </ScrollView>
          </View>
     
        </ScrollView>
    </SafeAreaView>
  );
};

export default ExploreScreen;
