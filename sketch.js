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
    fill(0, 0, 0, 100);
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

requestAnimFrame = (function() {
return window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||
window.oRequestAnimationFrame ||
window.msRequestAnimationFrame ||
function(callback) {
window.setTimeout(callback, 1000/60);
};
})();

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var width = 0;
var height = 0;

window.onresize = function onresize() {
	width = canvas.width = window.innerWidth;
	height = canvas.height = window.innerHeight;
}

window.onresize();

var mouse = {
	X : 0,
	Y : 0
}

window.onmousemove = function onmousemove(event) {
	mouse.X = event.clientX;
	mouse.Y = event.clientY;
}

var particules = [];
var gouttes = [];
var nombrebase = 5;
var nombreb = 2;

var controls = {
	rain : 2,
	Object : "Nothing",
	alpha : 1,
	color : 200,
	auto : false,
	opacity : 1,
	saturation : 100,
	lightness : 50,
	back : 100,
	red : 0,
	green : 0,
	blue : 0,
	multi : false,
	speed : 2
};

function Rain(X, Y, nombre) {
	if (!nombre) {
		nombre = nombreb;
	}
	while (nombre--) {
		particules.push( 
		{
			vitesseX : (Math.random() * 0.25),
			vitesseY : (Math.random() * 9) + 1,
			X : X,
			Y : Y,
			alpha : 1,
			couleur : "hsla(" + controls.color + "," + controls.saturation + "%, " + controls.lightness + "%," + controls.opacity + ")",
		})
	}
}

function explosion(X, Y, couleur, nombre) {
	if (!nombre) {
		nombre = nombrebase;
	}
	while (nombre--) {
		gouttes.push( 
		{
			vitesseX : (Math.random() * 4-2	),
			vitesseY : (Math.random() * -4 ),
			X : X,
			Y : Y,
			radius : 0.65 + Math.floor(Math.random() *1.6),
			alpha : 1,
			couleur : couleur
		})
	}
}

function rendu(ctx) {

	if (controls.multi == true) {
		controls.color = Math.random()*360;
	}

	ctx.save();
	ctx.fillStyle = 'rgba('+controls.red+','+controls.green+','+controls.blue+',' + controls.alpha + ')';
	ctx.fillRect(0, 0, width, height);
	
	var particuleslocales = particules;
	var goutteslocales = gouttes;
	var tau = Math.PI * 2;

	for (var i = 0, particulesactives; particulesactives = particuleslocales[i]; i++) {
			
		ctx.globalAlpha = particulesactives.alpha;
		ctx.fillStyle = particulesactives.couleur;
		ctx.fillRect(particulesactives.X, particulesactives.Y, particulesactives.vitesseY/4, particulesactives.vitesseY);
	}

	for (var i = 0, gouttesactives; gouttesactives = goutteslocales[i]; i++) {
			
		ctx.globalAlpha = gouttesactives.alpha;
		ctx.fillStyle = gouttesactives.couleur;
		
		ctx.beginPath();
		ctx.arc(gouttesactives.X, gouttesactives.Y, gouttesactives.radius, 0, tau);
		ctx.fill();
	}
		ctx.strokeStyle = "white";
		ctx.lineWidth   = 2;

		if (controls.Object == "Umbrella") {
			ctx.beginPath();
			ctx.arc(mouse.X, mouse.Y+10, 138, 1 * Math.PI, 2 * Math.PI, false);
			ctx.lineWidth = 3;
			ctx.strokeStyle = "hsla(0,100%,100%,1)";
			ctx.stroke();
		}
		if (controls.Object == "Cup") {
			ctx.beginPath();
			ctx.arc(mouse.X, mouse.Y+10, 143, 1 * Math.PI, 2 * Math.PI, true);
			ctx.lineWidth = 3;
			ctx.strokeStyle = "hsla(0,100%,100%,1)";
			ctx.stroke();
		}
		if (controls.Object == "Circle") {
			ctx.beginPath();
			ctx.arc(mouse.X, mouse.Y+10, 138, 1 * Math.PI, 3 * Math.PI, false);
			ctx.lineWidth = 3;
			ctx.strokeStyle = "hsla(0,100%,100%,1)";
			ctx.stroke();
		}
	ctx.restore();
	
	if (controls.auto) {
		controls.color += controls.speed;
		if (controls.color >=360) {
			controls.color = 0;
		}
	}
}

function update() {

	var particuleslocales = particules;
	var goutteslocales = gouttes;
	
	for (var i = 0, particulesactives; particulesactives = particuleslocales[i]; i++) {
		particulesactives.X += particulesactives.vitesseX;
		particulesactives.Y += particulesactives.vitesseY+5;
		if (particulesactives.Y > height-15) {
			particuleslocales.splice(i--, 1);
			explosion(particulesactives.X, particulesactives.Y, particulesactives.couleur);
		}
		var umbrella = (particulesactives.X - mouse.X)*(particulesactives.X - mouse.X) + (particulesactives.Y - mouse.Y)*(particulesactives.Y - mouse.Y);
			if (controls.Object == "Umbrella") {
				if (umbrella < 20000 && umbrella > 10000 && particulesactives.Y < mouse.Y) {
					explosion(particulesactives.X, particulesactives.Y, particulesactives.couleur);
					particuleslocales.splice(i--, 1);
				}
			}
			if (controls.Object == "Cup") {
				if (umbrella > 20000 && umbrella < 30000 && particulesactives.X+138 > mouse.X && particulesactives.X-138 < mouse.X && particulesactives.Y > mouse.Y) {
					explosion(particulesactives.X, particulesactives.Y, particulesactives.couleur);
					particuleslocales.splice(i--, 1);
				}
			}
			if (controls.Object == "Circle") {
				if (umbrella < 20000) {
					explosion(particulesactives.X, particulesactives.Y, particulesactives.couleur);
					particuleslocales.splice(i--, 1);
				}
			}
	}

	for (var i = 0, gouttesactives; gouttesactives = goutteslocales[i]; i++) {
		gouttesactives.X += gouttesactives.vitesseX;
		gouttesactives.Y += gouttesactives.vitesseY;
		gouttesactives.radius -= 0.075;
		if (gouttesactives.alpha > 0) {
			gouttesactives.alpha -= 0.005;
		} else {
			gouttesactives.alpha = 0;
		}
		if (gouttesactives.radius < 0) {
			goutteslocales.splice(i--, 1);
		}
	}

	var i = controls.rain;
	while (i--) {
		Rain(Math.floor((Math.random()*width)), -15);
	}
}

function Screenshot() {
	window.open(canvas.toDataURL());
}

window.onload = function() {
	var gui = new dat.GUI();
	gui.add(controls, 'rain', 1, 10).name("Rain intensity").step(1);
	gui.add(controls, 'alpha', 0.1, 1).name("Alpha").step(0.1);
	gui.add(controls, 'color', 0, 360).name("Color").step(1).listen();
	gui.add(controls, 'auto').name("Automatic color");
	gui.add(controls, 'speed', 1, 10).name("Speed color").step(1);
	gui.add(controls, 'multi').name("Multicolor");
	gui.add(controls, 'saturation', 0, 100).name("Saturation").step(1);
	gui.add(controls, 'lightness', 0, 100).name("Lightness").step(1);
	gui.add(controls, 'opacity', 0.0, 1).name("Opacity").step(0.1);
	gui.add(controls, 'Object', ['Nothing','Circle','Umbrella', 'Cup']);
	gui.add(window, 'Screenshot');
	var Background = gui.addFolder('Background color');
	Background.add(controls, 'red', 0, 255).step(1);
	Background.add(controls, 'green', 0, 255).step(1);
	Background.add(controls, 'blue', 0, 255).step(1);
};

(function boucle() {
	requestAnimFrame(boucle);
	update();
	rendu(ctx);
})();
