let pista = parseInt(document.getElementById('qtd-pista').textContent);
let superior = parseInt(document.getElementById('qtd-superior').textContent);
let inferior = parseInt(document.getElementById('qtd-inferior').textContent);

function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);

    if(tipo == 'pista') {
        comprarPista(qtd);
    }
    else if(tipo == 'superior') {
        comprarSuperior(qtd);
    }
    else if(tipo == 'inferior') {
        comprarInferior(qtd);
    }
    document.getElementById('qtd').value = '';
    if(pista == 0 && superior == 0 && inferior == 0) {
        alert('Ingressos esgotados');
    }
}

function comprarPista(qtd) {
    if(qtd > pista) {
        alert('Quantidade indisponível para Pista');    
    }
    else {
        pista -= qtd;
        document.getElementById('qtd-pista').textContent = pista;
        alert(`${qtd} ingressos para Pista comprados`);
    }
}

function comprarSuperior(qtd) {
    if(qtd > superior) {
        alert('Quantidade indisponível para Superior');
    }
    else {
        superior -= qtd;
        document.getElementById('qtd-superior').textContent = superior;
        alert(`${qtd} ingressos para Superior comprados`);
    }
}

function comprarInferior(qtd) {
    if(qtd > inferior) {
        alert('Quantidade indisponível para Inferior');
    }
    else {
        inferior -= qtd;
        document.getElementById('qtd-inferior').textContent = inferior;
        alert(`${qtd} ingressos para Inferior comprados`);
    }
}    