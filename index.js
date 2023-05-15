// passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema

const botaoAlterarTema = document.getElementById("botao-alterar-tema");

console.log(botaoAlterarTema)

//passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body

const body = document.querySelector("body");
console.log(body);

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

// passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema

botaoAlterarTema.addEventListener("click", () => {
    //passo 6 - remover a class do modo-escuro do body
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    console.log(modoEscuroEstaAtivo);

    body.classList.toggle("modo-escuro");

    if(modoEscuroEstaAtivo) {
        // passo 7 - remover a classe do modo-escuro do body
        body.classList.remove("modo-escuro");

        // passo 8 - trocar a imagem do botão de alterar tema pra sol
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");

    } else {
        console.log("clicou no botão");

        // passo 4 - adicionar a classe modo escuro no body
        body.classList.add("modo-escuro");
    
        // passo 5 - trocar a imagem do botão de alterar tema pra lua
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
       }
    });