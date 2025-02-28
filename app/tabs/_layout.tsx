import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {SplashScreen, Tabs } from 'expo-router'
SplashScreen.preventAutoHideAsync();

const TabsLayout = () => {
  
  return (
    <Tabs screenOptions={{
      headerShown:false,
      tabBarActiveTintColor: 'indigo' }}>
      <Tabs.Screen
        name="(stack)"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="power-off" color={color} />,
        }}
      />
      <Tabs.Screen
        name="inicio/index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorito/index"
        options={{
          title: 'Favorito',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="heartbeat" color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabsLayout


