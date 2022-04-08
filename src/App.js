import { useState, useEffect } from 'react';
import './App.css';
import ItemForm from './components/ItemForm/ItemForm';
import ItemList from './components/Items/ItemList';

function App() {

  const [items, setItems] = useState([]);
  const [listValid, setListValid] = useState(false);
  
  useEffect(()=>{
    if(items.length === 0) {
      setListValid(false);
    }
    else {
      setListValid(true);
    }
  },[items])

  const addItemHandler = (data) =>  {
    setItems(prevState => [...prevState, data]);
  }

  const removeItemHandler = (id) => {
    const filteredData = items.filter(item => item.id != id);
    // items.map(i => console.log(i.id, id ))
    setItems(filteredData);

  }

  return (
    <div className="App">
      <ItemForm onAddItem={addItemHandler} />
     {listValid && <ItemList onRemoveItem ={removeItemHandler} items = {items} />}
    </div>
  );
}

export default App;
