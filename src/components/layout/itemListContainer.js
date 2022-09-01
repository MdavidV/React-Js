import "../../styles/App.scss";
import { Item } from "./item";

export const ItemListContainer = () => {
  return (
    <div>
      <Item name='La dame De Montrose' price='24' />
      <Item name='Di Montefalco' price='15' />
      <Item name='ST HENRY SHIRAZ' price='39' /> 
    </div>
  )
};
