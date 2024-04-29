import React, { useState } from "react";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const loginFunc = async () => {
    // APPWRITE CONFIGURATION
  };

  return (
    <>
      <div className="h-[40%] w-[30%] border border-black rounded-md py-2 mx-auto mt-[10%]">
        <div className="flex flex-wrap justify-center">
          <h2 className="w-full flex flex-wrap justify-center my-4 font-mono">Login</h2>
          <input
            className="w-[80%] outline-none border border-black rounded-sm px-2 my-2"
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <input
            className="w-[80%] outline-none border border-black rounded-sm px-2 my-2"
            type="text"
            placeholder="Password"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
          <div className="w-[80%] flex flex-wrap justify-center">
            <button onClick={loginFunc} className="w-[30%] rounded-md bg-black text-white mt-4 py-1">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
