import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const DetallePlatos = ({ route }) => {

  const selectedPlato = route.params.selectedPlato;
  const [platos, setPlatos] = useState([]);

  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/${selectedPlato.idPlato}/information?apiKey=911c33c63d2a4e72bb77d18c1b2b6bc3`)
      .then((res) => res.json())
      .then((data) => {
        setPlatos(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <View>
      {console.log(platos)}
      <Image source={{ uri: platos.image }} style={styles.image} />
      <Text style={styles.title}>HealthScore: {platos.healthScore}</Text>
      <Text style={styles.title}>Precio:{platos.pricePerServing}</Text>
      {/* <Pressable style={styles.carritoBoton} onPress={() => {carritoProvider()}}>
      <MaterialCommunityIcons style={styles.carritoIcono} name="cart-plus" size={20} color="white" />
      </Pressable> */}
    </View>
  );
};

const styles = {
  carritoIcono:{

  },
  carritoBoton:{
    backgroundColor:"#60d882",
    width:100,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:4
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 0,
    fontSize: 14
  },
};

export default DetallePlatos;