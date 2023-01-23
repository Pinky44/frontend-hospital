import patch from "src/img/patch.png";
import "./styles.scss";

const Header = ({ header, children }) => {
  return (
    <div className="header">
      <img className="header__img" src={patch} alt="patch" />
      <h1 className="header__text">{header}</h1>
      <div>{children}</div>
    </div>
  );
};

export default Header;
