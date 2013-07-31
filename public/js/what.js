SC.initialize({
    client_id: "86c13cfdb42be2cadcceaebea606e67a",
});
$(document).ready(function() {
  SC.oEmbed("https://soundcloud.com/casualsophistication/sets/jettin-fly-society-mic-flo", 
  	{color: "05273A", 
  		show_artwork: "false", 
  		buying: "false", 
  		show_comments: 'false',
  		default_height: '30px'},  
  	document.getElementById("soundcloud-player"));
  });
  