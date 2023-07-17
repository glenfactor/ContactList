import React, { useState, useEffect } from 'react';

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    if (selectedContactId !== null) {
      const fetchSelectedContact = async () => {
        try {
          const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
          const data = await response.json();
          setContact(data);
        } catch (error) {
          console.log(error);
        }
      };

      fetchSelectedContact();
    } else {
      setContact(null);
    }
  }, [selectedContactId]);

  console.log("Selected Contact Data:", contact);

  const handleGoBack = () => {
    setSelectedContactId(null);
  };

  if (!contact) {
    return <div>No contact selected.</div>;
  }

  return (
    <div className="selected-contact">
      <table>
        <thead>
          <tr>
            <th colSpan="2">Contact Information</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span className="label">Name:</span></td>
            <td>{contact.name}</td>
          </tr>
          <tr>
            <td><span className="label">Email:</span></td>
            <td>{contact.email}</td>
          </tr>
          <tr>
            <td><span className="label">Phone:</span></td>
            <td>{contact.phone}</td>
          </tr>
          <tr>
            <td><span className="label">Address:</span></td>
            <td>{contact.address.street} {contact.address.suite} {contact.address.city} {contact.address.zipcode}</td>
          </tr>
          <tr>
            <td><span className="label">Company:</span></td>
            <td>{contact.company.name}</td>
          </tr>
          <tr>
            <td><span className="label">Website:</span></td>
            <td>{contact.website}</td>
          </tr>
        </tbody>
      </table>
      <br/>   
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
  
  
}
