/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import  imgLogo  from "../assets/img/Logo_update.png"
import axiosClient from "../axios";
import { useState } from "react";
import { useUserStateContext } from "../contexts/ContextProvider";
function Signup() {
  const { setCurrentUser, setUserCurrentToken } = useUserStateContext();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');

  const onSubmit = (ev) => {
    ev.preventDefault();
    console.log({
      name: fullName,
      email,
      password,
      password_confirmation: passwordConfirmation,
    });
    axiosClient
    .post("/signup", {
      name: fullName,
      email,
      password,
      password_confirmation: passwordConfirmation,
    })
      .then(({ data }) => {
        console.log(data)
        setCurrentUser(data.user)
        setUserCurrentToken(data.token);
      })
      .catch((error) => {
        if (error.response) {
          setError(error.response.data.errors);
        }
      });
  }

  return (
    <div className="max-h-screen overflow-y-auto no-scrollbar max-w-md bg-slate-50 flex-col justify-center items-center px-6 py-12 lg:px-8 shadow-md rounded-md m-auto">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-24 w-auto" src={imgLogo} alt="Your Company" />
        <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={onSubmit}
          className="mt-8 space-y-6"
          action="#"
          method="POST"
        >
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Full Name
            </label>
            <div className="mt-2">
              <input
                id="full-name"
                value={fullName}
                onChange={(ev) => setFullName(ev.target.value)}
                name="name"
                type="text"
                placeholder="Full Name"
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
              <span className="text-red-500 text-xs font-bold">
                {error.name && `(*) ${error.name}`}
              </span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                placeholder="Email"
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
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                placeholder="Password"
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
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Password Confirm
            </label>
            <div className="mt-2">
              <input
                id="password-confirm"
                name="password-confirm"
                value={passwordConfirmation}
                onChange={(ev) => setPasswordConfirmation(ev.target.value)}
                placeholder="Password Confirm"
                type="password"
                autoComplete="password-confirm"
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <NavLink
            to="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Signup;
