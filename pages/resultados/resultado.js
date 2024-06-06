import { trocarTema, verificarTema, tema, body } from "../../helpers/tema-helper.js"

const botaoTema = document.querySelector(".tema button")
// const body = document.querySelector("body")
const assunto = localStorage.getItem("assunto")
const BotaoJogarNovamente = document.querySelector("main button")

botaoTema.addEventListener("click", () => {
    trocarTema(tema, body, botaoTema)
})

BotaoJogarNovamente.addEventListener("click", clean)

verificarTema(tema, body, botaoTema)

function alterarAssunto(){
    
    const divicone = document.querySelector(".assunto_icone")
    const iconeImg = document.querySelector(".assunto_icone img")
    const assuntoTitulo = document.querySelector(".assunto h1")
    divicone.classList.add(assunto.toLowerCase())
    iconeImg.setAttribute("src", `../../assets/images/icon-${assunto.toLowerCase()}.svg`)
    assuntoTitulo.innerText = assunto
}

alterarAssunto()



function inserirResultado(){
    const sectionPontos = document.querySelector(".pontuacao")
    const divAssunto = document.querySelector(".assunto")
    const pontos = localStorage.getItem("pontos")

    sectionPontos.innerHTML = `
        ${divAssunto.outerHTML}

        <strong>${pontos}</strong>

        <p>de 10</p>

    `
}

function clean(){
    
    localStorage.removeItem("pontos")
    localStorage.removeItem("assunto")
    window.location.href = "../../index.html"

}

inserirResultado()
