//Pali
//variabili

const pInvia=document.getElementById('pInvia'); 
const inputTxt = document.getElementById ('data');
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