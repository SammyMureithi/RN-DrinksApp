import React from 'react'
import { Button, Image, StyleSheet, Text, View,ScrollView } from 'react-native';
import CardDesign from '../Components/CardDesign';
function HomeScreen( { navigation } ) {
  return (
      <ScrollView>
          <CardDesign />
          <CardDesign/>
          <CardDesign />
   </ScrollView>
  )
}

export default HomeScreen