import * as d3 from "d3";

const data = [...Array(50)].map(() => Math.floor(Math.random() * 100));

function chart() {
  const svg = d3.create("svg").attr("width", 1000).attr("height", 700);

  svg
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", (d, i) => i * 20 + 10)
    .attr("cy", 50)
    .attr("r", (d) => Math.sqrt(d))
    .style("fill", "steelblue");

  return svg.node();
}

document.body.appendChild(chart());
