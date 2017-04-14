$( document ).ready(function(){
	$('#carousel').carousel({
		interval: 3000,
		keyboard: false
	});

	$(".scroll").click(function(event){
		event.preventDefault();
	});
	$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
});

