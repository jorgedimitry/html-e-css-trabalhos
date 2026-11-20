const botaoMenu = document.getElementById('btn-menu');
const listaMenu = document.getElementById('lista-menu');

botaoMenu.addEventListener('click', () => {
  listaMenu.classList.toggle('ativo');
});


const links = listaMenu.querySelectorAll('a');
links.forEach(link => {
  link.addEventListener('click', () => {
    listaMenu.classList.remove('ativo');
  });
});
