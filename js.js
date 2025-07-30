




//somma,sottrazione,moltiplicazione e divisione (funzioni)

function somma(a,b){
    risultato = a + b;
    document.querySelector(".displayC").value = parseFloat(risultato.toFixed(3));
    }
function sottrazione(a,b){
     risultato = a - b;
    document.querySelector(".displayC").value = parseFloat(risultato.toFixed(3));
}
function moltiplicazione(a,b){
     risultato = a * b;
    document.querySelector(".displayC").value = parseFloat(risultato.toFixed(3));
}
function divisione(a,b){
     risultato = a / b;
    if(num2===0|| num1===0,num2===0){
        document.querySelector(".displayC").value = "Undefined";
    }else{
        document.querySelector(".displayC").value = parseFloat(risultato.toFixed(3));
    }}
 function percentuale(a){
     risultato = a / 100;
    document.querySelector(".displayC").value = parseFloat(risultato.toFixed(3));
 }   


// funzione operattive

function operate(a,op,b){
    if(op === "+"){
        somma(a,b);
    }}
function change(){
    cambio = false;
}
function Delate(){
    num1 = "";
    num2 = "";
}
function Cancel(){
   if(cambio===false){
    num2 = num2.slice(0,-1);
   }else{
    num1 = num1.slice(0,-1);
   }
    displayCvalue = displayC.value.slice(0,-1);
    document.querySelector(".displayC").value = displayCvalue;
}

// const display e button

const displayC = document.querySelector(".displayC")
const seven = document.querySelector(".pulsante7")
const eight = document.querySelector(".pulsante8")
const nine = document.querySelector(".pulsante9")
const plus = document.querySelector(".pulsantex")
const Delete = document.querySelector(".pulsanteDelete")
const four = document.querySelector(".pulsante4")
const five = document.querySelector(".pulsante5")
const six = document.querySelector(".pulsante6")
const minus = document.querySelector(".pulsante-")
const division = document.querySelector(".pulsanteD")
const one = document.querySelector(".pulsante1")
const two = document.querySelector(".pulsante2")
const three = document.querySelector(".pulsante3")
const add = document.querySelector(".pulsanteAdd")
const equal = document.querySelector(".pulsanteEqual")
const zero = document.querySelector(".pulsante0")
const percent = document.querySelector(".pulsantePercent")
const punto = document.querySelector(".pulsantePunto")
const Canc = document.querySelector(".pulsanteCanc")


//variabili
let num1 = "";
let num2 = "";
let operatore ;
let cambio = true;
let secondoNumero = false;
let risultatoPremuto = false;

//event pulsanti
punto.addEventListener("click", ()=>{
     
      if(risultatoPremuto === true){
        risultatoPremuto = false;
        cambio = true;
        num1 = "0.";
        document.querySelector(".displayC").value = "0."; 
        console.log("num1"+num1)
        console.log(risultatoPremuto)
    }else if(cambio===false){
       
        num2 += "."
        secondoNumero = true;
        document.querySelector(".displayC").value += ".";
        console.log("num2"+num2)
        console.log(secondoNumero)
        
    }
   else{
        num1 += ".";
        document.querySelector(".displayC").value += "."; 
        console.log("num1"+num1)
    }
})
seven.addEventListener("click", ()=>{
     
      if(risultatoPremuto === true){
        risultatoPremuto = false;
        num1 = "7";
        document.querySelector(".displayC").value = "7"; 
        console.log("num1"+num1)
        console.log(risultatoPremuto)
    }else if(cambio===false){
       
        num2 += "7"
        secondoNumero = true;
        document.querySelector(".displayC").value += "7";
        console.log("num2"+num2)
        console.log(secondoNumero)
        
    }
   else{
        num1 += "7";
        document.querySelector(".displayC").value += "7"; 
        console.log("num1"+num1)
    }
})

eight.addEventListener("click", ()=>{
      if(risultatoPremuto === true){
        risultatoPremuto = false;
        num1 = "8";
        document.querySelector(".displayC").value = "8"; 
        console.log("num1"+num1)
        console.log(risultatoPremuto)
    }else if(cambio===false){
       
        num2 += "8"
        secondoNumero = true;
        document.querySelector(".displayC").value += "8";
        console.log("num2"+num2)
        console.log(secondoNumero)
        
    }
   else{
        num1 += "8";
        document.querySelector(".displayC").value += "8"; 
        console.log("num1"+num1)
    }
    
})

nine.addEventListener("click", ()=>{
      if(risultatoPremuto === true){
        risultatoPremuto = false;
        num1 = "9";
        document.querySelector(".displayC").value = "9"; 
        console.log("num1"+num1)
        console.log(risultatoPremuto)
    }else if(cambio===false){
       
        num2 += "9"
        secondoNumero = true;
        document.querySelector(".displayC").value += "9";
        console.log("num2"+num2)
        console.log(secondoNumero)
        
    }
   else{
        num1 += "9";
        document.querySelector(".displayC").value += "9"; 
        console.log("num1"+num1)
    }
})

plus.addEventListener("click", ()=>{
    risultatoPremuto = false;
    change();
    if(secondoNumero === true){
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    switch(operatore){
        case "+":
            somma(num1,num2);
            num1 = num1 + num2;
            num2 =""
            secondoNumero = false;
            break;
        
        case "-":
            sottrazione(num1,num2);
            num1 = num1 - num2;
            num2 =""
            secondoNumero = false;
            break;

        case "x":
            moltiplicazione(num1,num2);
            num1 = num1 * num2;
            num2 =""
            secondoNumero = false;
            break;
        
        case "/":
            divisione(num1,num2);
            num1 = num1 / num2;
            num2 =""
            secondoNumero = false;
            break;
        case "%":
            percentuale(num1);
            num1 = num1 / 100;
            num2 =""
            secondoNumero = false;
            break;
        }}
   
   document.querySelector(".displayC").value
    += "x";
   operatore = "x";

})
Delete.addEventListener("click", ()=>{
   Delate();
   cambio = true;
   document.querySelector(".displayC").value
    = "";
   

})
four.addEventListener("click", ()=>{
     if(risultatoPremuto === true){
        risultatoPremuto = false;
        num1 = "4";
        document.querySelector(".displayC").value = "4"; 
        console.log("num1"+num1)
        console.log(risultatoPremuto)
    }else if(cambio===false){
       
        num2 += "4"
        secondoNumero = true;
        document.querySelector(".displayC").value += "4";
        console.log("num2"+num2)
        console.log(secondoNumero)
        
    }
   else{
        num1 += "4";
        document.querySelector(".displayC").value += "4"; 
        console.log("num1"+num1)
    }
})

five.addEventListener("click", ()=>{
      if(risultatoPremuto === true){
        risultatoPremuto = false;
        num1 = "5";
        document.querySelector(".displayC").value = "5"; 
        console.log("num1"+num1)
        console.log(risultatoPremuto)
    }else if(cambio===false){
       
        num2 += "5"
        secondoNumero = true;
        document.querySelector(".displayC").value += "5";
        console.log("num2"+num2)
        console.log(secondoNumero)
        
    }
   else{
        num1 += "5";
        document.querySelector(".displayC").value += "5"; 
        console.log("num1"+num1)
    }
})

six.addEventListener("click", ()=>{
     if(risultatoPremuto === true){
        risultatoPremuto = false;
        num1 = "6";
        document.querySelector(".displayC").value = "6"; 
        console.log("num1"+num1)
        console.log(risultatoPremuto)
    }else if(cambio===false){
       
        num2 += "6"
        secondoNumero = true;
        document.querySelector(".displayC").value += "6";
        console.log("num2"+num2)
        console.log(secondoNumero)
        
    }
   else{
        num1 += "6";
        document.querySelector(".displayC").value += "6"; 
        console.log("num1"+num1)
    }
})

minus.addEventListener("click", ()=>{
    risultatoPremuto = false;
    change();
    if(secondoNumero === true){
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    switch(operatore){
        case "+":
            somma(num1,num2);
            num1 = num1 + num2;
            num2 =""
            secondoNumero = false;
            break;
        
        case "-":
            sottrazione(num1,num2);
            num1 = num1 - num2;
            num2 =""
            secondoNumero = false;
            break;

        case "x":
            moltiplicazione(num1,num2);
            num1 = num1 * num2;
            num2 =""
            secondoNumero = false;
            break;
        
        case "/":
            divisione(num1,num2);
            num1 = num1 / num2;
            num2 =""
            secondoNumero = false;
            break;
        case "%":
            percentuale(num1);
            num1 = num1 / 100;
            num2 =""
            secondoNumero = false;
            break;
        }}
   document.querySelector(".displayC").value
    += "-";
   operatore = "-";
})

division.addEventListener("click", ()=>{
    risultatoPremuto = false;
    change();
    if(secondoNumero === true){
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    switch(operatore){
        case "+":
            somma(num1,num2);
            num1 = num1 + num2;
            num2 =""
            secondoNumero = false;
            break;
        
        case "-":
            sottrazione(num1,num2);
            num1 = num1 - num2;
            num2 =""
            secondoNumero = false;
            break;

        case "x":
            moltiplicazione(num1,num2);
            num1 = num1 * num2;
            num2 =""
            secondoNumero = false;
            break;
        
        case "/":
            divisione(num1,num2);
            num1 = num1 / num2;
            num2 =""
            secondoNumero = false;
            break;
        case "%":
            percentuale(num1);
            num1 = num1 / 100;
            num2 =""
            secondoNumero = false;
            break;
        }}
   document.querySelector(".displayC").value
    += "/";
   operatore = "/";
})

one.addEventListener("click", ()=>{
     if(risultatoPremuto === true){
        risultatoPremuto = false;
        num1 = "1";
        document.querySelector(".displayC").value = "1"; 
        console.log("num1"+num1)
        console.log(risultatoPremuto)
    }else if(cambio===false){
       
        num2 += "1"
        secondoNumero = true;
        document.querySelector(".displayC").value += "1";
        console.log("num2"+num2)
        console.log(secondoNumero)
        
    }
   else{
        num1 += "1";
        document.querySelector(".displayC").value += "1"; 
        console.log("num1"+num1)
    }
})

two.addEventListener("click", ()=>{
    if(risultatoPremuto === true){
        risultatoPremuto = false;
        num1 = "2";
        document.querySelector(".displayC").value = "2"; 
        console.log("num1"+num1)
        console.log(risultatoPremuto)
    }else if(cambio===false){
       
        num2 += "2"
        secondoNumero = true;
        document.querySelector(".displayC").value += "2";
        console.log("num2"+num2)
        console.log(secondoNumero)
        
    }
   else{
        num1 += "2";
        document.querySelector(".displayC").value += "2"; 
        console.log("num1"+num1)
    }
})

three.addEventListener("click", ()=>{
     if(risultatoPremuto === true){
        risultatoPremuto = false;
        num1 = "3";
        document.querySelector(".displayC").value = "3"; 
        console.log("num1"+num1)
        console.log(risultatoPremuto)
    }else if(cambio===false){
       
        num2 += "3"
        secondoNumero = true;
        document.querySelector(".displayC").value += "3";
        console.log("num2"+num2)
        console.log(secondoNumero)
        
    }
   else{
        num1 += "3";
        document.querySelector(".displayC").value += "3"; 
        console.log("num1"+num1)
    }
})
zero.addEventListener("click", ()=>{
     if(risultatoPremuto === true){
        risultatoPremuto = false;
        num1 = "0";
        document.querySelector(".displayC").value = "0"; 
        console.log("num1"+num1)
        console.log(risultatoPremuto)
    }else if(cambio===false){
       
        num2 += "0"
        secondoNumero = true;
        document.querySelector(".displayC").value += "0";
        console.log("num2"+num2)
        console.log(secondoNumero)
        
    }
   else{
        num1 += "0";
        document.querySelector(".displayC").value += "0"; 
        console.log("num1"+num1)
    }
})

add.addEventListener("click", ()=>{
    risultatoPremuto = false;
   change();
   if(secondoNumero === true){
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    switch(operatore){
        case "+":
            somma(num1,num2);
            num1 = num1 + num2;
            num2 =""
            secondoNumero = false;
            break;
        
        case "-":
            sottrazione(num1,num2);
            num1 = num1 - num2;
            num2 =""
            secondoNumero = false;
            break;

        case "x":
            moltiplicazione(num1,num2);
            num1 = num1 * num2;
            num2 =""
            secondoNumero = false;
            break;
        
        case "/":
            divisione(num1,num2);
            num1 = num1 / num2;
            num2 =""
            secondoNumero = false;
            break;
        case "%":
            percentuale(num1);
            num1 = num1 / 100;
            num2 =""
            secondoNumero = false;
            break;
        }}
   document.querySelector(".displayC").value
    += "+";
   operatore = "+";
})
percent.addEventListener("click", ()=>{
    risultatoPremuto = false;
   change();
   if(secondoNumero === true){
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    switch(operatore){
        case "+":
            somma(num1,num2);
            num1 = num1 + num2;
            num2 =""
            secondoNumero = false;
            break;
        
        case "-":
            sottrazione(num1,num2);
            num1 = num1 - num2;
            num2 =""
            secondoNumero = false;
            break;

        case "x":
            moltiplicazione(num1,num2);
            num1 = num1 * num2;
            num2 =""
            secondoNumero = false;
            break;
        
        case "/":
            divisione(num1,num2);
            num1 = num1 / num2;
            num2 =""
            secondoNumero = false;
            break;
        case "%":
            percentuale(num1);
            num1 = num1 / 100;
            num2 =""
            secondoNumero = false;
            break;
        }}
   document.querySelector(".displayC").value
    += "%";
   operatore = "%";
})
Canc.addEventListener("click", ()=>{
   Cancel();
})

equal.addEventListener("click", ()=>{
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    switch(operatore){
        case "+":
            somma(num1,num2);
            num1 = num1 + num2;
            num2 =""
            secondoNumero = false;
            risultatoPremuto = true;
            break;
        
        case "-":
            sottrazione(num1,num2);
            num1 = num1 - num2;
            num2 =""
            secondoNumero = false;
            risultatoPremuto = true;
            break;

        case "x":
            moltiplicazione(num1,num2);
            num1 = num1 * num2;
            num2 =""
            secondoNumero = false;
            risultatoPremuto = true;
            break;
        
        case "/":
            divisione(num1,num2);
            num1 = num1 / num2;
            num2 =""
            secondoNumero = false;
            risultatoPremuto = true;
            break;
        case "%":
            percentuale(num1);
            num1 = num1 / 100;
            num2 =""
            secondoNumero = false;
            risultatoPremuto = true;
            break;

    }

})


