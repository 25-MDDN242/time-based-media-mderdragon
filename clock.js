/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
let crowdShake = 0
let rabbitSize = 1
let levelRabbit = 410 
let scaleCheck = 57
let rabbitHole = 890
let minuteCheck = 51
let confettiFall =  0
let sunY = 0

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

  let sky = color(255)
  let midday = color(173, 187, 255)
  let dawn = color(250, 212, 192)
  let midnight = color(78, 72, 138)

  skyChange = map(obj.hours, 0, 23, 0, 4)

  if(obj.hours == 0) { //setting lerpcolours between hours
    sky = midnight
  } else if(obj.hours == 12) {
    sky = midday
  } else if(obj.hours < 6) {
    sky = lerpColor(midnight, dawn, skyChange)
  } else if(obj.hours < 12) {
    sky = lerpColor(dawn, midday, skyChange-1)
  } else if (obj.hours > 17) {
    sky = lerpColor(dawn, midnight, skyChange-3)
  } else if(obj.hours > 11) {
    sky = lerpColor(midday, dawn, skyChange-2)
  }

  background(sky);

  sunX = map(obj.hours, 0, 23, -480, 1440)
  sunY = map(obj.hours, 0, 23, 500, 0)

  if(obj.hours > 4 && obj.hours < 12) { //sun ascent
    push()
    translate(sunX - 480, sunY - 500)//sun movement
    fill(255)
    ellipse(480, 250, 100, 100)//sun graphic
    strokeWeight(10)
    stroke(255)
    line(480, 250, -100, 550)
    line(480, 250, 960, 500)
    line(480, 250, 0, 0)
    line(480, 250, 960, 0)
    line(480, 250, 480, 0)
    line(480, 250, 480, 550)
    line(480, 250, -580, 250)
    line(480, 250, 1500, 250)
    line(480, 250, -480, 0)
    line(480, 250, -480, 500)
    line(480, 250, 1440, 0)
    line(480, 250, 1440, 500)
    line(480, 250, 160, 0)
    line(480, 250, 320, 0)
    line(480, 250, 640, 0)
    line(480, 250, 800, 0)
    line(480, 250, 160, 550)
    line(480, 250, 320, 550)
    line(480, 250, 640, 550)
    line(480, 250, 800, 550)
    pop()
  } else if(obj.hours > 11 && obj.hours < 19) { //sun descent
    push()
    translate(sunX - 480, -sunY)//sun movement
    fill(255)
    ellipse(480, 250, 100, 100)//sun graphic
    strokeWeight(10)
    stroke(255)
    line(480, 250, -100, 550)
    line(480, 250, 960, 500)
    line(480, 250, 0, 0)
    line(480, 250, 960, 0)
    line(480, 250, 480, 0)
    line(480, 250, 480, 550)
    line(480, 250, -580, 250)
    line(480, 250, 1500, 250)
    line(480, 250, -480, 0)
    line(480, 250, -480, 500)
    line(480, 250, 1440, 0)
    line(480, 250, 1440, 500)
    line(480, 250, 160, 0)
    line(480, 250, 320, 0)
    line(480, 250, 640, 0)
    line(480, 250, 800, 0)
    line(480, 250, 160, 550)
    line(480, 250, 320, 550)
    line(480, 250, 640, 550)
    line(480, 250, 800, 550)
    pop()
  }

  stroke(0)
  strokeWeight(3)
  fill(177, 255, 173) //grass
  rect(-5, 275, 990, 230)
  
  stroke(255)
  strokeWeight(10)
  line(0, 500, 120, 323) //field lines
  line(160, 500, 240, 323)
  line(320, 500, 360, 323)
  line(480, 500, 480, 323)
  line(640, 500, 600, 323)
  line(800, 500, 720, 323)
  line(960, 500, 840, 323)
  line(0, 320, 960, 320)

  image(imgNumbers, 0, 0)

  image(imgLamp, 0, 0)

  console.log(obj.seconds_until_alarm); //alarm setup
  
  if(obj.seconds_until_alarm < 0 || obj.seconds_until_alarm === undefined) {
      image(imgSpectators, 0, 25) //still spectators
  } else if(obj.seconds_until_alarm > 0) { //spectators shake when alarm is set
      if(crowdShake == 0){
      image(imgSpectators, 0, 25)
      } else {
      image(imgSpectators, 0, 30)
      }
      crowdShake = crowdShake + 1

    if(crowdShake > 5) { //controls shake frequency
      crowdShake = 0
    }
  } if(obj.seconds_until_alarm == 0) {
      if(crowdShake == 0){ //shakes spectators when alarm is going off
        image(imgSpectators, 0, 25)
        } else {
        image(imgSpectators, 0, 30)
        }
        crowdShake = crowdShake + 1
  
      if(crowdShake > 5) {
        crowdShake = 0
      }
  }
  
  stroke(0)
  strokeWeight(3)
  fill(110, 83, 59)
  rect(115, 170, 10, 150)//back start post

  rabbitMove = map(obj.seconds, 0, 59, 0, 920)//seconds moving rabbit

  turtleMove = map(obj.minutes, 0, 59, 0, 905)//minutes moving turtle

  if(obj.seconds < 20){ //turtle animation
    image(imgTurtleBack, turtleMove - 35, 320)
  } else if(obj.seconds > 40){
    image(imgTurtleForward, turtleMove - 35, 320)
  } else {
    image(imgTurtleMid, turtleMove - 35, 320)
  }

  if(obj.minutes > 50) {
    if(obj.seconds < 20){ //turtle smooth entrance
      image(imgTurtleBack, turtleMove - 940, 320)
    } else if(obj.seconds > 40){
      image(imgTurtleForward, turtleMove - 940, 320)
    } else {
      image(imgTurtleMid, turtleMove - 940, 320)
    }
  }

  if(obj.minutes < 9) {
    if(obj.seconds < 20){ //turtle smooth exit
      image(imgTurtleBack, turtleMove + 870, 320)
    } else if(obj.seconds > 40){
      image(imgTurtleForward, turtleMove + 870, 320)
    } else {
      image(imgTurtleMid, turtleMove + 870, 320)
    }
  }

  image(imgTree, 5, 0) //tree
  stroke(0)
  strokeWeight(3)
  fill(194, 168, 130)
  beginShape() //nap sign on tree
  vertex(910, 250)
  vertex(950, 250)
  vertex(950, 350)
  vertex(930, 370)
  vertex(910, 350)
  endShape(CLOSE)
  noStroke()
  fill(0)
  textSize(25)
  textStyle(BOLD)
  textFont('Courier New')
  text('N', 922, 260, 50, 50)
  text('A', 922, 283, 50, 50)
  text('P', 922, 306, 50, 50)
  text('S', 922, 329, 50, 50)

  if(obj.seconds == scaleCheck) { //controls rabbit exit
    rabbitSize = rabbitSize * 0.7
    levelRabbit = levelRabbit / 0.97
    scaleCheck = scaleCheck + 1
    rabbitHole = rabbitHole + 6
  } 
  
  if(obj.seconds == 0) { //resets for rabbit exit
    rabbitSize = 1
    scaleCheck = 57
    levelRabbit = 410
    rabbitHole = 890
  }

  if(obj.seconds > 56){ //controls rabbit exit
    rabbitMove = rabbitHole
  }

  push()

  translate(rabbitMove, levelRabbit)
  scale(rabbitSize)

  if(obj.millis > 750) { //rabbit animation
    image(imgHareJump, 10, 0)
  } else {
    image(imgHare, 0, 0)
  }

  pop()

  push()

  translate(rabbitMove, 410)

  if(obj.seconds > 56){
    if(obj.millis > 750) { //rabbit smooth entrance
      image(imgHareJump, -910, 0)
    } else {
      image(imgHare, -920, 0)
    }  
  } 
  pop()

  stroke(0)
  fill(110, 83, 59)
  rect(0, 340, 10, 150)//front start post
  fill(255)
  beginShape()//start banner
  vertex(10, 340)
  vertex(125, 170)
  vertex(125, 220)
  vertex(10, 390)
  endShape(CLOSE)
  fill(0)
  noStroke()
  beginShape() //checker pattern on banner
  vertex(10, 340)
  vertex(25, 320)
  vertex(25, 345)
  vertex(40, 320)
  vertex(40, 345)
  vertex(25, 365)
  vertex(25, 345)
  vertex(10, 365)
  endShape(CLOSE)
  beginShape()
  vertex(95, 215)
  vertex(110, 195)
  vertex(110, 220)
  vertex(125, 195)
  vertex(125, 220)
  vertex(110, 240)
  vertex(110, 220)
  vertex(95, 240)
  endShape(CLOSE)

  image(imgStart, 0, 0)//writing on start banner

  if(obj.minutes == 0) {
    fill(255, 128, 132)//red confetti
    rect(100, confettiFall, 20, 20)
    rect(250, confettiFall - 350, 20, 20)
    rect(500, confettiFall - 400, 20, 20)
    rect(700, confettiFall - 100, 20, 20)
    rect(800, confettiFall - 250, 20, 20)
    fill(249, 255, 128)//yellow confetti
    rect(300, confettiFall - 50, 20, 20)
    rect(100, confettiFall - 300, 20, 20)
    rect(400, confettiFall - 150, 20, 20)
    rect(750, confettiFall - 400, 20, 20)
    rect(900, confettiFall - 100, 20, 20)
    fill(200, 128, 255)//purple confetti
    rect(100, confettiFall - 200, 20, 20)
    rect(600, confettiFall, 20, 20)
    rect(400, confettiFall - 300, 20, 20)
    rect(650, confettiFall - 250, 20, 20)
    rect(500, confettiFall - 100, 20, 20)
    fill(135, 255, 233)//teal confetti
    rect(100, confettiFall - 400, 20, 20)
    rect(550, confettiFall - 300, 20, 20)
    rect(200, confettiFall - 100, 20, 20)
    rect(800, confettiFall, 20, 20)
    rect(300, confettiFall - 250, 20, 20)

    confettiFall = confettiFall + 5 //confetti falling
  } else {
    confettiFall = 0 //resets confetti
  }

  shadow = map(obj.hours, 0, 23, 0, 400)

 if(obj.hours > 18) {
    push()
    angleMode(DEGREES)
    beginClip({invert: true}) //lamp light
    triangle(100, 425, 35, 20, 850, 425)
    arc(475, 425, 749, 100, 0, 180)
    endClip()

    midnight.setAlpha(shadow-300)
    midnight.setRed(0)
    midnight.setGreen(0)
    fill(midnight)
    rect(0, 0, 960, 500) //shadow on scene increasing
    pop()

    image(imgStars, 0, 0)
  } else if(obj.hours < 5) {
    push()
    angleMode(DEGREES)
    beginClip({invert: true}) //lamp light
    triangle(100, 425, 35, 20, 850, 425)
    arc(475, 425, 749, 100, 0, 180)
    endClip()

    midnight.setAlpha(-shadow+100)
    midnight.setRed(0)
    midnight.setGreen(0)
    fill(midnight)
    rect(0, 0, 960, 500)//shadow on scene reducing
    pop()

    image(imgStars, 0, 0)
  }

  if(obj.seconds_until_alarm == 0) { //creates speech bubble when alarm is going off
    image(imgSpeech, 0, 20)
    fill(0)
    noStroke()
    textSize(25)
    textFont('Courier New')
    text('WAKE UP YA STUPID RABBIT!!!', 250, 50, 700, 50)
  }
}
