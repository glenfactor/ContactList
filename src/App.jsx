import "./App.css";
import React from 'react';
import ContactList from './components/ContactList';
import SelectedContact from "./components/SelectedContact";


export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (
        <div id ="ContactList">
        <ContactList contact="name" />
        <ContactList contact="email"/>
        <ContactList contact ="phone"/>
        </div>
      )}
      
    </>
  );
}



// create a second component folder with files contact list and contact row
//Create two component codes for contact list and contact row

