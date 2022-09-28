import React, { useEffect, useState } from "react";
import "../../../styles/App.scss";
import { GetDataFromJson } from "../../common/GetDataFromJson";
import { Item } from "../Item/item";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import { MenuNav } from "../../common/navBar";
import { FilterMenu } from "../../common/FilterMenu";
import { Footer } from "../Footer/Footer";

export const ItemListContainer = () => {
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  console.log(categoryId);

  useEffect(() => {
    setLoading(true);

    GetDataFromJson()
      .then((res) => {
        if (!categoryId) {
          setProducts(res);
        } else {
          setProducts(res.filter((prod) => prod.category === categoryId));
        }
      })
      .finally(() => {
        setLoading(false);
      });
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
            product.map((el) => {
              return <Item key={el.id} product={el} />;
            })
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};
