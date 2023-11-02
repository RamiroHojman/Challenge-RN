import { View, Text, StyleSheet, Pressable, Image } from "react-native-web";
import { useNavigation } from '@react-navigation/native';
import CardPlatos from "./CardPlatos";
import { usePlatos } from "../Context/PlatosContext";
const Menu = () => {
    const { listaPlatosMenu } = usePlatos()
    const{precioFinal} = usePlatos()
    const{healthScoreFinal} = usePlatos()
    console.log(precioFinal)
    return (
        <View>
            {console.log(listaPlatosMenu)}
            {
                listaPlatosMenu.map(item => (
                    <View style={styles.card}>
                        {console.log(item.nombre)}
                        <CardPlatos
                            idPlato={item.idPlato} nombre={item.nombre} imagen={item.imagen}
                        />
                    </View>
                ))
            }
            <View style={styles.precioView}>
                <Text style ={styles.textoPrecio}>${precioFinal}</Text>
            </View>
            <View style={styles.precioView}>
                <Text style ={styles.textoPrecio}>{healthScoreFinal}</Text>
            </View>
        </View>
    )
}
export default Menu;
const styles = StyleSheet.create({
    
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
    precioView:{
        backgroundColor: "#60d882",
        width: 200,
        height: 30,
        alignItems: "center",
    },
    textoPrecio:{
        justifyContent:"center"
    }
})
