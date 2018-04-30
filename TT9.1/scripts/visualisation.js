function init() {
  var w = 600;
  var h = 300;  

  var projection = d3.geoMercator()
    .center([145,-36.5])
    .translate([w/2, h/2])
    .scale([3000]);

  var path = d3.geoPath().projection(projection);
    

  var rowConverter = function(d) {

    return {

    };
  }

  /*
  d3.csv("data/VIC_LGA_unemployment.csv", rowConverter, function(data) {
    if (data === null) {
      d3.select("#chart").append("p")
        .text("Data failed to load");
    }
    dataset = data;
    console.table(dataset, ["date", "number"]);

    lineChart(dataset);
  });
  */

  function lineChart(d) {
    var svg = d3.select("#chart")
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .attr("fill", "gray");

    d3.json("data/LGA_VIC.json", function(json) {
      svg.selectAll("path")
        .data(json.features)
        .enter()
        .append("path")
        .attr("d", path)
    });
  }
  lineChart(this);
}
window.onload = init;
