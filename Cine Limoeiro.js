// 1. Filtro de Busca em Tempo Real
const campoBusca = document.getElementById('campoBusca');
const cardsFilmes = document.querySelectorAll('.card-filme');
const mensagemVazia = document.getElementById('mensagemVazia');

campoBusca.addEventListener('input', function () {
  const termo = campoBusca.value.toLowerCase().trim();
  let filmesVisiveis = 0;

  cardsFilmes.forEach(function (card) {
    const titulo = card.getAttribute('data-titulo').toLowerCase();
    
    if (titulo.includes(termo)) {
      card.style.display = 'block';
      filmesVisiveis++;
    } else {
      card.style.display = 'none';
    }
  });

  // Mostra a mensagem temática se nenhum filme for encontrado
  if (filmesVisiveis === 0) {
    mensagemVazia.style.display = 'block';
  } else {
    mensagemVazia.style.display = 'none';
  }
});

// 2. Controle do Modal (Balão de Sinopse)
const modal = document.getElementById('modalGibi');
const modalTitulo = document.getElementById('modalTitulo');
const modalInfo = document.getElementById('modalInfo');
const modalSinopse = document.getElementById('modalSinopse');

function abrirModal(titulo, info, sinopse) {
  modalTitulo.textContent = titulo;
  modalInfo.textContent = info;
  modalSinopse.textContent = sinopse;
  modal.style.display = 'flex';
}

function fecharModal() {
  modal.style.display = 'none';
}

// Fecha o modal se o usuário clicar fora do balão
window.addEventListener('click', function (evento) {
  if (evento.target === modal) {
    fecharModal();
  }
});

// 1. Lista de desenhos da programação (substitua pelos caminhos dos seus arquivos .mp4)
const programacaoTV = [
  {
    titulo: "Plano Infalível do Cebolinha",
    descricao: "Cebolinha bola mais um plano para pegar o Sansão, mas a Mônica descobre tudo.",
    arquivo: "videos/episodio1.mp4"
  },
  {
    titulo: "A Melancia Gigante da Magali",
    descricao: "Magali encontra uma semente mágica que faz crescer a maior melancia do bairro.",
    arquivo: "videos/episodio2.mp4"
  },
  {
    titulo: "Cascão e o Dia de Chuva",
    descricao: "Uma nuvem teimosa persegue o Cascão por todo o Bairro do Limoeiro.",
    arquivo: "videos/episodio3.mp4"
  }
];

let indiceAtual = 0;

// Pegando os elementos do HTML
const videoPlayer = document.getElementById("tv-stream");
const tituloEl = document.getElementById("titulo-desenho");
const descricaoEl = document.getElementById("descricao-desenho");
const proximoEl = document.getElementById("proximo-titulo");
const btnSom = document.getElementById("btn-som");

// Função que carrega o episódio atual e atualiza os textos
function carregarPrograma(indice) {
  const programaAtual = programacaoTV[indice];
  const proximoIndice = (indice + 1) % programacaoTV.length; // Volta para o zero quando chega no fim
  const proximoPrograma = programacaoTV[proximoIndice];

  videoPlayer.src = programaAtual.arquivo;
  tituloEl.textContent = programaAtual.titulo;
  descricaoEl.textContent = programaAtual.descricao;
  proximoEl.textContent = proximoPrograma.titulo;

  videoPlayer.play();
}

// Quando o vídeo atual acabar, passa automaticamente para o próximo (Transmissão Contínua)
videoPlayer.addEventListener("ended", () => {
  indiceAtual = (indiceAtual + 1) % programacaoTV.length;
  carregarPrograma(indiceAtual);
});

// Controle de som (Navegadores exigem clique do usuário para liberar áudio)
btnSom.addEventListener("click", () => {
  if (videoPlayer.muted) {
    videoPlayer.muted = false;
    btnSom.textContent = "🔊 Som ativado";
  } else {
    videoPlayer.muted = true;
    btnSom.textContent = "🔇 Clique para ativar o som";
  }
});

// Inicia a programação assim que a página abre
carregarPrograma(indiceAtual);
