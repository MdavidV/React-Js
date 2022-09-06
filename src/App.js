import "./styles/App.scss";
import { MenuNav } from "./components/layout/navBar";
import { ItemListContainer } from "./components/layout/itemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from "react";
import { WineApi } from "./components/common/wineApi";




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuNav/>
      </header>

      <main>
        <div className="container left-items ">
        <ItemListContainer/>

        </div>
      </main>



      

    </div>
  );
}

export default App;
