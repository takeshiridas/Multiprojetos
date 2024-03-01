let listaDeAmigos = [];

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('nome-amigo').addEventListener("keydown", function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            adicionar();
        }
    });
});

function adicionar() {
    let nome = document.getElementById('nome-amigo').value.trim(); 

    if (nome === '') {
        alert('Digite o nome do amigo!');
    } else if (listaDeAmigos.includes(nome)) {
        alert('Este amigo já foi adicionado!');
    } else {
        listaDeAmigos.push(nome);
        exibirListaDeAmigos();
        document.getElementById('nome-amigo').value = ''; 
    }
    atualizarLista();
    atualizarSorteio();
}

function exibirListaDeAmigos() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    listaDeAmigos.forEach(function (nome) {
        
        if (lista.innerHTML === '') {
            lista.innerHTML += nome;
        }
        else {
            lista.innerHTML += ', ' + nome;
        }
    });
}

function sortear() {
    embaralha(listaDeAmigos);
    let sorteio = document.getElementById('lista-sorteio');

    if(listaDeAmigos.length < 4) {
        alert('Adicione mais amigos para realizar o sorteio!');
    }

    else {
        for(let i = 0; i < listaDeAmigos.length; i++) {
            if (i === listaDeAmigos.length - 1) {
                sorteio.innerHTML += listaDeAmigos[i] + ' tirou ' + listaDeAmigos[0] + '<br>';
                break;
            }
            sorteio.innerHTML += listaDeAmigos[i] + ' tirou ' + listaDeAmigos[i+1] + '<br>';
        }
    }

}

function excluirAmigo(index) {
    listaDeAmigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}


function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    for (let i = 0; i < listaDeAmigos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = listaDeAmigos[i];
        paragrafo.style.display = 'inline'; // Define o estilo como 'inline'

        // Adiciona um espaço após o nome do amigo
        if (i !== listaDeAmigos.length - 1) {
            paragrafo.textContent += ', ';
        }
       
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });

        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}

function reiniciar() {
    listaDeAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}