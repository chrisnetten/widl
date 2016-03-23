$(window).load(function () {
    $(".siteLoadUp").fadeOut("slow");
});



$(document).ready(function () {
    new WOW().init();

    jQuery(document).ready(function () {
        jQuery('#slider').slippry({
            speed: 1200

        });
    });
});          
        




/* Index animations */

 jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 15,
                time: 4000
            });
        });
        
$(document).ready(function () {



    $(function () {
        var options = {
            cellHeight: 80,
            verticalMargin: 10
        };
        $('.grid-stack').gridstack(options);
    });

});

    
    $(document).ready(function () {
    var marquee = $('div.marquee');
marquee.each(function() {
    var mar = $(this),indent = mar.width();
    mar.marquee = function() {
        indent--;
        mar.css('text-indent',indent);
        if (indent < -1 * mar.children('div.marquee-text').width()) {
            indent = mar.width();
        }
    };
    mar.data('interval',setInterval(mar.marquee,1000/60));
});
    });