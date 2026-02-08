import React, { useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const { height, width } = Dimensions.get('window');

type RootStackParamList = {
  LoginScreen: undefined;
  WelcomeScreen: undefined;
  Birth: undefined;
  BirthPlaceScreen: undefined;
  // Add your next screen here
};

const BirthPlaceScreen = () => {
  const [progress] = useState(1.0);
  const [birthPlace, setBirthPlace] = useState('');
  
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.HeaderText}>
        <Text style={styles.Steps}>Step 3 of 3</Text>
        <Text style={styles.StepsPercent}>100%</Text>
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

      {/* Birth Place Section */}
      <View style={styles.Welcome}>
        <View style={styles.iconContainer}>
          <LinearGradient
            colors={['#5B9FFF', '#A855F7']}
            style={styles.iconGradient}
          >
            <Ionicons name="location-outline" size={48} color="#fff" />
          </LinearGradient>
        </View>

        <View style={styles.WelcomePane}>
          <Text style={styles.title}>Birth Place</Text>
          <Text style={styles.subtitle}>Where were you born?</Text>

          {/* Birth Place Label */}
          <Text style={styles.sectionLabel}>Birth Location</Text>

          {/* Birth Place Input */}
          <View style={styles.inputContainer}>
            <Ionicons name="location-outline" size={20} color="#9CA3AF" />
            <TextInput
              style={styles.Input}
              placeholder="Enter city, state, or country"
              placeholderTextColor="#666"
              value={birthPlace}
              onChangeText={setBirthPlace}
            />
          </View>

          {/* Hint Box */}
          <View style={styles.hintContainer}>
            <AntDesign name="star" size={20} color="#9CA3AF" />
            <Text style={styles.hintText}>
              Your birthplace helps calculate accurate astrological charts.
            </Text>
          </View>

          {/* Back and Complete Buttons */}
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
              activeOpacity={0.7}
            >
              <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>

            <LinearGradient
              colors={['#5B9FFF', '#A855F7']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.nextButtonGradient}
            >
              <TouchableOpacity
                style={styles.nextButton}
                onPress={() => {
                  // Navigate to home or results screen
                  // navigation.navigate('HomeScreen');
                }}
                activeOpacity={0.7}
              >
                <Text style={styles.nextButtonText}>Next</Text>
                <MaterialIcons name="navigate-next" size={18} color="#fff" />
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BirthPlaceScreen;

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
    marginTop: height * 0.01,
  },

  Welcome: {
    backgroundColor: '#3B2D52',
    borderRadius: 24,
    marginHorizontal: 16,
    marginTop: 24,
    paddingTop: 32,
    paddingBottom: 32,
    borderWidth: 2,
    borderColor: '#5B9FFF',
  },

  iconContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },

  iconGradient: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  WelcomePane: {
    paddingHorizontal: 24,
  },

  Steps: {
    color: '#94A3B8',
    fontWeight: '500',
    fontSize: 14,
  },

  StepsPercent: {
    color: '#5B9FFF',
    fontWeight: '600',
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

  sectionLabel: {
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
    marginBottom: 16,
  },

  Input: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    marginLeft: 12,
  },

  hintContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4A3A5E',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 24,
  },

  hintText: {
    flex: 1,
    marginLeft: 12,
    color: '#CBD5E1',
    fontSize: 14,
  },

  buttonRow: {
    flexDirection: 'row',
    gap: 12,
  },

  backButton: {
    flex: 1,
    backgroundColor: '#4A3A5E',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  backButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },

  nextButtonGradient: {
    flex: 1,
    borderRadius: 12,
  },

  nextButton: {
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  nextButtonText: {
    color: '#fff',
    fontWeight: '700',
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
});