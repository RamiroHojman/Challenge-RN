import React, { useState } from "react";
import { Text, View } from "react-native-web";
import { useEffect } from "react";
import cardPLatos from "./cardPlatos";
const Platos = () => {
    const [listaPlatos, setListaPlatos] = useState([])
    useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=911c33c63d2a4e72bb77d18c1b2b6bc3`)

            .then(res => res.json())
            .then(data => {
                console.log(data)
                setListaPlatos(data)
            });
    }, []);

    return (
        <View>
            {
                console.log(listaPlatos)    
                // listaPlatos.map(item =>(
                //     <cardPLatos
                //     key = {item.results.id} nombre = {item.results.title} 
                //     />
                // ))
            }
        </View>
    )
}

export default Platos