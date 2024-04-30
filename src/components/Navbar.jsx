import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";

function Navbar() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-wrap justify-between bg-black h-[8%] text-white pt-2">
          <div className="pl-5 text-lg">Basic Auth</div>
          <div className="flex flex-wrap">
            <ul className="flex flex-wrap">
              <li className="mx-3">
                <Link className="focus:text-blue-500" to="/">Home</Link>
              </li>
              <li className="mx-3">
                <Link className="focus:text-blue-500" to="/login">Login</Link>
              </li>
              <li className="mx-3">
                <Link className="focus:text-blue-500" to="/signup">SignUp</Link>
              </li>
            </ul>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Navbar;
