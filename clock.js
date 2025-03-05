/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
function draw_clock(obj) {
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
  background(171, 228, 255); //sky blue
  noStroke()
  fill(173, 250, 147)
  rect(0, 275, 960, 225)//grass

  
  rabbitMove = map(obj.seconds, 0, 59, 0, 960)//seconds moving rabbit

  turtleMove = map(obj.minutes, 0, 59, 0, 960)//minutes moving turtle

  if(obj.millis > 500) {
    image(imgHareJump, rabbitMove+10, 400)
  } else {
    image(imgHare, rabbitMove, 400)
  }

  
  
  if(obj.seconds < 20){ //turtle animation
    image(imgTurtleBack, turtleMove, 300)
  } else if(obj.seconds > 40){
    image(imgTurtleForward, turtleMove, 300)
  } else {
    image(imgTurtleMid, turtleMove, 300)
  }

  // fill(200); // dark grey
  // textSize(40);
  // textAlign(CENTER, CENTER);
  // text("YOUR MAIN CLOCK CODE GOES HERE", width / 2, 200);


  // fill(249, 140, 255);// pink
  // ellipse(width / 3, 350, 150);
  // fill(140, 255, 251) // blue
  // ellipse(width / 2, 350, 150);
  // fill(175, 133, 255); // purple
  // ellipse(width / 3 * 2, 350, 150);

}    
