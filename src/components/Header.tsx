import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {APP_LOGO, REFRESH} from '../assets/images';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={APP_LOGO} style={styles.leftImage} />
      <Image source={REFRESH} style={styles.rightImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
  },
  leftImage: {
    width: 111,
    height: 31,
  },
  rightImage: {
    height: 28,
    width: 28,
  },
});

export default Header;
