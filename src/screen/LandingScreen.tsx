import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
} from 'react-native';

const { width, height } = Dimensions.get('window');

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


type RootStackParamList = {
  LandingScreen: undefined;
  LoginScreen: undefined;
};

const LandingScreen = () => {
  // ⭐ Typed navigation for TS
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('LoginScreen'); // works in TS now
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.video}
          resizeMode="contain"
        />

        <Text style={styles.text}>Astro Viah</Text>
        <Text style={styles.lowertext}>Your Cosmic Companion</Text>
      </View>
      <Text style={styles.bottomText}>Connecting to your cosmos</Text>
    </SafeAreaView>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  top: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: height * 0.15,
  },
  video: {
    width: width * 0.35,
    height: width * 0.35,
    marginBottom: 14,
  },
  text: {
    fontSize: width * 0.07,
    color: 'white',
    fontWeight: '600',
    letterSpacing: 1,
  },
  lowertext: {
    fontSize: 19,
    color: 'white',
    fontWeight: '600',
    letterSpacing: 1,
  },
  bottomText: {
    color: 'white',
    fontWeight: '600',
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 16,
  },
});
