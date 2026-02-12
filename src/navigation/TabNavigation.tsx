import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from '../screen/HomeScreen';
import ChatScreen from '../screen/ChatScreen';
import TarrotScreen from '../screen/TarrotScreen';
import { MatchScreen } from '../screen/MatchScreen';
import ProfileScreen from '../screen/ProfileScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();


interface TabIconProps {
  focused: boolean;
  children: React.ReactNode;
}

const TabIcon: React.FC<TabIconProps> = ({ focused, children }) => (
  <View style={[styles.iconWrap, focused && styles.iconWrapActive]}>
    {focused && <View style={styles.iconGlow} />}
    {children}
  </View>
);


const TabNavigation = () => {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: '#C084FC',       // ← unified purple accent
          tabBarInactiveTintColor: 'rgba(255,255,255,0.3)',
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarItemStyle: styles.tabBarItem,
          tabBarBackground: () => (
            // Frosted glass background matching card style
            <View style={styles.tabBarBg} />
          ),
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size, focused }) => (
              <TabIcon focused={focused}>
                <AntDesign name="home" size={size} color={color} />
              </TabIcon>
            ),
          }}
        />

        <Tab.Screen
          name="Tarot"
          component={TarrotScreen}
          options={{
            tabBarLabel: 'Tarot',
            tabBarIcon: ({ color, size, focused }) => (
              <TabIcon focused={focused}>
                <MaterialIcons name="auto-awesome" size={size} color={color} />
              </TabIcon>
            ),
          }}
        />

        <Tab.Screen
          name="Match"
          component={MatchScreen}
          options={{
            tabBarLabel: '',                        // hide label → icon-only centre tab
            tabBarIcon: ({ color, focused }) => (
              <View style={styles.centreTabOuter}>
                <View style={[
                  styles.centreTab,
                  focused && styles.centreTabActive,
                ]}>
                  <FontAwesome
                    name="handshake-o"
                    size={22}
                    color={focused ? '#0F172A' : '#C084FC'}
                  />
                </View>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({ color, size, focused }) => (
              <TabIcon focused={focused}>
                <MaterialIcons name="chat-bubble-outline" size={size} color={color} />
              </TabIcon>
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size, focused }) => (
              <TabIcon focused={focused}>
                <Ionicons name="person-outline" size={size} color={color} />
              </TabIcon>
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default TabNavigation;

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#080B14', // ← unified with all screens
  },

  // Tab bar shell
  tabBar: {
    position: 'absolute',
    backgroundColor: 'transparent',  // let tabBarBg handle the fill
    borderTopWidth: 0,
    height: Platform.OS === 'ios' ? 84 : 68,
    paddingBottom: Platform.OS === 'ios' ? 24 : 10,
    paddingTop: 8,
    elevation: 0,
    shadowOpacity: 0,
  },

  // Frosted glass fill rendered behind the tab items
  tabBarBg: {
    flex: 1,
    backgroundColor: 'rgba(8, 11, 20, 0.92)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.08)',
  },

  tabBarItem: {
    paddingTop: 4,
  },

  tabBarLabel: {
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.3,
    marginTop: 2,
  },

  // Regular icon wrapper
  iconWrap: {
    width: 40,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    position: 'relative',
  },

  // Pill highlight when focused
  iconWrapActive: {
    backgroundColor: 'rgba(192,132,252,0.15)',
  },

  // Soft glow dot above active icon
  iconGlow: {
    position: 'absolute',
    top: -2,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#C084FC',
  },

  // Centre "Match" floating button
  centreTabOuter: {
    alignItems: 'center',
    justifyContent: 'center',
    top: Platform.OS === 'ios' ? -16 : -14,   // lifts it above the bar
  },
  centreTab: {
    width: 54,
    height: 54,
    borderRadius: 18,
    backgroundColor: 'rgba(192,132,252,0.2)',
    borderWidth: 1.5,
    borderColor: 'rgba(192,132,252,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#C084FC',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 8,
  },
  centreTabActive: {
    backgroundColor: '#C084FC',
    borderColor: '#C084FC',
    shadowOpacity: 0.6,
  },
});