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
                id: 'YOUR_ID_FROM_BEFORE', 
                domId: 'latest-tweets'
            });
        }
    };

    LatestTweets.init();
    });