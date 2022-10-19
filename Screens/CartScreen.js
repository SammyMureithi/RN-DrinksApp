import React from 'react'
import { StyleSheet, Text, View ,Button, ScrollView} from 'react-native';
function CartScreen( { navigation } ) { 
    return (
        <ScrollView>
            <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <Text>CartScreen</Text>
                <Button title='Detailed' onPress={() => navigation.navigate( "Detailed" )} />
                </View>
      </ScrollView>
      
  )
}

export default CartScreen