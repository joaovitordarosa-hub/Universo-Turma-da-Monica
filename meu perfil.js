// Variáveis iniciais do jogador
let xpAtual = 700;
const xpMaximo = 1000;
let nivelAtual = 12;
let melancias = 150;

// Lista de frases temáticas
const frases = [
  '"Pronto para o próximo plano infalível!"',
  '"Hora do lanche no Bairro do Limoeiro!"',
  '"Cuidado com as coelhadas na arena!"',
  '"Mais uma figurinha para o meu almanaque!"',
  '"Ninguém segura o dono da rua!"'
];
let indiceFrase = 0;

// Seleção dos elementos na tela
const barraXp = document.getElementById('barra-xp');
const nivelTexto = document.getElementById('nivel-texto');
const contadorMelancias = document.getElementById('contador-melancias');
const balaoFrase = document.getElementById('balao-frase');

const btnGanharXp = document.getElementById('btn-ganhar-xp');
const btnMudarFrase = document.getElementById('btn-mudar-frase');

// Evento para ganhar XP e Melancias
btnGanharXp.addEventListener('click', function () {
  xpAtual += 100;
  melancias += 10;

  // Verifica se subiu de nível
  if (xpAtual >= xpMaximo) {
    xpAtual = xpAtual - xpMaximo;
    nivelAtual++;
    nivelTexto.textContent = 'Nível ' + nivelAtual;
    alert('Parabéns! Você subiu para o Nível ' + nivelAtual + '!');
  }

  // Atualiza a largura e o texto da barra de XP
  const porcentagem = (xpAtual / xpMaximo) * 100;
  barraXp.style.width = porcentagem + '%';
  barraXp.textContent = xpAtual + ' / ' + xpMaximo + ' XP';

  // Atualiza o contador de melancias
  contadorMelancias.textContent = melancias;
});

// Evento para trocar a frase do balão de fala
btnMudarFrase.addEventListener('click', function () {
  indiceFrase++;
  if (indiceFrase >= frases.length) {
    indiceFrase = 0;
  }
  balaoFrase.textContent = frases[indiceFrase];
});
