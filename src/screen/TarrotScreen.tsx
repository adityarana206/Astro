import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');

interface InfoCardProps {
  icon: string;
  title: string;
  content: string;
  variant?: 'default' | 'highlight'; // replaces the duplicated Chose* styles
}

const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  title,
  content,
  variant = 'default',
}) => {
  const isHighlight = variant === 'highlight';

  return (
    <View style={[styles.card, isHighlight && styles.cardHighlight]}>
      <View style={styles.cardHeader}>
        <View style={styles.headerLeft}>
          <View
            style={[
              styles.iconContainer,
              isHighlight && styles.iconContainerHighlight,
            ]}
          >
            <Text style={styles.iconText}>{icon}</Text>
          </View>
          <Text style={styles.cardTitle}>{title}</Text>
        </View>
        <View
          style={[
            styles.todayBadge,
            isHighlight && styles.todayBadgeHighlight,
          ]}
        >
          <Text style={styles.todayText}>Today</Text>
        </View>
      </View>

      <Text style={styles.cardContent}>{content}</Text>
    </View>
  );
};

// ─── Screen ───────────────────────────────────────────────────────────────────

const TarotScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Cosmic background orbs */}
      <View style={styles.orb1} />
      <View style={styles.orb2} />
      <View style={styles.orb3} />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.screenView}>
          <Text style={styles.eyebrow}>✦ Celestial Guidance</Text>
          <Text style={styles.headerText}>Tarot Reading</Text>
          <Text style={styles.lowerText}>Discover Your Destiny</Text>
        </View>

        {/* Cards */}
        <InfoCard
          icon="🔮"
          title="Card of the Day"
          content="The Magician — You have all the tools you need to manifest your desires. Channel your focus and willpower into your most important goals today."
          variant="highlight"
        />

        <InfoCard
          icon="⭐️"
          title="Single Card Spread"
          content="A focused reading for one clear question. Draw a single card to illuminate the energy surrounding your intention."
        />

        <InfoCard
          icon="🌙"
          title="Past · Present · Future"
          content="A three-card spread revealing the energies shaping your journey — what was, what is, and what may yet come."
        />

        <InfoCard
          icon="✨"
          title="Celtic Cross"
          content="A deep ten-card spread uncovering hidden influences, hopes, and the most likely outcome of your current path."
        />

        <InfoCard
          icon="💫"
          title="Love Spread"
          content="Reveal the emotional currents flowing through your relationships and the cosmic forces guiding your heart."
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default TarotScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080B14', // ← matches MatchScreen & HomeScreen
  },

  // Orbs — identical values to MatchScreen
  orb1: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: 'rgba(129, 76, 255, 0.12)',
    top: -60,
    right: -80,
  },
  orb2: {
    position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: 'rgba(56, 189, 248, 0.08)',
    top: 300,
    left: -60,
  },
  orb3: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(129, 76, 255, 0.07)',
    bottom: 100,
    right: -50,
  },

  scroll: {
    backgroundColor: 'transparent',
  },
  scrollContent: {
    paddingBottom: 40,
  },

  // Header
  screenView: {
    marginHorizontal: 20,
    marginTop: 16,
    marginBottom: 8,
  },
  eyebrow: {
    color: 'rgba(192, 132, 252, 0.8)',
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  headerText: {
    color: '#F8FAFC',
    fontSize: 32,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  lowerText: {
    color: 'rgba(255, 255, 255, 0.45)',
    fontSize: 15,
    marginTop: 4,
    fontWeight: '400',
  },

  // Card — base (default variant)
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 18,
    padding: 18,
    marginHorizontal: 15,
    marginTop: 12,
  },

  // Card — highlight variant (replaces all Chose* duplicates)
  cardHighlight: {
    backgroundColor: 'rgba(192, 132, 252, 0.12)',
    borderColor: 'rgba(192, 132, 252, 0.3)',
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: 'rgba(192, 132, 252, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(192, 132, 252, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  iconContainerHighlight: {
    backgroundColor: 'rgba(192, 132, 252, 0.25)',
    borderColor: 'rgba(192, 132, 252, 0.5)',
  },

  iconText: {
    fontSize: 20,
  },
  cardTitle: {
    color: '#F8FAFC',
    fontSize: 16,
    fontWeight: '700',
    flex: 1,
  },

  todayBadge: {
    backgroundColor: 'rgba(192, 132, 252, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(192, 132, 252, 0.4)',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },
  todayBadgeHighlight: {
    backgroundColor: 'rgba(192, 132, 252, 0.35)',
    borderColor: '#C084FC',
  },

  todayText: {
    color: '#C084FC',
    fontSize: 12,
    fontWeight: '600',
  },

  cardContent: {
    color: 'rgba(255, 255, 255, 0.45)',
    fontSize: 14,
    lineHeight: 22,
  },
});