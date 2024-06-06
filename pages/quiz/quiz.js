import { trocarTema, verificarTema, tema, body } from "../../helpers/tema-helper.js"

const botaoTema = document.querySelector(".tema button")
// const body = document.querySelector("body")

botaoTema.addEventListener("click", () => {
    trocarTema(tema, body, botaoTema)
})

verificarTema(tema, body, botaoTema)

const assunto = localStorage.getItem("assunto")


function alterarAssunto(){
    
    const divicone = document.querySelector(".assunto_icone")
    const iconeImg = document.querySelector(".assunto_icone img")
    const assuntoTitulo = document.querySelector(".assunto h1")
    divicone.classList.add(assunto.toLowerCase())
    iconeImg.setAttribute("src", `../../assets/images/icon-${assunto.toLowerCase()}.svg`)
    assuntoTitulo.innerText = assunto
}

alterarAssunto()