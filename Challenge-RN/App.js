import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Platos from './Components/Platos';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DetallePlatos from './Components/DetallePlatos'
import Menu from './Components/Menu';
import PlatosProvider from './Context/PlatosContext'
import LoginScreen from './Components/LoginScreen';
import { AuthProvider } from './Context/AuthContext';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <PlatosProvider>
        <Stack.Navigator>
       
          <Stack.Screen name="Platos" component={Platos}options={{
                headerShown: false,
              }} />
          <Stack.Screen name="DetallePlato" component={DetallePlatos}options={{
               title:"Plato",
              }}/>
          <Stack.Screen name="Menu" component={Menu} />
        </Stack.Navigator>
      </PlatosProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
