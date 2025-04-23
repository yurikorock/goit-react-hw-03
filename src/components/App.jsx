//App.jsx

import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import ContactForm from "./ContactForm/ContactForm";
import userContacts from "./contacts.json";
import ContactList from "./ContactList/ContactList";

const App = () => {
  const [contacts, setcontacts] = useState([]);
  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}
      {/* <SearchBox /> */}
      <ContactList contacts={userContacts} />
    </div>
  );
};
export default App;
