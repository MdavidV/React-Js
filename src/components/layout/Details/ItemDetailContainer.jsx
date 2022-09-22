import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { GetDataFromJson } from "../../common/GetDataFromJson";
import { ItemDetails } from "./ItemDetail";
import Spinner from "react-bootstrap/Spinner";

export const ItemDetail = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams();


    console.log(item);

    useEffect( () => {
        setLoading(true)


        GetDataFromJson()
            .then( (res) => {
                setItem( res.find( (prod) => prod.id === Number(itemId) ) );
            } )


            .finally( () => {
                setLoading(false);
            })
    }, [])

    return(
        <div>
            {
                loading
                ? 
                    <div className="container my-5 loader-cont">
                      <Spinner
                        animation="border"
                        variant="danger"
                        className="loading"
                        as="span"
                      />
                    </div>
                  
                : <ItemDetails item={item}/>
            }
        </div>
    )




};
