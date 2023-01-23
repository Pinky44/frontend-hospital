import { useState } from "react";
import { doctors } from "src/constants";
import "./styles.scss";

const Visit = ({ addVisit }) => {
  const [visit, setVisit] = useState({
    name: "",
    doctor: "",
    date: "",
    complaints: "",
  });

  const handleChange = (key, value) => {
    setVisit({ ...visit, [key]: value });
  };

  const addNewVisit = async () => {
    const newVisit = await addVisit(visit);

    if (newVisit) {
      setVisit({
        name: "",
        doctor: "",
        date: "",
        complaints: "",
      });
    }
  };

  return (
    <div className="visit">
      <div className="visit-block">
        <label 
          htmlFor="name" 
          className="visit__title"
        >
          Имя:
        </label>
        <input
          id="name"
          className="visit__input"
          value={visit.name}
          type="text"
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </div>
      <div className="visit-block">
        <label
          htmlFor="doctor" 
          className="visit__title"
        >
          Врач:
        </label>
        <select
          id="doctor"
          value={visit.doctor}
          className="visit__select"
          onChange={(e) => handleChange("doctor", e.target.value)}
        >
          {doctors.map((doctor) => (
            <option key={doctor.id}>{doctor.name}</option>
          ))}
        </select>
      </div>
      <div className="visit-block">
        <label 
          htmlFor="date" 
          className="visit__title"
        >
          Дата:
        </label>
        <input
          id="date"
          value={visit.date}
          type="date"
          className="visit__input"
          onChange={(e) => handleChange("date", e.target.value)}
        />
      </div>
      <div className="visit-block">
        <label 
          htmlFor="complaints" 
          className="visit__title"
        >
          Жалобы:
        </label>
        <input
          id="complaints"
          className="visit__input"
          value={visit.complaints}
          type="text"
          onChange={(e) => handleChange("complaints", e.target.value)}
        />
      </div>
      <div className="visit-block">
        <button
          type="button"
          className="visit__button" 
          onClick={addNewVisit}
        >
          Добавить
        </button>
      </div>
    </div>
  );
};

export default Visit;
