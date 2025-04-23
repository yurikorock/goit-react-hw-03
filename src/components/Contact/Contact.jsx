import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import style from "./Contact.module.css";

export default function Contact({ name, number }) {
  return (
    <div className={style.contactCard}>
      <div className={style.infogroup}>
        <div className={style.info}>
          <FaUser className={style.icon} />
          <p>{name}</p>
        </div>
        <div className={style.info}>
          <FaPhone className={style.icon} />
          <p>{number}</p>
        </div>
      </div>

      <button>Delete</button>
    </div>
  );
}
