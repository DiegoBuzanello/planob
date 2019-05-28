
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

  function myFunction() {
    var x = document.getElementById("mudar-mes");
    if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    

  }