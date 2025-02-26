// Update this function to draw you own maeda clock on a 960x500 canvas
let firstHour = 200;

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
  
  // rect(firstHour, 190, 20, 20)//0
  // rect(firstHour, 220, 20, 20)
  // rect(firstHour, 250, 20, 20)
  // rect(firstHour, 280, 20, 20)
  // rect(firstHour, 310, 20, 20)
  // rect(firstHour+30, 190, 20, 20)
  // rect(firstHour+30, 310, 20, 20)
  // rect(firstHour+60, 190, 20, 20)
  // rect(firstHour+60, 220, 20, 20)
  // rect(firstHour+60, 250, 20, 20)
  // rect(firstHour+60, 280, 20, 20)
  // rect(firstHour+60, 310, 20, 20)

  // rect(firstHour+30, 190, 20, 20)//1
  // rect(firstHour+60, 190, 20, 20)
  // rect(firstHour+60, 220, 20, 20)
  // rect(firstHour+60, 250, 20, 20)
  // rect(firstHour+60, 280, 20, 20)
  // rect(firstHour+60, 310, 20, 20)

  rect(firstHour, 190, 20, 20)
  rect(firstHour+30, 190, 20, 20)
  rect(firstHour+60, 190, 20, 20)
  rect(firstHour+60, 220, 20, 20)
  rect(firstHour, 250, 20, 20)
  rect(firstHour+30, 250, 20, 20)
  rect(firstHour+60, 250, 20, 20)
  rect(firstHour, 280, 20, 20)
  rect(firstHour, 310, 20, 20)
  rect(firstHour+30, 310, 20, 20)
  rect(firstHour+60, 310, 20, 20)

}
