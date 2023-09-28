import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native-web";
import { useEffect } from "react";
import CardPlatos from "./CardPlatos";
import { useNavigation } from '@react-navigation/native';

const Platos = () => {
    const navigation = useNavigation();

    const [listaPlatos, setListaPlatos] = useState([])
    useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=911c33c63d2a4e72bb77d18c1b2b6bc3`)

            .then(res => res.json())
            .then(data => {
                console.log(data.results)
                setListaPlatos(data.results)
            });
    }, []);
    
    return (
        
    <View>
        
            {
                listaPlatos.map(item =>(
                    <View style={styles.card}>
                    <CardPlatos
                    key = {item.id} nombre = {item.title} imagen = {item.image}
                    />
                    </View>
                ))
            }
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        width: 250,
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