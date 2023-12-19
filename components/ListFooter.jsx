import {View, Text, StyleSheet, TouchableHighlight, Image} from 'react-native';
import React from 'react';

export default function ListFooter() {
  return (
    <>
      <View style={{height: 80, width: 360}}>
        <View
          style={{
            ...styles.taskContainer,
            gap: 10,
            position: 'absolute',
            top: -20,
          }}>
          <View style={{...styles.longLine, height: 100}}></View>
          <View
            style={{...styles.avatar, height: 40, width: 40, marginLeft: 50}}>
            <Image
              style={{
                width: '100%',
                height: '100%',
              }}
              resizeMode="cover"
              source={require('../assets/avatar1.jpg')}
            />
          </View>
          <View style={{...styles.avatar, height: 40, width: 40}}>
            <Image
              style={{
                width: '100%',
                height: '100%',
              }}
              resizeMode="cover"
              source={require('../assets/avatar2.jpg')}
            />
          </View>
          <View style={{...styles.avatar, height: 40, width: 40}}>
            <Image
              style={{
                width: '100%',
                height: '100%',
              }}
              resizeMode="cover"
              source={require('../assets/avatar3.jpg')}
            />
          </View>
          <View style={{...styles.avatar, height: 40, width: 40}}>
            <Image
              style={{
                width: '100%',
                height: '100%',
              }}
              resizeMode="cover"
              source={require('../assets/avatar4.jpg')}
            />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    height: 70,
    width: 360,
    flexDirection: 'row',
    marginBottom: 10,
  },
  longLine: {
    position: 'absolute',
    left: 25,
    height: 80,
    width: 1,
    backgroundColor: 'gray',
  },
  taskContainer: {
    height: 70,
    width: 360,
    flexDirection: 'row',
    marginBottom: 10,
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 100,
    overflow: 'hidden',
  },
});
