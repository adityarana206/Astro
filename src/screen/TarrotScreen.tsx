import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const { width, height } = Dimensions.get('window');

interface InfoCardProps {
  icon: string;
  title: string;
  content: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, content }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.headerLeft}>
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>{icon}</Text>
          </View>
          <Text style={styles.cardTitle}>{title}</Text>
        </View>
        <View style={styles.todayBadge}>
          <Text style={styles.todayText}>Today</Text>
        </View>
      </View>

      <Text style={styles.cardContent}>{content}</Text>
    </View>
  );
};

const TarotScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ScreenView}>
        <Text style={styles.HeaderText}>Tarot Reading</Text>
        <Text style={styles.LowerText}>Discover Your Destiny</Text>
      </View>
      

      <InfoCard icon="⭐️" title="Test" content="Single" />
      <InfoCard  title="Test" content="Single" icon="⭐️" />

      <InfoCard icon="⭐️" title="Test" content="Double" />
    </SafeAreaView>
  );
};

export default TarotScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  ScreenView: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  HeaderText: {
    fontFamily: 'Segoe UI',
    color: '#ffffff',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  LowerText: {
    fontFamily: 'Segoe UI',
    color: '#ffffff',
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center',
  },
  ChoseCard:{
  marginTop: 10,
    backgroundColor: '#af3ec366',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginLeft: 10,
    marginRight: 10,
  },
  card: {
    marginTop: 10,
    backgroundColor: '#1E293B',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginLeft: 10,
    marginRight: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  ChosecardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
   ChoseheaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#334155',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
   ChoseiconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#334155',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  iconText: {
    fontSize: 20,
  },
  ChoseiconText: {
    fontSize: 20,
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
    ChosecardTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  todayBadge: {
    backgroundColor: '#4F46E5',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
   ChosetodayBadge: {
    backgroundColor: '#4F46E5',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  todayText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  ChosetodayText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  cardContent: {
    color: '#CBD5E1',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  ChosecardContent: {
    color: '#CBD5E1',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  linkText: {
    color: '#818CF8',
    fontSize: 14,
    fontWeight: '600',
  },
  ChoselinkText: {
    color: '#818CF8',
    fontSize: 14,
    fontWeight: '600',
  },
});
