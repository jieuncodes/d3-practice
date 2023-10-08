import { scaleLinear, max, scaleBand } from "d3";

export const BarChart = ({ data, width, height }) => {
  const MARGIN = 10;

  const xScale = scaleLinear()
    .domain([0, max(data, (d) => d.sunshine)])
    .range([0, width - MARGIN]);

  const yScale = scaleBand()
    .domain(data)
    .range([height - 2 * MARGIN, 0]);

  return <svg viewBox={`0 0 ${width} ${height}`}></svg>;
};
