let nome = document.getElementById("nomePasseggero");
let distanza = document.getElementById("distanza");
let eta = document.getElementById("etaPasseggero");
let biglietto = document.getElementById("biglietto");
let costo = document.getElementById("costoComplessivo");
let passeggero = document.getElementById("mioNome");


document.getElementById("submit").addEventListener("click",
    function(){

        //Controllo se i campi sono stati tutti riempiti
        if(nome.value && distanza.value && eta.value!=="0"){

            let distanzaNumerica = parseInt(distanza.value);//conversione del valore

            nome.style.borderColor = "#ced4da";
            eta.style.borderColor = "#ced4da";
            //controllo se il campo della distanza è stato inserito correttamente
            if(!isNaN(distanzaNumerica)){

                biglietto.classList.remove("d-none");
            
                let prezzoLordo = distanzaNumerica * 0.21;
                let prezzoNetto = 0;


                if(eta.value == '1'){
                    prezzoNetto = prezzoLordo - (prezzoLordo * 0.2);

                }else if(eta.value == '3'){
                    prezzoNetto = prezzoLordo - (prezzoLordo * 0.45);

                }
                else{
                    prezzoNetto = prezzoLordo;
                }
                
                distanza.style.borderColor = "#ced4da";
                costo.innerHTML =  prezzoNetto.toFixed(2);
                passeggero.innerHTML = nome.value;

            }else{
                distanza.style.borderColor = "red";
            }

        }else{
            nome.style.borderColor = "red";
            distanza.style.borderColor = "red";
            eta.style.borderColor = "red";
        }
        
    }
);

document.getElementById("delete").addEventListener("click",

    function(){
        biglietto.classList.add("d-none");
        nome.value = "";
        distanza.value = "";
        eta.value = "";
    }
)