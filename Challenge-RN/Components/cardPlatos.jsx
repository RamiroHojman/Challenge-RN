import { View, Text, StyleSheet, Pressable, Image } from "react-native-web";
import { useNavigation } from '@react-navigation/native';


const CardPlatos = (props) => {
  const navigation = useNavigation();

    return(
        <View style={styles.cardContain}>
      <Pressable
        onPress={() => {
          navigation.navigate("DetallePlato", {selectedPlato: props});
        }}>
        <Image source={{uri: props.imagen}} style={styles.image} />
            <Text style={styles.title}>{props.nombre}</Text>
          </Pressable>
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
export default CardPlatos;
