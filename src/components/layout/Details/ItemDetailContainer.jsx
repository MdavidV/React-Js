import React, { useEffect, useState, useContext } from "react";
import { useParams } from 'react-router-dom'
import { ItemDetails } from "./ItemDetail";
import Spinner from "react-bootstrap/Spinner";
import { MenuNav } from "../../common/navBar";
import { FilterMenu } from "../../common/FilterMenu";
import { Footer } from "../Footer/Footer";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";

export const ItemDetail = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams();

    useEffect( () => {
        setLoading(true)

        const docRef = doc(db, 'Products', itemId);

        getDoc(docRef)
            .then((doc) => {
                setItem({id: doc.id, ...doc.data()})
            })

            .finally( () => {
                setLoading(false);
            } )

    }, [])

    return(
        <div>
            <MenuNav/>
            <FilterMenu/>
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
            <Footer/>
        </div>
    )




};
