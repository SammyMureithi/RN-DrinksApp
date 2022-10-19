import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CartScreen from './Screens/CartScreen';
import HomeScreen from './Screens/HomeScreen';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailedDrinkScreen from './Screens/DetailedDrinkScreen';
import { DrinkContext } from './Context/DrinkContext';



const BottomTab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const CartStack = createNativeStackNavigator();
export default function App() {
  function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen}  options={{ headerShown:false}} />
        <HomeStack.Screen name="Detailed" component={DetailedDrinkScreen}/>
      </HomeStack.Navigator>
    )
  }
  function CartStackScreen() {
    return (
      <CartStack.Navigator>
        <CartStack.Screen name='Cart' component={CartScreen} options={{ headerShown:false}}/>
        <CartStack.Screen name='Detailed' component={DetailedDrinkScreen}/>
      </CartStack.Navigator>
    )
  }
  return (
    <DrinkContext>
      <NavigationContainer>
        <BottomTab.Navigator screenOptions={( { route } ) => ( {
          tabBarIcon: ( { focused, color, size } ) => {
            let iconName;
            if ( route.name === "Home" ) {
              iconName = focused ? "home" : "home-outline";
            }
            else {
              iconName = focused ? "cart" : "cart-outline";
            }
            return <Ionicons name={iconName} color={color} size={30} />
          },
          tabBarActiveTintColor: "tomato",
          tabBarStyle: {
            backgroundColor: "green", borderRadius: 22,
            marginBottom: 10, position: "absolute", marginLeft: 10, marginRight: 10
          }
        } )}>
          <BottomTab.Screen name='Home' component={HomeStackScreen} options={{ headerShown: false }} />
          <BottomTab.Screen name='Cart' component={CartStackScreen} options={{ headerShown: false }} />
        </BottomTab.Navigator>
      </NavigationContainer>
    </DrinkContext>
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
