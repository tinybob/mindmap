$(document).ready(function(){

	var n=-1;

	var sw;

	var max=$("#slide_x .box li").length-1;

	// at();

	// setInterval(at, 3000);

	// function at(){

	//    _now=n;

    //    _next= n>=max ? 0: ++n;

    //    sw=_next*600;

    //    if(_next==0&&_now==max){

	//       $("#slide_x .box li").eq(0).css({"left":"1800px"});

	//       sw=1800;

	//     }else if(_now==0){
	//        $("#slide_x .box li").eq(0).css({"left":""});
	// 	   $("#slide_x .box").scrollLeft(0);


	//     };

    //    $("#slide_x .box").animate({"scrollLeft": (sw)});

    //    n=_next;

	// } 
	$("#prevs").click(function(){
		$list = $("#slide_x .box li")
		//$list.eq(0).before($list.eq(2));
		// for(var i = 0; i < $list.length; i++){
		// 	$list.eq(i).css({"left":"600px"});
		// }
		// $list.forEach(function(element) {
		// 	element.css({"left":"600px"});
		// }, this);
		
		$("#slide_x .box li").eq(0).css({"left":"1800px"});
		$("#slide_x .box").scrollLeft(1800);
		$("#slide_x .box").animate({"scrollLeft" : 1200});
		$("#slide_x .box li").eq(0).css({"left":""});

		// $("#slide_x .box li").eq(2).css({"left":""});
		//$("#slide_x .box").animate({"scrollLeft" : 1200},200);
	});
	$("#prev").click(function(){
		$("#slide_x .box").animate({"scrollLeft": "-=" +600});

		// $("#slide_x .box li").eq(2).css({"left":""});
		// $("#slide_x .box").scrollLeft(0);
	});
	$("#next").click(function(){
		$("#slide_x .box").animate({"scrollLeft": "+=" +600});

		// $("#slide_x .box li").eq(2).css({"left":""});
		// $("#slide_x .box").scrollLeft(0);
	});
});