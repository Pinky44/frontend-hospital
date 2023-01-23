import { useContext, useState, useEffect } from "react";
import { Context } from "src";
import Header from "src/components/Header/Header";
import Visit from "src/components/Visit/Visit";
import VisitTable from "src/components/VisitTable/VisitTable";
import ModalDelete from "src/components/ModalDelete/ModalDelete";
import ModalEdit from "../ModalEdit/ModalEdit";
import Snackbar from "src/components/Snackbars/Snackbar";
import {
  checkLengthString,
  checkEmptinessString,
} from "src/helpers/validation";
import "./styles.scss";

const Home = () => {
  const store = useContext(Context);
  const [visits, setVisits] = useState([]);
  const [error, setError] = useState("");
  const [openError, setOpenError] = useState(false);
  const [modalActiveDelete, setModalActiveDelete] = useState(false);
  const [modalActiveEdit, setModalActiveEdit] = useState(false);
  const [elemId, setElemId] = useState("");
  const [curentVisit, setCurentVisit] = useState("");

  const exitFromAccount = async () => {
    const messageError = await store.logout();

    if (messageError) {
      setError("Ошибка выхода");
      setOpenError(true);
    }
  };

  useEffect(() => {
    getAllVisits();
  }, []);

  const getAllVisits = async () => {
    const response = await store.getAllVisits();
    setVisits(response.data);
  };

  const addVisit = async (visit) => {
    const { name, doctor, date, complaints } = visit;

    if (!checkLengthString(name, 3)) {
      setError("Длина имени должна быть длинее 3 символов");
      setOpenError(true);

      return;
    }

    if (!checkEmptinessString(doctor)) {
      setError("Поле доктор должен быть заполнен");
      setOpenError(true);

      return;
    }

    if (!checkEmptinessString(date)) {
      setError("Поле дата должна быть заполнена");
      setOpenError(true);

      return;
    }

    if (!checkLengthString(complaints, 6)) {
      setError("Длина жалобы должна быть длинее 6 символов");
      setOpenError(true);

      return;
    }

    const response = await store.addVisit(name, doctor, date, complaints);

    if (!response.data) {
      setError("Ошибка добавления");
      setOpenError(true);

      return;
    }

    setVisits([...visits, response.data]);

    return response.data;
  };

  const openModelDelete = (bool, id) => {
    setModalActiveDelete(bool);
    setElemId(id);
  };

  const deleteVisit = async () => {
    const response = await store.deleteVisitById(elemId);

    if (response.data.deletedCount === 1) {
      const filterRecord = visits.filter((item) => elemId !== item._id);
      setVisits(filterRecord);
      setModalActiveDelete(false);
    }
  };

  const openModelEdit = (bool, visit, id) => {
    setModalActiveEdit(bool);
    setCurentVisit(visit);
    setElemId(id);
  };

  const editVisit = async (id, newEdit) => {
    const { name, doctor, date, complaints } = newEdit;

    if (!checkLengthString(name, 2)) {
      setError("Длина имени должна быть длинее 3 символов");
      setOpenError(true);

      return;
    }

    if (!checkEmptinessString(doctor)) {
      setError("Поле доктор должен быть заполнен");
      setOpenError(true);

      return;
    }

    if (!checkEmptinessString(date)) {
      setError("Поле дата должна быть заполнена");
      setOpenError(true);

      return;
    }

    if (!checkLengthString(complaints, 5)) {
      setError("Длина жалобы должна быть длинее 6 символов");
      setOpenError(true);

      return;
    }

    const response = await store.editVisitById(
      id,
      name,
      doctor,
      date,
      complaints
    );

    const newArray = visits.map((elem) => {
      if (response.data._id === elem._id) {
        elem = response.data;
      }

      return elem;
    });

    setVisits(newArray);
    setModalActiveEdit(false);
  };

  return (
    <div className="content-home">
      <Header header="Приемы">
        <button
          className="header__button-exit"
          type="button"
          onClick={exitFromAccount}
        >
          Выход
        </button>
      </Header>
      <Visit addVisit={addVisit} />
      <VisitTable
        visits={visits}
        openModelDelete={openModelDelete}
        openModelEdit={openModelEdit}
      />
      {modalActiveDelete && (
        <ModalDelete
          active={modalActiveDelete}
          setActive={setModalActiveDelete}
          deleteVisit={deleteVisit}
        />
      )}
      {modalActiveEdit && (
        <ModalEdit
          active={modalActiveEdit}
          setActive={setModalActiveEdit}
          editVisit={editVisit}
          curentVisit={curentVisit}
        />
      )}
      <Snackbar
        error={error}
        openError={openError}
        setOpenError={setOpenError}
      />
    </div>
  );
};

export default Home;
