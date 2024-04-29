import React, { useState } from "react";
import { account } from "../config/appwrite";

const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const signupFunc = async () => {
    // APPWRITE CONFIGURATION
  };

  return (
    <div className="w-[30%] h-[40%] border border-black rounded-md mx-auto mt-[10%] ">
      <div className="flex flex-wrap justify-center">
        <h2 className="w-full my-4 flex flex-wrap justify-center font-mono">Signup</h2>
        <input
          type="text"
          className="w-[80%] outline-none border border-black rounded-sm px-1 my-2"
          placeholder="Name"
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <input
          type="email"
          className="w-[80%] outline-none border border-black rounded-sm px-1 my-2"
          placeholder="Email"
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <input
          type="text"
          className="w-[80%] outline-none border border-black rounded-sm px-1 my-2"
          placeholder="Password"
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <div className="w-[80%] flex flex-wrap justify-center"><button className="w-[25%] py-1 bg-black text-white rounded-md" onClick={signupFunc}>Signup</button></div>
      </div>
    </div>
  );
};

export default Signup;
