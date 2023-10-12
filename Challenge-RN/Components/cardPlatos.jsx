import { View, Text, StyleSheet, Pressable, Image } from "react-native-web";
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import carrito from "./Carrito";
//cart-plus

const CardPlatos = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.cardContain}>
      <Pressable
        onPress={() => {
          navigation.navigate("DetallePlato", { selectedPlato: props });
        }}>
        <Image source={{ uri: props.imagen }} style={styles.image} />
        <Text style={styles.title}>{props.nombre}</Text>
      </Pressable>

      <Pressable style={styles.boton}
        onPress={() => {
          carrito()
        }}
      >
        <MaterialCommunityIcons style={styles.carrito} name="cart-plus" size={20} color="black" />

        {/* <Text style={styles.title}>BOTON</Text> */}
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  carrito: {
  },
  boton: {
  },
  cardContain: {
    alignSelf: "center"
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
export default CardPlatos;
