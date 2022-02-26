import "./App.css";
import { Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import LandingPage from "./Pages/LandingPage";
import Home from "./Pages/Home";
import Protected from "./Components/Protected";
import Navigator from "./Components/Navbar";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Navigator />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/home"
            element={
              <Protected>
                <Home />
              </Protected>
            }
          />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
