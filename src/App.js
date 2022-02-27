import "./App.css";
import { Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import LandingPage from "./Pages/LandingPage";
import Home from "./Pages/Home";
import Course from "./Pages/Course";
import AddCourse from "./Pages/AddCourse";
import CreateCourse from "./Pages/CreateCourse";
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
          <Route
            path="/course"
            element={
              <Protected>
                <Course />
              </Protected>
            }
          />
          <Route
            path="/addcourse"
            element={
              <Protected>
                <AddCourse />
              </Protected>
            }
          />
          <Route
            path="/create"
            element={
              <Protected>
                <CreateCourse />
              </Protected>
            }
          />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
