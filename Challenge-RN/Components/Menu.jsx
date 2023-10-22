import { View, Text, StyleSheet, Pressable, Image } from "react-native-web";
import { useNavigation } from '@react-navigation/native';
import { usePlatos } from "./PlatosContext";
const Menu = () =>{
    const {listaPlatosMenu}= usePlatos()

return(
    console.log(listaPlatosMenu)
    )
}
export default Menu;
