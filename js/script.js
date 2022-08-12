AOS.init({
    duration: 1500
}); /* Scroll animation */

jQuery(document).ready(function() {
    var btn = $('.button');  
    $(window).scroll(function() {     
      if ($(window).scrollTop() > 300) {
         btn.addClass('show');
       } else {
         btn.removeClass('show');
       }
     });
     btn.on('click', function(e) {
       e.preventDefault();
       $('html, body').animate({scrollTop:0}, '500');
     });
}); /* arrow scroll up */


$(document).ready(function () {
    $("button.header__btn").click(function (event) {
        event.preventDefault();
        $("#myOverlay").fadeIn(297, function () {
            $("#myModal")
                .css("display", "block")
                .animate({ opacity: 1 }, 198);
        });
    });

    $("#myModal__close, #myOverlay").click(function () {
        $("#myModal").animate({ opacity: 0 }, 198, function () {
            $(this).css("display", "none");
            $("#myOverlay").fadeOut(297);
        });
    });
}); /* modal form */

$(document).ready(function () {
  $("button.info__btn").click(function (event) {
      event.preventDefault();
      $("#myOverlay").fadeIn(297, function () {
          $("#myModal")
              .css("display", "block")
              .animate({ opacity: 1 }, 198);
      });
  });

  $("#myModal__close, #myOverlay").click(function () {
      $("#myModal").animate({ opacity: 0 }, 198, function () {
          $(this).css("display", "none");
          $("#myOverlay").fadeOut(297);
      });
  });
}); /* modal form */