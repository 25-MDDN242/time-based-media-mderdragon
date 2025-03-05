// Update this function to draw you own maeda clock on a 960x500 canvas
let first = 100;


function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(50); //  beige
  // fill(200); // dark grey
  // textSize(40);
  // textAlign(CENTER, CENTER);
  // text("YOUR MAEDA CLOCK CODE GOES HERE", width/2, height/2);

  rect(320, 220, 20, 20)//colons
  rect(320, 280, 20, 20)
  rect(640, 220, 20, 20)
  rect(640, 280, 20, 20)
  
  rect(first+30, 190, 20, 20) //first hour digit consistent
  rect(first+60, 190, 20, 20)
  rect(first+60, 220, 20, 20)
  rect(first+60, 250, 20, 20)
  rect(first+60, 310, 20, 20)

  if(obj.hours < 10) { //first digit hour 0-9
    rect(first, 190, 20, 20)
    rect(first, 220, 20, 20)
    rect(first, 250, 20, 20)
    rect(first, 280, 20, 20)
    rect(first, 310, 20, 20)
    rect(first+30, 310, 20, 20)
    rect(first+60, 280, 20, 20)

  } if(obj.hours > 19) { //first digit hour 20-24
    rect(first, 190, 20, 20)
    rect(first, 250, 20, 20)
    rect(first, 280, 20, 20)
    rect(first, 310, 20, 20)
    rect(first+60, 220, 20, 20)
    rect(first+30, 310, 20, 20)

  } else { //first digit hour 10-19
    rect(first+60, 280, 20, 20)
  }

  rect(first*2+60, 190, 20, 20) //second hour digit consistent

  if(obj.hour == 8 || 18) {
    rect(first*2, 190, 20, 20)
    rect(first*2, 220, 20, 20)
    rect(first*2, 250, 20, 20)
    rect(first*2, 280, 20, 20)
    rect(first*2, 310, 20, 20)
    rect(first*2+30, 190, 20, 20)
    rect(first*2+30, 250, 20, 20)
    rect(first*2+30, 310, 20, 20)
    rect(first*2+60, 220, 20, 20)
    rect(first*2+60, 250, 20, 20)
    rect(first*2+60, 280, 20, 20)
    rect(first*2+60, 310, 20, 20)
  }
  
  if(obj.hour == 9 || 19) {
    rect(first*2, 190, 20, 20)
    rect(first*2, 220, 20, 20)
    rect(first*2, 250, 20, 20)
    rect(first*2, 280, 20, 20)
    rect(first*2, 310, 20, 20)
    rect(first*2+30, 190, 20, 20)
    rect(first*2+30, 250, 20, 20)
    rect(first*2+30, 310, 20, 20)
    rect(first*2+60, 220, 20, 20)
    rect(first*2+60, 250, 20, 20)
    rect(first*2+60, 310, 20, 20)
  }


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
