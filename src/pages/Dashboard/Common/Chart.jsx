import "../../../index.css";
import {
  PieChart,
  Pie,
  Legend,
  Cell,
  ResponsiveContainer,
  Label,
} from "recharts";

const Chart = ({ singelUser }) => {
  const data01 = [
    { value: singelUser?.participated },
    { value: singelUser?.win },
  ];
  const COLORS = ["#0088FE", "#00C49F"];
  const CustomizedLegend = () => {
    return (
      <ul className="flex justify-between w-[400px] mx-auto">
        <li className="flex items-center gap-2">
          <div className="px-1 py-1.5 rounded-full w-3 h-2 bg-[#0088FE]"></div>
          Participated Contest :
          <span>{singelUser?.participated}</span>
        </li>
        <li className="flex items-center gap-2">
          <div className="px-1 py-1.5 rounded-full w-3 h-2 bg-[#00C49F]"></div>
          Win : 
          <span>{singelUser?.win}</span>
        </li>
      </ul>
    );
  };
  return (
    <div className="w-[400px] h-[400px] relative mb-5">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data01}
            dataKey="value"
            cx={200}
            cy={200}
            innerRadius={80}
            outerRadius={100}
          >
            {data01.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            <Label
              className="absolute text-xl  font-semibold "
              value={"Winning Rate"}
              position="center"
            />
          </Pie>
          <Legend content={<CustomizedLegend />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
export default Chart;
