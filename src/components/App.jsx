//App.jsx

import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import ContactForm from "./ContactForm/ContactForm";
import userContacts from "./contacts.json";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/Searchbox";

const App = () => {
  const [contacts, setContacts] = useState(userContacts);
  const [search, setSearch] = useState("");

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={filterContacts} />
    </div>
  );
};
export default App;
