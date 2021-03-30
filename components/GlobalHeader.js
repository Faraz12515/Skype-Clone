import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import * as Icons from '../components/icons';
import {Fonts, FontSize} from '../components/theme';

export default function GlobalHeader() {
  return (
    <>
      <View style={styles.topHeader}>
        <View style={styles.leftIcons}>
          <Icons.SimpleLineIcons name="bell" size={25} color="#242424" />
        </View>
        <View style={styles.callsView}>
          <Text style={styles.callsText}>Calls</Text>
        </View>
        <View style={styles.rightIcons}>
          <Icons.MaterialCommunityIcons
            name="video-outline"
            size={35}
            color="#242424"
            style={styles.rightIconsStyle}
          />
          <Icons.EvilIcons
            name="search"
            size={35}
            color="#242424"
            style={styles.rightIconsStyle}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
});
