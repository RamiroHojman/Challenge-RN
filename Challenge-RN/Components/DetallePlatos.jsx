import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

const DetallePlatos = (props) => {
  const [platos, setPlatos] = useState([]);
  const [vegetariano, setVegetariano] = useState("No");
  const [vegano, setVegano] = useState("No");
  const [glutenFree, setGlutenFree] = useState("No");
  const [dairyFree, setDairyFree] = useState("No")
  const [healthScore, setHealthScore] = useState();
  const [healthy, setHealthy] = useState("No");

  const navigation = useNavigation();
  console.log(props.route.params.selectedPlato.idPlato);
  const plato = props.route.params.selectedPlato
  useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/${props.route.params.selectedPlato.idPlato}/information?apiKey=911c33c63d2a4e72bb77d18c1b2b6bc3`)
      // fetch(
      //   `https://api.spoonacular.com/recipes/${props.route.params.selectedPlato.idPlato}/information?apiKey=f19d2588061a428fbf8602627a07fde4`
      // )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlatos(data);
      });
  }, []);

  useEffect(() => {
    setHealthScore(platos.healthScore)
    if (platos.vegan) {
      console.log("lol")
      setVegano("Sí")
    }
    if (platos.vegetarian) {
      console.log("lol")
      setVegetariano("Sí")
    }
    if (platos.glutenFree) {
      console.log("lol")
      setGlutenFree("Sí")
    }
    if (platos.dairyFree) {
      console.log("lol")
      setDairyFree("Sí")
    }
    if (platos.veryHealthy) {
      console.log("lol")
      setHealthy("Sí")
    }
  })
  
  return (
    <View>
    <Text style={styles.titulo}>{plato.nombre}</Text>
    <Image source={{ uri: plato.imagen }} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.infoTexto}>Vegetariano: {vegetariano}</Text>
      <Text style={styles.infoTexto}>Vegano: {vegano}</Text>
      <Text style={styles.infoTexto}>Apto celíacos: {glutenFree}</Text>
      <Text style={styles.infoTexto}>Apto lacto intolerantes: {dairyFree}</Text>
      <Text style={styles.infoTexto}>Muy sano: {healthy} - puntaje saludable: {healthScore}</Text>
    </View>

  </View>
)
}

const styles = StyleSheet.create({
  infoTexto: {
    fontWeight: '500'

  },
  info: {
    marginTop: 7,
    marginLeft: 23,
    fontWeight: '600'

  },
  titulo: {
    marginTop: 20,
    fontSize: 24,
    marginLeft: 23,
    fontWeight: '600'
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

});
export default DetallePlatos;
