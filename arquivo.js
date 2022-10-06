//variavel da bolinha

let xbolinha = 300
let ybolinha = 200
let diametro = 23
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadeXbolinha = 5
let velocidadeYbolinha = 5

// variavel da raquete

let xraquete = 5
let yraquete = 150
let raquetecomprimento = 10
let raquetealtura = 90

//variavel do oponente

let xraqueteoponente = 585
let yraqueteoponente = 150
let velocidadeyoponente = 5 ;

let colidiu = false

// placar do jogo

let meuspontos = 0;
let pontosdooponente = 0;

// sons do jogo 

let raquetada;
let ponto;
let trilha;

function preload (){ 
 trilha = loadSound ( "trilha.mp3");
 ponto = loadSound ("ponto.mp3");
 raquetada = loadSound ("raquetada.mp3"); 
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostrabolinha();
  movimentabolinha ();
  vereficacolisaoborda ();
  mostraraquete (xraquete, yraquete);
  movimentaminharaquete ();
  //vereficacolisaoraquete ();
  vereficacolisaoraquete (xraquete , yraquete);
  mostraraqueteoponente(xraqueteoponente,yraqueteoponente);
  movimentaraqueteoponente ();
  vereficacolisaoraquete (xraqueteoponente, yraqueteoponente);
  incluiplacar ();
  marcaponto ();
  
  

function mostrabolinha () { circle (xbolinha, ybolinha, diametro);}    

function movimentabolinha () { xbolinha += velocidadeXbolinha ;
  ybolinha += velocidadeYbolinha ;
   }     

function vereficacolisaoborda () {  if (xbolinha + raio > width || xbolinha - raio < 0){ velocidadeXbolinha *= -1}
  if (ybolinha + raio > height || ybolinha - raio < 0 ){velocidadeYbolinha *= -1}
  }}

function mostraraquete (x , y) {rect (x, y, raquetecomprimento, raquetealtura)
 }

function mostraraqueteoponente () {rect (xraqueteoponente, yraqueteoponente, raquetecomprimento, raquetealtura)}

function  movimentaminharaquete () 
{if (keyIsDown (UP_ARROW)){ yraquete -=10; }
 if (keyIsDown (DOWN_ARROW)){ yraquete +=10; }                                 }
function vereficacolisaoraquete (){
  if (xbolinha -raio < xraquete + raquetecomprimento && ybolinha - raio < yraquete + raquetealtura && yb -olinha + raio > yraquete ){velocidadeXbolinha *=-1 
 raquetad.play();}}

function vereficacolisaoraquete (x , y){ 
  colidiu = collideRectCircle(x,y, raquetecomprimento, raquetealtura, xbolinha, ybolinha, raio);
  if(colidiu){velocidadeXbolinha *= -1
  raquetada.play();           }
}



function movimentaraqueteoponente (){ if (keyIsDown (87)){ yraqueteoponente -=10; }
 if (keyIsDown (83)){ yraqueteoponente +=10; }                               }

function incluiplacar (){
  stroke (255);
  textAlign (CENTER);
  textSize (16);
  fill(color (255,140, 0))
  rect (150, 10, 40, 20)
  fill(255)
  text (meuspontos, 170 , 26 ); 
  fill(color (255,140, 0))
  rect ( 450, 10, 40, 20);
  fill(255)
  text (pontosdooponente, 470, 26);}
  

function marcaponto () {
if (xbolinha > 589){ meuspontos += 1 
                    ponto.play(); }
if (xbolinha < 11 ){pontosdooponente += 1 
                    ponto.play ();}

}


