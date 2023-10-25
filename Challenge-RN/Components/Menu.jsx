import { View, Text, StyleSheet, Pressable, Image } from "react-native-web";
import { useNavigation } from '@react-navigation/native';
import CardPlatos from "./CardPlatos";
import { usePlatos } from "./PlatosContext";
const Menu = () => {
    const { listaPlatosMenu } = usePlatos()

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
})
