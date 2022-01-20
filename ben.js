function primeiro(escolha) {
    if(escolha == "fugir"){
        return alert ("escolha com cuidado seu proximo passo")
    }
     
    else{
        return "Escolha errada, Mordido"
    }
}
    
    //var escolha = prompt ("Teo acordou em um hospital, escolha o que fazer no meio do caos, fugir ou esperar ?")
    //primeiro ( escolha ) 
    //alert()

    var escolha = primeiro (prompt("BEN acordou em um hospital, escolha o que fazer no meio do caos, fugir ou esperar ?"));
    alert(escolha)
    


    function segundo(escolha) {
        if(escolha ==  "sim"){
        return alert ("boa escolha")}
        
        else{
            return "escolha errada, voce morrerá em breve"
        }

    }

    //var escolha2 = prompt ("Você encontrou 2 amigos com armas, aceita juntar-se a eles? sim ou não?")
    //segundo (escolha2)
    //alert(escolha)

    var escolha2 = segundo (prompt("Você encontrou 2 amigos com armas, aceita juntar-se a eles? sim ou não?"));
    alert(escolha2)


    function terceiro(escolha) {
        if(escolha ==  "cabeça"){
        return alert ("zumbi morto")}
        
        else{
            return "escolha errada, voce foi mordido"
        }

    }
    var escolha = terceiro (prompt("1 zumbi te atacou você tem uma bala, qual parte do corpo você deve mirar?"));
    alert(escolha)