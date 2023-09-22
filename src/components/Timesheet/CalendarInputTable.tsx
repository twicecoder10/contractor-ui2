import {Card, Typography} from "@material-tailwind/react";
import {useState} from "react";
import { sum } from "lodash";

const TABLE_HEAD = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function CalendarInputTable() {
  const [hours, setHours] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
  });

  return (
    <Card className="rounded-lg border overflow-scroll items-center bg-gray-50">
      <table className="table-auto text-left w-72">
        {TABLE_HEAD.map((head, index) => (
          <tr>
            <th
              key={head}
              className="border-b border-blue-gray-100 bg-gray-50 p-4"
            >
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                {head}
              </Typography>
            </th>
            <td
              className="border-b border-blue-gray-100 bg-gray-50 p-2"
            >
              <input className="w-16 h-10 rounded-lg" type="number" max="16" min="0" step="0.5"
                     onChange={(e) =>
                       setHours(prevState => ({
                         ...prevState, [index]: Number(e.target.value)
                       }))}
              />
            </td>
          </tr>
        ))}
        <tr>
          <th
            key="total"
            className="border-b border-blue-gray-100 bg-gray-50 p-4"
          >
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal leading-none opacity-70"
            >
              Total
            </Typography>
          </th>
          <td
            className="border-b border-blue-gray-100 bg-gray-50 p-2"
          >
            {sum(Object.values(hours))}
          </td>
        </tr>
      </table>
    </Card>
  );
}
