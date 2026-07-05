const formulario = document.getElementById("loginForm");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    const mensagem = document.getElementById("mensagem");

    if (usuario === "admin" && senha === "1234") {

        window.location.href = "dashboard.html";

    } else {

        mensagem.textContent = "Usuário ou senha inválidos.";

    }

});
