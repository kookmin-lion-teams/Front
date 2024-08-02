import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./components/Signin";
import Signup from "./components/Signup";
import Detail from "./components/Detail";
import PaymentSuccess from "./components/PaymentSuccess";
import PaymentFail from "./components/PaymentFail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/detail/:key" element={<Detail />} />
        <Route path="/success" element={<PaymentSuccess />} />
        <Route path="/fail" element={<PaymentFail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
