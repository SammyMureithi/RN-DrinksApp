import { Avatar } from '@react-native-material/core';
import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native';
function HomeScreen( { navigation } ) {

  return (
      <View >
          <Text>HomeScreen</Text>
          <Button title='Detailed' onPress={() => navigation.navigate( "Detailed" )} />
          
   </View>
  )
}

export default HomeScreen