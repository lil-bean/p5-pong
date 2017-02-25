/* *
 * Aileen Lian <al7168@bard.edu>
 * IDEA 135
 * Sketch 8: p5 pong
 * I worked alone on this assigment with assistance from Keith O'Hara's base code. 
 * The rain effect on the page is from the following source: http://www.htmlfreecodes.com/Rain_on_page.htm
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

function () {
    var t = (function () {
        var z = navigator.appVersion.toLowerCase();
        z = (z.indexOf("msie") > -1) ? parseInt(z.replace(/.*msie[ ]/, "").match(/^[0-9]+/)) : 0;
        return {
            ltIE6: z <= 6 && z != 0,
            ltIE7: z <= 7 && z != 0,
            ltIE8: z <= 8 && z != 0,
            ltIE9: z <= 9 && z != 0,
            ie: z != 0,
            firefox: window.globalStorage,
            opera: window.opera,
            webkit: !document.uniqueID && !window.opera && !window.globalStorage && window.localStorage,
            mobile: /android|iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase())
        }
    })();
    var o = "codes";
    var g = 100;
    var u = 2;
    var s = 15;
    var q = 3;
    var w = 1;
    var v = 0;
    var y = "png";
    var j = "http://htmlfreecodes.com/";
    var b = j + o + "/";
    var k = document.body;
    var c = "giffy_bp_" + o;
    var e = new Date().getTime();
    var d = 10;
    var f = 20;
    var l = 50;
    var p = 1000;
    var a = false;
    var r = new Array();
    var n = new Array();
    var x = 0;
    var h = {
        x: 0,
        y: 0
    };
    window[c] = {
        init: function () {
            for (i = 0; i < g; i++) {
                var A = document.createElement("div");
                A.style.position = "fixed";
                A.style.overflow = "hidden";
                A.style.visibility = "hidden";
                A.style.top = 0;
                A.style.left = 0;
                A.style.zIndex = p + i;
                var z = document.createElement("img");
                z.style.border = "0";
                A.appendChild(z);
                k.appendChild(A);
                r[i] = {
                    obj: A,
                    img: z,
                    action: 0,
                    from: h,
                    to: h,
                    begin: 0,
                    duration: 0
                }
            }
            for (i = 0; i < u; i++) {
                n[i] = new Image();
                n[i].src = b + "b" + (i + 1) + "." + y + (v == 1 ? "?" + e : "")
            }
            m.action();
            x = setInterval(m.action, d)
        },
        action: function () {
            if (!a) {
                for (C = 0; C < u; C++) {
                    if (n[C].height == 0) {
                        return
                    }
                }
                a = true
            }
            var A = {
                height: m.getViewHeight(),
                width: m.getViewWidth(),
                top: 0,
                bottom: m.getViewHeight()
            };
            for (var C = 0; C < g; C++) {
                switch (r[C].action) {
                case 0:
                    if (m.getRandomNum(l) == 0) {
                        var B = n[m.getRandomNum(u)];
                        r[C].img.src = B.src;
                        var z = m.getRandomNum(A.width - B.width);
                        r[C].from = {
                            x: z,
                            y: 0
                        };
                        r[C].to = {
                            x: z,
                            y: A.height
                        };
                        r[C].begin = new Date() - 0;
                        r[C].duration = A.height * f / s;
                        if (q > 0) {
                            r[C].duration *= (1 + (0.1 * (m.getRandomNum(2) == 0 ? 1 : -1) * m.getRandomNum(q)))
                        }
                        r[C].action = 1;
                        m.move(r[C].obj, r[C].from);
                        m.setVisible(r[C].obj)
                    }
                    break;
                case 1:
                    var D = new Date() - r[C].begin;
                    if (D < r[C].duration) {
                        m.move(r[C].obj, m.easingPos(D, r[C].from, r[C].to, r[C].duration))
                    } else {
                        m.setHidden(r[C].obj);
                        r[C].action = 0
                    }
                    break
                }
            }
        },
        getRandomNum: function (z) {
            return Math.floor(Math.random() * z)
        },
        getViewHeight: function () {
            if (window.innerHeight) {
                return window.innerHeight
            }
            if (document.documentElement && document.documentElement.clientHeight) {
                return document.documentElement.clientHeight
            } else {
                if (document.body && document.body.clientHeight) {
                    return document.body.clientHeight
                }
            }
            return 0
        },
        getViewWidth: function () {
            if (window.innerWidth) {
                return window.innerWidth
            }
            if (document.documentElement && document.documentElement.clientWidth) {
                return document.documentElement.clientWidth
            } else {
                if (document.body && document.body.clientWidth) {
                    return document.body.clientWidth
                }
            }
            return 0
        },
        getViewTop: function () {
            if (window.scrollY) {
                return window.scrollY
            }
            if (window.pageYOffset) {
                return window.pageYOffset
            }
            if (document.documentElement && document.documentElement.scrollTop) {
                return document.documentElement.scrollTop
            } else {
                if (document.body && document.body.scrollTop) {
                    return document.body.scrollTop
                }
            }
            return 0
        },
        getViewBottom: function () {
            return m.getViewTop() + m.getViewHeight()
        },
        getViewLeft: function () {
            if (window.scrollX) {
                return window.scrollX
            }
            if (window.pageXOffset) {
                return window.pageXOffset
            }
            if (document.documentElement && document.documentElement.scrollLeft) {
                return document.documentElement.scrollLeft
            } else {
                if (document.body && document.body.scrollLeft) {
                    return document.body.scrollLeft
                }
            }
            return 0
        },
        getViewRight: function () {
            return m.getViewLeft() + m.getViewWidth()
        },
        easing: function (A, C, B, z) {
            return (B - C) * A / z + C
        },
        easingPos: function (A, C, B, z) {
            return {
                x: m.easing(A, C.x, B.x, z),
                y: m.easing(A, C.y, B.y, z)
            }
        },
        move: function (z, A) {
            z.style.top = A.y + "px";
            z.style.left = A.x + "px"
        },
        setHidden: function (z) {
            z.style.visibility = "hidden"
        },
        setVisible: function (z) {
            z.style.visibility = "visible"
        }
    };
    var m = window[c];
    m.init()
}();
