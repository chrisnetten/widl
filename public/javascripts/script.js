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
 var LatestTweets = {
        init: function () {
            twitterFetcher.fetch({
                id: '709506677125545985', 
                domId: 'latest-tweets'
            });
        }
    };

    LatestTweets.init();
    });