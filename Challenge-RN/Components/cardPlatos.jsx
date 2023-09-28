import { View, Text, StyleSheet, Pressable, Image } from "react-native-web";
const CardPlatos = (props) => {

    return(
        <View style={styles.cardContain}>
        <Pressable>
          <Image source={{uri: props.imagen}} style={styles.image} />
        <Text style={styles.title}>{props.nombre}</Text>
  
        </Pressable>
        
      </View>
    )
}
const styles = StyleSheet.create({
  cardContain: {
    left: 13,
  },
  image: {
    left: 1,
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 0,
    fontSize: 14
  },
  subtitle: {
    fontWeight: 'light',
    color: "grey",
    marginBottom: 15,
    fontSize: 14
  },
  name: {
    fontWeight: 'light',
    fontSize: 12,
    width: 130,
    color: "grey",


  },
})
export default CardPlatos;