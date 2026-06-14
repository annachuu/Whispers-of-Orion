// CTCH 204 - Project Math & Language
// Title:  Whispers of Orion
// Name:   Anna Chu
// Date:   Feb. 05, 2026


// Global Variables
// star variables
let starsX = [];
let starsY = [];
let stars_size = [];
let stars_bright = [];

// constellation variables
let constX = [];
let constY = [];

// Poem taken from: https://poemverse.org/famous-poems-about-constellations/
let verses = [];
let verse1 = '"Orion! if thy radiant face';
let verse2 = 'Be not more bright';
let verse3 = 'Than was the arrow, deadly bright,';
let verse4 = "With which thou slew'st the stinging death,";
let verse5 = "Thou, who, from thy silver height,";
let verse6 = 'Seest thy pale sister in the deep beneath,';
let verse7 = 'And every fiery flying star,';
let verse8 = "With the moon's circle, and the watery gleam,";
let verse9 = 'And the invisible triumphs of the storm,';
let verse10 = 'And the red light, which, without end or term,';
let verse11 = 'The world with fiery phantoms doth inform;';
let verse12 = 'When will thy star be mellow?';
let verse13 = 'When will thy beam be yellow?';
let verse14 = 'When will thy radiance give';
let verse15 = 'Soft influence, to live';
let verse16 = 'In lips beloved, and eyes that love, and bosoms that receive?"';
let verse17 = 'Orion';
let verse18 = ' - Emma Lazarus';

let show_script = false;

// button position
let buttonX = 560;
let buttonY = 550;
let buttonW = 120;
let buttonH = 35;


function setup() {
  createCanvas(700, 600);
  stars();
  
  // initiallizing each index of the array
  // https://www.youtube.com/watch?v=VIQoUghHSxU
  verses = [verse1, verse2, verse3, verse4, verse5, verse6, verse7, verse8, verse9, verse10, verse11, verse12, verse13, verse14, verse15, verse16, verse17, verse18];
  
  // initiallizing x and y coordinates of constellation positions
  constX = [250, 195, 170, 200, 500, 215, 540, 365, 280, 550, 420, 545, 380, 350, 320, 530, 430, 290];
  constY = [ 27,  30, 110, 110, 130, 165, 170, 180, 210, 210, 230, 240, 300, 310, 320, 300, 410, 440];

}


function draw() {
  background(22, 20, 107);
  twinkle();
  constellation();
  trees();
  hover();
  button();
  if (show_script)  // IF toggle for show_script is true
  {
    script();
    poem();
  }
}


// Function to create trees
function trees()
{  
  noStroke();
  fill(0);
  
  // https://p5js.org/reference/p5/triangle/
  // center
  triangle(300, 450, 350, 400, 400, 450);    // top
  triangle(250, 520, 350, 430, 440, 500);   // mid
  triangle(220, 600, 350, 460, 480, 600);   // bottom
  
  // right most
  triangle(580, 430, 560, 550, 650, 500);
  triangle(600, 500, 550, 630, 700, 550);
  triangle(700, 600, 550, 600, 700, 550);
  
  // right 
  triangle(460, 600, 500, 530, 570, 600);
  
  // left
  triangle(130, 540, 220, 490, 245, 570);
  triangle(90, 600, 205, 530, 250, 600);
  
  // left most
  triangle(70, 430, 150, 400, 160, 480);
  triangle(20, 480, 130, 430, 150, 540);
  triangle(-100, 600, 120, 430, 130, 600);
  
}

// Function to create randomized stars
function stars()
{
  
  for (let i = 0; i < 300; i++)
  {
    // https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/2-variables/4-random
    starsX[i] = random(width);
    starsY[i] = random(height);
    stars_size[i] = random(1, 3);
    stars_bright[i] = random(150, 255);
  }
}

// Function to create twinkling effect on stars
function twinkle()
{
   
  noStroke();
  for (let i = 0; i < starsX.length; i++)
  {
    // randomizing stars brightness
    stars_bright[i] += random(-2, 2);
    stars_bright[i] = constrain(stars_bright[i], 150, 255);
    // https://p5js.org/reference/p5/constrain/ 
    
    let size = stars_size[i] + random(-0.2, 0.2);    // creating twinkle effect by randomizing star sizes

    fill(stars_bright[i]);
    circle(starsX[i], starsY[i], size);
  }  
}

// Function to create Constellations
function constellation()
{
  // reference: https://www.teidebynight.com/revealed-mysteries-hidden-within-the-orion-constellation/
  // reference: https://astrobackyard.com/orion-constellation/
  stroke(255);
  strokeWeight(0.1);
  fill(255);
  
  // left arm
  line(215, 165, 280, 210);
  circle(215, 165, 6);
  line(215, 165, 200, 110);
  circle(170, 110, 6);
  line(170, 110, 215, 165);
  line(170, 110, 200, 110);
  fill(179, 250, 255);
  circle(200, 110, 6);
  fill(255);
  line(200, 110, 250, 27);
  circle(195, 30, 6);
  line(195, 30, 170, 110);
  circle(250, 27, 6);
  
  // neck
  circle(365, 180, 6);
  line(365, 180, 420, 230);
  line(280, 210, 365, 180);
  
  // shoulder
  fill(255, 193, 117);    // orange
  circle(280, 210, 6);
  fill(255);
  circle(420, 230, 6);
  
  // bow arm
  line(420, 230, 550, 210);
  circle(500, 130, 6);
  line(500, 130, 540, 170);
  circle(540, 170, 6);
  line(540, 170, 550, 210);
  fill(167, 242, 252);
  circle(550, 210, 6);
  fill(255);
  line(550, 210, 545, 240);
  circle(545, 240, 6);
  line(545, 240, 530, 300);
  circle(530, 300, 6);
  
  // torso
  line(280, 210, 320, 320);
  line(350, 310, 380, 300);
  line(420, 230, 380, 300);
  
  // belt
  fill(200, 171, 255);
  circle(380, 300, 6);
  fill(255);
  circle(350, 310, 6);
  line(350, 310, 380, 300);
  fill(158, 219, 255);
  circle(320, 320, 6);
  fill(255);
  line(320, 320, 350, 310);
  
  // feet
  line(320, 320, 290, 440);
  circle(290, 440, 6);
  line(380, 300, 430, 410);
  fill(125, 164, 255);      // blue
  circle(430, 410, 6);
  fill(255);
  line(290, 440, 430, 410);
    
  // center
  circle(350, 360, 6);
  line(350, 360, 350, 370);
  fill(255, 145, 236);    // pink
  circle(350, 370, 6);
  fill(255);
  line(350, 370, 350, 380);
  circle(350, 380, 6);
}

function display(text_line, x, y)
{
  noStroke();
  fill(255);
  // https://p5js.org/reference/p5/textSize/ 
  textSize(14);
  // https://p5js.org/reference/p5/textAlign/ 
  textAlign(CENTER);
  text(text_line, width/2, height-40);          // text, x, y
  
  // glow on the stars hovered
  fill(255, 200);
  circle(x, y, 10);
}

// Function to display the verses of each constellation star when hovered
function hover()
{
  for (let i = 0; i< constX.length; i++)
    {
      // calculate distance between mouse and constelllation
      // https://p5js.org/reference/p5/dist/ 
      let d = dist(mouseX, mouseY, constX[i], constY[i]);  
      
      // IF within 10 pixels
      if (d < 10)
      {
        let lineIndex = i;
        // calling display function to show the verse based on star location
        display(verses[lineIndex], constX[i], constY[i]);  
      }
    }
}

// Function to create the button
function button()
{
  fill(200, 180, 100);
  rect(buttonX, buttonY, buttonW, buttonH, 10);
  
  fill(0);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Decipher", buttonX+buttonW/2, buttonY+buttonH/2);
}

// Function to position where user can press the button
function mousePressed()
{
  // IF mouse is inside the button area
  // https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/3-conditionals/3-else-if-and-or
  if (mouseX > buttonX && mouseX < buttonX + buttonW && mouseY > buttonY && mouseY < buttonY + buttonH)
  {
    show_script = !show_script;
  }
}

// Function to create the script design
function script()
{
  fill(240, 220, 180);
  stroke(150, 100, 50);
  strokeWeight(3);
  rect(50, 50, width-100, height-100, 10);
}

// Function to write the poem
function poem()
{
  fill(255);
  textSize(18);
  textAlign(LEFT, TOP);
  
  for (let i = 0; i < verses.length; i++)
  {
    text(verses[i], 80, 70 + i * 25);      // verse, x, y
    // y: start 70, for each line add space inbetween lines
  }
}

