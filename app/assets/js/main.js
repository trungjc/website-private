(function ($) {
    //doc ready
    $(function () {
        var demo;
        var inteval = 1;
        $('.step').on('inview', function(event, isInView) {
            var Thiz = $(this);
            var section = Thiz.closest('.tpl-block');
            var child = Thiz.children().length;

            if (isInView) {
                // element is now visible in the viewport
                $(this).addClass('inview');



                demo = setInterval(function() {
                    if(inteval <= child) {
                        var i = inteval++;
                        section.find('.img').removeClass('active');
                        section.find('.img:nth-child('+ i +')').addClass('active')
                        section.find('.step li').removeClass('active');
                        section.find('.step li:nth-child('+ i +')').addClass('active');
                        if(i == child) {
                            inteval = 1
                        }
                    } else {
                        clearInterval(demo)
                    }

                }, 2000)
            } else {
                if(demo) {
                    clearInterval(demo)
                }

            }
        });

        $('[data-fancybox]').fancybox({
            // caption : function( instance, item ) {
            //     // return $(this).parent().find('.card-text').html();
            // }
        });
    });

    $(window).on('load', function() {
        //after window loaded code here
    });
})(jQuery)
