import { Tabs } from 'expo-router';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialIcons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const inactiveTintColor = Colors[colorScheme ?? 'light'].tabIconDefault;
  const navigation = useNavigation();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#b4f5a5',
        tabBarInactiveTintColor: inactiveTintColor,
        headerShown: true,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 15 }}>
            <MaterialIcons name="arrow-back" size={24} color="#b4f5a5" />
          </TouchableOpacity>
        ),
        tabBarLabelStyle: { 
          fontSize: 10, 
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'FEED',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="post-add" size={32} color={color} style={{ marginBottom: -5 }} />
          ),
        }}
      />
      <Tabs.Screen
        name="ranking"
        options={{
          title: 'RANKING',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="crown-outline" size={32} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="quests"
        options={{
          title: 'QUESTS',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="sword" size={32} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: 'WALLET',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="wallet" size={32} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'PROFILE',
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={32} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
