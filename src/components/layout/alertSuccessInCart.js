import React from "react";
import swal from "sweetalert";


export const AlertSuccessInCart = () => {
  return (
    swal({
        title: "Nice!",
        text: "The item has been added successfully!",
        icon: "success"
      })
    

  )
};

