
$('#btn1').click(function() {
    var currentSlide = $('.showFade.active');
    var nextSlide = $('#nar2');

    currentSlide.fadeOut(0).removeClass('active');
    nextSlide.fadeIn(200).addClass('active');

    

    
});

$('#btn2').click(function() {

    var currentSlide = $('.showFade.active');
    var nextSlide = $('#nar3');

    currentSlide.fadeOut(0).removeClass('active');
    nextSlide.fadeIn(200).addClass('active');
 
   
});
  

$('#btn3').click(function() {
    var currentSlide = $('.showFade.active');
    var nextSlide = $('#nar4');

    currentSlide.fadeOut(0).removeClass('active');
    nextSlide.fadeIn(200).addClass('active');

   
   
});

$('#1btn4').click(function() {
    var currentSlide = $('.showFade.active');
    var nextSlide = $('#nar51');

    currentSlide.fadeOut(0).removeClass('active');
    nextSlide.fadeIn(200).addClass('active');

  

    if (nextSlide.length == 0) {
        $('#nar51').fadeIn(300).addClass('active');
    }
});

$('#2btn4').click(function() {
    var currentSlide = $('.showFade.active');
    var nextSlide = $('#nar52');

    currentSlide.fadeOut(0).removeClass('active');
    nextSlide.fadeIn(200).addClass('active');

   
 
});

$('#btn51').click(function() {
    var currentSlide = $('.showFade.active');
    var nextSlide = $('#nar61');

    currentSlide.fadeOut(0).removeClass('active');
    nextSlide.fadeIn(200).addClass('active');

    if (nextSlide.length == 0) {
        $('.showFade.active').fadeIn(300);
    }

    
});

$('#btn52').click(function() {
    var currentSlide = $('.showFade.active');
    var nextSlide = $('#nar62');

    currentSlide.fadeOut(0).removeClass('active');
    nextSlide.fadeIn(200).addClass('active');

  

    
});

$('#1btn61').click(function() {
    var currentSlide = $('.showFade.active');
    var nextSlide2 = $('#nar71');

    currentSlide.fadeOut(0).removeClass('active');
    nextSlide2.fadeIn(200).addClass('active');

  
    
});

$('#2btn61').click(function() {
    var currentSlide = $('.showFade.active');
    var nextSlide3 = $('#nar8');

    currentSlide.fadeOut(0).removeClass('active');
    nextSlide3.fadeIn(200).addClass('active');


    
});

$('#1btn62').click(function() {
    var currentSlide = $('.showFade.active');
    var nextSlide4 = $('#nar72');

    currentSlide.fadeOut(0).removeClass('active');
    nextSlide4.fadeIn(200).addClass('active');

   

  
});

$('#2btn62').click(function() {
    var currentSlide = $('.showFade.active');
    var nextSlide5 = $('#nar8');

    currentSlide.fadeOut(0).removeClass('active');
    nextSlide5.fadeIn(200).addClass('active');

   
});

$('#btn71').click(function() {
    var currentSlide = $('.showFade.active');
    var nextSlide = $('#nar8');

    currentSlide.fadeOut(0).removeClass('active');
    nextSlide.fadeIn(200).addClass('active');

   

   
});

$('#1btn72').click(function() {
    var currentSlide = $('.showFade.active');
    var nextSlide6 = $('#nar82');

    currentSlide.fadeOut(0).removeClass('active');
    nextSlide6.fadeIn(200).addClass('active');

    

   
});

$('#2btn72').click(function() {
    var currentSlide = $('.showFade.active');
    var nextSlide7 = $('#nar8');

    currentSlide.fadeOut(0).removeClass('active');
    nextSlide7.fadeIn(200).addClass('active');

   
   
});

$('#1btn8').click(function() {
    var currentSlide = $('.showFade.active');
    var nextSlide = $('#nar911');

    currentSlide.fadeOut(0).removeClass('active');
    nextSlide.fadeIn(200).addClass('active');

   
    
});

$('#2btn8').click(function() {
    var currentSlide = $('.showFade.active');
    var nextSlide = $('#nar922');

    currentSlide.fadeOut(0).removeClass('active');
    nextSlide.fadeIn(200).addClass('active');

    
});

$('#3btn8').click(function() {
    var currentSlide = $('.showFade.active');
    var nextSlide = $('#nar933');

    currentSlide.fadeOut(0).removeClass('active');
    nextSlide.fadeIn(200).addClass('active');

    
});

$('#1btn82').click(function() {
    var currentSlide = $('.showFade.active');
    var nextSlide11 = $('#nar92');

    currentSlide.fadeOut(0).removeClass('active');
    nextSlide11.fadeIn(200).addClass('active');

    
    
});

$('#2btn82').click(function() {
    var currentSlide = $('.showFade.active');
    var nextSlide22 = $('#nar8');

    currentSlide.fadeOut(0).removeClass('active');
    nextSlide22.fadeIn(200).addClass('active');

    
   
});

$('#btn92').click(function() {
    var currentSlide = $('.showFade.active');
    var nextSlide = $('#nar8');

    currentSlide.fadeOut(0).removeClass('active');
    nextSlide.fadeIn(200).addClass('active');

    if (nextSlide.length == 0) {
        $('.showFade').fadeIn(300).addClass('active');
    }
    
});


$('.myLeftArrow').click(function () {
    var currentSlide = $('.showFade.active');
    var backSlide = currentSlide.prev();

    currentSlide.fadeOut(0).removeClass('active');
    backSlide.fadeIn(200).addClass('active');

});




