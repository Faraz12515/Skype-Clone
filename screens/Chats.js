import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import * as Icons from '../components/icons';
import {Fonts, FontSize} from '../components/theme';

export default function Chats({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.topHeader}>
        <View style={styles.leftIcons}>
          <Icons.SimpleLineIcons name="bell" size={30} color="black" />
        </View>
        <View style={styles.logoImage}>
          <Image
            source={require('../assets/new.png')}
            style={{resizeMode: 'contain', height: 50, width: 50}}
          />
          <Text
            style={{
              position: 'absolute',
              left: 35,
              top: 35,
              backgroundColor: '#51D764',
              borderRadius: 50,
              height: 12,
              width: 12,
            }}></Text>
        </View>
        <View style={styles.rightIcons}>
          <Icons.MaterialCommunityIcons
            name="video-outline"
            size={35}
            color="black"
            style={styles.rightIconsStyle}
          />
          <Icons.EvilIcons
            name="search"
            size={35}
            color="black"
            style={styles.rightIconsStyle}
          />
          <Icons.MaterialCommunityIcons
            name="dots-vertical"
            size={30}
            color="black"
            style={styles.rightIconsStyle}
          />
        </View>
      </View>
      <View style={styles.chatViewContainer}>
        <View style={styles.chatImage}>
          <Image
            source={require('../assets/new.png')}
            style={{resizeMode: 'contain', height: 50, width: 50}}
          />
        </View>
        <View style={styles.chatStyle}>
          <Text style={styles.nameStyle}>Talha Mansoor</Text>
          <Text style={styles.msgStyle}>Talha Mansoor</Text>
        </View>
        <View style={styles.dateStyle}>
          <Text>11/30/2020</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '10%',
    borderBottomWidth: 1,
    borderBottomColor: '#BDBDBD',
  },
  leftIcons: {marginLeft: '3%'},
  logoImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '25%',
  },
  rightIcons: {
    flexDirection: 'row',
    marginRight: '3%',
    alignItems: 'center',
  },
  rightIconsStyle: {
    paddingHorizontal: '1%',
  },
  chatViewContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginVertical: '2%',
  },
  chatStyle: {
    justifyContent: 'center',
    marginRight: '15%',
  },
  dateStyle: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '2%',
  },
  nameStyle: {fontSize: FontSize.font27, fontWeight: 'bold'},
  msgStyle: {fontSize: FontSize.font22},
  chatImage: {},
});
