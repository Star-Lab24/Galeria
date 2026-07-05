/* ==========================================================
   GALERIA
========================================================== */

const fotos = [

    /* ==========================
       ❤️ NÓS
    ========================== */

    {
        categoria: "nos",
        imagem: "img/nos/1.jpg",
        titulo: "De cabeça pra baixo 😂",
        descricao: "Nem a gravidade consegue impedir a gente de dar risada juntos."
    },

    {
        categoria: "nos",
        imagem: "img/nos/2.jpg",
        titulo: "Nosso cantinho ❤️",
        descricao: "Até em um jogo, qualquer lugar vira especial quando estou com você."
    },

    {
        categoria: "nos",
        imagem: "img/nos/3.jpg",
        titulo: "Passeando por aí 🌙",
        descricao: "Cada aventura ao seu lado acaba virando uma lembrança inesquecível (mesmo que virtual)."
    },

    /* ==========================
       📷 VOCÊ
    ========================== */


    {
        categoria: "voce",
        imagem: "img/voce/1.jpg",
        titulo: "Minecraft e você ❤️",
        descricao: "Meu fundo de celular eterno kkk"
    },

    {
        categoria: "voce",
        imagem: "img/voce/9.jpg",
        titulo: "Seu olhar ✨",
        descricao: "Existe algo no seu olhar que sempre consegue prender minha atenção."
    },

    {
        categoria: "voce",
        imagem: "img/voce/2.jpg",
        titulo: "Na chuva",
        descricao: "Mesmo embaixo da chuva, você continua sendo a visão mais bonita que existe."
    },

    {
        categoria: "voce",
        imagem: "img/voce/3.jpg",
        titulo: "Vestido azul 💙",
        descricao: "Se beleza fosse competição, você venceria sem nem precisar tentar."
    },

    {
        categoria: "voce",
        imagem: "img/voce/4.jpg",
        titulo: "Perfeição 💎",
        descricao: "Eu poderia passar horas olhando essa foto e ainda acharia pouco."
    },

    {
        categoria: "voce",
        imagem: "img/voce/5.jpg",
        titulo: "Meu azul favorito 💙",
        descricao: "Esse vestido ficou lindo, mas quem realmente faz ele brilhar é você."
    },

    {
        categoria: "voce",
        imagem: "img/voce/6.jpg",
        titulo: "Cada detalhe 🌸",
        descricao: "Você consegue transformar qualquer foto em uma obra de arte."
    },

    {
        categoria: "voce",
        imagem: "img/voce/7.jpg",
        titulo: "Céu 🤍",
        descricao: "Paleta de cor semelhante ao céu, mas concerteza mais encantador."
    },

    {
        categoria: "voce",
        imagem: "img/voce/8.jpg",
        titulo: "Sorriso escondido 🤍",
        descricao: "Até séria você consegue ser encantadora."
    },

    {
        categoria: "voce",
        imagem: "img/voce/10.jpg",
        titulo: "Unhas de capivaras 💅",
        descricao: "Até nos pequenos detalhes dá para enxergar o seu jeitinho."
    },

    /* ==========================
       🌅 MOMENTOS
    ========================== */

    {
        categoria: "momentos",
        imagem: "img/momentos/5.jpg",
        titulo: "Bolo de chocolate 🍫",
        descricao: "Conversas, risadas e um ALGUNS pedaços de bolo, qualquer momento ao seu lado vira uma lembrança que quero guardar."
    },

    {
        categoria: "momentos",
        imagem: "img/momentos/8.jpg",
        titulo: "Refugiado #1 🔫",
        descricao: "Esse foi um momento engraçado kkk"
    },

    {
        categoria: "momentos",
        imagem: "img/momentos/6.jpg",
        titulo: "Companhia de quatro patas 🐾",
        descricao: "Até os momentos mais tranquilos ficam especiais quando são compartilhados com quem transmite tanto carinho."
    },

    {
        categoria: "momentos",
        imagem: "img/momentos/7.jpg",
        titulo: "Olhar que derrete ❤️",
        descricao: "Existe um jeitinho nesse olhar que conquista qualquer um. É impossível não abrir um sorriso quando vejo essa foto."
    },

    {
        categoria: "momentos",
        imagem: "img/momentos/4.jpg",
        titulo: "Ciúmes 🤍",
        descricao: "Ver você demonstrando carinho, mesmo nas pequenas brincadeiras, sempre faz meu coração sorrir."
    },

    {
        categoria: "momentos",
        imagem: "img/momentos/3.jpg",
        titulo: "Fim de tarde 🍃",
        descricao: "Os momentos mais simples acabam sendo os que mais ficam guardados no coração."
    },

    {
        categoria: "momentos",
        imagem: "img/momentos/2.jpg",
        titulo: "Amanhecer 🌅",
        descricao: "Dias assim me fazem lembrar que as coisas simples também são especiais."
    },

    {
        categoria: "momentos",
        imagem: "img/momentos/1.jpg",
        titulo: "Noite de neblina 🌙",
        descricao: "Até uma rua silenciosa consegue ficar bonita quando lembra você."
    }

];

/* ==========================================================
   ELEMENTOS
========================================================== */

const gallery =
    document.getElementById("gallery");

const galleryCounter =
    document.getElementById("galleryCounter");

const totalPhotos =
    document.getElementById("totalPhotos");

const filterButtons =
    document.querySelectorAll(".filter-btn");

/* ==========================================================
   MODAL
========================================================== */

const imageModal =
    document.getElementById("imageModal");

const modalImage =
    document.getElementById("modalImage");

const imageTitle =
    document.getElementById("imageTitle");

const imageDescription =
    document.getElementById("imageDescription");

const imageCounter =
    document.getElementById("imageCounter");

const closeModal =
    document.getElementById("closeModal");

const previousButton =
    document.getElementById("prevImage");

const nextButton =
    document.getElementById("nextImage");

/* ==========================================================
   VARIÁVEIS
========================================================== */

let categoriaAtual = "todos";

let fotosVisiveis = [...fotos];

let indiceAtual = 0;

/* ==========================================================
   CRIAR GALERIA
========================================================== */

function criarGaleria(lista = fotos){

    gallery.innerHTML = "";

    fotosVisiveis = lista;

    galleryCounter.textContent =
        `${lista.length} foto${lista.length !== 1 ? "s" : ""}`;

    if(totalPhotos){

        totalPhotos.textContent = lista.length;

    }

    lista.forEach((foto, indice)=>{

        const card = document.createElement("div");

        card.className = "photo-card";

        card.innerHTML = `

            <img
                src="${foto.imagem}"
                alt="${foto.titulo}">

            <div class="photo-overlay">

                <h3>

                    ${foto.titulo}

                </h3>

                <p>

                    ${foto.descricao}

                </p>

            </div>

            <div class="zoom-icon">

                🔍

            </div>

        `;

        card.addEventListener("click",()=>{

            indiceAtual = indice;

            abrirModal();

        });

        gallery.appendChild(card);

    });

}

/* ==========================================================
   FILTROS
========================================================== */

filterButtons.forEach(botao=>{

    botao.addEventListener("click",()=>{

        filterButtons.forEach(item=>{

            item.classList.remove("active");

        });

        botao.classList.add("active");

        categoriaAtual =
            botao.dataset.category;

        if(categoriaAtual === "todos"){

            criarGaleria(fotos);

            return;

        }

        const filtradas = fotos.filter(foto=>{

            return foto.categoria === categoriaAtual;

        });

        criarGaleria(filtradas);

    });

});

/* ==========================================================
   INICIAR
========================================================== */

criarGaleria();

/* ==========================================================
   ABRIR MODAL
========================================================== */

function abrirModal(){

    const foto = fotosVisiveis[indiceAtual];

    modalImage.src = foto.imagem;

    modalImage.alt = foto.titulo;

    imageTitle.textContent = foto.titulo;

    imageDescription.textContent = foto.descricao;

    imageCounter.textContent =
        `${indiceAtual + 1} / ${fotosVisiveis.length}`;

    imageModal.classList.add("active");

    document.body.style.overflow = "hidden";

}

/* ==========================================================
   FECHAR MODAL
========================================================== */

function fecharModal(){

    imageModal.classList.remove("active");

    document.body.style.overflow = "auto";

}

/* ==========================================================
   PRÓXIMA FOTO
========================================================== */

function proximaFoto(){

    indiceAtual++;

    if(indiceAtual >= fotosVisiveis.length){

        indiceAtual = 0;

    }

    abrirModal();

}

/* ==========================================================
   FOTO ANTERIOR
========================================================== */

function fotoAnterior(){

    indiceAtual--;

    if(indiceAtual < 0){

        indiceAtual = fotosVisiveis.length - 1;

    }

    abrirModal();

}

/* ==========================================================
   EVENTOS
========================================================== */

closeModal.addEventListener("click",fecharModal);

nextButton.addEventListener("click",proximaFoto);

previousButton.addEventListener("click",fotoAnterior);

/* ==========================================================
   FECHAR CLICANDO NO FUNDO
========================================================== */

imageModal.addEventListener("click",(event)=>{

    if(event.target === imageModal){

        fecharModal();

    }

});

/* ==========================================================
   EVITAR FECHAR AO CLICAR NA IMAGEM
========================================================== */

modalImage.addEventListener("click",(event)=>{

    event.stopPropagation();

});

document.querySelector(".modal-content")
.addEventListener("click",(event)=>{

    event.stopPropagation();

});

/* ==========================================================
   TECLADO
========================================================== */

document.addEventListener("keydown",(event)=>{

    if(!imageModal.classList.contains("active")){

        return;

    }

    switch(event.key){

        case "ArrowRight":

            proximaFoto();

        break;

        case "ArrowLeft":

            fotoAnterior();

        break;

        case "Escape":

            fecharModal();

        break;

    }

});

/* ==========================================================
   SWIPE (CELULAR)
========================================================== */

let inicioToque = 0;

let fimToque = 0;

modalImage.addEventListener("touchstart",(event)=>{

    inicioToque = event.changedTouches[0].clientX;

});

modalImage.addEventListener("touchend",(event)=>{

    fimToque = event.changedTouches[0].clientX;

    if(inicioToque - fimToque > 60){

        proximaFoto();

    }

    if(fimToque - inicioToque > 60){

        fotoAnterior();

    }

});

/* ==========================================================
   PRELOAD DAS IMAGENS
========================================================== */

function preloadImagens(){

    fotos.forEach(foto=>{

        const imagem = new Image();

        imagem.src = foto.imagem;

    });

}

/* ==========================================================
   ANIMAÇÃO DOS CARDS
========================================================== */

function animarCards(){

    const cards = document.querySelectorAll(".photo-card");

    cards.forEach((card,indice)=>{

        card.style.opacity = "0";

        card.style.transform = "translateY(30px)";

        setTimeout(()=>{

            card.style.transition =
                ".45s ease";

            card.style.opacity = "1";

            card.style.transform =
                "translateY(0)";

        },indice * 70);

    });

}

/* ==========================================================
   OBSERVER
========================================================== */

const observer = new MutationObserver(()=>{

    animarCards();

});

observer.observe(gallery,{

    childList:true

});

/* ==========================================================
   INICIALIZAÇÃO
========================================================== */

window.addEventListener("load",()=>{

    preloadImagens();

    criarGaleria();

    animarCards();

    console.clear();

    console.log(

`📸 Galeria

Feita com carinho para guardar
os nossos melhores momentos.

❤️ James`

    );

});