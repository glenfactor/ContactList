import { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import SelectedContact from './components/SelectedContact';

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [contacts] = useState(dummyContacts);

  return (
    <>
      {selectedContactId ? (
        <SelectedContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      ) : (
        <ContactList
          contacts={contacts}
          setSelectedContactId={setSelectedContactId}
        />
      )}
      {/* <h1>FSA Contact List Project</h1> */}
      <p className="read-the-docs">
        Project Collaboration: Marsha King & Glen Factor
      </p>
    </>
  );
}

export default App;
