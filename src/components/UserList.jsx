import ContactCard from "./ContactCard";

function UserList({ contacts }) {
  return (
    <div>
      <h2 className="contact-list-title">Contact List</h2>

      {contacts.length === 0 ? (
        <p>No contacts available.</p>
      ) : (
        contacts.map((contact, index) => (
          <ContactCard key={index} contact={contact} />
        ))
      )}
    </div>
  );
}

export default UserList;
