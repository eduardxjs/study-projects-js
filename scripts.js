// Dados dos veículos
const veiculos = {
    carros: [
        { nome: 'Hb20', marca: 'Hyundai', preco: 38999, km: 20000 }
    ],
    motos: [
        { nome: 'CG Titan 160cc', marca: 'Honda', preco: 18999, km: 2000 }
    ],
    caminhoes: [
        { nome: 'FH 540', marca: 'Volvo', preco: 80000, km: 50000 }
    ]
};

// Função para criar os elementos HTML para cada tipo de veículo
function gerarVeiculos(tipo, lista) {
    const container = document.getElementById(`lista-${tipo}`);
    lista.forEach(veiculo => {
        const div = document.createElement('div');
        div.classList.add('caixa-veiculo');

        const h3 = document.createElement('h3');
        h3.innerHTML = `<em>${veiculo.nome}</em>: <span class="valor-veiculo">R$ ${veiculo.preco.toFixed(2).replace('.', ',')}</span>`;
        div.appendChild(h3);

        const p = document.createElement('p');
        p.classList.add('paragrafo-veiculo');
        p.innerHTML = `Marca: <em>${veiculo.marca}</em><br> Modelo: <span class="modelo-veiculo"><em>${veiculo.nome}</em></span><br>Kilometragem: <span class="km-veiculo"><em>${veiculo.km} km</em></span>`;
        div.appendChild(p);

        const button = document.createElement('button');
        button.classList.add('button-veiculo');
        button.textContent = `Comprar ${tipo.charAt(0).toUpperCase() + tipo.slice(1)}`;
        button.onclick = () => abrirModal(veiculo.nome); // Abrir o modal ao clicar no botão
        div.appendChild(button);

        container.appendChild(div);
    });
}

// Função para abrir o modal
function abrirModal(nomeVeiculo) {
    document.getElementById('modal').style.display = 'block';
    const modalTitle = document.querySelector('.modal-content h2');
    modalTitle.innerText = `Formulário de Compra para ${nomeVeiculo}`;
}

// Função para fechar o modal
document.getElementById('closeModal').onclick = function () {
    document.getElementById('modal').style.display = 'none';
}

// Função para validar o formulário
document.getElementById('compraForm').onsubmit = function (e) {
    e.preventDefault(); // Evita o envio do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    if (nome === '' || email === '' || telefone === '') {
        alert('Todos os campos são obrigatórios!');
    } else {
        alert('Compra realizada com sucesso!');
        document.getElementById('modal').style.display = 'none'; // Fechar o modal após a compra
    }
};

// Gerar os veículos na página
gerarVeiculos('carros', veiculos.carros);
gerarVeiculos('motos', veiculos.motos);
gerarVeiculos('caminhoes', veiculos.caminhoes);