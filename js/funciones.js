$(document).ready(function(){
	
	/*$("#boton-menu").click(function(){
		$("body nav#menu-movil").slideToggle();
	});*/
	$("li#li-aviso").click(function(){
		$("nav#menu-movil").hide("fast");/*para resetear la animación*/
		$("div#contenido").css("display","none");
		$("div#slider").css("display","none");
		$("section#servicios").css("display","none");
		$("section#nosotros").css("display","none");
		$("section#aviso").css("display","block");
	});
	$("li#li-contacto").click(function(){
		$("nav#menu-movil").hide("fast");/*para resetear la animación*/
		$("div#contenido").css("display","block");
		$("div#slider").css("display","block");
		$("section#servicios").css("display","none");
		$("section#nosotros").css("display","none");
		$("section#aviso").css("display","none");
	});
	$("li#li-servicios").click(function(){
		$("nav#menu-movil").hide("fast");/*para resetear la animación*/
		$("section#servicios").css("display","block");
		$("section#nosotros").css("display","none");
		$("div#contenido").css("display","none");
		$("div#slider").css("display","none");
		$("section#aviso").css("display","none");
	});
	$("li#li-nosotros").click(function(){
		$("nav#menu-movil").hide("fast");/*para resetear la animación*/
		$("section#nosotros").css("display","block");
		$("section#servicios").css("display","none");
		$("div#contenido").css("display","none");
		$("div#slider").css("display","none");
		$("section#aviso").css("display","none");
	});
	$('#boton-menu').click(function(){
		$("nav#menu-movil").animate({
	  	width:"toggle",
	  	//opacity: "toggle",
	 	}, "fast",function(){
	  				$("nav#menu-movil").css("background","#fff");
	  				$("nav#menu-movil ul li a").show();
	  				$("nav#menu-movil ul li a").css("display","block");
	  			});
		$("nav#menu-movil ul li a").hide();/*para resetear la animación*/
		//$("nav#menu-movil ul li a").show("slow");
  	});
	/*
	
	$("header div#encabezado p#menu-movil").click(function(){
		$("nav#menu-principal ul").css("display","block");
	});*/
});