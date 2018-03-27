function init () {
  var updateGraph = function(dataset) {
    var yScale = d3.scaleLinear()
      .domain([0, d3.max(dataset)])
      .range([0, h]);

    var xScale = d3.scaleBand()
      .domain(d3.range(dataset.length))
      .rangeRound([0,w])
      .paddingInner(0.05);

    var svg = d3.select("svg")

    svg.selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("x", function(d, i) {
        return xScale(i);
      })
      .attr("y", function(d) {
        return h - d;
      })
      .attr("width", xScale.bandwidth())
      .attr("height", function(d) {
        return yScale(d);
      })
      .attr("fill", "red");
  }

  var w = 500;
  var h = 100;
  var data = 1;
  var data1 = [14, 5, 26, 23, 9, 90, 45, 32, 12, 4];
  var data2 = [12, 5, 3, 16, 6, 1, 2, 6];

  d3.select("#update")
    .on("click", function() {
      alert("This works");
      if(data) {
        updateGraph(data1);
      } else {
        updateGraph(data2);
      }
      data = !data;
    });
    var svg = d3.select("body")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

  updateGraph(data1);

}

window.onload = init;
