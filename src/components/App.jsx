//App.jsx

import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { LoginForm } from "./ContactForm/LoginForm/LoginForm";

const App = () => {
  // Колбек-функція для обробки сабміту форми
  const handleLogin = (userData) => {
    // Виконуємо необхідні операції з даними
    console.log(userData);
  };
  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm />
      <SearchBox />
      <ContactList /> */}
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};
export default App;
