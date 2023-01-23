import { useContext, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Context } from "src";
import LoginForm from "src/components/LoginForm/LoginForm";
import RegistrationForm from "src/components/RegistrationForm/RegistrationForm";
import Home from "src/components/Home/Home";

const App = () => {
  const store = useContext(Context);
  const [loggedIn, setLoggedIn] = useState(store.isAuth);

  useEffect(() => {
    store.subsribe(isAuthentication => setLoggedIn(isAuthentication));
    store.checkAuth();
  }, [store]);
  
  return loggedIn ? (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/registration" element={<RegistrationForm />} />
      <Route path="/authorization" element={<LoginForm />} />
      <Route path="*" element={<Navigate to="/registration" replace />} />
    </Routes>
  );
};

export default App;
