let estante = [];

// Função para mostrar todos os livros
function showBooks() {
    let output = document.getElementById('output');
    if (estante.length > 0) {
        let bookList = "<h3>===== LISTA DE LIVROS =====</h3><ul>";
        estante.forEach((livro, index) => {
            bookList += `<li>${index + 1} - ${livro[0]} (${livro[1]})</li>`;
        });
        bookList += "</ul>";
        output.innerHTML = bookList;
    } else {
        output.innerHTML = "<p>[ERRO] Nenhum livro encontrado!</p>";
    }
}

// Função para abrir o formulário de adicionar livro
function openAddBookForm() {
    document.getElementById('addBookForm').style.display = 'block';  // Exibe o formulário
}

// Função para fechar o formulário de adicionar livro
function closeAddBookForm() {
    document.getElementById('addBookForm').style.display = 'none';  // Oculta o formulário
}

// Função para adicionar um livro
function addBook() {
    let livro = document.getElementById('bookTitle').value;
    let autor = document.getElementById('bookAuthor').value;

    if (livro && autor) {
        estante.push([livro, autor]);
        alert(`O livro "${livro}" de ${autor} foi adicionado com sucesso!`);
        closeAddBookForm(); // Fecha o formulário após adicionar
    } else {
        alert("Por favor, insira o título e o autor do livro.");
    }
}

// Função para buscar livros pelo autor
function searchByAuthor() {
    let autor = prompt("Digite o nome do autor que deseja buscar:");
    let livrosEncontrados = estante.filter(livro => livro[1].toLowerCase().includes(autor.toLowerCase()));

    let output = document.getElementById('output');
    if (livrosEncontrados.length > 0) {
        let searchResults = `<h3>Livros encontrados de ${autor}:</h3><ul>`;
        livrosEncontrados.forEach(livro => {
            searchResults += `<li>${livro[0]} (${livro[1]})</li>`;
        });
        searchResults += "</ul>";
        output.innerHTML = searchResults;
    } else {
        output.innerHTML = "<p>[ERRO] Nenhum livro encontrado deste autor.</p>";
    }
}

// Função para remover um livro pelo código
function removeBook() {
    let codigo = prompt("Digite o código do livro que deseja remover:");

    if (codigo && !isNaN(codigo) && codigo > 0 && codigo <= estante.length) {
        let livroRemovido = estante.splice(codigo - 1, 1);
        alert(`O livro "${livroRemovido[0][0]}" foi removido com sucesso!`);
    } else {
        alert("Código inválido.");
    }
}

// Função para mostrar a quantidade de livros
function showBookCount() {
    let output = document.getElementById('output');
    output.innerHTML = `<p>Quantidade de livros cadastrados: ${estante.length}</p>`;
}

// Função para sair do sistema
function exitSystem() {
    let output = document.getElementById('output');
    output.innerHTML = "<p>Obrigado por usar a Biblioteca da Brubs!</p>";
}
