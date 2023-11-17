
/*1- Cadastrar veículo
-> Ao entrar nesta opção o sistema deve pedir os seguintes
dados: modelo, marca, ano, cor e preco.
-> O veículo deve ser adicionado na lista de veículos que
armazena todos os veículos cadastrados
-> Todo veículo deve ter um identificador único. Este
identificador deve ser gerado de forma automática*/ 

const veiculos = [{
    id: 1,
    modelo:'MX-5',
    marca: 'Miata',
    ano:1995,
    cor:'Branco',
    preco:80.000
},
{
    id: 2,
    modelo:'Civic',
    marca: 'Honda',
    ano: 2007,
    cor:'Preto',
    preco:70.000
},
{
    id: 3,
    modelo:'MX-5',
    marca: 'Miata',
    ano:1997,
    cor:'Preto',
    preco:85.000
}]

const inicial = Number(prompt(`
Bem-vindo ao sistema de CRUD de veículos:
No momento, o sistema tem ${veiculos.length} carros cadastrados
Escolha uma das opções para interagir com o sistema:
1 - Cadastrar veículo
2 - Listar todos os veículos
3 - Filtrar veículos por marca
4 - Atualizar veículo
5 - Remover veículo
6 - Sair do sistema
`))

let continuar = true

function cadastrarVeiculos(id, modelo, marca, ano, cor, preco) {

    let novoVeiculo = {
    id: veiculos.length +  1,
    modelo: prompt('Insira o modelo do carro.'),
    marca: prompt('Insira a marca do carro.'),
    ano: Number(prompt('Insira o ano de fabricação do carro.')),
    cor: prompt('Insira a cor do carro.'),
    preco: Number(prompt('Insira o valor de mercado do carro.'))
}
veiculos.push(novoVeiculo)
continuar = confirm('Gostaria de continuar?')
while (continuar === true) {
    novoVeiculo = {
        id: veiculos.length +  1,
        modelo: prompt('Insira o modelo do carro.'),
        marca: prompt('Insira a marca do carro.'),
        ano: Number(prompt('Insira o ano de fabricação do carro.')),
        cor: prompt('Insira a cor do carro.'),
        preco: Number(prompt('Insira o valor de mercado do carro.'))
    }
    veiculos.push(novoVeiculo)
    continuar = confirm('Gostaria de continuar?')
}
}

if (inicial === 1) {
    cadastrarVeiculos()
    console.log(veiculos)
}

/*2 - Listar todos os veículos
-> Ao entrar nesta opção o sistema deve listar os veículos
com o seguinte layout:
ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
Preço: R$40.000
ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
Preço: R$40.000*/

let lista = []
veiculos.forEach(function listarVeiculos (veiculo) { lista += (`ID: ${veiculo.id} Marca: ${veiculo.marca} Ano: ${veiculo.ano} Cor: ${veiculo.cor}\n`)}
)
if (inicial === 2) {
    veiculos.sort((a, b) => a.preco + b.preco);
    alert(lista)
}

/*3 - Filtrar veículos por marca
-> Ao entrar nesta opção o sistema deve pedir para o usuário digitar a marca que quer filtrar
-> Deve ser listado os veículos que forem da mesma marca
-> A lista deve ter o seguinte layout:
ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000
ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000*/
const listafiltrada = []
function filtro1() {
    return veiculos.filter(function filtro (veiculo) {
    marca = prompt('Digite a marca desejada')
    return veiculo.marca == marca
    })
} 
if (inicial === 3) {
    let filtro = filtro1()
    listafiltrada.push(filtro)
    listafiltrada.sort((a, b) => a.preco + b.preco);
}
console.log(listafiltrada)

/*4 - Atualizar veículo
-> Ao entrar nesta opção o sistema deve pedir para o
usuário digitar o IDENTIFICADOR do veículo
-> O Sistema deve verificar se o veículo existe ou não e
mostrar a seguinte mensagem caso o veículo não exista:
"Veículo, não encontrado. O usuário deve voltar para o menu
inicial depois"
-> Se o veículo existir, o sistema deve permitir que o usuário
atualize somente a cor e o preço.*/
let atualizacao 
function atualizarVeiculos (id, cor, preco) {
    atualizacao = prompt('Digite o ID do veículo')
    if (atualizacao >= 1 && atualizacao <= veiculos.length) {
        veiculos[atualizacao - 1].cor = prompt('Insira a cor atualizada do veiculo')
        veiculos[atualizacao - 1].preco = prompt('Insira o valor atualizado do veículo')
    } else {
      console.log('Veículo, não encontrado. O usuário deve voltar para o menu inicial depois')
    }
}
if (inicial === 4) {
    atualizarVeiculos()
    console.log(veiculos)
}

/*5 - Remover veículo
-> Ao entrar nesta opção o sistema deve pedir para o
usuário digitar o IDENTIFICADOR do veículo
-> O Sistema deve verificar se o veículo existe ou não e
mostrar a seguinte mensagem caso o veículo não exista:
"Veículo, não encontrado. O usuário deve voltar para o menu
inicial depois"
-> Se o veículo existir, o sistema deve remover o veículo*/
let remover
function removerVeiculo (id) {
    remover = prompt('Insira o ID do veículo que deseja remover.')
    if (remover >= 1 && remover <= veiculos.length) {
        veiculos.splice(1 ,remover - 1)
    }
}

if (inicial === 5) {
    removerVeiculo()
    console.log(veiculos)
}

if (inicial === 6) {
    alert('Saindo do sistema!')
}
