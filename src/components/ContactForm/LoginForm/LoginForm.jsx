import { useId } from "react";

export const LoginForm = ({ onLogin }) => {
  const loginId = useId();
  const passwordId = useId();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const { login, password } = form.elements;

    //Означає буквально:
    //const login = form.elements.login;
    //const password = form.elements.password;

    // Посилання на DOM-елементи
    console.log(login, password);

    // Значення полів
    console.log(login.value, password.value);

    // Викликаємо пропс onLogin
    onLogin({
      login: login.value,
      password: password.value,
    });

    // Скидаємо значення полів після відправки
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={loginId}>Login</label>
      <input type="text" name="login" />
      <label htmlFor={passwordId}>Password</label>
      <input type="password" name="password" />
      <button type="submit">Log in</button>
    </form>
  );
};
