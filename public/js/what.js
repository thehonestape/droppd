SC.initialize({
    client_id: "86c13cfdb42be2cadcceaebea606e67a",
});
$(document).ready(function() {
  SC.oEmbed("https://soundcloud.com/fleezyfleez/fly-society-soul-20-20-remix", 
  	{color: "05273A", 
  		show_artwork: "false", 
  		buying: "false", 
  		show_comments: 'false',
  		default_height: '30px'},  
  	document.getElementById("soundcloud-player"));
  });


soundManager.setup({
  url: '/../swf',
  flashVersion: 9, // optional: shiny features (default = 8)
  // optional: ignore Flash where possible, use 100% HTML5 mode
  // preferFlash: false,
  onready: function() {
    console.log('this thing might be working');
    // Ready to use; soundManager.createSound() etc. can now be called.
  }
});


// 360player.js, config section

this.config = {

  playNext: false,
  autoPlay: false,
  allowMultiple: false,
  loadRingColor: '#F04C3D',
  playRingColor: '#F04C3D',
  backgroundRingColor: '#F04C3D',
  circleDiameter: 256,
  circleRadius: 128,
  animDuration: 500,
  animTransition: Animator.tx.bouncy,
  showHMSTime: true,

  useWaveformData: true,
  waveformDataColor: '#F04C3D',
  waveformDataDownsample: 7,
  waveformDataOutside: false,
  waveformDataConstrain: false,
  waveformDataLineRatio: 1.04,

  useEQData: true,
  eqDataColor: '#F04C3D',
  eqDataDownsample: 7,
  eqDataOutside: true,
  eqDataLineRatio: 0.69,

  usePeakData: true,
  peakDataColor: '#ff33ff',
  peakDataOutside: true,
  peakDataLineRatio: 0.5,

  useAmplifier: true

}