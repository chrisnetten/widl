$(window).load(function() {
	$(".siteLoadUp").fadeOut("slow");
});

/* service animations */
$(document).ready(function(){
      

   $('#demo1').animo( { animation: 'bounceInLeft', duration: 3 } );
	$('#demo2').animo( { animation: 'bounceInRight', duration: 3 } );

	$('#service-intro').animo( { animation: 'fadeInUp', duration: 1 } );

    });


/* Index animations */
$(document).ready(function() {
   
    $("#offer-p").hide();
       $(".small-box").hide();
    $('#h1-offer').animo( {animation: 'bounceInLeft', duration: 2 }, function() {
           $('#offer-p').fadeToggle(500);
           $('.small-box').fadeToggle(500); 
    });
   
   $('#button').animo("rotate", { degrees:360 }, function() {
	$('#button1').animo("rotate", { degrees:360 }, function() {
		$('#button2').animo("rotate", { degrees:360 });
        
        
		});
	});
    
    $('#index-img').animo({animation: "fadeInLeft", duration: 1});
			$('#index-img1').animo({animation: "fadeInUp", duration: 1});
				$('#index-img2').animo({animation: "fadeInRight", duration: 1});
			});
	
/* About Animations */

