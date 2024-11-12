import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {APP_LOGO} from '../assets/images';
import {screenWidth} from '../utils/DesignSystem';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={APP_LOGO}
        style={{width: screenWidth - 72}}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SplashScreen;
