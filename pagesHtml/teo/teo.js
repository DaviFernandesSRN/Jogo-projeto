function primeiro(escolha) {
    if(escolha == "fugir"){
        return alert ("escolha com cuidado seu proximo passo")}
     
    else{
        return "Escolha errada, Mordido"
    }
}
    

    var escolha = primeiro (prompt("Teo acordou em um hospital, escolha o que fazer no meio do caos, fugir ou esperar ?"));



    function segundo(escolha) {
        if(escolha ==  "sim"){
        return alert ("boa escolha")}
        
        else{
            return "escolha errada, voce morrerá em breve"
        }

    }

    var escolha2 = segundo (prompt("Você encontrou 2 amigos com armas, aceita juntar-se a eles? sim ou não?"));
    


    function terceiro(escolha) {
        if(escolha ==  "cabeça"){
        return alert ("zumbi morto")}
        
        else{
            return "escolha errada, voce foi mordido"
        }

    }
    var escolha = terceiro (prompt("1 zumbi te atacou você tem uma bala, qual parte do corpo você deve mirar?"));
 

