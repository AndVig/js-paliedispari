//Pali
//variabili

const pInvia=document.getElementById('pInvia'); 
const inputTxt = document.getElementById ('text');
const pEsito=document.getElementById('pEsito');

// creo un array vuoto che conterrà le lettere della parola da analizzare 


// creo l'evento al click del bottone 
pInvia.addEventListener('click', palindromeValidator);

function palindromeValidator(){
    let parolaArray = [];
    let parola=inputTxt.value;
    let pCheck=true;
    parola=parola.toLowerCase();
    console.log(parola);
    //se non è vuota prosegue
    if(parola!==''){
        //elimino gli spazi vuoti
        for(let i=0;i<parola.length;i++){
            if(parola[i]==' '){
                console.log("campo eliminato");
            }else{
                parolaArray.push(parola[i]);
                console.log(parola[i]+" inserita");
            }
        }
    }
    console.log(parolaArray)
    let j=0
    reverse=parolaArray.length-j;
    console.log("r"+reverse);
    for(j=0;j<parolaArray.length;j++){
        if(parolaArray[j]!==parolaArray[reverse-(j+1)]){
            pCheck =false;
            console.log(reverse);
            console.log(parolaArray[j],parolaArray[reverse-(j+1)]);
            break;
        }else{
            
        }
    }
    if(pCheck){
        pEsito.innerHTML= 'La parola è Palindroma'
    }else{
        pEsito.innerHTML= 'La parola NON è Palindroma'
    }
}

//Pari dispari
//variabili

const pariInvia=document.getElementById('pariInvia');
const dispariInvia=document.getElementById('dispariInvia'); 
const inputNum = document.getElementById ('num');
const nEsito=document.getElementById('nEsito');
let pari=true;
//Distinzione pari=true dispari=false
pariInvia.addEventListener('click',function(){
    pari=true;
})
dispariInvia.addEventListener('click',function(){
    pari=false;
})
pariInvia.addEventListener('click',pod)
dispariInvia.addEventListener('click',pod)

function pod(){
    console.log(pari);
    random=getRndInteger(1,5);
    console.log(random);
    if(pari){
        if(random%2==0){
            console.log(pari, random);
            nEsito.innerHTML= 'Hai Vinto';
        }else{
            console.log(pari, random);
            nEsito.innerHTML= 'Hai Perso';
        }
    }else{
        if(random%2==0){
            console.log(pari, random);
            nEsito.innerHTML= 'Hai Perso';
        }else{
            console.log(pari, random);
            nEsito.innerHTML= 'Hai Vinto';
        }
    }
}
// function pod(){
//     console.log(pari);
//     random=getRndInteger(1,5);
//     console.log(random);
//     if(pari===(random%2==0)){
//         nEsito.innerHTML= 'Hai Vinto';
//     }else{
//         nEsito.innerHTML= 'Hai Perso';
//     }
// }
// utility
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }