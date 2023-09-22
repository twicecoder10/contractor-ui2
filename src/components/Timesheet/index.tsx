import Header from "../Header";
import {UserContext} from "../../App";
import {useContext} from "react";
import CalendarInputTable from "./CalendarInputTable";
import moment from "moment";

export default function Timesheet() {
  const {name} = useContext(UserContext);
  const monday = moment().startOf("week");


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
            <CalendarInputTable />
            <button className="mt-2 float-right rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold
                  leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
                  focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Submit
            </button>
          </div>
        </div>

      </div>
    </>
  );

}
