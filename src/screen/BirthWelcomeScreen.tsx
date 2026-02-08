import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  ScrollView,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, NavigationProp } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');

type RootStackParamList = {
  LoginScreen: undefined;
  WelcomeScreen: undefined;
  Birth: undefined;
  // Add your next screen here
};

const Birth = () => {
  const [progress] = useState(0.67);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [birthTime, setBirthTime] = useState('');

  const [showMonthPicker, setShowMonthPicker] = useState(false);
  const [showDayPicker, setShowDayPicker] = useState(false);
  const [showYearPicker, setShowYearPicker] = useState(false);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) =>
    (currentYear - i).toString(),
  );

  const PickerModal = ({
    visible,
    onClose,
    items,
    selectedValue,
    onSelect,
    title,
  }: any) => (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>{title}</Text>
            <TouchableOpacity onPress={onClose}>
              <AntDesign name="close" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.modalScroll}>
            {items.map((item: string) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.modalItem,
                  selectedValue === item && styles.modalItemSelected,
                ]}
                onPress={() => {
                  onSelect(item);
                  onClose();
                }}
              >
                <Text
                  style={[
                    styles.modalItemText,
                    selectedValue === item && styles.modalItemTextSelected,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.HeaderText}>
        <Text style={styles.Steps}>Step 1 of 3</Text>
        <Text style={styles.StepsPercent}>67%</Text>
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

      {/* Birth Details Section */}
      <View style={styles.Welcome}>
        <View style={styles.iconContainer}>
          <LinearGradient
            colors={['#5B9FFF', '#A855F7']}
            style={styles.iconGradient}
          >
            <Ionicons name="calendar-outline" size={48} color="#fff" />
          </LinearGradient>
        </View>

        <View style={styles.WelcomePane}>
          <Text style={styles.title}>Birth Details</Text>
          <Text style={styles.subtitle}>Tell us when you were born</Text>

          {/* Birth Date Label */}
          <Text style={styles.sectionLabel}>Birth Date</Text>

          {/* Date Dropdowns Row */}
          <View style={styles.dateRow}>
            <TouchableOpacity
              style={styles.dropdown}
              onPress={() => setShowMonthPicker(true)}
            >
              <Text style={styles.dropdownText}>
                {selectedMonth || 'Month'}
              </Text>
              <AntDesign name="down" size={16} color="#9CA3AF" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.dropdown}
              onPress={() => setShowDayPicker(true)}
            >
              <Text style={styles.dropdownText}>{selectedDay || 'Day'}</Text>
              <AntDesign name="down" size={16} color="#9CA3AF" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.dropdown}
              onPress={() => setShowYearPicker(true)}
            >
              <Text style={styles.dropdownText}>{selectedYear || 'Year'}</Text>
              <AntDesign name="down" size={16} color="#9CA3AF" />
            </TouchableOpacity>
          </View>

          {/* Birth Time Label */}
          <Text style={styles.sectionLabel}>Birth Time</Text>

          {/* Birth Time Input */}
          <View style={styles.timeInputContainer}>
            <Ionicons name="time-outline" size={20} color="#9CA3AF" />
            <TextInput
              style={styles.timeInput}
              placeholder=""
              placeholderTextColor="#666"
              value={birthTime}
              onChangeText={setBirthTime}
            />
          </View>

          {/* Hint Box */}
          <View style={styles.hintContainer}>
            <AntDesign name="star" size={20} color="#9CA3AF" />
            <Text style={styles.hintText}>
              Helps personalize your astrological insights.
            </Text>
          </View>

          {/* Back and Next Buttons */}
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
                  'BirthPlaceScreen';
                }}
                activeOpacity={0.7}
              >
                <Text style={styles.nextButtonText}>Next</Text>
                <AntDesign name="right" size={18} color="#fff" />
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>

      {/* Picker Modals */}
      <PickerModal
        visible={showMonthPicker}
        onClose={() => setShowMonthPicker(false)}
        items={months}
        selectedValue={selectedMonth}
        onSelect={setSelectedMonth}
        title="Select Month"
      />

      <PickerModal
        visible={showDayPicker}
        onClose={() => setShowDayPicker(false)}
        items={days}
        selectedValue={selectedDay}
        onSelect={setSelectedDay}
        title="Select Day"
      />

      <PickerModal
        visible={showYearPicker}
        onClose={() => setShowYearPicker(false)}
        items={years}
        selectedValue={selectedYear}
        onSelect={setSelectedYear}
        title="Select Year"
      />
    </SafeAreaView>
  );
};

export default Birth;

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

  dateRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },

  dropdown: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#4A3A5E',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  dropdownText: {
    color: '#CBD5E1',
    fontSize: 16,
  },

  timeInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4A3A5E',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 16,
  },

  timeInput: {
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

  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'flex-end',
  },

  modalContent: {
    backgroundColor: '#3B2D52',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: height * 0.6,
  },

  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#4A3A5E',
  },

  modalTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },

  modalScroll: {
    maxHeight: height * 0.5,
  },

  modalItem: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#4A3A5E',
  },

  modalItemSelected: {
    backgroundColor: '#5B4A75',
  },

  modalItemText: {
    color: '#CBD5E1',
    fontSize: 16,
  },

  modalItemTextSelected: {
    color: '#fff',
    fontWeight: '600',
  },
});
