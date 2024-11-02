  //Christian Radu Dragan
//Robot primera práctica

let posx = 200;
let posy1 = 60;
let posy2 = 30;
let radi = 20;

function setup() {
  let canvas = createCanvas(400, 700);
  canvas.parent('p5js');  // Asigna el canvas al div 'p5js'
  angleMode(DEGREES);
}
function draw() {
 

  //Fondo calculando apuntado
  stroke("red");

  stroke("black");

  //Cuello
  fill("black");
  rect(180, 260, 40, -30);
  rect(170, 260, 60, -5);

  //Cabeza
  fill("rgb(151,153,141)");
  ellipse(200, 150, 150, 180);
  //sombras cara
  fill("rgba(128,128,128,0.68)");
  arc(180, 150, 110, 160, 100, 250, OPEN);
  arc(220, 150, 110, 160, 290, 80, OPEN);

  //boca
  fill("rgb(151,153,141)");
  arc(200, 175, 160, 150, 0, 180, CHORD);
  //sombras boca
  fill("rgba(128,128,128,0.68)");
  arc(200, 175, 160, 150, 110, 180, OPEN);
  arc(200, 175, 160, 150, 0, 70, OPEN);
  //Antena
  antena(posx, posy1, posx, posy2, radi);
  //Ojo izquierdo
  fill("black");
  ellipse(160, 130, 50, 80);
  fill("rgb(39,201,166)");
  ellipse(160, 130, 30, 60);
  //Brillo ojo izquierdo
  fill("rgb(123,224,203)");
  noStroke();
  ellipse(160, 130, 15, 20);
  ellipse(165, 140, 10, 5);
  stroke(1);
  //Ojo derecho
  fill("black");
  ellipse(240, 130, 50, 80);
  fill("rgb(39,201,166)");
  ellipse(240, 130, 30, 60);
  //Brillo ojo derecho
  fill("rgb(123,224,203)");
  noStroke();
  ellipse(240, 130, 15, 20);
  ellipse(245, 140, 10, 5);
  stroke(1);

 
  //Cuerpo
  fill("rgb(151,153,141)");
  beginShape();
  vertex(130, 260);
  vertex(270, 260);
  vertex(290, 460);
  vertex(110, 460);
  endShape(CLOSE);
  //Sombras cuerpo
  noStroke(0);
  fill("rgba(128,128,128,0.68)");
  quad(130, 260, 110, 460, 130, 460, 130, 260);
  quad(270, 260, 290, 460, 270, 460, 270, 260);
  stroke(1);
  //Detalles del cuerpo
  //lineas parte superior
  line(125, 310, 155, 310);
  line(155, 310, 155, 280);
  line(155, 280, 185, 280);
  line(185, 280, 185, 310);
  line(185, 310, 215, 310);
  line(215, 310, 215, 280);
  line(215, 280, 245, 280);
  line(245, 280, 245, 310);
  line(245, 310, 275, 310);
  //circulos
  fill("black");
  circle(170, 295, 10);
  circle(200, 295, 10);
  circle(230, 295, 10);
  //Apertura barriga
  fill("black");
  quad(160, 330, 240, 330, 270, 440, 130, 440);
  fill("rgb(151,153,141)");
  quad(170, 340, 230, 340, 250, 430, 150, 430);
  fill("black");
  line(165, 370, 235, 370);
  line(150, 400, 250, 400);

  //Brazo izquierdo
  //hombro izquierdo
  fill("black");
  quad(125, 310, 127, 288, 120, 288, 120, 310);
  fill("rgb(151,153,141)");
  rect(90, 265, 30, 60);
  //Brazo izquierdo
  fill("black");
  rect(70, 280, 20, 70);
  //Codo izquierdo
  fill("rgb(151,153,141)");
  rect(65, 350, 30, 30);
  //Antebrazo izquierdo
  fill("black");
  rect(70, 380, 20, 50);
  //Mano izquierda
  fill("rgb(151,153,141)");
  rect(70, 430, 20, 50);
  //Dedos izquierda
  fill("black");
  rect(90, 470, 15, 10);
  rect(55, 470, 15, 10);
  rect(55, 480, 10, 30);
  rect(95, 480, 10, 30);

  //Brazo derecho
  //Hombro derecho
  fill("black");
  quad(275, 310, 273, 288, 280, 288, 280, 310);
  fill("rgb(151,153,141)");
  rect(280, 265, 30, 60);
  //Brazo derecho
  fill("black");
  rect(310, 280, 20, 70);
  //Codo derecho
  fill("rgb(151,153,141)");
  rect(305, 350, 30, 30);
  //Antebrazo derecho
  fill("black");
  rect(310, 380, 20, 50);
  //Mano derecha
  fill("rgb(151,153,141)");
  rect(310, 430, 20, 50);
  //Dedos derecha
  fill("black");
  rect(295, 470, 15, 10);
  rect(330, 470, 15, 10);
  rect(295, 480, 10, 30);
  rect(335, 480, 10, 30);

  //Cintura
  fill("black");
  rect(120, 460, 160, 10);
  rect(160, 470, 80, 15);

  //Pierna izquierda
  //Parte alta pierna
  fill("rgb(151,153,141)");
  rect(130, 470, 30, 70);
  fill("black");
  rect(130, 490, 30, 50);
  //Rodilla izquierda
  fill("rgb(151,153,141)");
  square(125, 540, 40);
  //Parte baja izquierda
  fill("black");
  rect(130, 580, 30, 50);
  //Pie izquierdo
  fill("rgb(151,153,141)");
  rect(125, 630, 40, 10);
  fill("black");
  rect(120, 640, 50, 20);

  //Pierna derecha
  //Parte alta derecha
  fill("rgb(151,153,141)");
  rect(240, 470, 30, 70);
  fill("black");
  rect(240, 490, 30, 50);
  //rodilla derecha
  fill("rgb(151,153,141)");
  square(235, 540, 40);
  //Parte baja derecha
  fill("black");
  rect(240, 580, 30, 50);
  //Pie derecho
  fill("rgb(151,153,141)");
  rect(235, 630, 40, 10);
  fill("black");
  rect(230, 640, 50, 20);

  function puntdemira(posx, posy, radi) {
    noFill();
    circle(posx, posy, 2 * radi);
    line(posx, posy - radi, posx, posy + radi);
    line(posx - radi, posy, posx + radi, posy);
  }
  function antena(posx, posy1, posx, posy2, radi) {
    line(posx, posy1, posx, posy2);
    fill("red");
    circle(posx, posy2, radi);
  }
}