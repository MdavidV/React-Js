import React, { useEffect, useState } from "react";
import "../../styles/App.scss";
import { Item } from "./item";


export const ItemListContainer = () => {


  const [product, setProducts] = useState([]);

  const getData = () =>{
    fetch('stock.json')
      .then((product)=> {
        return product.json();
      })
      .then((product)=> {
        setProducts(product);
      })
      
  }


  useEffect(()=>{
    getData()
  },[])

  return (
    <div>
      
      {product.map((el) => {
        return <Item key={el.id} name={el.name} price={el.price} stock={el.stock} img={el.img}/>
      }) }
    </div>
  )
};
