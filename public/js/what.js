$(document).ready(function() {
     var widget = SC.Widget(document.getElementById('soundcloud-widget'));
     widget.bind(SC.Widget.Events.READY, function() {
       console.log('Ready...');
     });
     $('.play').click(function() {
       widget.toggle();
     });  

	 $('.next').click(function() {
	  	widget.next();
	 }); 	

	 $('.prev').click(function() {
	  	widget.prev(); 	
   	});
      });



