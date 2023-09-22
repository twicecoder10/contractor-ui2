import {Card, Typography} from "@material-tailwind/react";

const TABLE_HEAD = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function CalendarInputTable() {
  return (
    <Card className="rounded-lg border overflow-scroll items-center border-blue-gray-100 bg-gray-50">
      <table className="table-auto text-left w-72">
        {TABLE_HEAD.map((head) => (
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
              <input className="w-16 h-10 rounded-lg" type="number" max="16" min="0"/>
            </td>
          </tr>
        ))}
      </table>
    </Card>
  );
}
