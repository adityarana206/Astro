import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');



interface MatchCardProps {
  name: string;
  sign: string;
  signIcon: string;
  compatibility: number;
  trait: string;
  distance: string;
}

interface FilterChipProps {
  label: string;
  active?: boolean;
}


const FilterChip: React.FC<FilterChipProps> = ({ label, active = false }) => (
  <TouchableOpacity style={[styles.chip, active && styles.chipActive]}>
    <Text style={[styles.chipText, active && styles.chipTextActive]}>
      {label}
    </Text>
  </TouchableOpacity>
);

const CompatibilityBar: React.FC<{ value: number }> = ({ value }) => {
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: value,
      duration: 900,
      useNativeDriver: false,
    }).start();
  }, [value]);

  const barColor = value >= 80 ? '#C084FC' : value >= 60 ? '#818CF8' : '#38BDF8';

  return (
    <View style={styles.barTrack}>
      <Animated.View
        style={[
          styles.barFill,
          {
            width: anim.interpolate({
              inputRange: [0, 100],
              outputRange: ['0%', '100%'],
            }),
            backgroundColor: barColor,
          },
        ]}
      />
    </View>
  );
};

const MatchCard: React.FC<MatchCardProps> = ({
  name,
  sign,
  signIcon,
  compatibility,
  trait,
  distance,
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.card,
        { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
      ]}
    >
      {/* Avatar */}
      <View style={styles.avatarWrapper}>
        <View style={styles.avatar}>
          <Text style={styles.avatarEmoji}>{signIcon}</Text>
        </View>
        <View style={styles.onlineDot} />
      </View>

      {/* Info */}
      <View style={styles.cardBody}>
        <View style={styles.cardTopRow}>
          <Text style={styles.cardName}>{name}</Text>
          <View style={styles.compatBadge}>
            <Text style={styles.compatBadgeText}>{compatibility}%</Text>
          </View>
        </View>

        <Text style={styles.cardSign}>{sign}</Text>
        <Text style={styles.cardTrait}>{trait}</Text>

        <CompatibilityBar value={compatibility} />

        <View style={styles.cardFooter}>
          <View style={styles.distanceRow}>
            <MaterialIcons name="place" size={12} color="rgba(255,255,255,0.4)" />
            <Text style={styles.distanceText}>{distance}</Text>
          </View>
          <TouchableOpacity style={styles.connectBtn}>
            <Text style={styles.connectBtnText}>Connect</Text>
            <MaterialIcons name="arrow-forward" size={14} color="#0F172A" />
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};



const MATCHES: MatchCardProps[] = [
  {
    name: 'Luna Rivera',
    sign: 'Scorpio Rising · Moon in Pisces',
    signIcon: '🦂',
    compatibility: 94,
    trait: 'Deeply intuitive, drawn to mystery and transformation',
    distance: '3.2 km away',
  },
  {
    name: 'Orion Blake',
    sign: 'Sagittarius Sun · Aries Moon',
    signIcon: '♐',
    compatibility: 78,
    trait: 'Adventurous spirit, philosophical wanderer',
    distance: '8.1 km away',
  },
  {
    name: 'Celeste Park',
    sign: 'Aquarius Sun · Gemini Rising',
    signIcon: '♒',
    compatibility: 66,
    trait: 'Visionary thinker, loves cosmic conversation',
    distance: '12.5 km away',
  },
];

export const MatchScreen = () => {
  const headerAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(headerAnim, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Background Orbs */}
      <View style={styles.orb1} />
      <View style={styles.orb2} />

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Animated.View
          style={[styles.header, { opacity: headerAnim }]}
        >
          <View>
            <Text style={styles.headerEyebrow}>✦ Celestial Connections</Text>
            <Text style={styles.headerTitle}>Match</Text>
          </View>
          <TouchableOpacity style={styles.filterIcon}>
            <MaterialIcons name="tune" size={22} color="white" />
          </TouchableOpacity>
        </Animated.View>

        {/* Hero Banner */}
        <View style={styles.heroBanner}>
          <Text style={styles.heroTitle}>Find Your{'\n'}Stellar Connection</Text>
          <Text style={styles.heroSub}>
            Aligned by the stars · {MATCHES.length} cosmic matches found
          </Text>
          <View style={styles.heroStar}>
            <Text style={styles.heroStarText}>⭐</Text>
          </View>
        </View>

        {/* Filter Chips */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chips}
        >
          <FilterChip label="All Signs" active />
          <FilterChip label="Fire Signs" />
          <FilterChip label="Water Signs" />
          <FilterChip label="Earth Signs" />
          <FilterChip label="Air Signs" />
        </ScrollView>

        {/* Section Header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Cosmic Matches</Text>
          <Text style={styles.sectionCount}>{MATCHES.length} found</Text>
        </View>

        {/* Match Cards */}
        {MATCHES.map((match, i) => (
          <MatchCard key={i} {...match} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080B14',
  },

  // Background
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

  scroll: {
    paddingBottom: 40,
  },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
  },
  headerEyebrow: {
    color: 'rgba(192, 132, 252, 0.8)',
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  headerTitle: {
    color: '#F8FAFC',
    fontSize: 32,
    fontWeight: '800',
    letterSpacing: -0.5,
    marginTop: 2,
  },
  filterIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.07)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },

  // Hero Banner
  heroBanner: {
    marginHorizontal: 20,
    marginTop: 12,
    marginBottom: 20,
    backgroundColor: 'rgba(129, 76, 255, 0.15)',
    borderRadius: 18,
    padding: 22,
    borderWidth: 1,
    borderColor: 'rgba(192, 132, 252, 0.25)',
    overflow: 'hidden',
  },
  heroTitle: {
    color: '#F8FAFC',
    fontSize: 26,
    fontWeight: '800',
    lineHeight: 32,
    letterSpacing: -0.5,
  },
  heroSub: {
    color: 'rgba(192, 132, 252, 0.8)',
    fontSize: 13,
    marginTop: 8,
    fontWeight: '500',
  },
  heroStar: {
    position: 'absolute',
    right: 20,
    top: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255,255,255,0.06)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroStarText: {
    fontSize: 26,
  },

  // Filter Chips
  chips: {
    paddingHorizontal: 20,
    gap: 8,
    marginBottom: 8,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  chipActive: {
    backgroundColor: 'rgba(192, 132, 252, 0.2)',
    borderColor: 'rgba(192, 132, 252, 0.5)',
  },
  chipText: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 13,
    fontWeight: '500',
  },
  chipTextActive: {
    color: '#C084FC',
  },

  // Section Header
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    color: '#F8FAFC',
    fontSize: 18,
    fontWeight: '700',
  },
  sectionCount: {
    color: 'rgba(255,255,255,0.35)',
    fontSize: 13,
  },

  // Match Card
  card: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 12,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    gap: 14,
  },
  avatarWrapper: {
    position: 'relative',
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 18,
    backgroundColor: 'rgba(192, 132, 252, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(192, 132, 252, 0.3)',
  },
  avatarEmoji: {
    fontSize: 26,
  },
  onlineDot: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4ADE80',
    borderWidth: 2,
    borderColor: '#080B14',
  },
  cardBody: {
    flex: 1,
    gap: 4,
  },
  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardName: {
    color: '#F8FAFC',
    fontSize: 16,
    fontWeight: '700',
  },
  compatBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    backgroundColor: 'rgba(192, 132, 252, 0.2)',
  },
  compatBadgeText: {
    color: '#C084FC',
    fontSize: 12,
    fontWeight: '700',
  },
  cardSign: {
    color: 'rgba(192, 132, 252, 0.7)',
    fontSize: 12,
    fontWeight: '500',
  },
  cardTrait: {
    color: 'rgba(255,255,255,0.45)',
    fontSize: 12,
    lineHeight: 17,
    marginBottom: 6,
  },

  // Compatibility Bar
  barTrack: {
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(255,255,255,0.08)',
    overflow: 'hidden',
    marginVertical: 4,
  },
  barFill: {
    height: '100%',
    borderRadius: 2,
  },

  // Card Footer
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },
  distanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  distanceText: {
    color: 'rgba(255,255,255,0.35)',
    fontSize: 11,
  },
  connectBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#C084FC',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },
  connectBtnText: {
    color: '#0F172A',
    fontSize: 12,
    fontWeight: '700',
  },
});