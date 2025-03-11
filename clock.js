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

  background(173, 187, 255); //sky

  stroke(255)
  strokeWeight(10)
  fill(177, 255, 173) //grass
  rect(-10, 320, 980, 180)
  
  line(0, 500, 120, 323) //field lines
  line(160, 500, 240, 323)
  line(320, 500, 360, 323)
  line(480, 500, 480, 323)
  line(640, 500, 600, 323)
  line(800, 500, 720, 323)
  line(960, 500, 840, 323)

  noStroke() //gaps for numbers
  rect(10, 390, 100, 30)
  rect(100, 380, 840, 50)

  angleMode(DEGREES)

  fill(255)
  textSize(35)
  textStyle(BOLD)

  push() //field numbers
  translate(80, 385)
  rotate(90)
  text('0', 10, 0, 50, 50)
  pop()

  push()
  translate(225, 385)
  rotate(90)
  text('1', 0, 0, 50, 50)
  text('0', 20, 10, 50, 50)
  pop()

  push()
  translate(360, 385)
  rotate(90)
  text('2', 0, 0, 50, 50)
  text('0', 20, 5, 50, 50)
  pop()

  push()
  translate(495, 385)
  rotate(90)
  text('30', 0, 0, 50, 50)
  pop()

  push()
  translate(630, 385)
  rotate(90)
  text('4', 0, 0, 50, 50)
  text('0', 20, -5, 50, 50)
  pop()

  push()
  translate(765, 385)
  rotate(90)
  text('5', 0, 0, 50, 50)
  text('0', 20, -10, 50, 50)
  pop()

  push()
  translate(905, 385)
  rotate(90)
  text('6', 0, 0, 50, 50)
  text('0', 20, -10, 50, 50)
  pop() 

  rabbitMove = map(obj.seconds, 0, 59, 0, 960)//seconds moving rabbit

  turtleMove = map(obj.minutes, 0, 59, 0, 960)//minutes moving turtle

  if(obj.millis > 500) { //rabbit animation
    image(imgHareJump, rabbitMove+10, 410)
  } else {
    image(imgHare, rabbitMove, 410)
  }
  
  if(obj.seconds < 20){ //turtle animation
    image(imgTurtleBack, turtleMove, 340)
  } else if(obj.seconds > 40){
    image(imgTurtleForward, turtleMove, 340)
  } else {
    image(imgTurtleMid, turtleMove, 340)
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
