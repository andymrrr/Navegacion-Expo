import React from "react";
import {Ionicons} from "@expo/vector-icons"
import { Drawer } from "expo-router/drawer";
import DrawerPersonalizado from "@/componentes/compartido/DrawerPersonalizado";
const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={DrawerPersonalizado}
      screenOptions={{
                                      
        overlayColor: 'rgba(0,0,0,0,4)',
        drawerActiveTintColor:'indigo',
        headerShadowVisible: false,
        drawerContentContainerStyle:{
          backgroundColor:'white'
        }
      }}
    >
       <Drawer.Screen
        name="(tabs)" 
        options={{
          headerShown: false,  
          drawerLabel: "Tabs",
          title: "Tabs",
          drawerIcon: ({color, size}) => (
            <Ionicons name="albums-outline" size={size} color={color} />
          )
        }}
      />
      <Drawer.Screen
        name="Usuario/index" 
        options={{
          drawerLabel: "Usuario",
          title: "Usuario",
          drawerIcon: ({color, size}) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          )
        }}
      />
      <Drawer.Screen
        name="Cronograma/index"
        options={{
          drawerLabel: "Cronograma",
          title: "Cronograma",
          drawerIcon: ({color, size}) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          )
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
