import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import BotonPersonalizado from "@/componentes/compartido/BotonPersonalizado";

const inicio = () => {
  return (
    <SafeAreaView>
      <View className="px-10">
        <BotonPersonalizado
          className="mb-2"
          color="primario"
          onPress={() => router.push("/productos")}
        >
          Productos
        </BotonPersonalizado>
        <BotonPersonalizado
          
          className="mb-2"
          color="secundario"
          onPress={() => router.push("/perfil")}
        >
          Perfil
        </BotonPersonalizado>
        <BotonPersonalizado
          
          className="mb-2"
          color="terciario"
          onPress={() => router.push("/ajuste")}
        >
          Ajuste
        </BotonPersonalizado>
      </View>
    </SafeAreaView>
  );
};

export default inicio;
