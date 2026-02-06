import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type RootStackParamList = {
  LoginScreen: undefined;
  WelcomeScreen: undefined;
};

const { width, height } = Dimensions.get('window');

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.MainScreen}
      >
        <View style={styles.logo}>
          <Image
            source={require('../assets/logo.png')}
            resizeMode="contain"
            style={styles.video}
          />
          <Text style={styles.LogoTextHeader}>Astro Viah</Text>
          <Text style={styles.LogoTextBottom}>Your Cosmic Companion</Text>
        </View>

        <View style={styles.loginPane}>
          <View style={styles.RegisterWrapper}>
            <TouchableOpacity style={styles.RegsiterPart}>
              <Text style={styles.RegisterText}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.RegisterPartTwo}>
              <Text style={styles.RegisterText}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.Email}>
            <View style={styles.inputWrapper}>
              <MaterialIcons name="email" size={24} color="#666" />
              <TextInput
                placeholder="Enter Email"
                style={styles.inputWithIcon}
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          <View style={styles.Password}>
            <View style={styles.inputWrapper}>
              <MaterialIcons name="lock" size={24} color="#666" />
              <TextInput
                placeholder="Enter Password"
                style={styles.inputWithIcon}
                placeholderTextColor="#999"
                secureTextEntry
                autoCapitalize="none"
              />
            </View>
          </View>

          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('WelcomeScreen')}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.Bottom}>
          By continuing, you agree to our{' '}
          <Text style={styles.TNC}>Terms & Privacy Policy</Text>
        </Text>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0000',
  },

  MainScreen: {
    flex: 1,
  },

  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: height * 0.05,
    paddingBottom: height * 0.03,
  },

  LogoTextHeader: {
    color: 'white',
    fontSize: width * 0.075,
    fontWeight: '700',
    marginTop: 10,
    letterSpacing: 1,
  },

  LogoTextBottom: {
    color: 'white',
    fontSize: width * 0.045,
    fontWeight: '500',
    letterSpacing: 0.5,
    marginTop: 4,
  },

  video: {
    width: width * 0.22,
    height: width * 0.22,
    marginBottom: 10,
  },

  loginPane: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    opacity: 0.96,
    marginHorizontal: width * 0.06,
    paddingVertical: height * 0.03,
    borderRadius: 25,
    marginBottom: height * 0.05,
  },

  RegisterWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#031e62',
    padding: 6,
    borderRadius: 15,
  },

  RegsiterPart: {
    backgroundColor: '#3B5BA9',
    paddingVertical: height * 0.012,
    paddingHorizontal: 35,
    borderRadius: 10,
  },

  RegisterPartTwo: {
    backgroundColor: '#2258df',
    paddingVertical: height * 0.015,
    paddingHorizontal: 40,
    borderRadius: 10,
  },

  RegisterText: {
    color: 'white',
    fontWeight: '600',
    fontSize: width * 0.045,
    textAlign: 'center',
  },

  Email: {
    marginTop: height * 0.03,
    width: '80%',
  },

  Password: {
    marginTop: height * 0.02,
    width: '80%',
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 12,
  },

  inputWithIcon: {
    flex: 1,
    paddingVertical: height * 0.016,
    paddingHorizontal: 10,
    fontSize: width * 0.045,
    color: '#000',
  },

  forgotPassword: {
    alignSelf: 'flex-end',
    marginRight: '10%',
    marginTop: height * 0.01,
  },

  forgotPasswordText: {
    color: '#2258df',
    fontSize: width * 0.035,
    fontWeight: '500',
  },

  loginButton: {
    backgroundColor: '#2258df',
    paddingVertical: height * 0.018,
    paddingHorizontal: width * 0.3,
    borderRadius: 12,
    marginTop: height * 0.025,
  },

  loginButtonText: {
    color: 'white',
    fontSize: width * 0.05,
    fontWeight: '700',
    textAlign: 'center',
  },

  Bottom: {
    color: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: height * 0.02,
  },

  TNC: {
    color: '#2258df',
    fontWeight: '600',
    fontSize: 10,
  },
});
