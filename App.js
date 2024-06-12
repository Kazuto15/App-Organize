import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./views/home.js";
import AddScreen from "./views/add.js";
import SplashScreen from "./views/splash.js";
import ProfileScreen from "./views/profile.js";
import ExtratoScreen from "./views/extrato.js";
import AccessScreen from "./views/access.js";
import TransferirScreen from './views/transferencia.js'

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Add" component={AddScreen}/>
        <Stack.Screen name="Splash" component={SplashScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="Extrato" component={ExtratoScreen}/>
        <Stack.Screen name="Access" component={AccessScreen}/>
        <Stack.Screen name="Transferencia" component={TransferirScreen}/>
      </Stack.Navigator>
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
