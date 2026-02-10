import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

// Define navigation stack type
type RootStackParamList = {
  Home: undefined;
  ReadFullDetailed: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

// Define the props interface
interface InfoCardProps {
  icon: string;
  title: string;
  content: string;
  linkText: string;
}

// Reusable Card Component with typed props
const InfoCard: React.FC<InfoCardProps> = ({ icon, title, content, linkText }) => {
  const navigation = useNavigation<NavigationProp>();
  
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
      
      <TouchableOpacity 
        style={styles.readMoreButton} 
        onPress={() => navigation.navigate('ReadFullDetailed')}
      >
        <Text style={styles.readMoreText}>{linkText}</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[]}
        renderItem={() => null}
        ListHeaderComponent={() => (
          <>
            <View style={styles.Header}>
              {/* Header content goes here */}
            </View>
            
            <LinearGradient
              colors={['#5B9FFF', '#A855F7']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientButton}
            >
              <View style={styles.SunSign}>
                {/* Sun sign content goes here */}
              </View>
            </LinearGradient>
            
            <InfoCard
              icon="✨"
              title="Daily Horoscope"
              content="Financial matters take center stage today. Your practical nature helps you navigate a tricky situation. Romance is highlighted this evening - keep your heart open."
              linkText="Read full horoscope"
            />
            
            <InfoCard
              icon="⚡"
              title="Daily Energy"
              content="Your energy levels are high today. Channel this vitality into creative projects and meaningful connections. Evening brings a calm, reflective mood."
              linkText="View energy forecast"
            />
            
            <InfoCard
              icon="⭐️"
              title="Luck Today"
              content="Your energy levels are high today. Channel this vitality into creative projects and meaningful connections. Evening brings a calm, reflective mood."
              linkText="View energy forecast"
            />
            
            <InfoCard
              icon="💝"
              title="Love & Relationships"
              content="Communication is key in your relationships today. Express your feelings openly and listen with compassion. Singles may encounter an interesting connection."
              linkText="View love forecast"
            />
            
            <InfoCard
              icon="💼"
              title="Career & Finance"
              content="Professional opportunities knock at your door. Your hard work is being noticed by higher-ups. Consider networking events or reaching out to mentors."
              linkText="View career insights"
            />
            
            <InfoCard
              icon="🧘"
              title="Health & Wellness"
              content="Focus on balance between work and rest. Incorporate light exercise and mindfulness practices. Stay hydrated and prioritize quality sleep tonight."
              linkText="View wellness tips"
            />
            
            <InfoCard
              icon="🌙"
              title="Moon Phase"
              content="The waxing crescent moon encourages new beginnings. Plant seeds for future goals and set intentions. Ideal time for manifestation and planning."
              linkText="View moon insights"
            />
            
            <InfoCard
              icon="🔮"
              title="Tarot Card of the Day"
              content="The Magician - You have all the tools you need to manifest your desires. Channel your focus and willpower into your most important goals."
              linkText="Draw another card"
            />
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  Header: {
    height: 100,
    borderBottomColor: '#797b9a',
    borderBottomWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientButton: {
    marginTop: 10,
    marginHorizontal: 15,
    borderRadius: 12,
  },
  SunSign: {
    height: 120,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#1E293B',
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 20,
    padding: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4C4B6B',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  iconText: {
    fontSize: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    flex: 1,
  },
  todayBadge: {
    backgroundColor: '#4C4B6B',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  todayText: {
    color: '#A78BFA',
    fontSize: 14,
    fontWeight: '500',
  },
  cardContent: {
    fontSize: 15,
    lineHeight: 24,
    color: '#94A3B8',
    marginBottom: 20,
  },
  readMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  readMoreText: {
    fontSize: 15,
    color: '#A78BFA',
    fontWeight: '600',
    marginRight: 5,
  },
  arrow: {
    fontSize: 20,
    color: '#A78BFA',
    fontWeight: '300',
  },
});