document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.querySelector('.contato__formulario').addEventListener('submit', function(e) {
    const nome = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const mensagem = this.querySelector('textarea').value;

    if (!nome || !email || !mensagem) {
        e.preventDefault(); 
        alert('Por favor, preencha todos os campos antes de enviar.');
    }
});

document.querySelectorAll('.projetos__conteiner').forEach(container => {
    const titulo = container.querySelector('.projetos__nome');
    titulo.addEventListener('click', () => {
        const descricao = container.querySelector('.projetos__descricao');
        descricao.style.display = descricao.style.display === 'none' || descricao.style.display === '' ? 'block' : 'none';
    });
});
