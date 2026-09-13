const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const btnDesblock = document.querySelector('.btn-desblock');

if (registerLink) {
    registerLink.addEventListener('click', ()=> {
        wrapper.classList.add('active');
    });
}

if (loginLink) {
    loginLink.addEventListener('click', ()=> {
        wrapper.classList.remove('active');
    });
}

if (btnPopup) {
    btnPopup.addEventListener('click', ()=> {
        wrapper.classList.add('active-popup');
    });
}

if (iconClose) {
    iconClose.addEventListener('click', ()=> {
        wrapper.classList.remove('active-popup');
    });
}

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
}

// Força o redirecionamento absoluto para a página de apresentação
const linkApresentacao = document.querySelector('.navigation a[href="apresentacao.html"]');
if (linkApresentacao) {
    linkApresentacao.addEventListener('click', (e) => {
        e.preventDefault(); // Impede qualquer bloqueio do navegador
        window.location.href = 'apresentacao.html';
    });
}

// Dispara o flash primeiro e redireciona para a Expedição em seguida
const btnExpedicao = document.getElementById('btn-expedicao');

if (btnExpedicao) {
    btnExpedicao.addEventListener('click', (e) => {
        e.preventDefault(); // Impede a abertura instantânea

        // Pega ou cria o elemento de flash
        let flash = document.querySelector('.camera-flash');
        if (!flash) {
            flash = document.createElement('div');
            flash.className = 'camera-flash';
            document.body.appendChild(flash);
        }

        // Ativa o clarão do flash
        flash.classList.add('active-flash');

        // Espera a animação do flash acontecer (350 milissegundos) e então muda de página
        setTimeout(() => {
            window.location.href = 'expedicao.html';
        }, 350);
    });
}