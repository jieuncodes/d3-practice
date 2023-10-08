import { scaleLinear, max, scaleBand } from "d3";

export const BarChart = ({ data, width, height }) => {
  const MARGIN = 10;

  const xScale = scaleLinear()
    .domain([0, max(data, (d) => d.sunshine)])
    .range([0, width - MARGIN]);

  const yScale = scaleBand()
    .domain(data)
    .range([0, height - 2 * MARGIN]);

  const rectangles = data.map((d) => (
    <rect
      key={d.city}
      x={MARGIN}
      y={yScale(d)}
      height={yScale.bandwidth()}
      width={xScale(d.sunshine)}
      fill="pink"
      stroke="white"
    ></rect>
  ));

  return <svg viewBox={`0 0 ${width} ${height}`}>{rectangles}</svg>;
};
