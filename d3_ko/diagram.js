
	$(function(){

			// var dataset = [ 5, 10, 15, 20, 25 ];
			


            // d3.select("body")
            // .selectAll("p") 
            // .data(dataset) 
            // .enter().append("p") 
            // .text("New paragraph!"); 


            // var viewModel = dataset;
            // ko.applyBindings(viewModel);

            
			// var node = d3.select("#container").selectAll("p")
			// 	//.attr("data-bind", "data:" + viewModel)
			// 	.data(dataset)
			// 	.enter()
			// 	.append("p")
			// 	.text(function(d){
			// 		return d;
			// 	});

        

        var data = [4,8,15,16,23,42];

        d3.select(".chart")
        .selectAll("div")
        .data(data)
        .enter().append("div")
        .style("width", function(d) { return d * 10 + "px"; })
        .text(function(d) { return d; });

		// var nodes = [ 5, 10, 15, 20, 25 ];
		// var i = 0;
		// var viewerWidth = $(document).width();
		// var viewerHeight = $(document).height();
        // var root = nodes;
        // root.x0 = viewerHeight/2;
        // root.y0 = 0;

		// var baseSvg = d3.select("#container").append("svg")
		// .attr("width", viewerWidth)
		// .attr("height", viewerHeight)
		// .attr("class", "overlay");

		// var svgGroup = baseSvg.append("g");


        // // Update the nodes…
        // node = svgGroup.selectAll("g.node")
        //     .data(nodes, function(d) {
        //         return d.id || (d.id = ++i);
        //     });

        // // Enter any new nodes at the parent's previous position.
        // var nodeEnter = node.enter().append("g")
        //     // .call(dragListener)
        //     .attr("class", "node")
        //     .attr("transform", function(d) {
        //         return "translate(" + root.y0 + d*30 + "," + root.x0 + ")";
        //     });
        //     // .on('click', click);

        // // nodeEnter.append("circle")
        // //     .attr('class', 'nodeCircle')
        // //     .attr("r", 5)
        // //     .style("fill", function(d) {
        // //         return d._children ? "lightsteelblue" : "#fff";
        // //     });
        // nodeEnter.append("rect")
        //     .attr('class', 'nodeRect')
        //     .attr("r", 5)
        //     .style("fill", function(d) {
        //         return d._children ? "lightsteelblue" : "#fff";
        //     });

        // nodeEnter.append("text")
        //     .attr("x", function(d) {
        //         return d.children || d._children ? -10 : 10;
        //     })
        //     .attr("dy", ".35em")
        //     .attr('class', 'nodeText')
        //     .attr("text-anchor", function(d) {
        //         return d.children || d._children ? "end" : "start";
        //     })
        //     .text(function(d) {
        //         return d;
        //     });
        //     //.style("fill-opacity", 0);
            

        // centerNode()
    })

    function centerNode(source) {
        scale = zoomListener.scale();
        x = -source.y0;
        y = -source.x0;
        x = x * scale + viewerWidth / 2;
        y = y * scale + viewerHeight / 2;
        d3.select('g').transition()
            .duration(duration)
            .attr("transform", "translate(" + x + "," + y + ")scale(" + scale + ")");
        zoomListener.scale(scale);
        zoomListener.translate([x, y]);
    }

			
		