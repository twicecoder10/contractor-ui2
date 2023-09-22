import Header from "../Header";
import {UserContext} from "../../App";
import {useContext, useState} from "react";
import CalendarInputTable from "./CalendarInputTable";
import moment from "moment";
import {Alert, Snackbar} from "@mui/material";

export default function Timesheet() {
  const {name} = useContext(UserContext);
  const monday = moment().startOf("week");
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);


  return (
    <>
      <Header/>
      <div className="m-8">
        <h2 className="text-2xl text-left mb-2">Welcome {name}!</h2>
        <h3 className="text-l text-left mb-2">
          Log your timesheet, week commencing {monday.format("DD/MM")}
        </h3>
        <div className="items-center">
          <div className="w-80 flex-1 flex-col h-screen my-auto items-center content-center">
            <select className="my-2 p-2 w-full rounded-lg border-2 border-b-indigo-200 bg-gray-50">
              <option>Project 1</option>
              <option>Project 2</option>
              <option>Project 3</option>
              <option>Project 4</option>
            </select>
            <CalendarInputTable />
            <button className="mt-2 float-right rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold
                  leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
                  focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={()=> setOpen(true)}>
              Submit
            </button>
          </div>
        </div>
        <Snackbar   anchorOrigin={{ vertical: "top", horizontal: "center" }}
                     open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Successfully submitted!
          </Alert>
        </Snackbar>

      </div>
    </>
  );

}
