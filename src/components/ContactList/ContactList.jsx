import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";

export default function ContactList({ contacts }) {
  return (
    <ul className={style.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact name={name} number={number} />
        </li>
      ))}
    </ul>
  );
}
