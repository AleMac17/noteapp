import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import LoginImg from "../../assets/login-img.png";

export const Login = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin();
      // try {
      //   const response = await fetch(
      //     'http://localhost:3000/api/authenticate',
      //     {
      //       method: 'POST',
      //       headers: {
      //         'Content-Type': 'application/json',
      //       },
      //       body: JSON.stringify({ email: email, password: password }),
      //     }
      //   );

      //   if (response.ok) {
      //
      //   } else {
      //     const errorData = await response.json();
      //     console.error('Error en la autenticación:', errorData);
      //   }
      // } catch (error) {
      //   console.error('Error al realizar la solicitud:', error);
      // }
    }
  };
  return (
    <div className="bg-white flex items-center justify-evenly h-[100vh]">
      <img src={LoginImg} alt="Logo" />
      <form onSubmit={handleSubmit} className="flex flex-col">
        <h3 className="text-primary text-3xl  font-extrabold">Log In</h3>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-xl text-primary">Email</span>
          </div>
          <input
            type="email"
            placeholder="Type here"
            className="input input-bordered  w-96 max-w-lg text-accent"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-xl text-primary">Password</span>
          </div>
          <div className="flex items-center gap-2">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Type here"
              className="input input-bordered max-w-lg  w-96 text-accent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <FaEye
                className="text-xl text-accent"
                onClick={handlePasswordVisibility}
              />
            ) : (
              <FaEyeSlash
                className="text-xl text-accent"
                onClick={handlePasswordVisibility}
              />
            )}
          </div>
        </label>
        <button
          type="submit"
          className="btn text-white text-2xl h-auto  font-bold bg-accent self-center mt-10 w-48"
        >
          Log In
        </button>
      </form>
    </div>
  );
};
