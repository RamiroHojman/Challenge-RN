import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native-web";
import { useEffect } from "react";
import CardPlatos from "./CardPlatos";
import { useNavigation } from "@react-navigation/native";
const Platos = () => {

    const [listaPlatos, setListaPlatos] = useState([])
    useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=911c33c63d2a4e72bb77d18c1b2b6bc3`)
        // fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=f19d2588061a428fbf8602627a07fde4`)

            .then(res => res.json())
            .then(data => {
                console.log(data.results)
                setListaPlatos(data.results)
            });
    }, []);
    const navigation = useNavigation();

    return (
        
    <View>
                <View style={styles.menu}>
                <Pressable style={styles.menuBoton} onPress={() => {
          navigation.navigate("Menu");
        }}>
                    <Text style={styles.textoBoton}>
                        LOOl
                    </Text>
                </Pressable>
                </View>
            {
                listaPlatos.map(item =>(
                    <View style={styles.card}>
                    <CardPlatos
                    idPlato = {item.id} nombre = {item.title} imagen = {item.image}
                    />
                    </View>
                ))
            }
        </View>
    )
}
const styles = StyleSheet.create({
    menu:{
        alignItems:"center"
    },
    textoBoton:{
        justifyContent:"center"
    },
    menuBoton:{
        backgroundColor:"#60d882",
        width:200,
        height:30,
        alignItems:"center",
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
        marginBottom:30
      },
})
export default Platos;