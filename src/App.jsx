import "./App.css";
import React from 'react';
import ContactList from './components/ContactList';



export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  ContactList (setSelectedContactId={setSelectedContactId} )
ContactList = (props) => {
    return <div className= {props.contact}></div>
  }
    <ContactList>
      <tr>
        <td>
          {Contact.name}
          {Contact.email}
          {contact.phone}
        </td>
        </tr>
    </ContactList>

  
}
 
// create a second component folder with files contact list and contact row
//Create two component codes for contact list and contact row

