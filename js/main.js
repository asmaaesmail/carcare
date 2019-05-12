


$(document).ready(function () {
    //    
    //    

    

    /** Fixed Navbar **/
    $(window).scroll(function () {
        var st = $(window).scrollTop();
        if (st > 70) {
            $(".navbar").addClass('fixd-navbar');

        } else {
            $(".navbar").removeClass('fixd-navbar');

        }
    });


    /// navbar button

    $('#nav-icon1').click(function () {
        $(this).toggleClass('open');
        $(".navy").toggleClass("back");
        $(".body-overlay").toggleClass("back");
        $("body").toggleClass("body-over");
    });

    $(".body-overlay").click(function () {
        $(this).toggleClass("back");
        $('#nav-icon1').toggleClass('open');
        $(".navy").toggleClass("back");
        $("body").toggleClass("body-over");
    });



    
    
    
    
    /**********loader******************/
     $(document).ready(function() {
 
  // Fakes the loading setting a timeout
    setTimeout(function() {
        $('body').addClass('loaded');
    },100);
 
});
    
    /************************mi height ************************/
     $(window).scroll(function() {
         var $height = $(window).scrollTop();
         if($height >50) {
         $('#header , .third-nav').addClass('active-fixed');
         } else {
         $('#header , .third-nav').removeClass('active-fixed');
         }
         });
});