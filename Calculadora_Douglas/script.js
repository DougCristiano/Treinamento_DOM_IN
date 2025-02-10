let notas = [];

function adicionarNota() {
    let inputNota = document.getElementById("nota").value.trim().replace(",", ".");
    
    if (inputNota === "") {
        alert("Por favor, insira uma nota.");
        document.getElementById("nota").value = ""
        return;
    }

    let nota = parseFloat(inputNota);

    if (isNaN(nota) || nota < 0 || nota > 10) {
        alert("A nota digitada é inválida, por favor, insira uma nota válida entre 0 e 10.");
        document.getElementById("nota").value = ""
        return;
    }

    notas.push(nota);
    
    atualizarListaNotas();
    
    document.getElementById("nota").value = "";
}

function atualizarListaNotas() {
    let listaNotas = notas
        .map((nota, index) => `A nota ${index + 1} foi ${nota.toFixed(2).replace(".", ",")}.`)
        .join("\n");

    document.getElementById("listaNotas").value = listaNotas;
}

function calcularMedia() {
    if (notas.length === 0) {
        alert("Nenhuma nota foi inserida.");
        return;
    }

    let soma = notas.reduce((total, nota) => total + nota, 0);
    let media = soma / notas.length;
    
    document.getElementById("resultado").textContent = media.toFixed(2).replace(".", ",");
}

document.getElementById("nota").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        adicionarNota();
    }
});