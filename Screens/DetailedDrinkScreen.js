import React from 'react'
import { Avatar } from '@react-native-material/core';
import { Card } from 'react-native-paper';
import { Button, Image, Text , View } from 'react-native';
import { Consumer } from '../Context/DrinkContext';
import { useState } from 'react';
import { ScrollView } from 'react-native-web';


function DetailedDrinkScreen( { route, navigation } ) {
    const { itemId } = route.params;
  
    return (
      <Consumer>
            {( Context ) => {
                const data = Context.drinks.filter( element => element.idDrink === itemId );
                const itemData = data[0];
                 navigation.setOptions({headerTitle:itemData.strDrink})
                return (
                    <ScrollView>
                        <Card>
                    <Card.Content>
                      <View >
                          <View style={{ display: "flex", flexDirection: "row", padding: 10, alignItems: "center" }}>
                              <Avatar image={{uri:itemData.strDrinkThumb}} />
                              <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontWeight: "bold" }}>{itemData.strDrink }</Text>
                                        <Text style={{ fontStyle: "italic" }}>{ itemData.dateModified}</Text>
                              </View>
                          </View>
                          <View>
                              <Text>
                                        {itemData.strInstructions}
                                        {itemData.strInstructionsDE}
                              </Text>
                          </View>
                                <View style={{ width: "100%", height: "50%" }}>
                                    <Image source={{uri:itemData.strDrinkThumb}}
                              style={{ width: "100%", height: "100%" }} /></View>
                          <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: 30, marginTop: 10 }}>
                              <Image style={{ width: 20, height: 20 }}
                                  source={require( "../assets/like.png" )} />
                              <Image source={require( "../assets/cart.png" )} style={{ width: 20, height: 20 }} />
                          </View>
                      </View>
                  </Card.Content>
          
          </Card>
                    </ScrollView>
                )
            }}
      </Consumer>
      

  )
}

export default DetailedDrinkScreen