const listaDeEstudante = [
    "beatriz oliveira",
    "carlos eduardo",
    "daniel santos",
    "gabriel ferreira",
    "helena rodrigues",
    "lucas vinicios"
];
 
const elementoLista = document.getElementById("listaEstudantes");
const elementoContador = document.getElementById("contadorNomes");
const campo = document.getElementById("campoNovoNome");
 
function exibirListaAutomaticamente() {
    elementoLista.innerHTML = "";
 
    for (let i = 0; i < listaDeEstudante.length; i++) {
        const itemLi = document.createElement("li");
        itemLi.className = "item-nome";
 
        itemLi.innerHTML = `
<span>${listaDeEstudante[i]}</span>
<span class="posicao-tag">#${i + 1}</span>
        `;
 
        elementoLista.appendChild(itemLi);
    }
 
    elementoContador.innerText =
        `Total exibido: ${listaDeEstudante.length} estudantes cadastrados.`;
 
    elementoContador.style.color = "#16a34a";
 
    console.log(
        `Lista exibida com sucesso: ${listaDeEstudante.length} itens processados.`
    );
}
 
function exibirOrdemInvertida() {
    elementoLista.innerHTML = "";
 
    let contador = listaDeEstudante.length - 1;
 
    while (contador >= 0) {
        const itemLi = document.createElement("li");
        itemLi.className = "item-nome";
 
        itemLi.innerHTML = `
<span>${listaDeEstudante[contador]}</span>
<span class="posicao-tag">#${contador + 1}</span>
        `;
 
        elementoLista.appendChild(itemLi);
 
        contador--;
    }
 
    elementoContador.innerText =`Exibindo ${listaDeEstudante.length} estudantes em ordem inversa.`;
    elementoContador.style.color = "#2563eb";
    console.log("Lista exibida em ordem inversa.");
}
 
function limparLista() {
    elementoLista.innerHTML = "";
    elementoContador.innerText ="Lista limpa pelo usuário. Nenhum nome na tela.";
    elementoContador.style.color = "#475569";
    console.log("Tela limpa.");
}
 
function adicionarNovoNome() {
    const nome = campo.value.trim();
 
    if (nome === "") {
        elementoContador.innerText = "Erro: digite um nome!";
        elementoContador.style.color = "#dc2626";
        campo.focus();
        return;
    }
 
    let duplicado = false;
    let i = 0;
 
    while (i < listaDeEstudante.length) {
        if (
            listaDeEstudante[i].toLowerCase() === nome.toLowerCase()
        ) {
            duplicado = true;
            break;
        }
 
        i++;
    }
 
    if (duplicado) {
        elementoContador.innerText = `Erro: o nome "${nome}" já está cadastrado.`;
        elementoContador.style.color = "#dc2626";
 
        campo.focus();
        campo.select();
 
        return;
    }
 
    listaDeEstudante.push(nome);
 
    exibirListaAutomaticamente();
 
    elementoContador.innerText =`Sucesso: "${nome}" foi adicionado à lista!`;
    elementoContador.style.color = "#16a34a";
 
    campo.value = "";
    campo.focus();
    campo.select();
}
 
exibirListaAutomaticamente();