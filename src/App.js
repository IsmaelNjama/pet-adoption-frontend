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
import NavBar from "./components/Navbar";
import OwnedPetsContext from "./context/OwnedPetsContext";
import OwnedPetPage from "./pages/OwnedPetPage";
import UserProfileContext from "./context/UserProfileContext";
import UploadImageContext from "./context/UploadImageContext";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showAllUsers, setShowAllUsers] = useState(false);
  const [petDetails, setPetDetails] = useState({});
  const [adoptedPets, setAdoptedPets] = useState([]);
  const [ownedPetsList, setOwnedPetsList] = useState([]);
  const [profileDetails, setProfileDetails] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [userId, setUserId] = useState(localStorage.getItem("USER_ID"));
  return (
    <ShowLoginContext.Provider value={{ showLogin, setShowLogin }}>
      <FirstNameContext.Provider value={{ firstname, setFirstname }}>
        <LastNameContext.Provider value={{ lastname, setLastname }}>
          <LoggedInContext.Provider
            value={{ isLoggedIn, setIsLoggedIn, userId, setUserId }}
          >
            <ShowAllUsersContext.Provider
              value={{ showAllUsers, setShowAllUsers }}
            >
              <PetDetailsContext.Provider value={{ petDetails, setPetDetails }}>
                <AdoptedPetsContext.Provider
                  value={{ adoptedPets, setAdoptedPets }}
                >
                  <OwnedPetsContext.Provider
                    value={{ ownedPetsList, setOwnedPetsList }}
                  >
                    <UserProfileContext.Provider
                      value={{ profileDetails, setProfileDetails }}
                    >
                      <UploadImageContext.Provider
                        value={{ imageUrl, setImageUrl }}
                      >
                        <BrowserRouter>
                          <NavBar />
                          <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route
                              path="/LoggedInPage"
                              element={<LoggedInPage />}
                            />
                            <Route
                              path="/ProfileSettingsForm"
                              element={<ProfileSettingsForm />}
                            />
                            <Route
                              path="/MyPetsPage"
                              element={<MyPetsPage />}
                            />
                            <Route path="/PetPage" element={<PetPage />} />
                            <Route
                              path="/SearchPage"
                              element={<SearchPage />}
                            />
                            <Route path="/AdminPage" element={<AdminPage />} />
                            <Route path="/AllUsers" element={<AllUsers />} />
                            <Route
                              path="/AddPetModal"
                              element={<AddPetModal />}
                            />
                            <Route
                              path="/OwnedPetPage"
                              element={<OwnedPetPage />}
                            />
                          </Routes>
                        </BrowserRouter>
                      </UploadImageContext.Provider>
                    </UserProfileContext.Provider>
                  </OwnedPetsContext.Provider>
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
