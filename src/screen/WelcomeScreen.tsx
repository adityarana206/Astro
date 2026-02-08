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
import { useNavigation, NavigationProp } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const { height, width } = Dimensions.get('window');

type RootStackParamList = {
  LoginScreen: undefined;
  WelcomeScreen: undefined;
  Birth: undefined;
};

const WelcomeScreen = () => {
  const [progress] = useState(0.33);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.HeaderText}>
        <Text style={styles.Steps}>Step 1 of 3</Text>
        <Text style={styles.Steps}>33%</Text>
      </View>

      {/* Progress bar */}
      <View style={styles.barBackground}>
        <LinearGradient
          colors={['#5B9FFF', '#A855F7']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.barFill, { width: `${progress * 100}%` }]}
        />
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

          {/* Name Label */}
          <Text style={styles.inputLabel}>What's your name?</Text>

          {/* Name Input */}
          <View style={styles.inputContainer}>
            <FontAwesome name="user" size={20} color="#9CA3AF" />
            <TextInput
              style={styles.Input}
              placeholder=""
              placeholderTextColor="#666"
            />
          </View>

          {/* Hint Row */}
          <View style={styles.inputContainer2}>
            <AntDesign name="star" size={20} color="#9CA3AF" />
            <Text style={styles.hintText}>
              Your name personalizes your astrology journey.
            </Text>
          </View>

          {/* Gradient Button */}
          <LinearGradient
            colors={['#5B9FFF', '#A855F7']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradientButton}
          >
            <TouchableOpacity
              style={styles.buttonInner}
              onPress={() => navigation.navigate('Birth')}
              activeOpacity={0.7}
            >
              <Text style={styles.buttonText}>Next</Text>
              <MaterialIcons name="navigate-next" size={18} color="#fff" style={styles.arrowIcon} />
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },

  HeaderText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 8,
  },

  Welcome: {
    backgroundColor: '#3B2D52',
    borderRadius: 24,
    marginHorizontal: 16,
    marginTop: 20,
    paddingTop: 32,
    paddingBottom: 40,
  },

  WelcomePane: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },

  Steps: {
    color: '#94A3B8',
    fontWeight: '500',
    fontSize: 14,
  },

  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
  },

  subtitle: {
    color: '#CBD5E1',
    fontSize: 16,
    marginBottom: 32,
    textAlign: 'center',
  },

  inputLabel: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4A3A5E',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  inputContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4A3A5E',
    borderRadius: 12,
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },

  hintText: {
    flex: 1,
    marginLeft: 12,
    color: '#CBD5E1',
    fontSize: 14,
  },

  Input: {
    flex: 1,
    paddingVertical: 0,
    color: '#fff',
    marginLeft: 12,
    fontSize: 16,
  },

  barBackground: {
    height: 8,
    backgroundColor: '#1E293B',
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 12,
    overflow: 'hidden',
  },

  barFill: {
    height: '100%',
    borderRadius: 10,
  },

  video: {
    width: width * 0.28,
    height: width * 0.28,
    alignSelf: 'center',
  },

  gradientButton: {
    marginTop: 24,
    borderRadius: 12,
  },

  buttonInner: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },

  arrowIcon: {
    marginLeft: 8,
  },
});