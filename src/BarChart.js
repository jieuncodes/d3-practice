import { scaleLinear, max, scaleBand } from "d3";

export const BarChart = ({ data, width, height }) => {
  const MARGIN = 10;
  const lines = [10, 20, 30, 40];

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
  const labels = data.map((d) => (
    <text
      textAnchor="end"
      key={d.city}
      x={xScale(d.sunshine)}
      y={yScale(d) + 20}
      fill="white"
    >
      {d.city}
    </text>
  ));
  const gridLines = lines.map((l, i) => (
    <g key={i}>
      <line
        key={i}
        y1={0}
        y2={height - MARGIN}
        x1={xScale(l)}
        x2={xScale(l)}
        stroke="white"
      ></line>
      <text
        textAnchor="middle"
        fontSize={"12px"}
        x={xScale(l)}
        y={height - MARGIN}
      >
        {l}
      </text>
      <text></text>
    </g>
  ));
  return (
    <svg viewBox={`0 0 ${width} ${height}`}>
      {rectangles} {gridLines} {labels}
    </svg>
  );
};
