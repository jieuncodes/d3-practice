import * as d3 from "d3";

const data = [...Array(50)].map(() => Math.floor(Math.random() * 100));

function chart() {
  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, 300]);

  const svg = d3.create("svg").attr("width", 300).attr("height", 100);

  svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", 10)
    .attr("y", (d, i) => i * 20)
    .attr("width", (d) => xScale(d))
    .attr("height", 8)
    .attr("fill", "red");

  return svg.node();
}

document.body.appendChild(chart());
