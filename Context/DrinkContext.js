import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import { TextInput } from 'react-native-paper';


const { Consumer, Provider } = createContext();
function DrinkContext( props ) {
    const [drinks, setDrinks] = useState( [] );
    const [searchInput, setSearchInput] = useState( "i" );
    function handleChange( e ) {
        setSearchInput( e.target.value );
    }
    const input = (
        <TextInput value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}/>
    )
    useEffect( () => {
        fetch( `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchInput}` )
            .then( res => res.json() )
            .then( data => setDrinks(data.drinks) )
            .catch( error => console.log( error ) );
    }, [searchInput] );
  return (
      <Provider value={{
          name: "Mure", drinks: drinks ,input: input
      }}>
          {props.children}
   </Provider>
  )
}

export  {DrinkContext,Consumer}