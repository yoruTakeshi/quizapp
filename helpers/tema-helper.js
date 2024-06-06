export let tema = "claro"

export function trocarTema(tema, body, botaoTema){
    // alert("trocadetema")
    if (localStorage.getItem("tema")){
        tema = localStorage.getItem("tema")
    }
    tema = localStorage.getItem("tema")

    if (tema === "claro"){
        body.classList.add("escuro")
        localStorage.setItem("tema", "escuro")
        botaoTema.style.justifyContent = "flex-end"
    } else {
        body.classList.remove("escuro")
        localStorage.setItem("tema", "claro")
        botaoTema.style.justifyContent = "flex-start"
    }
}

export function verificarTema(){
    if (localStorage.getItem("tema")){
        tema = localStorage.getItem("tema")
    }

    if (tema === "escuro"){
        body.classList.add("escuro")
        botaoTema.style.justifyContent = "flex-end"
    }
}
