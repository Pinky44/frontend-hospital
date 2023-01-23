import axios from "axios";
import {
  registrationService,
  loginService,
  logoutService,
} from "src/services/users-service";
import {
  getAllVisitsService,
  addVisitService,
  deleteVisitService,
  editVisitService,
} from "src/services/visits-service";
import { url } from "src/constants";

export default class Store {
  user = null;
  isAuth = false;
  events = [];

  setAuth(boolean) {
    this.isAuth = boolean;
    this.publish(this.isAuth);
  }

  setUser(object) {
    this.user = object;
  }

  subsribe = (listener) => {
    if (!this.events) {
      this.events = [];
    }

    this.events.push(listener);
  };

  publish = (data) => {
    const events = this.events;

    if (!events || !events.length) {
      return;
    }

    events.forEach((listener) => listener(data));
  };

  async logIn(login, password) {
    try {
      const res = await loginService(login, password);

      localStorage.setItem("token", res.data.accessToken);
      this.setAuth(true);
      this.setUser(res.data.user);
    } catch (error) {
      return error.response?.data?.message;
    }
  }

  async registration(login, password) {
    try {
      const res = await registrationService(login, password);

      localStorage.setItem("token", res.data.accessToken);
      this.setAuth(true);
      this.setUser(res.data.user);
    } catch (error) {
      return error.response?.data?.message;
    }
  }

  async logout() {
    try {
      const res = await logoutService();

      localStorage.removeItem("token");
      this.setAuth(false);
      this.setUser(null);
    } catch (error) {
      return error.response?.data?.message;
    }
  }

  async checkAuth() {
    if (localStorage.getItem("token")) {
      try {
        const res = await axios.get(`${url}/users/refresh`, {
          withCredentials: true,
        });

        localStorage.setItem("token", res.data.accessToken);
        this.setAuth(true);
        this.setUser(res.data.user);
      } catch (error) {
        return error.response?.data?.message;
      }
    } else {
      this.setAuth(false);
      this.setUser(null);
    }
  }

  async getAllVisits() {
    try {
      const res = await getAllVisitsService();

      return res;
    } catch (error) {
      return error.response?.data?.message;
    }
  }

  async addVisit(name, doctor, date, complaints) {
    try {
      const res = await addVisitService(name, doctor, date, complaints);

      return res;
    } catch (error) {
      return error.response?.data?.message;
    }
  }

  async deleteVisitById(id) {
    try {
      const res = await deleteVisitService(id);
  
      return res;
    } catch (error) {
      return error.response?.data?.message;
    }
  }
  
  async editVisitById(id, name, doctor, date, complaints) {
    try {
      const res = await editVisitService(
        id,
        name,
        doctor,
        date,
        complaints
      );
      
      return res;
    } catch (error) {
      console.log(error);
      return error.response?.data?.message;
    }
  }
}
