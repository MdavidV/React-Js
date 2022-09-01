import { useState } from "react";

export const Contador = ( { stock, initial} ) =>{

    let [counter, setCounter] = useState(1);


    const handleAdd = () =>{ 
        if(counter < stock){
            setCounter( counter + 1 );
        }
    }

    const handleMinus = () =>{
        if ( counter > initial){
            setCounter( counter - 1 );
        }
    }

    return(
        <div className="container my-4 d-flex justify-content-center" >
            <button className="btn btn-outline-dark" onClick={ handleMinus }>-</button>
            <span className="mx-3">{ counter }</span>
            <button className="btn btn-outline-dark" onClick={ handleAdd }>+</button>

        </div>
    )
}