$(window).on('load',function(){
	$("section").hide();
	$("#home-cont").show();

	$('.navbar-item1').on('click',function(){
		$(this).addClass('navbar-item-active1').siblings().removeClass('navbar-item-active1');

		var myID = $(this).attr("id");
        $("section").hide();
        $("#" + myID+"-cont").fadeIn(100);
	});

	
	typed = new Typed('.type', {
            strings: ["Computer Engineer", "Web Developer", "Graphic Designer"], 
            typeSpeed: 100,
            loop: true,
            backDelay: 1200,
            backSpeed: 20
        });


	
});
