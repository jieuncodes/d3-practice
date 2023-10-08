import { BarChart } from "./BarChart";
import sunshine from "./sunshine.json";

function App() {
  const data = sunshine
    .map((d) => {
      return { city: d.CITY, sunshine: d["JUL"] };
    })
    .sort((a, b) => b.sunshine - a.sunshine)
    .slice(0, 20);

  return (
    <div className="App">
      <div className="header"></div>
      <div className="container">
        <BarChart height={600} width={900} data={data} />
      </div>
    </div>
  );
}

export default App;
