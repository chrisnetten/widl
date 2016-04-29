$(window).load(function () {
    $(".siteLoadUp").fadeOut("slow");
});



$(document).ready(function () {
    new WOW().init();

jQuery('#news-demo').slippry({
  // general elements & wrapper
  slippryWrapper: '<div class="sy-box news-slider" />', // wrapper to wrap everything, including pager
  elements: 'article', // elments cointaining slide content

  // options
  adaptiveHeight: false, // height of the sliders adapts to current 
  captions: false,

  // pager
  pagerClass: 'news-pager',

  // transitions
  transition: 'horizontal', // fade, horizontal, kenburns, false
  speed: 1400,
  pause: 5000,

  // slideshow
  autoDirection: 'prev'
});         
        




/* Index animations */

jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 15,
        time: 4000
    });
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
    marquee.each(function () {
        var mar = $(this), indent = mar.width();
        mar.marquee = function () {
            indent--;
            mar.css('text-indent', indent);
            if (indent < -1 * mar.children('div.marquee-text').width()) {
                indent = mar.width();
            }
        };
        mar.data('interval', setInterval(mar.marquee, 1000 / 60));
    });
});
$(document).ready(function () {
        $('.responsive-menu').hide();

$('.menu-btn').click(function(){
    
        $('.responsive-menu').toggle();
    
   
});

 
        
});