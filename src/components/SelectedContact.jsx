export default function SelectedContact({ contact }) {
    return (
      <tr>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
  }

  {contacts.map((contact) => {
    return <SelectedContact key={contact.id} contact={contact} />;
  })}