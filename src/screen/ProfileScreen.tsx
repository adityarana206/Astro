import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Text } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

type RootStackParamList = {
  Home: undefined;
  ReadFullDetailed: undefined;
  ProfileScreen: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface BirthChartProps {
  icon: string;
  sign: string;
  birthSign: string;
}

interface ActivityProps {
  count: number;
  activity: string;
  icon: string;
}


const InfoCard: React.FC<BirthChartProps> = ({ icon, sign, birthSign }) => (
  <View style={styles.card}>
    <View style={styles.cardIconWrap}>
      <MaterialIcons name={icon} size={28} color="#C084FC" />
    </View>
    <Text style={styles.cardSign}>{sign}</Text>
    <Text style={styles.cardBirthSign}>{birthSign}</Text>
  </View>
);


const ActivityInfoCard: React.FC<ActivityProps> = ({ count, activity, icon }) => (
  <View style={styles.activityCard}>
    <View style={styles.activityIconWrap}>
      <Text style={styles.activityIcon}>{icon}</Text>
    </View>
    <Text style={styles.activityCount}>{count}</Text>
    <Text style={styles.activityLabel}>{activity}</Text>
  </View>
);



const ProfileScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      {/* Cosmic background orbs — same as MatchScreen / HomeScreen / TarotScreen */}
      <View style={styles.orb1} />
      <View style={styles.orb2} />
      <View style={styles.orb3} />

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.eyebrow}>✦ Your Cosmos</Text>
          <Text style={styles.profileText}>PROFILE</Text>
        </View>
        <TouchableOpacity style={styles.editBtn}>
          <MaterialIcons name="edit" size={18} color="#C084FC" />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Profile Hero ── */}
        <View style={styles.profileSection}>
          <View style={styles.avatarRing}>
            <View style={styles.iconContainer}>
              <MaterialIcons name="person" size={52} color="#C084FC" />
            </View>
          </View>
          <Text style={styles.nameText}>John Doe</Text>
          <Text style={styles.username}>@johndoe</Text>
          <Text style={styles.emailText}>
            Seeking cosmic wisdom and celestial connections ✨
          </Text>

          {/* Quick stats row inside hero */}
          <View style={styles.heroStats}>
            <View style={styles.heroStat}>
              <Text style={styles.heroStatNum}>48</Text>
              <Text style={styles.heroStatLabel}>Readings</Text>
            </View>
            <View style={styles.heroStatDivider} />
            <View style={styles.heroStat}>
              <Text style={styles.heroStatNum}>12</Text>
              <Text style={styles.heroStatLabel}>Matches</Text>
            </View>
            <View style={styles.heroStatDivider} />
            <View style={styles.heroStat}>
              <Text style={styles.heroStatNum}>7</Text>
              <Text style={styles.heroStatLabel}>Insights</Text>
            </View>
          </View>
        </View>

        {/* ── Birth Chart ── */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>✨ Birth Chart</Text>
        </View>
        <View style={styles.cardsContainer}>
          <InfoCard icon="wb-sunny"        sign="Sun"    birthSign="Aries ♈"  />
          <InfoCard icon="nightlight-round" sign="Moon"   birthSign="Cancer ♋" />
          <InfoCard icon="star"             sign="Rising" birthSign="Leo ♌"    />
        </View>

        {/* ── Account Information ── */}
        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Account Information</Text>

          <View style={styles.infoRow}>
            <View style={styles.infoLabelRow}>
              <MaterialIcons name="email" size={14} color="rgba(192,132,252,0.7)" />
              <Text style={styles.infoLabel}>Email</Text>
            </View>
            <Text style={styles.infoValue}>johndoe@example.com</Text>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.infoLabelRow}>
              <MaterialIcons name="cake" size={14} color="rgba(192,132,252,0.7)" />
              <Text style={styles.infoLabel}>Birth Date</Text>
            </View>
            <Text style={styles.infoValue}>March 21, 1995</Text>
          </View>

          <View style={[styles.infoRow, { borderBottomWidth: 0 }]}>
            <View style={styles.infoLabelRow}>
              <MaterialIcons name="place" size={14} color="rgba(192,132,252,0.7)" />
              <Text style={styles.infoLabel}>Location</Text>
            </View>
            <Text style={styles.infoValue}>Los Angeles, CA</Text>
          </View>
        </View>

        {/* ── Activity ── */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>✨ Activity</Text>
        </View>
        <View style={styles.activityGrid}>
          <ActivityInfoCard count={48} activity="Readings"    icon="📖" />
          <ActivityInfoCard count={12} activity="Matches"     icon="💫" />
          <ActivityInfoCard count={7}  activity="Insights"    icon="🔮" />
          <ActivityInfoCard count={3}  activity="Moon Phases" icon="🌙" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080B14', // ← unified with all screens
  },

  // Orbs — identical to MatchScreen / HomeScreen / TarotScreen
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

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
  },
  eyebrow: {
    color: 'rgba(192, 132, 252, 0.8)',
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  profileText: {
    color: '#F8FAFC',
    fontSize: 32,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  editBtn: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  scroll: {
    backgroundColor: 'transparent',
  },
  scrollContent: {
    paddingBottom: 40,
  },

  // Profile Hero
  profileSection: {
    marginHorizontal: 15,
    marginTop: 8,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
  },
  avatarRing: {
    width: 92,
    height: 92,
    borderRadius: 46,
    borderWidth: 2,
    borderColor: 'rgba(192,132,252,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(192, 132, 252, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameText: {
    color: '#F8FAFC',
    fontSize: 22,
    fontWeight: '700',
    marginTop: 12,
  },
  username: {
    color: '#C084FC',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 4,
  },
  emailText: {
    color: 'rgba(255,255,255,0.45)',
    fontSize: 13,
    marginTop: 6,
    textAlign: 'center',
    lineHeight: 20,
  },

  // Hero quick-stats
  heroStats: {
    flexDirection: 'row',
    marginTop: 20,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.08)',
    width: '100%',
    justifyContent: 'space-around',
  },
  heroStat: {
    alignItems: 'center',
    flex: 1,
  },
  heroStatNum: {
    color: '#F8FAFC',
    fontSize: 22,
    fontWeight: '800',
  },
  heroStatLabel: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 11,
    marginTop: 3,
    fontWeight: '500',
  },
  heroStatDivider: {
    width: 1,
    height: 36,
    backgroundColor: 'rgba(255,255,255,0.1)',
    alignSelf: 'center',
  },

  // Section header label
  sectionHeader: {
    marginTop: 20,
    marginLeft: 15,
    marginBottom: 10,
  },
  sectionTitle: {
    color: '#F8FAFC',
    fontSize: 18,
    fontWeight: '700',
  },

  // Birth chart cards
  cardsContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
    gap: 10,
  },
  card: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    borderRadius: 16,
    padding: 14,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 110,
  },
  cardIconWrap: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: 'rgba(192,132,252,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(192,132,252,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardSign: {
    color: '#F8FAFC',
    fontSize: 13,
    fontWeight: '700',
    marginTop: 8,
  },
  cardBirthSign: {
    color: 'rgba(192,132,252,0.8)',
    fontSize: 13,
    marginTop: 3,
    fontWeight: '500',
  },

  // Account info section
  infoSection: {
    marginHorizontal: 15,
    marginTop: 10,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    borderRadius: 20,
    padding: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.07)',
  },
  infoLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  infoLabel: {
    color: 'rgba(255,255,255,0.45)',
    fontSize: 14,
  },
  infoValue: {
    color: '#F8FAFC',
    fontSize: 14,
    fontWeight: '500',
  },

  // Activity grid
  activityGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 15,
    gap: 10,
    marginBottom: 10,
  },
  activityCard: {
    width: (width - 50) / 2,   // 2-column grid with gap
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    borderRadius: 16,
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 110,
  },
  activityIconWrap: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: 'rgba(192,132,252,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(192,132,252,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  activityIcon: {
    fontSize: 22,
  },
  activityCount: {
    color: '#F8FAFC',
    fontSize: 26,
    fontWeight: '800',
  },
  activityLabel: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 12,
    marginTop: 4,
    fontWeight: '500',
  },
});