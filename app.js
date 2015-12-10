var URL = "",
  forwardRsrc = URL + "",
  backwardRsrc = URL + "",
  leftRsrc = URL + "",
  rightRsrc = URL + "",
  stopRsrc = URL + "";

$(function() {

  $('#forward').on("mousedown", function(){
    console.log("forward")
    $.get(forwardRsrc);
  })

  $('#backward').on("mousedown", function(){
    console.log("backward")
    $.get(backwardRsrc)
  })

  $('#left').on("mousedown", function(){
    console.log("left")
    $.get(leftRsrc)
  })

  $('#right').on("mousedown", function(){
    console.log("right")
    $.get(rightRsrc)
  })

  $('#stop').on("mousedown", function(){
    console.log("stop")
    $.get(stopRsrc)
  })

  // http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
  $(document).on("keydown", function(e){
    if (e.keyCode === 38) $.get(forwardRsrc) // up
    if (e.keyCode === 40) $.get(backwardRsrc) // down
    if (e.keyCode === 37) $.get(leftRsrc) // left
    if (e.keyCode === 39) $.get(rightRsrc) // right
    if (e.keyCode === 32) $.get(stopRsrc) // space
  })

})
