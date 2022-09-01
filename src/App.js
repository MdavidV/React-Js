import "./styles/App.scss";
import { MenuNav } from "./components/layout/navBar";
import { ItemListContainer } from "./components/layout/itemListContainer";
import { Contador } from "./components/common/Contador";
import 'bootstrap/dist/css/bootstrap.min.css';




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
