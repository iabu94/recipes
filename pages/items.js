import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { database } from "../firebase";

export default function Items() {
  const dbInstance = collection(database, "items");
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(dbInstance, {
      noteTitle: "New",
    });
    setNewItem("");
  };

  const handleDelete = (id) => {
    database.collection("items").doc(id).delete();
  };

  const handleUpdate = (item) => {
    database.collection("items").doc(item.id).update({ name: item.name });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdate(item);
              }}
            >
              <input
                type="text"
                value={item.name}
                onChange={(e) => {
                  item.name = e.target.value;
                }}
              />
              <button type="submit">Update</button>
            </form>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
