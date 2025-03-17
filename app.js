//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

function adicionarAmigo() {
    // Apaga ultimo resultado do sorteio
    document.getElementById("resultado").textContent = ""

    // Obtém o valor do campo de texto
    const nomeAmigo = document.getElementById("amigo").value.trim();

    // Verifica se o nome do amigo foi inserido
    if (nomeAmigo.trim() === "") {
        document.getElementById("amigo").value = "";
        document.getElementById("amigo").focus();
        return; // Sai da função se o nome estiver vazio
    }

    const itensLista = listaAmigos.getElementsByTagName("li");

    // Verifica se o nome já existe na lista
    for (let i = 0; i < itensLista.length; i++) {
        if (itensLista[i].textContent.toLowerCase() === nomeAmigo.toLowerCase()) {
            alert("Este amigo já foi incluído!");
            document.getElementById("amigo").value = "";
            document.getElementById("amigo").focus();
            return; // Sai da função se o nome já existir
        }
    }

    // Cria um novo elemento <li> para o nome do animal
    const novoItem = document.createElement("li");
    novoItem.textContent = nomeAmigo;

    // Adiciona o novo item à lista
    document.getElementById("listaAmigos").appendChild(novoItem);

    // Limpa o campo de texto
    document.getElementById("amigo").value = "";
    document.getElementById("amigo").focus();
}

function sortearAmigo() {
    const listaAmigos = document.getElementById("listaAmigos");
    const itensLista = listaAmigos.getElementsByTagName("li");

    if (itensLista.length === 0) {
        alert("A lista de amigos está vazia!");
        document.getElementById("amigo").value = "";
        document.getElementById("amigo").focus();
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * itensLista.length);
    const amigoAleatorio = itensLista[indiceAleatorio].textContent;

    document.getElementById("resultado").textContent = "Sorteado: " + amigoAleatorio;
}
