import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CartScreen from './Screens/CartScreen';
import HomeScreen from './Screens/HomeScreen';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
const BottomTab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={( { route } ) => ( {
        tabBarIcon: ( { focused, color, size } ) => {
          let iconName;
          if (route.name ==="Home") {
            iconName=focused? "home":"home-outline";
          }
          else {
            iconName=focused ? "cart": "cart-outline";
          }
          return <Ionicons name={iconName} color={color} size={30}/>
        },
        tabBarActiveTintColor: "tomato",
        tabBarStyle:{backgroundColor:"green",borderRadius:22,marginBottom:10,position:"absolute"}
      })}>
        <BottomTab.Screen name='Home' component={HomeScreen} options={{ headerShown:false}} />
        <BottomTab.Screen name='Cart' component={CartScreen} options={{ headerShown:false}} />
      </BottomTab.Navigator>
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
