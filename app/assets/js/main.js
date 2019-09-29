(function ($) {
    //doc ready
    $(function () {
        $('.navbar-nav-scroll li a').click(function(e) {
            e.preventDefault();
            var element = $(this).attr('href');
            $([document.documentElement, document.body]).animate({
                scrollTop: $(element).offset().top
            }, 500);
        });
    });

    $(window).on('load', function() {
        //after window loaded code here
    });
})(jQuery)
