import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "src";
import Header from "src/components/Header/Header";
import Snackbar from "src/components/Snackbars/Snackbar";
import {
  checkLengthString,
  checkRegularExpressionInString,
  checkSimilarityString,
} from "src/helpers/validation";
import hospital from "src/img/hospital.png";
import "./styles.scss";

const RegistrationForm = () => {
  const store = useContext(Context);
  const [error, setError] = useState("");
  const [openError, setOpenError] = useState(false);
  const [user, setUser] = useState({
    login: "",
    password: "",
    repeatedPassword: "",
  });

  const handleChange = (key, value) => {
    setUser({ ...user, [key]: value });
  };

  const showError = (error) => {
    setError(error);
    setOpenError(true);
  };

  const registration = async () => {
    const { login, password, repeatedPassword } = user;

    if (!checkLengthString(login, 6)) {
      showError("Логин должен быть длинее 6 символов");

      return;
    }

    if (!checkRegularExpressionInString(password)) {
      showError(
        "Длина пароля не меньше 6 символов и обязательно латинские символы обязательно должен содержать 1 число"
      );

      return;
    }

    if (!checkSimilarityString(password, repeatedPassword)) {
      showError("Пароли разные");

      return;
    }

    const error = await store.registration(login, password);

    if (error) {
      showError(error);

      return;
    }
  };

  return (
    <div className="registration">
      <Header header="Зарегистрироваться в системе" />
      <img className="registration__img" src={hospital} alt="hospital" />
      <div className="registration-block">
        <h1 className="registration-block__text">Регистрация</h1>
        <label 
          htmlFor="login" 
          className="registration-block__login"
        >
          Логин:
        </label>
        <input
          id="login"
          className="registration-block__input"
          type="text"
          onChange={(e) => handleChange("login", e.target.value)}
        />
        <label 
          htmlFor="password" 
          className="registration-block__password"
        >
          Пароль:
        </label>
        <input
          id="password"
          className="registration-block__input"
          type="password"
          onChange={(e) => handleChange("password", e.target.value)}
        />
        <label
          htmlFor="repeatedPassword"
          className="registration-block__password"
        >
          Повторите пароль:
        </label>
        <input
          id="repeatedPassword"
          className="registration-block__input"
          type="password"
          onChange={(e) => handleChange("repeatedPassword", e.target.value)}
        />
        <button
          className="registration-block__button"
          type="button"
          onClick={registration}
        >
          Зарегистрироваться
        </button>
        <Link to="/authorization" className="registration-block__link">
          Авторизоваться
        </Link>
        <Snackbar
          error={error}
          openError={openError}
          setOpenError={setOpenError}
        />
      </div>
    </div>
  );
};

export default RegistrationForm;
