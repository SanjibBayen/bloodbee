import { NavbarHome, Footer } from "../components/Elements";
import Services from "../pages/Services";
import BloodDonation from "../pages/BloodDonation";
import "./Home.css";

import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc, 
  serverTimestamp,
  query,
  orderBy
} from 'firebase/firestore';

const Home = () => {
  // State management
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editItem, setEditItem] = useState({ id: '', name: '' });
  const [isEditing, setIsEditing] = useState(false);

  // Collection reference
  const itemsCollectionRef = collection(db, "items");

  // Read - Fetch items from Firestore
  useEffect(() => {
    const getItems = async () => {
      const q = query(itemsCollectionRef, orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const itemsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setItems(itemsList);
    };
    
    getItems();
  }, []);

  // Create - Add a new item
  const addItem = async (e) => {
    e.preventDefault();
    if (newItem.trim() === '') return;
    
    try {
      const docRef = await addDoc(itemsCollectionRef, {
        name: newItem,
        createdAt: serverTimestamp()
      });
      
      setItems([{ id: docRef.id, name: newItem, createdAt: new Date() }, ...items]);
      setNewItem('');
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  // Update - Edit an existing item
  const startEdit = (item) => {
    setIsEditing(true);
    setEditItem({ id: item.id, name: item.name });
  };

  const handleEditChange = (e) => {
    setEditItem({ ...editItem, name: e.target.value });
  };

  const updateItem = async (e) => {
    e.preventDefault();
    if (editItem.name.trim() === '') return;
    
    try {
      const itemDoc = doc(db, "items", editItem.id);
      await updateDoc(itemDoc, {
        name: editItem.name,
        updatedAt: serverTimestamp()
      });
      
      setItems(items.map(item => 
        item.id === editItem.id ? { ...item, name: editItem.name } : item
      ));
      
      setIsEditing(false);
      setEditItem({ id: '', name: '' });
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  // Delete - Remove an item
  const deleteItem = async (id) => {
    try {
      const itemDoc = doc(db, "items", id);
      await deleteDoc(itemDoc);
      setItems(items.filter(item => item.id !== id));
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <div className="home-container">
      {/* Navbar */}
      <NavbarHome />

      {/* Main Content */}
      <div className="home-content container text-center">
        <h1 className="home-title text-muted">
          One Blood Donation Can Save <span className="highlight">Three</span> Lives
        </h1>

        {/* Services & Blood Donation Side by Side */}
        <div className="home-sections row">
          <div className="col-md-6">
            <Services />
          </div>
          <div className="col-md-6">
            <BloodDonation />
          </div>
        </div>

        {/* Firebase CRUD Section */}
        <div className="App">
          <h2>Firebase CRUD with React</h2>
          
          {/* Add Item Form */}
          <form onSubmit={addItem}>
            <input
              type="text"
              placeholder="Add new item"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
            <button type="submit">Add</button>
          </form>
          
          {/* Edit Item Form */}
          {isEditing && (
            <form onSubmit={updateItem}>
              <input
                type="text"
                value={editItem.name}
                onChange={handleEditChange}
              />
              <button type="submit">Update</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </form>
          )}
          
          {/* Display Items */}
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.name}
                <button onClick={() => startEdit(item)}>Edit</button>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
