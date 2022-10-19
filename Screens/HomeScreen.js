import { Avatar } from '@react-native-material/core';
import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import CardDesign from '../Components/CardDesign';
function HomeScreen( { navigation } ) {
  return (
      <View >
          <Text>HomeScreen</Text>
          <Button title='Detailed' onPress={() => navigation.navigate( "Detailed" )} />
          <CardDesign/>
   </View>
  )
}

export default HomeScreen