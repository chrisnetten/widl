$(window).load(function() {
	$(".siteLoadUp").fadeOut("slow");
});

$(document).ready(function(){
       $("#offer-p").hide();
       $(".small-box").hide();
    $('#h1-offer').animo( {animation: 'bounceInLeft', duration: 2 }, function() {
           $('#offer-p').fadeToggle(500);
           $('.small-box').fadeToggle(500);
    });
   $('#demo1').animo( { animation: 'bounceInLeft', duration: 3 } );
	$('#demo2').animo( { animation: 'bounceInRight', duration: 3 } );


$('#tada').animo( { animation: 'tada' } );
$('#tada1').animo( { animation: 'tada' } );
$('#tada2').animo( { animation: 'tada' } );
});

$(document).ready(function() {
   
   $('#button').animo("rotate", { degrees:360 }, function() {
	$('#button1').animo("rotate", { degrees:360 }, function() {
		$('#button2').animo("rotate", { degrees:360 });
		});
	});
});
    
