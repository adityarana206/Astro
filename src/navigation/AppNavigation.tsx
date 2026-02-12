import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LandingScreen from '../screen/SplashScreen';
import LoginScreen from '../screen/LoginScreen';
import WelcomeScreen from '../screen/AskNameScreen';
import BirthWelcomeScreen from '../screen/BirthDateScreen';
import BirthPlaceScreen from '../screen/BirthPlaceScreen'
import TabNavigation from './TabNavigation';
import HomeScreen from '../screen/HomeScreen';

const Stack = createNativeStackNavigator();

const screenOptions = {
  gestureEnabled: false,
  headerShown: false,
};

const AppNavigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LandingScreen">
          <Stack.Screen
            name="LandingScreen"
            component={LandingScreen}
            options={screenOptions}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={screenOptions}
          />
           <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={screenOptions}
          />
           <Stack.Screen
            name="Birth"
            component={BirthWelcomeScreen}
            options={screenOptions}
          />
          <Stack.Screen
          name="BirthPlaceScreen"
          component={BirthPlaceScreen}
          options={screenOptions}
          />
            <Stack.Screen
            name="TabNavigator"
            component={TabNavigation}
            options={screenOptions}
          />
           <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={screenOptions}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigation;
