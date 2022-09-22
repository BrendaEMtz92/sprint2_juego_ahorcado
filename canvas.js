function dibujarCanvas() {

    var fondo=new Image();
    fondo.src="imagenes/bg.png";
    var pat = tablero.createPattern(fondo, "repeat");

    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = pat;
    tablero.strokeStyle = "#8A3871";
    
    tablero.fillRect(0, 0, 1200, 860);
    tablero.beginPath();
    tablero.stroke();
    tablero.closePath();
}

function dibujarLineas() {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

    var anchura = 600 / palabraSecreta.length;

    for (var i = 0; i < palabraSecreta.length; i++) {
        tablero.moveTo(500 + (anchura * i), 550);
        tablero.lineTo(550 + (anchura * i), 550);

    }
    tablero.stroke();
    tablero.closePath();
}

function dibujarBase(){

    var base = new Image();
    base.src ="imagenes/base.png"; 
    base.onload = function (){
    tablero.drawImage (base, 600, 400);

    }
}

function dibujarLetraCorrecta(letra) {

    var anchura = 600 / palabraSecreta.length;

    for (var i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] == letra) {
            tablero.fillStyle = " #0A3871 ";
            tablero.font = "48px Rubik Dirt";
            tablero.textAlign = "start";
            tablero.fillText(letra, 500 + (anchura * i) ,500 );
        }
    
    }
}

function dibujarLetraIncorrecta(letra) {

    var anchura = 600 / palabraSecreta.length;

    for (var i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] != letraAceptada) {
            tablero.fillStyle = "#495057";
            tablero.font = "24px Rubik Dirt";
            tablero.textAlign = "start";
            tablero.fillText(letraIncorrecta, 500,610 );
        }
    }
}




function dibujarHorcaUno(){

    var horcaUno = new Image();
    horcaUno.src ="imagenes/horcauno.png"; 
    horcaUno.onload = function (){
    tablero.drawImage (horcaUno, 680, 45);
    }
}


function dibujarHorcaDos(){

    var horcaDos = new Image();
    horcaDos.src ="imagenes/horcados.png"; 
    horcaDos.onload = function (){
    tablero.drawImage (horcaDos, 680, 45);
    }
}
 
function dibujarHorcaTres(){

    var horcaTres = new Image();
    horcaTres.src ="imagenes/horcatres.png"; 
    horcaTres.onload = function (){
    tablero.drawImage (horcaTres, 855, 45);
    }
}
 

function dibujarCabeza(){

    var cabeza = new Image();
    cabeza.src ="imagenes/cabeza.png"; 
    cabeza.onload = function (){
    tablero.drawImage (cabeza, 826, 92);
    }
}

function dibujarTronco(){

    var tronco = new Image();
    tronco.src ="imagenes/tronco.png"; 
    tronco.onload = function (){
    tablero.drawImage (tronco, 855, 150);
    }
}

function dibujarBrazoIzquierdo(){

    var brazoIzquierdo = new Image();
    brazoIzquierdo.src ="imagenes/braizq.png"; 
    brazoIzquierdo.onload = function (){
    tablero.drawImage (brazoIzquierdo, 820, 150);
    }
}

function dibujarBrazoDerecho(){

    var brazoDerecho = new Image();
    brazoDerecho.src ="imagenes/brader.png"; 
    brazoDerecho.onload = function (){
    tablero.drawImage (brazoDerecho, 858, 150);
    }   
}


function dibujarPiernaIzquierda(){

    var piernaIzquierda = new Image();
    piernaIzquierda.src ="imagenes/pieizq.png"; 
    piernaIzquierda.onload = function (){
    tablero.drawImage (piernaIzquierda, 822, 279);
    }   
}

function dibujarPiernaDerecha(){

    var piernaDerecha = new Image();
    piernaDerecha.src ="imagenes/pieder.png"; 
    piernaDerecha.onload = function (){
    tablero.drawImage (piernaDerecha, 856, 279);
    }   
}