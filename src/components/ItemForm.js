import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [newItem, setNewItem] = useState({
    id: uuid(),
    name: "",
    category: "Produce"
  });

  function onNewItemChange(event) {
    setNewItem({...newItem, 
      [event.target.name] : event.target.value
    })
  }


  return (
    <form className="NewItem" onSubmit={e => {
      e.preventDefault();
      onItemFormSubmit(newItem)
      setNewItem({
        id: uuid(),
        name: "",
        category: "Produce"
      });
      }}>
      <label>
        Name:
        <input 
          onChange={onNewItemChange}
          type="text" 
          name="name"
          value={newItem.name} 
        />
      </label>

      <label>
        Category:
        <select name="category" onChange={onNewItemChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
