import { useState } from "react";
import Modal from "src/components/Modal/Modal";
import { doctors } from "src/constants";
import { convertDateInput } from "src/helpers/format-date";
import "./styles.scss";

const ModalEdit = ({ active, setActive, editVisit, curentVisit }) => {
  const [newEdit, setNewEdit] = useState({
    name: curentVisit.name,
    doctor: curentVisit.doctor,
    date: convertDateInput(curentVisit.date),
    complaints: curentVisit.complaints,
  });

  const handleChange = (key, value) => {
    setNewEdit({ ...newEdit, [key]: value });
  };

  return (
    <Modal
      header="Изменить прием"
      active={active}
      setActive={setActive}
      modificationVisit={() => editVisit(curentVisit._id, newEdit)}
      modificationTittle="Сохранить"
      newEdit={newEdit}
    >
      <div className="modal-body">
        <div>
          <label className="modal-body__name" htmlFor="modalName">
            Имя:
          </label>
          <input
            value={newEdit.name}
            className="modal-body__input"
            id="modalName"
            type="text"
            onChange={(e) => handleChange("name", e.target.value)}
          ></input>
        </div>
        <div>
          <label className="modal-body__name" htmlFor="modalDoctors">
            Врач:
          </label>
          <select
            value={newEdit.doctor}
            className="modal-body__input"
            id="modalDoctors"
            type="text"
            onChange={(e) => handleChange("doctor", e.target.value)}
          >
            {doctors.map((elem) => (
              <option key={elem.id}>{elem.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="modal-body__name" htmlFor="modalDate">
            Дата:
          </label>
          <input
            value={newEdit.date}
            className="modal-body__input"
            id="modalDate"
            type="date"
            onChange={(e) => handleChange("date", e.target.value)}
          />
        </div>
        <div>
          <label className="modal-body__name" htmlFor="modalComplaints">
            Жалобы:
          </label>
          <input
            value={newEdit.complaints}
            className="modal-body__complaints"
            id="modalComplaints"
            type="text"
            onChange={(e) => handleChange("complaints", e.target.value)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ModalEdit;
