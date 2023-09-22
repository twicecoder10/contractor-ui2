import React, {createContext, Dispatch, SetStateAction, useState} from 'react';
import './App.css';
import {createBrowserRouter, redirect, RouterProvider} from "react-router-dom";
import Login from "./components/Login";
import Timesheet from "./components/Timesheet";
import Signup from "./components/Signup";

export const UserContext = createContext<UserState>(
  {name: ""});
export interface UserState {
  name: string;
  setName?: Dispatch<SetStateAction<string>>
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/timesheet",
    element: <Timesheet/>,
    action: () => redirect("/timesheet")
  }
]);

function App() {
  const [name, setName] = useState("");

  return (
    <div className="App">
      <UserContext.Provider value={{name, setName}}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
