import React from 'react';
import { View, Text, Image, Pressable, Button } from 'react-native';
import { useEffect, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { usePlatos } from '../Context/PlatosContext';
const DetallePlatos = ({ route }) => {

  const selectedPlato = route.params.selectedPlato;
  const [platos, setPlatos] = useState([]);
  const [vegetariano, setVegetariano] = useState("No");
  const [vegano, setVegano] = useState("No");
  const [glutenFree, setGlutenFree] = useState("No");
  const { platoGuardado } = usePlatos()
  const { GuardarPlato } = usePlatos([])

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/${selectedPlato.idPlato}/information?apiKey=f19d2588061a428fbf8602627a07fde4`)
    // fetch(`https://api.spoonacular.com/recipes/${selectedPlato.idPlato}/information?apiKey=911c33c63d2a4e72bb77d18c1b2b6bc3`)
    // fetch(`https://api.spoonacular.com/recipes/${selectedPlato.idPlato}/information?apiKey=e967e1646396460e9d32df8a39bc4b1b`)
      .then((res) => res.json())
      .then((data) => {
        setPlatos(data);
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    if (platos.vegan) {
      setVegano("Sí")
    }
    if (platos.vegetarian) {
      setVegetariano("Sí")
    }
    if (platos.glutenFree) {
      setGlutenFree("Sí")
    }

  })

  console.log(platos, )
  const funcionCombinada = () => {
    GuardarPlato(selectedPlato, platos.vegan, platos.pricePerServing, platos.healthScore)
  }

  return (
    <View>
      <Image source={{ uri: platos.image }} style={styles.image} />
      <Text style={styles.title}>{selectedPlato.nombre}</Text>
      <Text style={styles.subtitle}>HealthScore: {platos.healthScore}</Text>
      <Text style={styles.subtitle}>Precio:{platos.pricePerServing}</Text>
      <Text style={styles.subtitle}>Vegetariano: {vegetariano}</Text>
      <Text style={styles.subtitle}>Vegano: {vegano}</Text>
      <Text style={styles.subtitle}>Apto celíacos: {glutenFree}</Text>
      <Pressable style={({ pressed }) => [
        { backgroundColor: pressed ? "#4daa68" : "#60d882" },
        styles.carritoBoton,
      ]} onPress={funcionCombinada}>
        <MaterialCommunityIcons style={styles.carritoIcono} name="cart-plus" size={20} color="white" />
      </Pressable>

    </View>
  );
};

const styles = {
  carritoIcono: {

  },
  carritoBoton: {
    width: 100,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4
  },
  image: {
    width: 285,
    height: 158,
    borderColor: "black",
    borderWidth: 1,
    marginTop: 27,
    marginLeft: 9,
    alignSelf: "center"
  },
  title: {
    marginTop: 39,
    fontSize: 24,
    marginLeft: 23,
    fontWeight: '700',
    marginBottom:5
  },
  subtitle: {
    marginTop: 10,
    fontSize: 19,
    marginLeft: 23,
    fontWeight: '600'
  },
};

export default DetallePlatos;