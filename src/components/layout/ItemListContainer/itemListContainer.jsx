import React, { useEffect, useState } from "react";
import "../../../styles/App.scss";
import { Item } from "../Item/item";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import { MenuNav } from "../../common/navBar";
import { FilterMenu } from "../../common/FilterMenu";
import { Footer } from "../Footer/Footer";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../../../firebase/config";

export const ItemListContainer = () => {
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();


  useEffect(() => {
    setLoading(true);

    // 1. - Armar la referencia (sync)
    const productsRef = collection(db, 'Products');
    const q = categoryId
              ?query(productsRef, where('category', '==', categoryId))
              :productsRef

              
     // 2. - consumir la ref (async)

    getDocs(q)
      .then((resp) => {
          const productsDB = resp.docs.map( (doc) => ({id: doc.id, ...doc.data()}));
          setProducts(productsDB);
      })

      .finally(() => {
        setLoading(false);
      })
  }, [categoryId]);




  return (
    <div>
      <main className="container">
        <MenuNav />

        <FilterMenu />
        <div className="row left-items">
          {loading ? (
            <div className=" my-5 loader-cont">
              <Spinner
                animation="border"
                variant="danger"
                className="loading"
                as="span"
              />
            </div>
          ) : (
            product.map( (prod) => {
              if (prod.stock > 0){
                return <Item key={prod.id} product={prod } />
              } else {
                return null;
              }
            } )
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};
