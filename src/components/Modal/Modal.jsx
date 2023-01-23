import "./styles.scss";

const Modal = ({
  active,
  setActive,
  children,
  header,
  modificationVisit,
  modificationTittle,
}) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="content-header">
          <h1>{header}</h1>
        </div>
        <div className="content-body">
          <div>{children}</div>
        </div>
        <div className="content-footer">
          <button
            className="content-footer__button"
            onClick={() => setActive(false)}
          >
            Отмена
          </button>
          <button
            className="content-footer__button-delete"
            onClick={modificationVisit}
          >
            {modificationTittle}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;