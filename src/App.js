import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowLoginContext from "./context/ShowLoginContext";
import { useState } from "react";
import FirstNameContext from "./context/FirstNameContext";
import LastNameContext from "./context/LastNameContext";
import LoggedInContext from "./context/LoggedInContext";
import LoggedInPage from "./pages/LoggedInPage";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <ShowLoginContext.Provider value={{ showLogin, setShowLogin }}>
      <FirstNameContext.Provider value={{ firstname, setFirstname }}>
        <LastNameContext.Provider value={{ lastname, setLastname }}>
          <LoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/LoggedInPage" element={<LoggedInPage />} />
              </Routes>
            </BrowserRouter>
          </LoggedInContext.Provider>
        </LastNameContext.Provider>
      </FirstNameContext.Provider>
    </ShowLoginContext.Provider>
  );
}

export default App;
