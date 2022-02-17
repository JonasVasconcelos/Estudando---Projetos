let PrimeiroNumero = true
let Igual = false

function insert(num){
    if(PrimeiroNumero){
        if(Igual==false){
            clean()
            resultado.innerHTML += num
            PrimeiroNumero = false
        } 
    }else{
        if(Igual==false){
            resultado.innerHTML += num
        } else{
            if(num == '0' | num == "1" | num == '2' | num == '3' | num == '4' | num == '5' | num == '6' | num == '7' | num == '8' | num == '9'){
                clean()
                resultado.innerHTML += num
                Igual = false
            }else{
                resultado.innerHTML += num
                Igual = false
            }
        }
    }
}

function clean(){
    resultado.innerHTML = ""
}

function back(){
    var resultado = document.getElementById("resultado").innerHTML
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length-1)
}

function calcular(){
    var resultado = document.getElementById("resultado").innerHTML
    if(resultado){
        document.getElementById("resultado").innerHTML = eval(resultado)
        Igual = true
    }
}

// Falta checar a existencia de virgulas no display
// Falta arredondar o resultado em caso de muitas casas decimais
