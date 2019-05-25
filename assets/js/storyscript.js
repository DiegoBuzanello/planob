$('#myRightArrow').click(function() {
    var currentSlide = $('.showFade.active');
    var nextSlide = currentSlide.next();

    currentSlide.fadeOut(300).removeClass('active');
    nextSlide.fadeIn(300).addClass('active');

    if (nextSlide.length == 0) {
        $('.showFade').first().fadeIn(300).addClass('active');
    }
});

$('#myLeftArrow').click(function () {
    var currentSlide = $('.showFade.active');
    var backSlide = currentSlide.prev();

    currentSlide.fadeOut(300).removeClass('active');
    backSlide.fadeIn(300).addClass('active');

    if (backSlide.length == 0) {
        $('.showFade').last().fadeIn(300).addClass('active');
    }
});