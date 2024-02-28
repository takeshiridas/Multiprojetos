let total = 0;
document.getElementById('lista-produtos').innerHTML = '';
let campoTotal = document.getElementById('valor-total');
campoTotal.textContent = 'R$0';

function adicionar() {

    //recuperar os valores nome do produto, quantidade e valores
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnit = produto.split('R$')[1];
    let quantidade =  document.getElementById('quantidade').value;
    if(quantidade <= 0) {
        alert('Quantidade inválida. Verifique!');
        return;
    }

    //calcular o preco, o subtotal
    let preco = quantidade * valorUnit;

    //Adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnit}</span>
  </section>`;

    //atualizar o valor total
    total += preco;
    campoTotal.textContent = `R$${total}`;
    document.getElementById('quantidade').value = '';
    
}

function limpar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('lista-produtos').innerHTML = '';
    campoTotal.textContent = 'R$0'  ;
}