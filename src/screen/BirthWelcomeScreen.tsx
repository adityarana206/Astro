import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

const { height, width } = Dimensions.get('window');

const BirthWelcomeScreen = () => {
  const [progress, setProgress] = useState(0.33);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.HeaderText}>
        <Text style={styles.Steps}>Step 2 to 3</Text>
        <Text style={styles.Steps}>67%</Text>
      </View>

      {/* Progress bar */}
      <View style={styles.barBackground}>
        <View style={[styles.barFill, { width: `${progress * 100}%` }]} />
      </View>

      {/* Welcome Section */}
      <View style={styles.Welcome}>
        <Image
          source={require('../assets/logo.png')}
          resizeMode="cover"
          style={styles.video}
        />

        <View style={styles.WelcomePane}>
          <Text style={styles.title}>Welcome to Your Journey</Text>
          <Text style={styles.subtitle}>Let's create your cosmic profile</Text>

          {/* Name Input */}
          <View style={styles.inputContainer}>
            <FontAwesome name="user" size={20} color="#666" />
            <TextInput
              style={styles.Input}
              placeholder="Enter your name"
              placeholderTextColor="#666"
            />
          </View>

          {/* Hint Row */}
          <View style={styles.inputContainer2}>
            <AntDesign name="star" size={20} color="#666" />
            <Text style={styles.Input}>
              Your name personalizes your astrology journey.
            </Text>
          </View>

          {/* Gradient Button */}
          <LinearGradient
            colors={['#7a539f', '#9720aa']}
            style={styles.gradientButton}
          >
            <TouchableOpacity style={styles.buttonInner}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BirthWelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f00002a',
  },

  HeaderText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingTop: 8,
  },

  Welcome: {
    backgroundColor: '#a955f75e',
    height: 443,
    borderRadius: 20,
    marginHorizontal: 12,
    marginTop: 20,
    paddingTop: 20,
  },

  WelcomePane: {
    flex: 1,
    padding: 20,
  },

  Steps: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },

  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },

  subtitle: {
    color: '#eee',
    fontSize: 16,
    marginBottom: 25,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  inputContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  Input: {
    flex: 1,
    paddingVertical: 10,
    color: '#000',
    marginLeft: 8,
  },

  barBackground: {
    height: 6,
    backgroundColor: '#241a1a',
    borderRadius: 10,
    marginHorizontal: 12,
    marginTop: 8,
  },

  barFill: {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },

  video: {
    width: width * 0.22,
    height: width * 0.22,
    alignSelf: 'center',
  },

  gradientButton: {
    marginTop: 20,
    borderRadius: 10,
  },

  buttonInner: {
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
