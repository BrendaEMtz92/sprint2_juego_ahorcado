var palabras = ["ALURA", "ORACLE", "LATAM", "CONSOLA", "CANVAS", "CSS", "HTML", "MEXICO", "ONE"];
var tablero = document.getElementById("tablero").getContext("2d");
var palabraSecreta = "";


var letrasPermitidas = "QWERTYUIOPASDFGHJKLZXCVBNM";
var letraAceptada = "";
var letraRechazada = "";
var letraIncorrecta = "";


pantallaInicio();


function iniciarJuego() {
    
    pantallaJuego();
    escogerPalabraSecreta();
    dibujarCanvas();
    dibujarLineas();
    dibujarBase();
    window.addEventListener("keydown", verificarCaracter);
}


function escogerPalabraSecreta() {
    var palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];
    palabraSecreta = palabraAleatoria
    console.log(palabraSecreta)
}


function verificarCaracter(evento) {
    var letra = evento.key;
    var conteoUnico = new Set (palabraSecreta).size;
    
    if (letrasPermitidas.includes(letra) && !letraAceptada.includes(letra) && palabraSecreta.includes(letra)) {
        letraAceptada = letraAceptada + letra;
        dibujarLetraCorrecta(letra);
        if( conteoUnico == letraAceptada.length){
            swal("Felicidades", "Descubriste la palabra secreta", "success");
            window.removeEventListener("keydown", verificarCaracter);
        }
        console.log("Letras Aceptadas: " + letraAceptada);
    }


    if (!palabraSecreta.includes(letra) && !letraIncorrecta.includes(letra) && !letraAceptada.includes(letra) &&        letrasPermitidas.includes(letra)){
        letraIncorrecta = letraIncorrecta + letra;
        dibujarLetraIncorrecta(letra);
        realizarIntentos();
        console.log("Letras Incorrecta: " + letraIncorrecta);
    }
}

function realizarIntentos (){
    for (var intentos = 0; intentos < 8  ; intentos++){
        if(letraIncorrecta.length ==1){
            dibujarHorcaUno();}
        }
            if (letraIncorrecta.length ==2){
                 dibujarHorcaDos();
                }
                     if(letraIncorrecta.length ==3){
                         dibujarHorcaTres();
                        }
                        
                        if (letraIncorrecta.length ==4){
                              dibujarCabeza();
                        }
                                if(letraIncorrecta.length ==5){
                                     dibujarTronco();
                            }
            
                                     if (letraIncorrecta.length ==6){
                                         dibujarBrazoIzquierdo();
                                }
                                         if (letraIncorrecta.length ==7){
                                                dibujarBrazoDerecho();
                                    }
                                            if (letraIncorrecta.length ==8){
                                                dibujarPiernaIzquierda();
                                        }

                                                     if (letraIncorrecta.length ==9){
                                                        dibujarPiernaDerecha();
                                                        swal("Fin del Juego", "La palabra secreta era: " + palabraSecreta , "error" );
                                                        window.removeEventListener("keydown", verificarCaracter);
                                            }
       
        

        }

        function agregarPalabraNueva(){
            pantallaNuevaPalabra();
            window.removeEventListener("keydown", verificarCaracter);  
        }


        function guardarPalabraNueva (){ 
            
            var palabraNueva = document.getElementById("mensajeEntrada").value ;
            if (palabraNueva.length <= 8 ){
            palabras.push(palabraNueva);
            swal("Palabra Agregada", "La nueva palabra se encuentra disponible en el juego " , "success" );
            pantallaGuardar();
            document.getElementById("mensajeEntrada").value="";
            iniciarJuego();
    
                }

            if (palabraNueva.length > 8){
            swal("Palabra No Agregada", "La nueva palabra debe contener un máximo de 8 carcateres para ser ingresada al juego" , "error" );
            document.getElementById("mensajeEntrada").value="";
            pantallaNuevaPalabra();
            
            }
            
        }

        function cancelar(){
            pantallaInicio();
        }


        function desistir(){

            pantallaInicio();
            letraAceptada = "";
            letraRechazada = "";
            letraIncorrecta = "";
            palabraSecreta = "";
            
        }

        function nuevoJuego(){
            letraAceptada = "";
            letraRechazada = "";
            letraIncorrecta = "";
            palabraSecreta = "";
            iniciarJuego();
        }



        function pantallaInicio() {
            document.getElementById("iniciarJuego").style.display = "" ;
            document.getElementById("agregarPalabra").style.display = "";

            document.getElementById("tablero").style.display = "none";
            document.getElementById("nuevoJuego").style.display = "none" ;
            document.getElementById("desistir").style.display = "none";

            document.getElementById("mensajeEntrada").style.display = "none";
            document.getElementById("aviso").style.display = "none" ;
            document.getElementById("reglas").style.display = "none";
            document.getElementById("guardarPalabra").style.display = "none" ;
            document.getElementById("cancelar").style.display = "none";
            
            }

        function pantallaJuego(){

            document.getElementById("iniciarJuego").style.display = "none";
            document.getElementById("agregarPalabra").style.display = "none"
            document.getElementById("tablero").style.display = "";
            document.getElementById("nuevoJuego").style.display = "" ;
            document.getElementById("desistir").style.display = "";

        }
       

        function pantallaNuevaPalabra(){
            document.getElementById("iniciarJuego").style.display = "none" ;
            document.getElementById("agregarPalabra").style.display = "none";

            document.getElementById("mensajeEntrada").style.display = "";
            document.getElementById("aviso").style.display = "" ;
            document.getElementById("reglas").style.display = "";
            document.getElementById("guardarPalabra").style.display = "" ;
            document.getElementById("cancelar").style.display = "";

        }


        function pantallaGuardar (){
            
            pantallaJuego();
            document.getElementById("mensajeEntrada").style.display = "none";
            document.getElementById("aviso").style.display = "none" ;
            document.getElementById("reglas").style.display = "none";
            document.getElementById("guardarPalabra").style.display = "none" ;
            document.getElementById("cancelar").style.display = "none";
        }
       
        


        
       