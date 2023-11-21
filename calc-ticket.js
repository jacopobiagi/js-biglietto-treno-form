let nome = document.getElementById("nomePasseggero");
let distanza = document.getElementById("distanza");
let eta = document.getElementById("etaPasseggero");
let biglietto = document.getElementById("biglietto");
let costo = document.getElementById("costoComplessivo");
let distanzaNumerica = parseFloat(distanza.value);


document.getElementById("submit").addEventListener("click",
    function(){
        console.log(nome.value)

        //Controllo se i campi sono stati tutti riempiti
        if(nome.value && distanza.value && eta.value!=="0"){

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
                console.log(distanza.value)
                costo.innerHTML =  prezzoNetto.toFixed(2);

            }else{
                distanza.style.borderColor = "red";
            }

        }else{
            nome.style.borderColor = "red";
            distanza.style.borderColor = "red";
            eta.style.borderColor = "red";
        }
        
    }
)