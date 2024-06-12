document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-contato');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();
        
        let valid = true;

        if (nome === '') {
            valid = false;
            document.getElementById('erro-nome').textContent = 'Nome é obrigatório.';
        } else {
            document.getElementById('erro-nome').textContent = '';
        }

        if (email === '') {
            valid = false;
            document.getElementById('erro-email').textContent = 'E-mail é obrigatório.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            valid = false;
            document.getElementById('erro-email').textContent = 'E-mail inválido.';
        } else {
            document.getElementById('erro-email').textContent = '';
        }

        if (telefone === '') {
            valid = false;
            document.getElementById('erro-telefone').textContent = 'Telefone é obrigatório.';
        } else {
            document.getElementById('erro-telefone').textContent = '';
        }

        if (mensagem === '') {
            valid = false;
            document.getElementById('erro-mensagem').textContent = 'Mensagem é obrigatória.';
        } else {
            document.getElementById('erro-mensagem').textContent = '';
        }

        if (valid) {
            alert('Mensagem enviada com sucesso!');
        }
    });

    
    const menu = document.querySelector('.menu');
    const menuToggle = document.querySelector('.menu-toggle');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('ativo');
    });

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
