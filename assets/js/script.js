
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })