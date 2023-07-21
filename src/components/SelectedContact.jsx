import { useState } from "react"
import ContactList from "./contactlist"

export default function SelectedContact() {
   const [selectedContactId, setSelectedContactId]=useState(ContactList)
  return (
 <tr>
  <td>
    {contact.name}
    {contact.email}
    {contact.phone}
  </td>
 </tr>
  )
};