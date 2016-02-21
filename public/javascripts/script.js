$(window).load(function() {
	$(".siteLoadUp").fadeOut("slow");
});

$(document).ready(function(){
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
    
