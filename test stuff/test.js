$(document).ready(function()
  {
  $(".btn1").click(function(){

    $("#pannel").animate({ scrollLeft:  200 },100,function(){
    
    });
  });
  $(".btn2").click(function(){
      
      $("#pannel").find('ul > li').eq(0).css({"left":"-220px"});
    //$("#pannel").stop(true).animate({ scrollLeft:  -200 },100,function(){
    //
    //});
    //$("#pannel").find('ul > li').eq(0).animate({left:"50%"});
  });
});

(function(){
  
  var strCookie = document.cookie;

  // var arrCookie = strCookie.split(";");
  // if(strCookie = ""){
  //   document.cookie = "isPoped=true";
  // } 
  // else{
  //   for(var i = 0; i < arrCookie; i++){
  //     var arr = arrCookie[i].split("=");
  //     if("isPoped" == arr[0])
  //   }
  // }

  
  if(document.cookie.indexOf("isPoped") == -1){
    document.cookie = "isPoped=true";
    alert(document.cookie);
  }
  var a = {
    x:3,
    calculate: function(z){
      return this.x + this.y + z;
    }
  };

  var b = {
    y:7,
    __proto__:a
  };

  var c = {
    y:4,
    __proto__:a
  }

  b.calculate(0);
  c.calculate(3);
}());