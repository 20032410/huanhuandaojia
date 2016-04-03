$(function(){
	$(".nav-ul-bt").on("click",function(){
		if($(".bt-show").hasClass("active")){
			$(".bt-show").hide().removeClass("active");
		}else{
			$(".bt-show").show().addClass("active");
		}
	})
     

    $(window).scroll(function(){
    	if($(window).scrollTop() > 600){
    		$("#nav2").css("display","block");
    	}else{
    		$("#nav2").css("display","none");
    	}
    })

})