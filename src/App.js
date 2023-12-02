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
import ProfileSettingsForm from "./components/ProfileSettingsForm";
import MyPetsPage from "./pages/MyPetsPage";
import PetPage from "./pages/PetPage";
import SearchPage from "./pages/SearchPage";
import Dashboard from "./pages/admin/Dashboard";
import AdminPage from "./pages/admin/AdminPage";
import ShowAllUsersContext from "./context/ShowAllUsersContext";
import AllUsers from "./components/AllUsers";
import AddPetModal from "./components/modals/AddPetModal";
import PetDetailsContext from "./context/PetDetailsContext";
import AdoptedPetsContext from "./context/AdoptedPetsContext";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showAllUsers, setShowAllUsers] = useState(false);
  const [petDetails, setPetDetails] = useState({});
  const [adoptedPets, setAdoptedPets] = useState([]);
  return (
    <ShowLoginContext.Provider value={{ showLogin, setShowLogin }}>
      <FirstNameContext.Provider value={{ firstname, setFirstname }}>
        <LastNameContext.Provider value={{ lastname, setLastname }}>
          <LoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            <ShowAllUsersContext.Provider
              value={{ showAllUsers, setShowAllUsers }}
            >
              <PetDetailsContext.Provider value={{ petDetails, setPetDetails }}>
                <AdoptedPetsContext.Provider
                  value={{ adoptedPets, setAdoptedPets }}
                >
                  <BrowserRouter>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/LoggedInPage" element={<LoggedInPage />} />
                      <Route
                        path="/ProfileSettingsForm"
                        element={<ProfileSettingsForm />}
                      />
                      <Route path="/MyPetsPage" element={<MyPetsPage />} />
                      <Route path="/PetPage" element={<PetPage />} />
                      <Route path="/SearchPage" element={<SearchPage />} />
                      <Route path="/AdminPage" element={<AdminPage />} />
                      <Route path="/AllUsers" element={<AllUsers />} />
                      <Route path="/AddPetModal" element={<AddPetModal />} />
                    </Routes>
                  </BrowserRouter>
                </AdoptedPetsContext.Provider>
              </PetDetailsContext.Provider>
            </ShowAllUsersContext.Provider>
          </LoggedInContext.Provider>
        </LastNameContext.Provider>
      </FirstNameContext.Provider>
    </ShowLoginContext.Provider>
  );
}

export default App;
