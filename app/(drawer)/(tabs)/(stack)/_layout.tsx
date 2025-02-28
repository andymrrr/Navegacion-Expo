
import React from 'react'
import { Stack, useNavigation } from 'expo-router'
import { DrawerActions, StackActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const StackLayout = () => {
    const navegacion = useNavigation();
    const onHeaderLeft =(volverAtras: boolean) => {
        if (volverAtras) {
            navegacion.dispatch(StackActions.pop())
            return;
        }
        navegacion.dispatch(DrawerActions.toggleDrawer)
    }
  return (
    <Stack 
        screenOptions={{
         headerShadowVisible: false,
         contentStyle:{
            backgroundColor: 'white'
         },
         headerLeft: ({canGoBack,tintColor})=>( 
            <Ionicons 
                name={canGoBack ? 'arrow-back-outline': 'grid-outline'} 
                className='mr-5' 
                size={20}
                onPress={()=>onHeaderLeft(canGoBack!)}
            />
         )
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