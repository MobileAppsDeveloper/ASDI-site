/*

Examples from Video
ids,	classes,	element tags
	$("#myid")	$("myclass")		$("p")
	$("myid > .topnav:first a [href][rel]")


jQuery CSS, Classes, Attributes

var padbot = $('#nav').css("paddingBottom");

$('#nav').css("backgroundColor", "#ff0000");

$(‘#nav').css({
	backgr0undColor: “#ffffff",
	height: 100,
	padding: “5px"
});


$( 'div’) .addClass(“myClass");
$( ’div’) .addClass("myClass anotherClass")
$( 'div’) . removeClass("myClass") ;
$( ’div’) .toggleClass(”myClass");
var bool = $( ’div’) .hasClass(“myClass");

var navalt = $(’a’).attr(“alt");

$('a’).attr(”href", “http://google.com")

$(‘a').attr({
	title: “link”,
	href: “http://google.com",
	alt: ”Google"
});

$(“div”).map(function(i, elem){
	if( $(elem).css(”position") === "absolute" ){
		return elem;
	};
});


************
$(function(){
	$('#add').bind('c1ick', function(){
		$("input:file:first").clone(true).insertBefore("#add");
			return false;
		;
	});
});



*/


/*
	$(function(){
		var navList = $('#nav li')
			.fadeOut()
			.fadeIn()
		;

		$('p:first').append('<a href="#">link</a>').animate();

		$('<li><a href="#">Another Link</a></li>').appendTo('#nav').animate();

		$("p:first").wrapInner("<span<strong><em></em></strong></span>");
		//$('<p>New Paragraph</p>').replaceAll('span').animate();
		$('span').replaceWith('<p></p>').appendTo('#blah').animate();

	});
*/


$(function(){
	$('#add').bind('click', function(){
		$("input:file:first").clone(true).insertBefore("#add");
			return false;
		;
	});
});




$(function(){
	$('#nav2 li a').bind('click', function(){
		$('<li><a href="#">Link</a></li>').appendTo('#nav2');
		return false;
	});
});


