




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
      punto.style.background = "#4B584F";
      setTimeout(() =>{
        punto.style.background = "#38423B";
      },200);
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
       seven.style.background = "#4B584F";
      setTimeout(() =>{
        seven.style.background = "#38423B";
      },200);
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
     eight.style.background = "#4B584F";
      setTimeout(() =>{
        eight.style.background = "#38423B";
      },200);
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
     nine.style.background = "#4B584F";
      setTimeout(() =>{
        nine.style.background = "#38423B";
      },200);
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
    plus.style.background = "#00E070 ";
      setTimeout(() =>{
        plus.style.background = "#20FC8F";
      },200);
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
     Delete.style.background = "#5A8781";
      setTimeout(() =>{
        Delete.style.background = "#3F5E5A";
      },200);
   Delate();
   cambio = true;
   document.querySelector(".displayC").value
    = "";
   

})
four.addEventListener("click", ()=>{
     four.style.background = "#4B584F";
      setTimeout(() =>{
        four.style.background = "#38423B";
      },200);
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
     five.style.background = "#4B584F";
      setTimeout(() =>{
        five.style.background = "#38423B";
      },200);
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
     six.style.background = "#4B584F";
      setTimeout(() =>{
        six.style.background = "#38423B";
      },200);
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
     minus.style.background = "#00E070 ";
      setTimeout(() =>{
        minus.style.background = "#20FC8F";
      },200);
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
     division.style.background = "#00E070 ";
      setTimeout(() =>{
       division.style.background = "#20FC8F";
      },200);
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
     one.style.background = "#4B584F";
      setTimeout(() =>{
        one.style.background = "#38423B";
      },200);
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
     two.style.background = "#4B584F";
      setTimeout(() =>{
        two.style.background = "#38423B";
      },200);
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
     three.style.background = "#4B584F";
      setTimeout(() =>{
        three.style.background = "#38423B";
      },200);
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
     zero.style.background = "#4B584F";
      setTimeout(() =>{
        zero.style.background = "#38423B";
      },200);
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
     add.style.background = "#00E070 ";
      setTimeout(() =>{
        add.style.background = "#20FC8F";
      },200);
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
    percent.style.background = "#5A8781";
      setTimeout(() =>{
       percent.style.background = "#3F5E5A";
      },200);
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
   Canc.style.background = "#5A8781";
      setTimeout(() =>{
        Canc.style.background = "#3F5E5A";
      },200);
   Cancel();
})

equal.addEventListener("click", ()=>{
     equal.style.background = "#00E070 ";
      setTimeout(() =>{
        equal.style.background = "#20FC8F";
      },200);
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


