// Função para alternar a exibição do menu dropdown
function toggleDropdownMenu() {
    var dropdownMenu = document.querySelector('.dropdown_menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

// Evento de clique para exibir/ocultar o menu dropdown
var toggleBtn = document.querySelector('.toggle_btn');
toggleBtn.addEventListener('click', toggleDropdownMenu);
