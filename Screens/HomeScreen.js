import React from 'react'
import { Button, Image, StyleSheet, Text, View,ScrollView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import CardDesign from '../Components/CardDesign';
function HomeScreen( { navigation } ) {
    function handleNavigate(navigation) {
        navigation.navigate( "Detailed" )
    }
  return (
      <ScrollView >
          <CardDesign  handleClick={()=>handleNavigate( navigation )}/>
          <CardDesign  handleClick={()=>handleNavigate( navigation )}/>
          <CardDesign  handleClick={()=>handleNavigate( navigation )}/>
   </ScrollView>
  )
}

export default HomeScreen