import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import * as Icons from '../components/icons';
import {Fonts, FontSize} from '../components/theme';
import {Messages} from './Messages';

export default function Chats({navigation}) {
  return (
    <View style={styles.container}>
      {/*----------Chat Top Section----------*/}

      <View style={styles.topHeader}>
        <View style={styles.leftIcons}>
          <Icons.SimpleLineIcons name="bell" size={25} color="black" />
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
              borderWidth: 1.5,
              borderColor: '#fff',
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

      {/*----------Chat Section----------*/}
      <ScrollView>
        {Messages.map((v, i) => {
          return (
            <TouchableOpacity key={i} activeOpacity={0.6}>
              <View
                style={{
                  ...styles.chatViewContainer,
                  marginBottom: i === Messages.length - 1 ? '10%' : 0,
                }}>
                <View style={styles.chatImage}>
                  <Image
                    source={v.image}
                    style={{resizeMode: 'contain', height: 50, width: 50}}
                  />
                </View>
                <View style={styles.chatAndDateView}>
                  <View style={styles.chatStyle}>
                    <Text style={styles.nameStyle}>{v.name}</Text>
                    <Text style={styles.msgStyle}>{v.msg}</Text>
                  </View>
                  <View style={styles.dateStyle}>
                    <Text style={styles.dateTextStyle}>{v.date}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      {/*----------Floating Button----------*/}

      <View
        style={{
          position: 'absolute',
          right: 15,
          bottom: 20,
          backgroundColor: '#0178D4',
          // borderWidth: 1.5,
          borderColor: '#fff',
          borderRadius: 50,
          elevation: 5,
          height: 65,
          width: 65,
        }}>
        <TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '30%',
              // alignSelf: 'center',
            }}>
            <Icons.SimpleLineIcons name="pencil" size={25} color="#fff" />
          </View>
        </TouchableOpacity>
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
    borderBottomColor: '#ccc',
  },
  leftIcons: {marginLeft: '3%', alignItems: 'center'},
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
    width: '93%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    // marginVertical: '2%',
    // paddingVertical: '3%',
  },
  chatStyle: {
    justifyContent: 'center',
    marginRight: '22%',
  },
  dateStyle: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '2%',
  },
  dateTextStyle: {
    color: '#9E9FA1',
    fontSize: FontSize.font2,
  },
  chatAndDateView: {
    flexDirection: 'row',
    paddingVertical: '3%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  nameStyle: {fontSize: FontSize.font27, color: '#21211F', fontWeight: 'bold'},
  msgStyle: {fontSize: FontSize.font22, color: '#21211F', paddingTop: 3},
  chatImage: {paddingVertical: '3%'},
});
