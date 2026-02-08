import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LandingScreen from '../screen/LandingScreen';
import LoginScreen from '../screen/LoginScreen';
import WelcomeScreen from '../screen/WelcomeScreen';
import BirthWelcomeScreen from '../screen/BirthWelcomeScreen';
import BirthPlaceScreen from '../screen/BirthPlaceScreen'

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
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigation;
