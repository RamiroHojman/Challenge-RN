import React, { useState } from "react";
import { Text } from "react-native-web";
import { useEffect } from "react";

const Platos = () => {
    const [platos, setPlatos] = useState([])
    useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/716429/information?apiKey=911c33c63d2a4e72bb77d18c1b2b6bc3&includeNutrition=true.`)
        
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setPlatos(data)
        });
    }, []);

    return(


<Text> 

    </Text>
)
}

export default Platos