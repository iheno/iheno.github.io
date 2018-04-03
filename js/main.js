/*-----------------------------------------------------------------------------------*/
/* 		Mian Js Start 
/*-----------------------------------------------------------------------------------*/
$(document).ready(function($) {
"use strict"
/*-----------------------------------------------------------------------------------*/
/* 	TESTIMONIAL SLIDER
/*-----------------------------------------------------------------------------------*/
$(".testi-slide").owlCarousel({ 
    items : 1,
	autoplay:true,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	singleItem	: true,
    navigation : true,
	navText: ["<i class='ion-ios-arrow-thin-left'></i>","<i class='ion-ios-arrow-thin-right'></i>"],
	pagination : true
});
/*-----------------------------------------------------------------------------------*/
/* 	ABOUT SLIDER
/*-----------------------------------------------------------------------------------*/
$(".who-slide").owlCarousel({ 
    items : 1,
	autoplay:true,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	singleItem	: true,
    navigation : true,
	navText: ["<i class='ion-ios-arrow-thin-left'></i>","<i class='ion-ios-arrow-thin-right'></i>"],
	pagination : true
});
/*-----------------------------------------------------------------------------------
    Animated progress bars
/*-----------------------------------------------------------------------------------*/
$('.progress-bars').waypoint(function() {
  $('.progress').each(function(){
    $(this).find('.progress-bar').animate({
      width:$(this).attr('data-percent')
     },500);
});},
	{   
	offset: '100%',
    triggerOnce: true 
});});
/*-----------------------------------------------------------------------------------*/
/*    CONTACT FORM
/*-----------------------------------------------------------------------------------*/
function checkmail(input){
  var pattern1=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  	if(pattern1.test(input)){ return true; }else{ return false; }}     
    function proceed(){
    	var name = document.getElementById("name");
		var email = document.getElementById("email");
		var company = document.getElementById("company");
		var web = document.getElementById("website");
		var msg = document.getElementById("message");
		var errors = "";
	if(name.value == ""){ 
		name.className = 'error';
	  	  return false;}    
		  else if(email.value == ""){
		  email.className = 'error';
		  return false;}
		    else if(checkmail(email.value)==false){
		        alert('Please provide a valid email address.');
		        return false;}
		    else if(company.value == ""){
		        company.className = 'error';
		        return false;}
		   else if(web.value == ""){
		        web.className = 'error';
		        return false;}
		   else if(msg.value == ""){
		        msg.className = 'error';
		        return false;}
		   else 
		  {
	$.ajax({
	type: "POST",
	url: "php/submit.php",
	data: $("#contact_form").serialize(),
	success: function(msg){
	//alert(msg);
    if(msg){
		$('#contact_form').fadeOut(1000);
        $('#contact_message').fadeIn(1000);
        	document.getElementById("contact_message");
         return true;
        }}});
}};



