var years_graph = function() {
    var w=500;
    var h=100;
    var barPadding;
    var dataset = [
        [1980,86.28610354],
        [1981,74.45504087],
        [1982,79.42240000],
        [1983,73.46647015],
        [1984,71.14168937],
        [1985,64.47956403],
        [1986,61.32970027],
        [1987,57.79291553],
        [1988,62.40871935],
        [1989,63.90463215],
        [1990,54.65940054],
        [1991,54.08446866],
        [1992,52.36239782],
        [1993,50.63487738],
        [1994,49.82016349],
        [1995,48.20163488],
        [1996,43.01907357],
        [1997,44.07084469],
        [1998,43.95640327],
        [1999,38.39237057],
        [2000,32.85286104],
        [2001,28.68664850],
        [2002,26.39237057],
        [2003,24.98092643],
        [2004,21.22070845],
        [2005,20.14713896],
        [2006,18.68937330],
        [2007,17.02724796],
        [2008,14.63487738],
	[2009,12.76294278],
	[2010,13.36784741],
	[2011,13.31607629],
	[2012,7.35380117]
    ];

    var scale=d3.scale.linear();

    var padding=30;

    d3.max(dataset, function(d) {    
	return d[0];  //References first value in each sub-array
    });
    var xScale = d3.scale.linear()
        .domain([d3.min(dataset,function(d){return d[0];}), d3.max(dataset, function(d) { return d[0]; })])
        .range([padding, w-padding*3]);
    var yScale = d3.scale.linear()
        .domain([0,d3.min(dataset,function(d){return d[1];})/2+ d3.max(dataset, function(d) { return d[1]; })])
        .range([h-padding, padding]);
    
    var svg = d3.select("#slide13")
        .append("svg")
        .attr("width", w)
        .attr("height", h);
    var circles=svg.selectAll("circle")
	.data(dataset)
	.enter()
	.append("circle")
	.attr("cx", function(d) {
	    return xScale(d[0]);
    })
	.attr("cy", function(d) {
	    return yScale(d[1]);})
	.attr("r", 5)
	.attr("fill", "white")
    // .attr("fill",function(d) {
    //  return "rgb("+d[1]*12+",0,"+d[1]+")";})
	.attr("opacity",0.7);

    /*svg.append("g")
      .call(d3.svg.axis()
      .scale(xScale)
      .orient("bottom"));*/  //<--this actually works
    
    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom")
        .ticks(dataset.length);
    svg.append("g")
	.attr("class", "axis") //Assign "axis" class
	.attr("transform", "translate(0," + (h - padding) + ")")
	.call(xAxis);   //same as what the commented content did

    var yAxis=d3.svg.axis()
        .scale(yScale)
        .orient("left")
        .ticks(10);
    svg.append("g")
	.attr("class","axis")
	.attr("transform","translate("+padding+",0)")
	.call(yAxis);
    
    // var formatAsPercentage=d3.format(".1%");
    // formatAsPercentage(0.2143) returns 21.4%
};

var years_line = function() {
    var w=500;
    var h=100;

    var svg = d3.select("#slide13").append("svg")
	.attr("width", w)
	.attr("height", h)
	.append("g")
	.attr("transform","translate(40,10)");

    var chart = LineChart(
	{
	    "parent": svg,
	    "labels": [ "Year", "CO (ppm)"],
	    "data":   

	    [
		[1980,86.28610354],
		[1981,74.45504087],
		[1982,79.4224],
		[1983,73.46647015],
		[1984,71.14168937],
		[1985,64.47956403],
		[1986,61.32970027],
		[1987,57.79291553],
		[1988,62.40871935],
		[1989,63.90463215],
		[1990,54.65940054],
		[1991,54.08446866],
		[1992,52.36239782],
		[1993,50.63487738],
		[1994,49.82016349],
		[1995,48.20163488],
		[1996,43.01907357],
		[1997,44.07084469],
		[1998,43.95640327],
		[1999,38.39237057],
		[2000,32.85286104],
		[2001,28.6866485],
		[2002,26.39237057],
		[2003,24.98092643],
		[2004,21.22070845],
		[2005,20.14713896],
		[2006,18.6893733],
		[2007,17.02724796],
		[2008,14.63487738],
		[2009,12.76294278],
		[2011,13.31607629],
		[2012,7.35380117]
	    ]


	});

    chart();


};
