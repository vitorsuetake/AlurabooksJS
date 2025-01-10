let btnOrdenarProPreco = document.getElementById('btnOrdenarPorPreco');

btnOrdenarProPreco.addEventListener ('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco(){
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    exibirOsLivrosNaTela(livrosOrdenados);
}

