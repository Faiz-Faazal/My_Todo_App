
import React from 'react';
import SignInScreen from '../UI/Screens/SignInScreen';
import SplashScreen from '../UI/Screens/SplashScreen';
import SignUpScreen from '../UI/Screens/SignUpScreen';
import ServiceOnboardScreen from '../UI/Components/ServiceOnboardScreen';
import HomeScreen from '../UI/Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './typesNavigation';


const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
        />
        <Stack.Screen
          name="ServiceOnboardScreen"
          component={ServiceOnboardScreen}
        />
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
        />
        <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        />
        <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
