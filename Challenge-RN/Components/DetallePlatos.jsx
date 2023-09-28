import React from "react"; 
import { View, Text, StyleSheet, Pressable, Image } from "react-native-web";
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from "react";

const DetallePlatos = (props) => {
  const [platos, setPlatos] = useState([])
  const navigation = useNavigation();
   useEffect(() => {
  //     // fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=911c33c63d2a4e72bb77d18c1b2b6bc3`)
       fetch(`https://api.spoonacular.com/recipes/ ${props.route.params.selectedPlato.idPlato} /information?apiKey=f19d2588061a428fbf8602627a07fde4`)
  
          .then(res => res.json())
          .then(data => {
               console.log(data)
              setPlatos(data)
          });
  }, []);

    return(
      <View >
          {console.log(platos)}
          <Text>Lol</Text>
      </View>
    )
}
const styles = StyleSheet.create({
  cardContain: {
    alignSelf:"center"
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
  
})
export default DetallePlatos;

