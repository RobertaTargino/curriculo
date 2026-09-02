const foto = document.querySelector('img[alt="Foto do autor"]');

if (foto) {
  foto.addEventListener('click', () => {
    if (foto.src.includes('avatar.jpg')) {
      foto.src = 'images/avatar2.jpg'; 
    } else {
      foto.src = 'images/avatar.jpg'; 
    }
  });
}
const titulos = document.querySelectorAll('h2');

titulos.forEach(titulo => {
  titulo.style.userSelect = 'none'; 
  titulo.addEventListener('click', () => {
    const conteudo = titulo.nextElementSibling;
    if (conteudo) {
      conteudo.style.display = 'none';
    }
  });

  titulo.addEventListener('dblclick', () => {
    const conteudo = titulo.nextElementSibling;
    if (conteudo) {
      conteudo.style.display = 'block';
    }
  });
});
