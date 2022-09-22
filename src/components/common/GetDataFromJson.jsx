import React, { useEffect } from 'react'
import  stock  from "../layout/stock/Stock"
import { ItemDetail } from '../layout/Details/ItemDetailContainer'



export const GetDataFromJson = () => {


  return new Promise( (resolve, reject) =>{
    setTimeout( () =>{
        resolve( stock );   
    }, 2000 )

  } )
    
  
}
