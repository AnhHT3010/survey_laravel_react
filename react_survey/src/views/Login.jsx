/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import imgLogo from "../assets/img/Logo_update.png";
import { useUserStateContext } from "../contexts/ContextProvider";
import { useState } from "react";
import axiosClient from "../axios";

function Login() {
  const { setCurrentUser, setUserCurrentToken } = useUserStateContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (ev) => {
    ev.preventDefault();
    axiosClient
      .post("/login", {
        email,
        password,
      })
      .then(({ data }) => {
        console.log(data);
        setCurrentUser(data.user);
        setUserCurrentToken(data.token);
      })
      .catch((error) => {
        if (error.response) {
          setError(error.response.data.errors);
        }
      });
  };
  return (
    <div className="max-h-screen overflow-y-auto flex max-w-md bg-slate-50 flex-col justify-center items-center px-6 py-12 lg:px-8 shadow-md rounded-md mx-auto mt-10">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-12">
        <img className="mx-auto h-24 w-auto" src={imgLogo} alt="Your Company" />
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Login to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={onSubmit}
          className="space-y-6"
          action="#"
          method="POST"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
              <span className="text-red-500 text-xs font-bold">
                {error.email && `(*) ${error.email}`}
              </span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
              {error.password &&
                error.password.map((err, index) => (
                  <ul key={index}>
                    <li className="text-red-500 text-xs font-bold">
                      (*) {err}
                    </li>
                  </ul>
                ))}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <NavLink
            to="/signup"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            SignUp
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Login;
