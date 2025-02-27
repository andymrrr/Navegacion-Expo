import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { productos } from '@/ficticia/productos.ficticia';

const ProductoPantalla = () => {
    const {id} = useLocalSearchParams();

    const producto = productos.find(p=> p.id == id);
    if (!producto) {
        return <Redirect href={'/'}/>
    }
  return (
    <View className='px-5 mt-10'>
      <Text className='font-work-black text-2xl'>{producto.title}</Text>
      <Text >{producto.description}</Text>
      <Text className='font-work-black'>{producto.price}</Text>
    </View>
  )
}

export default ProductoPantalla