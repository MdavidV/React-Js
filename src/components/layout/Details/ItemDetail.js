import React from "react";
import { Contador } from "../../common/Contador";

export const ItemDetails = ({ item }) => {
  return (
    <div className="container">
      <div className="row my-5">

          <div className="col-4 my-5">
            <img src={item.img} style={{width: '100%'}}/>
          </div>

          <div className="col-8 ">
            <h2 className="text-center mb-5"> {item.name} </h2>
            <p className="mt-5 text-justify">
              {item.descr}
            </p>
            <h2> {item.year} vintage, {item.country} . </h2>

            <Contador item={ item }/>

          </div>

          
          
      </div>

    </div>
  );
};
