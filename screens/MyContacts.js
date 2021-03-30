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
import {CallsData} from './CallsData';

export default function MyContacts() {
  return (
    <View style={styles.container}>
      {/*----------Chat Top Section----------*/}

      <View style={styles.topHeader}>
        <View style={styles.leftIcons}>
          <Icons.SimpleLineIcons name="bell" size={25} color="#242424" />
        </View>
        <View style={styles.callsView}>
          <Text style={styles.callsText}>My Contacts</Text>
        </View>
        <View style={styles.rightIcons}>
          <Icons.EvilIcons
            name="search"
            size={35}
            color="#242424"
            style={styles.rightIconsStyle}
          />
          <Icons.MaterialCommunityIcons
            name="dots-vertical"
            size={30}
            color="#242424"
            style={styles.rightIconsStyle}
          />
        </View>
      </View>

      {/*----------Chat Section----------*/}
      <ScrollView>
        {CallsData.map((v, i) => {
          return (
            <TouchableOpacity key={i} activeOpacity={0.6}>
              <View
                style={{
                  ...styles.chatViewContainer,
                  marginBottom: i === CallsData.length - 1 ? '10%' : 0,
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
                    <View style={styles.msgStyleView}>
                      <Icons.MaterialCommunityIcons
                        name="phone-outgoing-outline"
                        size={15}
                        color="gray"
                      />
                      <Text style={styles.msgStyle}>{v.date}</Text>
                    </View>
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
          right: 25,
          bottom: 20,
          backgroundColor: '#0178D4',
          // borderWidth: 1.5,
          borderColor: '#fff',
          borderRadius: 50,
          elevation: 5,
          height: 60,
          width: 60,
        }}>
        <TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '28%',
            }}>
            <Icons.AntDesign name="adduser" size={25} color="#fff" />
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
  callsView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '18%',
  },
  callsText: {
    fontSize: FontSize.font27,
    color: '#21211F',
    fontWeight: 'bold',
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
    marginRight: '45%',
  },
  callsRightIconsView: {
    flexDirection: 'row',
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
    justifyContent: 'space-between',
    paddingVertical: '3%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  nameStyle: {fontSize: FontSize.font27, color: '#21211F', fontWeight: 'bold'},
  msgStyleView: {
    flexDirection: 'row',
    paddingTop: 3,
    alignItems: 'center',
  },
  msgStyle: {
    fontSize: FontSize.font22,
    color: 'gray',
    paddingLeft: 8,
  },
  chatImage: {paddingVertical: '3%'},
});
