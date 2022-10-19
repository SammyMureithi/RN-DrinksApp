import React from 'react'
import { StyleSheet, Text, View ,Button, ScrollView} from 'react-native';
import { Consumer } from '../Context/DrinkContext';
function CartScreen( { navigation } ) { 
    return (
        <Consumer>
            {(Context) => {
                return (
                    <ScrollView>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                            <Text>{Context.name}</Text>
                            <Button title='Detailed' />
                        </View>
                    </ScrollView>
                )
            }}
        </Consumer>
        
      
  )
}

export default CartScreen