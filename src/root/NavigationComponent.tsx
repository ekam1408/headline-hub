import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

enum Routes {
  Splash = 'Splash',
  Home = 'Home',
}

const NavigationComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.Splash}>
        <Stack.Screen
          name={Routes.Splash}
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name={Routes.Home} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationComponent;
