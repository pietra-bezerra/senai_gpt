
// Função para alternar o tema
function toggleTheme() {
    const body = document.body;
    const toggleIcon = document.querySelector('#toggle-mode i');
    
    // Alterna a classe dark-mode no body
    body.classList.toggle('dark-mode');
    
    // Altera o ícone do botão baseado no tema atual
    if (body.classList.contains('dark-mode')) {
        toggleIcon.className = 'fas fa-moon';
    } else {
        toggleIcon.className = 'fas fa-sun';
    }
}

// Adiciona o evento de clique ao botão
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-mode');
    
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleTheme);
    }
});