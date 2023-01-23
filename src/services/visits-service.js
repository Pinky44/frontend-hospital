import api from "src/http/index";

const getAllVisitsService = async () => {
  const response = await api.get("/visits");
  
  return response;
};

const addVisitService = async (name, doctor, date, complaints) => {
  const response = await api.post("/visits", {
    name,
    doctor,
    date,
    complaints
  });

  return response;
};

const deleteVisitService = async (id) => {
  const response = await api.delete(`/visits/delete/${id}`);
  return response;
};

const editVisitService = async (id, name, doctor, date, complaints) => {
  const response = await api.patch(`/visits/update/${id}`, {
    name,
    doctor,
    date,
    complaints
  });

  return response;
};

export {  
  getAllVisitsService, 
  addVisitService,
  deleteVisitService,
  editVisitService,
};