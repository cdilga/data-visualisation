function init() {
  var w = 600;
  var h = 300;
  var dataset;

  var xpadding = 60;
  var ypadding = 20

  var rowConverter = function(d) {

    return {
      date: new Date(+d.year, (+d.month - 1)),
      number: parseFloat(d.number)
    };
  }

  d3.csv("data/Unemployment_78-95.csv", rowConverter, function(data) {
    if (data === null) {
      d3.select("#chart").append("p")
        .text("Data failed to load");
    }
    dataset = data;
    console.table(dataset, ["date", "number"]);

    areaChart(dataset);
  });



  function lineChart(d) {
    var xScale = d3.scaleTime()
      .domain([
        d3.min(dataset, function(d) {return d.date}),
        d3.max(dataset, function(d) {return d.date})
      ])
      .range([xpadding, w]);

    var yScale = d3.scaleLinear()
      .domain([0, d3.max(dataset, function(d) {return d.number})])
      .range([h - ypadding, 0]);

    var line = d3.line()
      .x(function (d) { return xScale(d.date); })
      .y(function (d) { return yScale(d.number); });

    var svg = d3.select("#chart")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

    svg.append("path")
      .datum(dataset)
      .attr("class", "line")
      .attr("d", line);

    var xAxis = d3.axisBottom()
      .ticks(10)
      .scale(xScale);
    var yAxis = d3.axisLeft()
      .scale(yScale);

    svg.append("g")
      .attr("transform", "translate (0, " + (h - ypadding) + ")")
      .attr("class", "axis")
      .call(xAxis);
    svg.append("g")
      .attr("transform", "translate (" + xpadding + ", 0)")
      .attr("class", "axis")
      .call(yAxis);

    svg.append("line")
      .attr("class", "halfMillion")
      .attr("x1", xpadding)
      .attr("y1", yScale(500000))
      .attr("x2", w)
      .attr("y2", yScale(500000))
      .attr("stroke-dasharray", "5, 5")

    svg.append("text")
      .attr("class", "halfMillionLabel")
      .attr("x", xpadding + 10)
      .attr("y", yScale(500000) + 20)
      .text("Half a million unemployed")
  }

  function areaChart(d) {
    var xScale = d3.scaleTime()
      .domain([
        d3.min(dataset, function(d) {return d.date}),
        d3.max(dataset, function(d) {return d.date})
      ])
      .range([xpadding, w]);

    var yScale = d3.scaleLinear()
      .domain([0, d3.max(dataset, function(d) {return d.number})])
      .range([h - ypadding, 0]);

    var line = d3.area()
      .x(function (d) { return xScale(d.date); })
      .y1(function (d) { return yScale(d.number); })
      .y0(function (d) {return yScale(0); });

    var svg = d3.select("#chart")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

    svg.append("path")
      .datum(dataset)
      .attr("class", "area")
      .attr("d", line);

    var xAxis = d3.axisBottom()
      .ticks(10)
      .scale(xScale);
    var yAxis = d3.axisLeft()
      .scale(yScale);

    svg.append("g")
      .attr("transform", "translate (0, " + (h - ypadding) + ")")
      .attr("class", "axis")
      .call(xAxis);
    svg.append("g")
      .attr("transform", "translate (" + xpadding + ", 0)")
      .attr("class", "axis")
      .call(yAxis);

    svg.append("line")
      .attr("class", "halfMillion")
      .attr("x1", xpadding)
      .attr("y1", yScale(500000))
      .attr("x2", w)
      .attr("y2", yScale(500000))
      .attr("stroke-dasharray", "5, 5")

    svg.append("text")
      .attr("class", "halfMillionLabel")
      .attr("x", xpadding + 10)
      .attr("y", yScale(500000) + 20)
      .text("Half a million unemployed")
  }
}

window.onload = init;
