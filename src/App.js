import { useState } from 'react';
import './index.css';
import Header from './components/header';
import Form from './components/form';
import PackingList from './components/packingList';
import Footer from './components/Footer';

// const intialItems = [
//   {id: 1, description: "Shirts", quantity: 5, packed: false},
//   {id: 2, description: "Joggers", quantity: 4, packed: true},
//   {id: 3, description: "Suites", quantity: 2, packed: true},
//   {id: 4, description: "Charger", quantity: 2, packed: false},
// ]

function App() {
  const[items, setItems] = useState([]);
  
  function handleAddItems (item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems (id) {
    setItems(items => items.filter((item)=>item.id !== id))
  }

  function handleToggleItem(id){
    setItems((items) => 
      items.map((item) => 
        item.id === id ? {...item, packed: !item.packed } : item 
    )
  );
  }

  function handleClearList () {
    const confirmed = window.confirm('Are you sure you want to clear the list?');
    if (confirmed){ 
      setItems([]);
    }
  }

  return (
    <div className="app">
      <Header/>
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} 
        onDeleteItem={handleDeleteItems} 
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Footer items={items}/>
    </div>
  );
}


export default App;
