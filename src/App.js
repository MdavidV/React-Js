import "./styles/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { MenuNav } from "./components/common/navBar";
import { ItemListContainer } from "./components/layout/ItemListContainer/itemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetail } from "./components/layout/Details/ItemDetailContainer";
import { FilterMenu } from "./components/common/FilterMenu";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MenuNav />
      <FilterMenu/>
      <Routes>
        <Route path="/" element= { <ItemListContainer/>}/>
        <Route path="/products/:categoryId" element= { <ItemListContainer/>}/>
        <Route path="/item/:itemId" element={ <ItemDetail/> }/>
      </Routes>

      

      </BrowserRouter>
    </div>
  );
}

export default App;
