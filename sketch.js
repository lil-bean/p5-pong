/* *
 * Aileen Lian <al7168@bard.edu>
 * IDEA 135
 * Sketch 8: p5 pong
 * I worked alone on this assigment with assistance from Keith O'Hara's base code. 
 * The rain effect on the page is from the following source: 
 * In creating this game, I focused on the aesthetics and attempted to create a crisp, clean space of gameplay. 
 */

var paddle_x, paddle_y;
var paddle_w, paddle_h;
var paddle_step;

var ball_x, ball_y;
var ball_r;
var ball_x_step, ball_y_step;

var score;
var lives;


function setup() {
  
  createCanvas(500, 300);
  paddle_h = 16;
  paddle_w = 6 * paddle_h;
  paddle_x = width / 2;
  paddle_y = height - paddle_h;
  paddle_step = 0;
  ball_r = 13;
  score = 0;
  lives = 5;
  reset();
}

function draw() {

  background(0, 0, mouseY-400, 100);
  

  // move paddle
  //paddle_x += (mouseX - paddle_x) * .1;
  paddle_x = paddle_x + paddle_step;

  // is the ball hitting the right or left wall?
  if (ball_x - ball_r < 0 || ball_x + ball_r > width) {
    ball_x_step = -ball_x_step;
  }

  // hitting the top?
  if (ball_y - ball_r < 0) {
    ball_y_step = -ball_y_step;
  }

  // hitting the paddle?
  if (ball_y + ball_r > paddle_y) {
    if (ball_x >= paddle_x && ball_x <= paddle_x + paddle_w) {
      ball_y_step = -ball_y_step;
      ball_y = paddle_y - ball_r;
    }
    else if (ball_y + ball_r > paddle_y){
      reset();
    }
  }

  // move ball by ball_x_step and ball_y_step
  ball_x = ball_x + ball_x_step;
  ball_y = ball_y + ball_y_step;

  //draw ball
  noStroke();
  fill(255, 158, 194);
  ellipse(ball_x, ball_y, ball_r * 2, ball_r * 2);
  fill(255, 170, 202);
  ellipse(ball_x, ball_y, ball_r + 8, ball_r + 8);
  fill(255, 188, 213);
  ellipse(ball_x, ball_y, ball_r + 6, ball_r + 6);
  fill(255, 214, 229);
  ellipse(ball_x, ball_y, ball_r + 4, ball_r + 4);
  fill(255, 237, 243);
  ellipse(ball_x, ball_y, ball_r + 1, ball_r + 1);

  // draw paddle
  stroke(255);
  fill(255);
  rect(paddle_x, paddle_y, paddle_w, paddle_h);
  fill(221, 239, 255);
  rect(paddle_x+1, paddle_y+1, paddle_w-2, paddle_h-2);

strokeWeight(1);
fill(221, 239, 255, 100);
    
//score change
  if (frameCount==600){
    score=10;
  }
  
  if (frameCount==1200){
    score=20;
  }
  
  if (frameCount==1800){
    score=30;
  }
  
  if (frameCount==2400){
    score=40;
  }
  
  if (frameCount==3000){
    score=50;
  }
  
  if (frameCount==3600){
    score=60;
  }
  
  if (frameCount==4200){
    score=70;
  }
  
   if (frameCount==4800){
    score=80;
  }
  
   if (frameCount==5400){
    score=90;
  }
  
   if (frameCount==6000){
    score=100;
  }
  
  
  
//score
    noStroke();
  if (score==0){
    color(255, 255, 255, 60);
    text("points: 0", 40, 40);
  }
  
  if (score==10){
    text("points: 10", 40, 40);
  }
  
  if (score==20){
    text("points: 20", 40, 40);
  }
  
  if (score==30){
    text("points: 30", 40, 40);
  }
  
  if (score==40){
    text("points: 40", 40, 40);
  }
  
    if (score==50){
    text("points: 50", 40, 40);
  }
  
   if (score==60){
    text("points: 60", 40, 40);
  }
  
  
//lives count
   if (ball_y + ball_r > paddle_y) {
    if (ball_x >= paddle_x && ball_x <= paddle_x + paddle_w) {
      ball_y_step = -ball_y_step;
      ball_y = paddle_y - ball_r;
    }
    else if (ball_y + ball_r > paddle_y){
      lives=lives-1;;
    }

  }
  
  
//lives
  if (lives==5){
    noStroke();
    color(255, 255, 255, 100);
    text("♡♡♡♡♡", 400, 40);
  }
  
    if (lives==4){
    noStroke();
    text("♡♡♡♡", 400, 40);
  }
  
    if (lives==3){
    noStroke();
    text("♡♡♡", 400, 40);
      
  }
  
    if (lives==3){
    noStroke();
    text("♡♡♡", 400, 40);
  }
  
    if (lives==2){
    noStroke();
    text("♡♡", 400, 40);
  }
  
    if (lives==1){
    noStroke();
    text("♡", 400, 40);
  }
  
  
//game over  
  if (lives==0){
    stroke(0);
    fill(15, 84, 196, 100);
    background(255);
    text("GAME OVER. REFRESH TO BEGIN AGAIN.", height/2, width/2);
    reset();
  }

  
  if (ball_y + ball_r > paddle_y){
    noStroke();
    lives==4
    
  }
}

function reset() {
  ball_x = random(ball_r, width - ball_r);
  ball_y = random(ball_r, height / 2);
  ball_x_step = random(-3, 3);
  ball_y_step = random(1, 3);
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    paddle_step = -3;
  } else if (keyCode == RIGHT_ARROW) {
    paddle_step = 3;
  } else if (key == ' ') {
    reset();
  }
}

function keyReleased() {
  paddle_step = 0;
}


