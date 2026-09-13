const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const btnDesblock = document.querySelector('.btn-desblock');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

// Adiciona o efeito de flash suave e elegante ao clicar no botão de desbloqueio/câmera
if (btnDesblock) {
    btnDesblock.addEventListener('click', () => {
        // Cria o elemento do flash dinamicamente caso não exista no HTML
        let flash = document.querySelector('.camera-flash');
        if (!flash) {
            flash = document.createElement('div');
            flash.className = 'camera-flash';
            document.body.appendChild(flash);
        }

        // Ativa a animação do flash
        flash.classList.add('active-flash');

        // Remove a classe após a animação para poder repetir depois
        setTimeout(() => {
            flash.classList.remove('active-flash');
        }, 400);
    });
}

const form = document.getElementById('formCadastro');
const mensagem = document.getElementById('mensagem');

if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita recarregar a página

        const nome = document.getElementById('person').value;
        const email = document.getElementById('email_register').value;
        const senha = document.getElementById('password_register').value;

        // Cria um objeto com os dados
        const usuario = { nome, email, senha };

        // Salva no localStorage do navegador convertendo para texto
        localStorage.setItem('usuarioCadastrado', JSON.stringify(usuario));
        
        if (mensagem) {
            mensagem.style.color = '#7fff7f';
            mensagem.textContent = 'Cadastro realizado com sucesso!';
        }

        setTimeout(() => {
            if (mensagem) mensagem.textContent = '';
            wrapper.classList.remove('active');
        }, 3000);

        form.reset(); // Limpa o formulário
    });
}

const menuToggle = document.getElementById('menu-toggle');
const navigation = document.querySelector('.navigation');

if (menuToggle && navigation) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navigation.classList.toggle('active-menu');
    });

    // Fecha o menu automaticamente se clicar em alguma opção
    navigation.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navigation.classList.remove('active-menu');
        });
    });
}