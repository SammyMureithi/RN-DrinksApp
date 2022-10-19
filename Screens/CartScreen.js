import React from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native';
function CartScreen( { navigation } ) {
    
  return (
      <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
          <Text>CartScreen</Text>
          <Button title='Detailed' onPress={()=>navigation.navigate("Detailed")}/>
   </View>
  )
}

export default CartScreen