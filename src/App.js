import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./components/Signin";
import Signup from "./components/Signup";
import Partner from "./components/Partner";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/partner/:pid" element={<Partner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
