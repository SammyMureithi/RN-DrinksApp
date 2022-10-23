import React from 'react'
import { View,ScrollView } from 'react-native';
import { Card, TextInput } from 'react-native-paper';
import CardDesign from '../Components/CardDesign';
import { Consumer } from '../Context/DrinkContext';
function HomeScreen( { navigation } ) {
    function handleNavigate(navigation,Id) {
        navigation.navigate( "Detailed", {
            itemId: Id
        } )
    }
    return (
      <Consumer>
            {( Context ) => {
                const drinks=Context.drinks
                const res = drinks.map( element => (
                    <View key={element.idDrink}>
                        <CardDesign name={element.strDrink}
                            date={element.dateModified} image={element.strDrinkThumb}
                            description={element.strInstructions} description1={element.strInstructionsDE}
                            id={element.idDrink} handleClick={()=>handleNavigate( navigation,element.idDrink )}/>
                    </View>
                ))
                return (
                    <ScrollView >
                        {Context.input}
                        {res}
                    </ScrollView>
                )
            }}
      </Consumer>
      
  )
}

export default HomeScreen