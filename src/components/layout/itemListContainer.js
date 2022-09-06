import React, { useEffect, useState } from "react";
import "../../styles/App.scss";
import { GetDataFromJson } from "../common/GetDataFromJson";
import { Item } from "./item";
import Spinner from 'react-bootstrap/Spinner'


export const ItemListContainer = () => {


  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);




  useEffect( () => {
    setLoading(true);

    GetDataFromJson()
      .then((res) =>{
        setProducts(res)
      })
      .finally(()=>{
        setLoading(false);
      })

    
  },[])

  return (
    <div>
      {
          loading
          ?<div className="container my-5 loader-cont"><Spinner animation="border" variant="danger" className="loading" as="span"/></div>
          :product.map((el) => {
            return <Item key={el.id} name={el.name} price={el.price} stock={el.stock} img={el.img}/>
          }) }
    </div>
  )
};
