import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { productos } from '@/ficticia/productos.ficticia'
import { Link } from 'expo-router'

const productosPantalla = () => {
  return (
    <View>
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id}
        renderItem={({item})=> (
          <View className='mt-10'>
              <Text className='text-2xl font-work-black'>{item.title}</Text>
              <Text >{item.description}</Text>
              <View className='flex flex-row justify-between'>
                  <Text className='font-work-black'>{item.price}</Text>
                  <Link href={`/(stack)/productos/${item.id}`} className='text-primario'>
                    Ver Detalle
                  </Link>
              </View>
          </View>
        )}
      />
    </View>
  )
}

export default productosPantalla