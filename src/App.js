import "./styles/App.scss";
import { MenuNav } from "./components/layout/navBar";
import { ItemListContainer } from "./components/layout/itemListContainer";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuNav/>
      </header>

      <main>
        <div className="left-items">

        <ItemListContainer name='La dame De Montrose' price='24' />
        <ItemListContainer name='Di Montefalco' price='15' />
        <ItemListContainer name='ST HENRY SHIRAZ' price='39' />

        </div>
      </main>


    </div>
  );
}

export default App;
