
import React from 'react'
import { Stack } from 'expo-router'

const StackLayout = () => {
  return (
    <Stack screenOptions={{
         headerShadowVisible: false,
         contentStyle:{
            backgroundColor: 'white'
         }
    }}>
        <Stack.Screen
            name='inicio/index'
            options={{
                title: 'Inicio'
            }}
        />
        <Stack.Screen
            name='productos/index'
            options={{
                title: 'Productos'
            }}
        />
        <Stack.Screen
            name='perfil/index'
            options={{
                title: 'Perfil'
            }}
        />
         <Stack.Screen
            name='ajuste/index'
            options={{
                title: 'Ajuste'
            }}
        />
    </Stack>
  )
}

export default StackLayout