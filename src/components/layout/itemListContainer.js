import React, { useEffect, useState } from "react";
import "../../styles/App.scss";
import { Item } from "./item";



const stock = [
  {
    "id": 1,
     "name": "La dame De Montrose",
     "img": "../assets/1.png",
     "price": 24,
     "stock": 15
  },
  {
      "id": 2,
      "name": "Di Montefalco",
      "img": "../assets/2.png",
      "price": 15,
      "stock": 9
   },
   {
      "id": 3,
      "name": "ST HENRY SHIRAZ",
      "img": "../assets/3.png",
      "price": 39,
      "stock": 5
   }

]


const getData = () =>{
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve(stock)
    }, 3000);
  })
}



export const ItemListContainer = () => {

  const [product, setProducts] = useState([]);

  useEffect( () => {
    getData()
    .then( (res) => {
      setProducts(res);
    })

  }, [])

  return (
    <div>
      
      {product.map((el) => {
        return <Item key={el.id} name={el.name} price={el.price} stock={el.stock}/>
      }) }
    </div>
  )
};
