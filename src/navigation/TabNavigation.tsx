import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
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

const TabNavigation = () => {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: styles.activeTab.color,
          tabBarInactiveTintColor: styles.inactiveTab.color,
          tabBarLabelStyle: styles.tabBarLabel,
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={size} color={color} />
            ),
            tabBarLabel: 'Home',
          }}
        />

        <Tab.Screen
          name="Tarot"
          component={TarrotScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="auto-awesome" size={size} color={color} />
            ),
            tabBarLabel: 'Tarot',
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="chat" size={size} color={color} />
            ),
            tabBarLabel: 'Chat',
          }}
        />
        <Tab.Screen
          name="Match"
          component={MatchScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="handshake-o" size={size} color={color} />
            ),
            tabBarLabel: 'Match',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
            tabBarLabel: 'Profile',
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  tabBar: {
    backgroundColor: '#0F172A',
    borderTopColor: '#1E293B',
    borderTopWidth: 1,
    height: 60,
    paddingBottom: 8,
    paddingTop: 8,
    elevation: 0,
    shadowOpacity: 0,
    marginBottom: 30,
  },
  activeTab: {
    color: '#5B9FFF',
  },
  inactiveTab: {
    color: '#94A3B8',
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
});
