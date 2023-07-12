import { useState, useEffect } from 'react';
import ContactRow from './ContactRow';

export default function ContactList() {
    const dummyContacts = [
        { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
        { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
        { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
      ];    

const [contacts, setContacts] = useState(dummyContacts)

/* const resetContacts = () => {
    setContacts([])
}; */

useEffect(() => {
    async function fetchContacts() {
        try {
            const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
            const data = await response.json();
            console.log('API Response:', data); 
            setContacts(data)
            } catch (error) {
            console.log(error);
            }
        }
        fetchContacts();
        }, []);

console.log("Contacts: ", contacts)

/* resetContacts(); // Calls the resetContacts function */
     
return (
    <div>
            <table>
                <caption></caption>
                <thead>
                    <tr>
                        <th colspan="3" scope="col">Contact List</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email Address</th>
                        <th scope="col">Phone Number</th>
                    </tr>
                    { /* // Map over data here */ }
                    {contacts.map((contact) => {
                        return <ContactRow key={contact.id} contact={contact} />;
                    })}
                </tbody>
            </table>
    </div>
    )
}