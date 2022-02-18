//Controle de interface
let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let imagens = document.querySelector('.image');
let numeros = document.querySelector('.numero');

let etapaAtual = 0;
let numero = "";


function comecarEtapa(){
    let etapa = dados[etapaAtual];
    let numerosHtml = '';

    numero = '';

    for(let i = 0; i < etapa.numeros; i++){
        if(i === 0){
            numerosHtml.innerHTML += '<div class="numero pisca"></div>';    
        }
        numerosHtml.innerHTML += '<div class="numero"></div>';
    }

    seuVotoPara.style.display="none";
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = "";

    aviso.style.display = 'none';
    imagens.innerHTML = '';
    numeros.innerHTML = numerosHtml;
}



//Funções
function atualizarInterface(){
    let etapa = dados[etapaAtual];
    let candidato = etapa.candidatos.filter((item)=>{
            if(item.numero === numero){
                return true;
            } else{
                return false;
            }
        });
    if(candidato.length > 0){
        candidato = candidato[0];
        seuVotoPara.style.display = 'block';
        descricao.innerHTML = `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}`;
        let fotoHtml = ''
        for(let i in candidato.foto){
            fotoHtml += `<div class="image"><img src="imagens/${candidato.foto.url}" alt=""></div>`
        }
        imagens.innerHTML = fotoHtml;
    }else{
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>'
    }
}

function clicou(n){
    let elNumero = document.querySelector('.numero.pisca');
    if(elNumero !== null ){
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;
    }

    elNumero.classList.remove('pisca');
    if(elNumero.nextElementSibling !== null){
        elNumero.nextElementSibling.classList.add('pisca');
    }else{
        atualizarInterface();
    }
}

function branco(){
    window.alert("Clicou em branco")
}

function confirma(){
    window.alert("Clicou em confirmar")
}

function corrija(){
    comecarEtapa();
}



comecarEtapa()

