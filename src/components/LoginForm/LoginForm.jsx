import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "src";
import Header from "src/components/Header/Header";
import Snackbar from "src/components/Snackbars/Snackbar";
import { checkEmptinessString } from "src/helpers/validation";
import hospital from "src/img/hospital.png";
import "./styles.scss";

const LoginForm = () => {
  const store = useContext(Context);
  const [error, setError] = useState("");
  const [openError, setOpenError] = useState(false);
  const [user, setUser] = useState({
    loginInput: "",
    passwordInput: "",
  });

  const showError = (error) => {
    setError(error);
    setOpenError(true);
  };

  const handleChange = (key, value) => {
    setUser({ ...user, [key]: value });
  };

  const logIn = async () => {
    const { login, password } = user;

    if (!checkEmptinessString(login)) {
      showError("Логин не должен быть пустым");

      return;
    }

    if (!checkEmptinessString(password)) {
      showError("Пароль не должен быть пустым");

      return;
    }

    const error = await store.logIn(login, password);

    if (error) {
      showError(error);

      return;
    }
  };

  return (
    <div className="login-form">
      <Header header="Войти в систему" />
      <img className="login-form__img" src={hospital} alt="hospital" />
      <div className="login-form-block">
        <h1 className="login-form-block__text">Войти в систему</h1>
        <label 
          htmlFor="login" 
          className="login-form-block__title"
        >
          Логин:
        </label>
        <input
          id="login"
          className="login-form-block__input"
          type="text"
          onChange={(e) => handleChange("login", e.target.value)}
        />
        <label 
          htmlFor="password" 
          className="login-form-block__title"
        >
          Пароль:
        </label>
        <input
          id="password"
          className="login-form-block__input"
          type="password"
          onChange={(e) => handleChange("password", e.target.value)}
        />
        <button
          className="login-form-block__button"
          type="button"
          onClick={logIn}
        >
          Войти
        </button>
        <Link to="/registration" className="login-form-block__link">
          Зарегистрироваться
        </Link>
      </div>
      <Snackbar
        error={error}
        openError={openError}
        setOpenError={setOpenError}
      />
    </div>
  );
};

export default LoginForm;
