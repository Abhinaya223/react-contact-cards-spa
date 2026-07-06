import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import UserList from "./components/UserList";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div className="App">
      <h1>React Contact Cards SPA</h1>
      <ContactForm addContact={addContact} />
      <UserList contacts={contacts} />
    </div>
  );
}

export default App;