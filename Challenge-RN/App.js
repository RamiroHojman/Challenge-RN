import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Platos from './Components/Platos';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DetallePlatos from './Components/DetallePlatos'
import Menu from './Components/Menu';
import PlatosProvider from './Components/PlatosContext'
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <PlatosProvider>
        <Stack.Navigator>
          <Stack.Screen name="Platos" component={Platos} />
          <Stack.Screen name="DetallePlato" component={DetallePlatos} />
          <Stack.Screen name="Menu" component={Menu} />
        </Stack.Navigator>
      </PlatosProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
