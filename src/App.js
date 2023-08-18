//css
import "./Reset.css";
import "./App.css";
//component
import Header from "./Component/Header";
import Main from "./Component/Main";
import productData from "./Component/productData";
import Login from "./Component/Login";
import Footer from "./Component/Footer";
//library
import {
  Route,
  Routes,
  Link,
  useLocation,
  useNavigate,
  Outlet,
} from "react-router-dom";
import { useState } from "react";
import Superblends from "./Component/Superblends";

//총 3개의 페이지가 존재. Main, Superblends, Login
// Superblends와 Login은 Header에 color:red로 처리되어있으므로 확인하여 클릭시 페이지가 이동한다.

function App() {
  let [data] = useState(productData);
  let urlName = useLocation().pathname;
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main data={data} />}></Route>
        <Route
          path="/Superblends"
          element={<Superblends data={data} />}
        ></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
      {/* 푸터 영역 */}
      <Footer className="footer" />
    </div>
  );
}

export default App;
