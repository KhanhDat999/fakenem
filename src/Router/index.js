import Home from "../layouts/Home/Home";
import Sanpham from "../layouts/Sanpham/Sanpham";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Defautlayout from '../components/defaulayout/defaulayout'
import Login from "../layouts/Login/Login";
import Chitiet from "../layouts/Chitietsanpham/Chitietsanpham";
import Giohang from "../layouts/Giohang/Giohang";



function Router() {
  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tat-ca-san-pham" element={<Sanpham />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chi-tiet-san-pham" element={<Chitiet />} />
          <Route path="/giohang" element={<Giohang />} />
        </Routes>
   
  );
}

export default Router;