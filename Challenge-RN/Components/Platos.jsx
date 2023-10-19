import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native-web";
import { useEffect } from "react";
import CardPlatos from "./CardPlatos";
import { useNavigation } from "@react-navigation/native";
import mostrarPlatos from "./PlatosContext"
const Platos = () => {

   

    return (

        <View>
            <View style={styles.menu}>
                <Pressable style={styles.menuBoton} onPress={() => {
                    navigation.navigate("Menu");
                }}>
                    <Text style={styles.textoBoton}>
                        Menu
                    </Text>
                </Pressable>
            </View>
            {
                listaPlatos.map(item => (
                    <View style={styles.card} key={item.id}>
                        <CardPlatos
                            idPlato={item.id} nombre={item.title} imagen={item.image}
                        />
                    </View>
                ))
            }
        </View>
    )
}
const styles = StyleSheet.create({
    menu: {
        alignItems: "center"
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
    },
})
export default Platos;