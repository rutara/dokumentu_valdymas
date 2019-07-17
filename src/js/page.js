//order funkcija
  $(".order-btn").click(function() {
    $("#header,main").css("filter","brightness(30%)");
    $("#order").css("display","initial");
    $("#order input").focus();
  });

  $(".close").click(function() {
    $(" #header,main").css("filter","brightness(100%)");
    $("#order").css("display","none");
  });

//Slide funkcija 
  $(window).scroll(function () {
   
    var woffset = $(window).scrollTop();
    $(".slide").each(function(index){
        var offset = $(".slide").eq(index).offset().top;
        if (woffset > offset - $(window).height()/1.2) {
            $(".slide").eq(index).css({"transform":"translate(0px)","opacity": "1"});
        }   
           })
  });

 

  