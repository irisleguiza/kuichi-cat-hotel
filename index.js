// Função para abrir o formulário de contato em uma nova janela
function abrirContato() {
    var formulario = document.getElementById('contato-form');
    var url = formulario.action;
    window.open(url, '_blank');
}

// Função para mostrar/esconder o menu de navegação no menu mobile
function mostrarMenu() {
    var menu = document.getElementById('nav-menu');
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

// Adicionar eventos aos botões
document.getElementById('btn-reservar').addEventListener('click', function() {
    abrirContato();
});

document.getElementById('nav-toggle').addEventListener('click', mostrarMenu);
