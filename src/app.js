//minutos y segundnos
var seconds = 5;
var minutes = 1;

//control para el boton de pausa
var contro =0;
var controBotellaA =0;
var controBotellaB =0;

//variables de las botellas
var segBotellaA=60;
var segBotellaB=60;

//fecha actual
const fecha = new Date();

//se muestra en pantalla los minutos y segundos iniciales
document.getElementById("min").textContent="0"+minutes;
document.getElementById("seg").textContent="0"+seconds;


var verificadorPrin=false;
var verificadorBoteA=false;
var verificadorBoteB=false;


    function ocultButton(){
        document.getElementById('min+').disabled=true;
            document.getElementById('min-').disabled=true;
            document.getElementById('seg+').disabled=true;
            document.getElementById('seg-').disabled=true;
            document.getElementById('restar').disabled=true;
            document.getElementById("star").style.backgroundColor= "red";
    }


    function showButton(){
        document.getElementById('min+').disabled=false;
        document.getElementById('min-').disabled=false;
        document.getElementById('seg+').disabled=false;
        document.getElementById('seg-').disabled=false;
        document.getElementById('restar').disabled=false;
        document.getElementById("star").style.backgroundColor = "green";
    }

    function mainClock(){
        if(verificadorPrin==false){
            ocultButton();
            contro = setInterval(function(){
                    if(seconds<=0){
                        if(minutes==0){
                            showButton();
                            seconds=0;
                            verificadorPrin=!verificadorPrin;
                            clearInterval(contro);
                        }else{
                            seconds=60; 
                            lessMinutes();
                        }
                    }else{
                        if(Math.round(seconds)<10){
                            document.getElementById('audio').play();
                            seconds-=0.01;
                                document.getElementById('seg').innerHTML="0"+Math.round(seconds);
                            
                        }else{
                            seconds-=0.01;
                            if(Math.round(seconds)==60){
                                document.getElementById('seg').innerHTML="00";
                            }else{
                                document.getElementById('seg').innerHTML=Math.round(seconds);
                            }
                               
                        }
                        if(minutes<10){
                            document.getElementById('min').innerHTML="0"+minutes;
                        }else{
                            document.getElementById('min').innerHTML=minutes;
                        }
                    }
            },10);
            verificadorPrin=!verificadorPrin;
        }else{
            verificadorPrin=false;
            showButton()
            clearInterval(contro);
        }
    
    }

//funion de resetar el coronometro 
    function restart(){
        minutes=0;
        seconds=0;
        document.getElementById("min").textContent="00";
        document.getElementById("seg").textContent="00";
    }

    function moreMinutes(){
        if(minutes<59){
            minutes+=1;
            if(minutes<10){
                document.getElementById("min").textContent="0"+ minutes;  
            }else{
                document.getElementById("min").textContent=minutes;
            }
        }else{
            minutes=0;
            document.getElementById("min").textContent="0"+minutes;
        }
        
    }

    function lessMinutes(){
        if(minutes>0){
            minutes-=1;
            if(minutes<10){
                document.getElementById("min").textContent="0"+ minutes;
            }else{
                document.getElementById("min").textContent=minutes;
            }
    }else{
        minutes=59;
        document.getElementById("min").textContent=minutes;
    }
}

    function moreSeconds(){
        if(Math.round(seconds)<59){
            seconds+=1;
            if(seconds<10){
                document.getElementById("seg").textContent="0"+ Math.round(seconds);
            }else{
                document.getElementById("seg").textContent=Math.round(seconds);
            }
        }else{
            seconds=0;
            document.getElementById("seg").textContent="0"+Math.round(seconds);

        }
    }


    function lessSeconds(){
        if(Math.round(seconds)>0){
            seconds-=1;
            if(seconds<10){
                document.getElementById("seg").textContent="0"+ Math.round(seconds);
                
            }else{
                document.getElementById("seg").textContent=Math.round(seconds);
            }
            
        }else{
            seconds=59;
            document.getElementById("seg").textContent=Math.round(seconds);
        }
        
    }

    function botellaA(){
        if(verificadorBoteA==false){
            controBotellaA = setInterval(function(){
                    if(Math.round(segBotellaA) > 0){
                            segBotellaA-=1;
                            document.getElementById('botellaA').innerHTML=segBotellaA.toFixed(0);
                    }
            },1000);
            verificadorBoteA=true;
        }else{
            verificadorBoteA=false;
            clearInterval(controBotellaA);
        }
    }



    function botellaB(){
        if(verificadorBoteB==false){
            controBotellaB = setInterval(function(){
                    if(Math.round(segBotellaB) > 0){
                            segBotellaB-=1;
                            document.getElementById('botellaB').innerHTML=segBotellaB.toFixed(0);
                    }
            },1000);
            verificadorBoteB=true;
        }else{
            verificadorBoteB=false;
            clearInterval(controBotellaB);
        }
        
    }

    function verificar(){
        if(minutes>0 || seconds>0){
            document.getElementById('star').disabled=false;
        }else{
            document.getElementById('star').disabled=false;
        }
    }

    function launchFullScreen(element) {
        if(element.requestFullScreen) {
          element.requestFullScreen();
        } else if(element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if(element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        }
      }

      function nada(){
            console.log("hola");
      }


