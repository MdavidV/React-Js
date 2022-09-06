import React from 'react'
import  stock  from "../layout/stock/Stock"




export const GetDataFromJson = () => {

  return new Promise( (resolve, reject) =>{

    setTimeout( () =>{
        resolve( stock );
   

        
    }, 3000 )

  } )
    
  
}
