import logo from "../../resources/img/logo_light.png";
import React, {useContext} from "react";
import {Form, useNavigate} from "react-router-dom";
import {UserContext} from "../../App";

export default function Signup() {
  const navigate = useNavigate();
  const { setName } = useContext(UserContext);

  return (<>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          src={logo}
          alt="Company Logo"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up to create an account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form className="space-y-6" action="/timesheet"  method="post">
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900 text-left">
              Name
            </label>
            <div className="flex flex-row mt-2">
              <input
                id="firstname"
                name="firstname"
                type="firstname"
                autoComplete="firstname"
                required
                className="text-input mr-1.5"
                onChange={e => setName && setName(e.target.value)}
              />
              <input
                id="lastname"
                name="lastname"
                type="lastname"
                autoComplete="lastname"
                required
                className="text-input"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-left">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="text-input"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="text-input"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="confirmpassword" className="block text-sm font-medium leading-6 text-gray-900">
                Confirm password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="confirmpassword"
                name="confirmpassword"
                type="password"
                autoComplete="confirm-password"
                required
                className="text-input"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold
                leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
                focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
            <p className="my-1 text-center text-base leading-9 tracking-tight text-gray-900">
              or
            </p>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold
              leading-6 text-indigo-600 shadow-sm hover:bg-indigo-200 focus-visible:outline focus-visible:outline-2
              focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-2 border-2"
              onClick={() => navigate("/login")}
            >
              Log in
            </button>
          </div>
        </Form>
      </div>
    </div>
    </>);
}
