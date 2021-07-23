import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchedItem, setSearchedItem] = useState("");
  //const [allItems, setAllItems] = useState(items);

  function handleAddItem(item) {
    setItems((items) => [...items, item])
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchedItem(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter((item) => {
    return item.name.toLowerCase().includes(searchedItem.toLowerCase());
  });

  return (
    <div className="ShoppingList">
      <ItemForm 
        onItemFormSubmit={handleAddItem}
      />
      <Filter 
        onCategoryChange={handleCategoryChange} 
        onSearchChange={handleSearchChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item 
          key={item.id} 
          name={item.name} 
          category={item.category} 
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
