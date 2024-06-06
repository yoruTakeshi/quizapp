import { trocarTema, verificarTema, tema, body } from "../../helpers/tema-helper.js"

const botaoTema = document.querySelector(".tema button")
// const body = document.querySelector("body")
const assunto = localStorage.getItem("assunto")

let quiz = {}
let pontos = 0
let pergunta = 1

botaoTema.addEventListener("click", () => {
    trocarTema(tema, body, botaoTema)
})

verificarTema(tema, body, botaoTema)

function alterarAssunto(){
    
    const divicone = document.querySelector(".assunto_icone")
    const iconeImg = document.querySelector(".assunto_icone img")
    const assuntoTitulo = document.querySelector(".assunto h1")
    divicone.classList.add(assunto.toLowerCase())
    iconeImg.setAttribute("src", `../../assets/images/icon-${assunto.toLowerCase()}.svg`)
    assuntoTitulo.innerText = assunto
}



async function buscarPerguntas(){
    const urlDados = "../../data.json"
    await fetch(urlDados).then(resposta => resposta.json()).then(dados => {
        // console.log(dados)
        dados.quizzes.forEach(dado =>{
            if (dado.title === assunto){
                quiz = dado
            }
        })
    })

    console.log(quiz)
}

function montarPergunta(){
    const main = document.querySelector("main")
    main.innerHTML = `
    <section class="pergunta">
            <div>
                <p>Questão ${pergunta} de 10</p>

                <h2>${quiz.questions[pergunta-1].question}</h2>
            </div>

            <div class="barra_progresso">
                <div style="width: ${pergunta*10}%"></div>
            </div>
        </section>

        <section class="alternativas">
            <form action="">
                <label for="alternativa_a">
                    <input type="radio" name="alternativa" id="alternativa_a">

                    <div>
                        <span>A</span>
                        ${alterarSinais(quiz.questions[pergunta-1].options[0])}
                    </div>
                </label>

                <label for="alternativa_b">
                    <input type="radio" name="alternativa" id="alternativa_b">

                    <div>
                        <span>B</span>
                        ${alterarSinais(quiz.questions[pergunta-1].options[1])}
                    </div>
                </label>

                <label for="alternativa_c">
                    <input type="radio" name="alternativa" id="alternativa_c">

                    <div>
                        <span>C</span>
                        ${alterarSinais(quiz.questions[pergunta-1].options[2])}
                    </div>
                </label>

                <label for="alternativa_d">
                    <input type="radio" name="alternativa" id="alternativa_d">

                    <div>
                        <span>D</span>
                        ${alterarSinais(quiz.questions[pergunta-1].options[3])}
                    </div>
                </label>
            </form>

            <button>Enviar</button>
        </section>
        `
}

function alterarSinais(texto){
    return texto.replace(/</g, "&lt;").replace(/>/g, "&gt;")
}

async function iniciar(){
    alterarAssunto()
    await buscarPerguntas()
    montarPergunta()
}

iniciar()