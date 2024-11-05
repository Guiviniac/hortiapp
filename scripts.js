document.addEventListener("DOMContentLoaded", () => {
    atualizarMascaraTelefone("telefone");           // Inicializa o campo de telefone no login
    atualizarMascaraTelefone("telefone-cadastro");  // Inicializa o campo de telefone no cadastro
});

function showLogin() {
    const loginSection = document.getElementById('login-section');
    const signupSection = document.getElementById('signup-section');
    const loginButton = document.querySelector('.login-btn');
    const signupButton = document.querySelector('.signup-btn');

    loginSection.style.display = 'flex';
    signupSection.style.display = 'none';

    loginButton.classList.add('active-btn');
    signupButton.classList.remove('active-btn');
}

function showSignup() {
    const loginSection = document.getElementById('login-section');
    const signupSection = document.getElementById('signup-section');
    const loginButton = document.querySelector('.login-btn');
    const signupButton = document.querySelector('.signup-btn');

    signupSection.style.display = 'flex';
    loginSection.style.display = 'none';

    signupButton.classList.add('active-btn');
    loginButton.classList.remove('active-btn');
}

// Função para exibir notificações estilizadas
function mostrarNotificacao(mensagem, tipo = 'success') {
    const container = document.getElementById('notification-container');

    const notificacao = document.createElement('div');
    notificacao.className = `notification ${tipo}`;
    notificacao.innerText = mensagem;

    container.appendChild(notificacao);

    setTimeout(() => {
        notificacao.remove();
    }, 3500);
}

// Funções de validação utilizando notificações
function validarLogin() {
    const telefone = document.getElementById('telefone').value.trim();
    const senha = document.getElementById('senha-login').value;

    if (!telefone || !senha) {
        mostrarNotificacao('Por favor, preencha todos os campos.', 'error');
        return;
    }

    mostrarNotificacao('Login realizado com sucesso!', 'success');
}

function validarCadastro() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const telefone = document.getElementById('telefone-cadastro').value.trim();
    const nascimento = document.getElementById('nascimento').value.trim();
    const senha = document.getElementById('senha-cadastro').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;

    if (!nome || !email || !cpf || !telefone || !nascimento || !senha || !confirmarSenha) {
        mostrarNotificacao('Por favor, preencha todos os campos.', 'error');
        return;
    }

    if (!validarCPF(cpf)) {
        mostrarNotificacao('CPF inválido.', 'error');
        return;
    }

    if (!validarEmail(email)) {
        mostrarNotificacao('E-mail inválido.', 'error');
        return;
    }

    if (!validarTelefone(telefone)) {
        mostrarNotificacao('Número de telefone inválido.', 'error');
        return;
    }

    if (senha !== confirmarSenha) {
        mostrarNotificacao('As senhas não coincidem.', 'error');
        return;
    }

    mostrarNotificacao('Cadastro realizado com sucesso!', 'success');
}

function togglePassword(passwordFieldId, toggleIconId) {
    const passwordField = document.getElementById(passwordFieldId);
    const toggleIcon = document.getElementById(toggleIconId);
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.src = 'assets/svg/eye_open_icon.svg';
        toggleIcon.alt = 'Ocultar senha';
    } else {
        passwordField.type = 'password';
        toggleIcon.src = 'assets/svg/eye_closed_icon.svg';
        toggleIcon.alt = 'Mostrar senha';
    }
}

function mascararCPF(campo) {
    campo.value = campo.value.replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

function atualizarMascaraTelefone(campoId) {
    const telefoneInput = document.getElementById(campoId);
    telefoneInput.maxLength = 15;
    mascararTelefone(telefoneInput);
}

function mascararTelefone(campo) {
    let telefone = campo.value.replace(/\D/g, '');
    telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    campo.value = telefone;
}

function validarTelefone(telefone) {
    const formatBR = /^\(\d{2}\) \d{5}-\d{4}$/;
    return formatBR.test(telefone);
}

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    for (let i = 9; i < 11; i++) {
        let soma = 0;
        let j = 0;
        for (; j < i; j++) soma += cpf[j] * ((i + 1) - j);
        const resto = (soma * 10) % 11;
        if (cpf[j] != (resto === 10 || resto === 11 ? 0 : resto)) return false;
    }
    return true;
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
