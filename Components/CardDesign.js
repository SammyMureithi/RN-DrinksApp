import { Avatar } from '@react-native-material/core';
import React from 'react'
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card } from 'react-native-paper';
function CardDesign({navigation,handleClick}) {
    return (
        <Card>
            <TouchableOpacity onPress={() => handleClick( navigation )}>
                <Card.Content>
                    <View >
                        <View style={{ display: "flex", flexDirection: "row", padding: 10, alignItems: "center" }}>
                            <Avatar image={require( "../assets/bg2.jpg" )} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontWeight: "bold" }}>Drink Name</Text>
                                <Text style={{ fontStyle: "italic" }}>1/12/1989</Text>
                            </View>
                        </View>
                        <View>
                            <Text>
                                You will need to add some optional modules in android/app/build.gradle,
                                depending on the needs of your app.
                            </Text>
                        </View>
                        <View style={{ width: "100vw", height: "50vh" }}><Image source={require( "../assets/bg1.jpg" )}
                            style={{ width: "100%", height: "100%" }} /></View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: 30, marginTop: 10 }}>
                            <Image style={{ width: 20, height: 20 }}
                                source={require( "../assets/like.png" )} />
                            <Image source={require( "../assets/cart.png" )} style={{ width: 20, height: 20 }} />
                        </View>
                    </View>
                </Card.Content>
            </TouchableOpacity>
        </Card>
   
  )
}

export default CardDesign