import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  ImageBackground,
} from 'react-native';
import {React, useState} from 'react';

export default function Trapezoid() {
  const [showOpened, setshowOpened] = useState(false);
  return (
    <ImageBackground resizeMode="cover" source={require('../assets/OIP6.jpg')}>
      <View style={styles.trapezoid}>
        <View style={styles.navBar}>
          <View style={styles.hamburger}>
            <View style={styles.hamburgerlines}></View>
            <View style={styles.hamburgerlines}></View>
            <View style={styles.hamburgerlines}></View>
          </View>
          <View style={styles.timelineText}>
            <Text style={{fontSize: 20, color: 'white'}}>Timeline</Text>
          </View>
          <View style={styles.menuContainer}>
            <View style={styles.menuRound} />
            <View style={styles.menuRound} />
            <View style={styles.menuRound} />
          </View>
        </View>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Image
              style={{
                width: '100%',
                height: '100%',
              }}
              resizeMode="cover"
              source={require('../assets/avatar.png')}
            />
          </View>
          <View style={styles.avatarText}>
            <Text style={{fontSize: 20, color: 'white'}}>Gokberk Demirci</Text>
            <Text>Product Designer</Text>
          </View>
        </View>
      </View>
      {showOpened ? (
        <View style={styles.secondMenuOpen}>
          <View
            style={{
              height: 25,
              width: 25,
              backgroundColor: 'red',
              position: 'absolute',
              borderRadius: 100,
              borderWidth: 2,
              borderColor: 'white',
              left: 35,
              bottom: 61,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white'}}>❕</Text>
          </View>
          <View
            style={{
              height: 25,
              width: 25,
              backgroundColor: 'red',
              position: 'absolute',
              borderRadius: 100,
              borderWidth: 2,
              borderColor: 'white',
              left: 35,
              top: 61,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white'}}>🏅</Text>
          </View>
          <View
            style={{
              height: 25,
              width: 25,
              backgroundColor: 'red',
              position: 'absolute',
              borderRadius: 100,
              borderWidth: 2,
              borderColor: 'white',
              left: 80,
              bottom: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white'}}>⚡</Text>
          </View>
          <View
            style={{
              height: 25,
              width: 25,
              backgroundColor: 'red',
              position: 'absolute',
              borderRadius: 100,
              borderWidth: 2,
              borderColor: 'white',
              left: 80,
              top: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white'}}>✓</Text>
          </View>
        </View>
      ) : null}
      <TouchableHighlight onPress={() => setshowOpened(!showOpened)}>
        <View
          style={{
            ...styles.secondMenuContainer,
            backgroundColor: showOpened ? '#cc0000' : 'red',
          }}>
          {showOpened ? (
            <>
              <View
                style={{
                  width: 3,
                  height: 30,
                  backgroundColor: 'white',
                  margin: 3,
                  transform: [{rotate: '45deg'}],
                }}></View>
              <View
                style={{
                  position: 'absolute',
                  width: 3,
                  height: 30,
                  backgroundColor: 'white',
                  margin: 3,
                  transform: [{rotate: '-45deg'}],
                }}></View>
            </>
          ) : (
            <>
              <View
                style={{
                  width: 25,
                  height: 2,
                  backgroundColor: 'white',
                  margin: 3,
                }}
              />
              <View
                style={{
                  width: 15,
                  height: 2,
                  backgroundColor: 'white',
                  margin: 3,
                }}
              />
              <View
                style={{
                  width: 5,
                  height: 2,
                  backgroundColor: 'white',
                  margin: 3,
                }}
              />
            </>
          )}
        </View>
      </TouchableHighlight>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  trapezoid: {
    width: 0,
    height: 330,
    borderBottomWidth: 80,
    borderBottomColor: 'white',
    borderRightWidth: 360,
    borderRightColor: 'rgba(0,0,0, 0.2)',
    borderStyle: 'solid',
    gap: 60,
  },
  navBar: {
    position: 'relative',
    top: 5,
    height: 50,
    width: 360,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  hamburger: {
    padding: 10,
  },
  hamburgerlines: {
    width: 30,
    height: 2,
    backgroundColor: 'white',
    margin: 3,
  },
  timelineText: {
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  menuContainer: {
    marginLeft: 'auto',
    flexDirection: 'row',
    width: 25,
    justifyContent: 'space-between',
  },
  menuRound: {
    height: 7,
    width: 7,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 25,
  },
  avatarContainer: {
    height: 90,
    width: 360,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 100,
    overflow: 'hidden',
  },
  avatarText: {
    marginLeft: 20,
  },
  secondMenuContainer: {
    height: 60,
    width: 60,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: -14,
    right: 20,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondMenuOpen: {
    height: 200,
    width: 200,
    backgroundColor: 'red',
    position: 'absolute',
    justifyContent: 'center',
    bottom: -84,
    right: -54,
    borderRadius: 100,
  },
});
