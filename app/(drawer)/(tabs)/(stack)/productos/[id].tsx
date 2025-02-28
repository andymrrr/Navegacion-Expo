import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router'
import { productos } from '@/ficticia/productos.ficticia';

const ProductoPantalla = () => {
    const {id} = useLocalSearchParams();
    const navegacion = useNavigation();
    const producto = productos.find(p=> p.id == id);
    useEffect(() => {
      navegacion.setOptions({
        title: producto?.title ?? "Producto",
      })
    }, [producto])
    
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