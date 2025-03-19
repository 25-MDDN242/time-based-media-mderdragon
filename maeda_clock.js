// Update this function to draw you own maeda clock on a 960x500 canvas
let first = 100;


function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(50); //  beige
  // fill(200); // dark grey
  // textSize(40);
  // textAlign(CENTER, CENTER);
  // text("YOUR MAEDA CLOCK CODE GOES HERE", width/2, height/2);

  translate(460, 130)
  angleMode(DEGREES)
  rotate(5)

  fill(100)
  textSize(40)

  if(obj.seconds == 0){
    fill(252, 3, 3)
    text('00', -250, -100)
  } else if(obj.minutes == 0){
    fill(255)
    textStyle(BOLD)
    text('00', -250, -100)
  } else if(obj.hours == 0){
    fill(200)
    text('00', -250, -100)
  } else {
    fill(100)
    text('00', -250, -100)
  }

  if(obj.seconds == 1){
    fill(252, 3, 3)
    text('01', -250, -50)
  } else if(obj.minutes == 1){
    fill(255)
    textStyle(BOLD)
    text('01', -250, -50)
  } else if(obj.hours == 1){
    fill(200)
    text('01', -250, -50)
  } else {
    fill(100)
    text('01', -250, -50)
  }

  if(obj.seconds == 2){
    fill(252, 3, 3)
    text('02', -250, 0)
  } else if(obj.minutes == 2){
    fill(255)
    textStyle(BOLD)
    text('02', -250, 0)
  } else if(obj.hours == 2){
    fill(200)
    text('02', -250, 0)
  } else {
    fill(100)
    text('02', -250, 0)
  }

  if(obj.seconds == 3){
    fill(252, 3, 3)
    text('03', -250, 50)
  } else if(obj.minutes == 3){
    fill(255)
    textStyle(BOLD)
    text('03', -250, 50)
  } else if(obj.hours == 3){
    fill(200)
    text('03', -250, 50)
  } else {
    fill(100)
    text('03', -250, 50)
  }

  if(obj.seconds == 4){
    fill(252, 3, 3)
    text('04', -250, 100)
  } else if(obj.minutes == 4){
    fill(255)
    textStyle(BOLD)
    text('04', -250, 100)
  } else if(obj.hours == 4){
    fill(200)
    text('04', -250, 100)
  } else {
    fill(100)
    text('04', -250, 100)
  }

  if(obj.seconds == 5){
    fill(252, 3, 3)
    text('05', -250, 150)
  } else if(obj.minutes == 5){
    fill(255)
    textStyle(BOLD)
    text('05', -250, 150)
  } else if(obj.hours == 5){
    fill(200)
    text('05', -250, 150)
  } else {
    fill(100)
    text('05', -250, 150)
  }

  if(obj.seconds == 6){
    fill(252, 3, 3)
    text('06', -250, 200)
  } else if(obj.minutes == 6){
    fill(255)
    textStyle(BOLD)
    text('06', -250, 200)
  } else if(obj.hours == 6){
    fill(200)
    text('06', -250, 200)
  } else {
    fill(100)
    text('06', -250, 200)
  }

  if(obj.seconds == 7){
    fill(252, 3, 3)
    text('07', -250, 250)
  } else if(obj.minutes == 7){
    fill(255)
    textStyle(BOLD)
    text('07', -250, 250)
  } else if(obj.hours == 7){
    fill(200)
    text('07', -250, 250)
  } else {
    fill(100)
    text('07', -250, 250)
  }

  if(obj.seconds == 8){
    fill(252, 3, 3)
    text('08', -250, 300)
  } else if(obj.minutes == 8){
    fill(255)
    textStyle(BOLD)
    text('08', -250, 300)
  } else if(obj.hours == 8){
    fill(200)
    text('08', -250, 300)
  } else {
    fill(100)
    text('08', -250, 300)
  }

  if(obj.seconds == 9){
    fill(252, 3, 3)
    text('09', -250, 350)
  } else if(obj.minutes == 9){
    fill(255)
    textStyle(BOLD)
    text('09', -250, 350)
  } else if(obj.hours == 9){
    fill(200)
    text('09', -250, 350)
  } else {
    fill(100)
    text('09', -250, 350)
  }

  fill(100)

  text('10', -150, -100)

  text('11', -150, -50)

  text('12', -150, 0)

  text('13', -150, 50)

  text('14', -150, 100)

  text('15', -150, 150)

  text('16', -150, 200)

  text('17', -150, 250)

  text('18', -150, 300)

  text('19', -150, 350)

  text('20', -50, -100)

  text('21', -50, -50)

  text('22', -50, 0)

  text('23', -50, 50)

  text('24', -50, 100)

  text('25', -50, 150)

  text('26', -50, 200)

  text('27', -50, 250)

  text('28', -50, 300)

  text('29', -50, 350)

  text('30', 50, -100)

  text('31', 50, -50)

  text('32', 50, 0)

  text('33', 50, 50)

  text('34', 50, 100)

  text('35', 50, 150)

  text('36', 50, 200)

  text('37', 50, 250)

  text('38', 50, 300)

  text('39', 50, 350)

  text('40', 150, -100)

  text('41', 150, -50)

  text('42', 150, 0)

  text('43', 150, 50)

  text('44', 150, 100)

  text('45',  150, 150)

  text('46', 150, 200)

  text('47', 150, 250)

  text('48', 150, 300)

  text('49', 150, 350)

  text('50', 250, -100)

  text('51', 250, -50)

  text('52', 250, 0)

  text('53', 250, 50)

  text('54', 250, 100)

  text('55', 250, 150)

  text('56', 250, 200)

  text('57', 250, 250)

  text('58', 250, 300)

  text('59', 250, 350)



  // rect(320, 220, 20, 20)//colons
  // rect(320, 280, 20, 20)
  // rect(640, 220, 20, 20)
  // rect(640, 280, 20, 20)
  
  // rect(first+30, 190, 20, 20) //first hour digit consistent
  // rect(first+60, 190, 20, 20)
  // rect(first+60, 220, 20, 20)
  // rect(first+60, 250, 20, 20)
  // rect(first+60, 310, 20, 20)

  // if(obj.hours < 10) { //first digit hour 0-9
  //   rect(first, 190, 20, 20)
  //   rect(first, 220, 20, 20)
  //   rect(first, 250, 20, 20)
  //   rect(first, 280, 20, 20)
  //   rect(first, 310, 20, 20)
  //   rect(first+30, 310, 20, 20)
  //   rect(first+60, 280, 20, 20)

  // } if(obj.hours > 19) { //first digit hour 20-24
  //   rect(first, 190, 20, 20)
  //   rect(first, 250, 20, 20)
  //   rect(first, 280, 20, 20)
  //   rect(first, 310, 20, 20)
  //   rect(first+60, 220, 20, 20)
  //   rect(first+30, 310, 20, 20)

  // } else { //first digit hour 10-19
  //   rect(first+60, 280, 20, 20)
  // }

  // rect(first*2+60, 190, 20, 20) //second hour digit consistent

  // if(obj.hour == 8 || 18) {
  //   rect(first*2, 190, 20, 20)
  //   rect(first*2, 220, 20, 20)
  //   rect(first*2, 250, 20, 20)
  //   rect(first*2, 280, 20, 20)
  //   rect(first*2, 310, 20, 20)
  //   rect(first*2+30, 190, 20, 20)
  //   rect(first*2+30, 250, 20, 20)
  //   rect(first*2+30, 310, 20, 20)
  //   rect(first*2+60, 220, 20, 20)
  //   rect(first*2+60, 250, 20, 20)
  //   rect(first*2+60, 280, 20, 20)
  //   rect(first*2+60, 310, 20, 20)
  // }
  
  // if(obj.hour == 9 || 19) {
  //   rect(first*2, 190, 20, 20)
  //   rect(first*2, 220, 20, 20)
  //   rect(first*2, 250, 20, 20)
  //   rect(first*2, 280, 20, 20)
  //   rect(first*2, 310, 20, 20)
  //   rect(first*2+30, 190, 20, 20)
  //   rect(first*2+30, 250, 20, 20)
  //   rect(first*2+30, 310, 20, 20)
  //   rect(first*2+60, 220, 20, 20)
  //   rect(first*2+60, 250, 20, 20)
  //   rect(first*2+60, 310, 20, 20)
  // }


  //eight symbol, base

  // rect(first, 190, 20, 20) //1,1 - needed for 2 3 4 5 6 7 8 9 0

  // rect(first, 220, 20, 20) //1,2 - needed for 4 5 6 8 9 0

  // rect(first, 250, 20, 20) //1,3 - needed for 2 3 4 5 6 8 9 0

  // rect(first, 280, 20, 20) //1,4 - needed for 2 6 7 8 0

  // rect(first, 310, 20, 20) //1,5 - needed for 2 3 5 6 7 8 9 0

  // rect(first+30, 190, 20, 20) //2,1 - needed for 1 2 3 5 6 7 8 9 0

  // rect(first+30, 250, 20, 20) //2,3 - needed for 2 3 4 5 6 7 8 9 

  // rect(first+30, 310, 20, 20) //2,5 - needed for 2 3 5 6 8 9 0

  // rect(first+60, 190, 20, 20) //3,1 - needed for 1 2 3 4 5 6 7 8 9 0

  // rect(first+60, 220, 20, 20) //3,2 - needed for 1 2 3 4 7 8 9 0

  // rect(first+60, 250, 20, 20) //3,3 - needed for 1 2 3 4 5 6 8 9 0

  // rect(first+60, 280, 20, 20) //3,4 - needed for 1 3 4 5 6 8 0

  // rect(first+60, 310, 20, 20) //3,5 - needed for 1 2 3 4 5 6 8 9 0




}
