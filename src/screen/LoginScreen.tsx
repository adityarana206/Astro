import React, { useState } from 'react';
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
  Alert,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type RootStackParamList = {
  LoginScreen: undefined;
  WelcomeScreen: undefined;
};

interface FormErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const { width, height } = Dimensions.get('window');

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // State Management
  const [isSignIn, setIsSignIn] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});

  // Email validation
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Password validation
  const validatePassword = (password: string): boolean => {
    return password.length >= 6;
  };

  // Form validation
   const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(password)) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!isSignIn) {
      if (!confirmPassword.trim()) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (password !== confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle login
  const handleLogin = (): void => {
    if (validateForm()) {
      // Add your login API call here
      console.log('Login with:', { email, password });
      navigation.navigate('WelcomeScreen');
    }
  };

  // Handle sign up
  const handleSignUp = (): void => {
    if (validateForm()) {
      // Add your sign up API call here
      console.log('Sign up with:', { email, password });
      Alert.alert('Success', 'Account created successfully!', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('WelcomeScreen'),
        },
      ]);
    }
  };

  // Handle forgot password
  const handleForgotPassword = (): void => {
    Alert.alert(
      'Forgot Password',
      'Password reset link will be sent to your email',
      [{ text: 'OK' }]
    );
  };

  // Toggle between Sign In and Sign Up
  const toggleAuthMode = (signIn: boolean): void => {
    setIsSignIn(signIn);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrors({});
  };

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
            <TouchableOpacity
              style={[
                styles.RegisterPart,
                isSignIn && styles.activeTab,
              ]}
              onPress={() => toggleAuthMode(true)}
              accessibilityLabel="Sign In Tab"
            >
              <Text
                style={[
                  styles.RegisterText,
                  isSignIn && styles.activeTabText,
                ]}
              >
                Sign In
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.RegisterPart,
                !isSignIn && styles.activeTab,
              ]}
              onPress={() => toggleAuthMode(false)}
              accessibilityLabel="Sign Up Tab"
            >
              <Text
                style={[
                  styles.RegisterText,
                  !isSignIn && styles.activeTabText,
                ]}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>

          {/* Email Input */}
          <View style={styles.Email}>
            <View
              style={[
                styles.inputWrapper,
                errors.email && styles.inputError,
              ]}
            >
              <MaterialIcons name="email" size={24} color="#666" />
              <TextInput
                placeholder="Enter Email"
                style={styles.inputWithIcon}
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  if (errors.email) {
                    setErrors({ ...errors, email: undefined });
                  }
                }}
                accessibilityLabel="Email Input"
              />
            </View>
            {errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
          </View>

          {/* Password Input */}
          <View style={styles.Password}>
            <View
              style={[
                styles.inputWrapper,
                errors.password && styles.inputError,
              ]}
            >
              <MaterialIcons name="lock" size={24} color="#666" />
              <TextInput
                placeholder="Enter Password"
                style={styles.inputWithIcon}
                placeholderTextColor="#999"
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  if (errors.password) {
                    setErrors({ ...errors, password: undefined });
                  }
                }}
                accessibilityLabel="Password Input"
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                accessibilityLabel="Toggle Password Visibility"
              >
                <MaterialIcons
                  name={showPassword ? 'visibility' : 'visibility-off'}
                  size={24}
                  color="#666"
                />
              </TouchableOpacity>
            </View>
            {errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
          </View>

          {/* Confirm Password Input (Only for Sign Up) */}
          {!isSignIn && (
            <View style={styles.Password}>
              <View
                style={[
                  styles.inputWrapper,
                  errors.confirmPassword && styles.inputError,
                ]}
              >
                <MaterialIcons name="lock" size={24} color="#666" />
                <TextInput
                  placeholder="Confirm Password"
                  style={styles.inputWithIcon}
                  placeholderTextColor="#999"
                  secureTextEntry={!showConfirmPassword}
                  autoCapitalize="none"
                  value={confirmPassword}
                  onChangeText={(text) => {
                    setConfirmPassword(text);
                    if (errors.confirmPassword) {
                      setErrors({ ...errors, confirmPassword: undefined });
                    }
                  }}
                  accessibilityLabel="Confirm Password Input"
                />
                <TouchableOpacity
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  accessibilityLabel="Toggle Confirm Password Visibility"
                >
                  <MaterialIcons
                    name={showConfirmPassword ? 'visibility' : 'visibility-off'}
                    size={24}
                    color="#666"
                  />
                </TouchableOpacity>
              </View>
              {errors.confirmPassword && (
                <Text style={styles.errorText}>{errors.confirmPassword}</Text>
              )}
            </View>
          )}

          {/* Forgot Password (Only for Sign In) */}
          {isSignIn && (
            <TouchableOpacity
              style={styles.forgotPassword}
              onPress={handleForgotPassword}
              accessibilityLabel="Forgot Password"
            >
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          )}

          {/* Submit Button */}
          <TouchableOpacity
            style={styles.loginButton}
            onPress={isSignIn ? handleLogin : handleSignUp}
            accessibilityLabel={isSignIn ? 'Login Button' : 'Sign Up Button'}
          >
            <Text style={styles.loginButtonText}>
              {isSignIn ? 'Login' : 'Sign Up'}
            </Text>
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
    backgroundColor: '#0F172A',
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
    backgroundColor: '#f4f2f709',
    // opacity: 0.1,
    marginHorizontal: width * 0.06,
    paddingVertical: height * 0.03,
    borderRadius: 25,
    marginBottom: height * 0.05,
  },

  RegisterWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#E5E7EB',
    padding: 6,
    borderRadius: 15,
    gap: 8,
  },

  RegisterPart: {
    backgroundColor: 'transparent',
    paddingVertical: height * 0.012,
    paddingHorizontal: 35,
    borderRadius: 10,
  },

  activeTab: {
    backgroundColor: '#2258df',
  },

  RegisterText: {
    color: '#666',
    fontWeight: '600',
    fontSize: width * 0.045,
    textAlign: 'center',
  },

  activeTabText: {
    color: 'white',
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

  inputError: {
    borderColor: '#ef4444',
    borderWidth: 1.5,
  },

  inputWithIcon: {
    flex: 1,
    paddingVertical: height * 0.016,
    paddingHorizontal: 10,
    fontSize: width * 0.045,
    color: '#000',
  },

  errorText: {
    color: '#ef4444',
    fontSize: width * 0.032,
    marginTop: 4,
    marginLeft: 4,
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
    shadowColor: '#2258df',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
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
    fontSize: width * 0.032,
  },

  TNC: {
    color: '#2258df',
    fontWeight: '600',
    fontSize: width * 0.032,
  },
});