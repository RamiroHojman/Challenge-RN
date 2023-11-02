import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Pressable, TextInput } from "react-native-web";
import CardPlatos from "./CardPlatos";
import { useNavigation } from "@react-navigation/native";
import { usePlatos } from "../Context/PlatosContext";

const Platos = () => {
  const navigation = useNavigation();
  const { listaPlatos } = usePlatos();
  const [busqueda, setBusqueda] = useState('');
  const [platosFiltrados, setPlatosFiltrados] = useState(listaPlatos);

  const handleInputChangeBusqueda = (value) => {
    
    setBusqueda(value);
  };

  useEffect(() => {
    const filteredPlatos = listaPlatos.filter(plato =>
      plato.title.toLowerCase().includes(busqueda.toLowerCase())
    );
    setPlatosFiltrados(filteredPlatos);
  }, [busqueda, listaPlatos]);

  return (
    <View>
      <TextInput
        style={styles.inputBusqueda}
        value={busqueda}
        onChangeText={handleInputChangeBusqueda}
        placeholder="Busqueda"
        placeholderTextColor="gray"
      />
      <View style={styles.menu}>
        <Pressable style={styles.menuBoton} onPress={() => navigation.navigate("Menu")}>
          <Text style={styles.textoBoton}>
            Menu
          </Text>
        </Pressable>
      </View>
      {
        platosFiltrados.map(item => (
          <View style={styles.card} key={item.id}>
            <CardPlatos
              idPlato={item.id}
              nombre={item.title}
              imagen={item.image}
            />
          </View>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
    menu: {
        alignItems: "center",

    },
    textoBoton: {
        justifyContent: "center"
    },
    menuBoton: {
        backgroundColor: "#60d882",
        width: 200,
        height: 30,
        alignItems: "center",
    },
    card: {
        width: 350,
        height: 200,
        borderRadius: 8,
        top: 7,
        backgroundColor: '#ffffff',
        right: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30, // Ajusta el espaciado entre las categorías si es necesario
        marginBottom: 30
    }, srcBar: {
        bottom: 37
    },
    inputBusqueda: {
        width: 231,
        height: 40,
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 35,
        alignSelf: 'center',
        marginBottom: 10,
        marginTop: 10,

    }
})
export default Platos;