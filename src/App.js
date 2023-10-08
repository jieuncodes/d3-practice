import { useState } from "react";
import { BarChart } from "./BarChart";
import sunshine from "./sunshine.json";
import Select from "react-select";

const options = [
  { value: "JAN", label: "January" },
  { value: "FEB", label: "February" },
  { value: "MAR", label: "March" },
  { value: "APR", label: "April" },
  { value: "MAY", label: "May" },
  { value: "JUN", label: "June" },
  { value: "JUL", label: "July" },
  { value: "AUG", label: "August" },
  { value: "SEP", label: "September" },
  { value: "OCT", label: "October" },
  { value: "NOV", label: "November" },
  { value: "DEC", label: "December" },
];

function App() {
  const [month, setMonth] = useState(options[0]);
  const data = sunshine
    .map((d) => {
      return { city: d.CITY, sunshine: d[month.value] };
    })
    .sort((a, b) => b.sunshine - a.sunshine)
    .slice(0, 20);

  return (
    <div className="App">
      <div className="header">
        <h1>Sunshine By City</h1>
        <Select defaultValue={month} options={options} onChange={setMonth} />
      </div>
      <div className="container">
        <BarChart height={600} width={900} data={data} />
      </div>
    </div>
  );
}

export default App;
