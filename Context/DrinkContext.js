import React from 'react'
import { useContext } from 'react'
const { Consumer, Provider } = useContext();
function DrinkContext({props}) {
  return (
      <Provider value={{name:"Mure"}}>
          {props.children}
   </Provider>
  )
}

export  {DrinkContext,Consumer}