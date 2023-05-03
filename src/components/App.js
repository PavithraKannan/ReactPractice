import React, { useState } from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
  };

  return (
    <div className = "ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      {/* // we are adding contact property and an array. 
      to pass contacts objects to the contacts list, we can use props*/}
      <ContactList contacts={contacts}/> 
    </div>
  );
}

export default App;



// Note:
// 1. All components set 
// 2. Now functionalties are going to be set 
