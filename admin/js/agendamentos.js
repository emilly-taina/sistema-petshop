const formulario = document.getElementById("formAgendamento");
const tabela = document.getElementById("tabelaAgendamentos");

let agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];

mostrarAgendamentos();

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const novoAgendamento = {
        tutor: document.getElementById("tutor").value,
        pet: document.getElementById("pet").value,
        servico: document.getElementById("servico").value,
        data: document.getElementById("data").value,
        hora: document.getElementById("hora").value,
        telefone: document.getElementById("telefone").value,
        status: "Pendente"
    };

    agendamentos.push(novoAgendamento);

    localStorage.setItem("agendamentos", JSON.stringify(agendamentos));

    formulario.reset();

    mostrarAgendamentos();
});

function mostrarAgendamentos() {

    tabela.innerHTML = "";

    agendamentos.forEach((agendamento, indice) => {

        tabela.innerHTML += `
            <tr>
                <td>${agendamento.tutor}</td>
                <td>${agendamento.pet}</td>
                <td>${agendamento.servico}</td>
                <td>${agendamento.data}</td>
                <td>${agendamento.hora}</td>
                <td>${agendamento.status}</td>
                <td>
                    <button onclick="concluir(${indice})">✔</button>
                    <button onclick="excluir(${indice})">🗑</button>
                </td>
            </tr>
        `;

    });

}

function concluir(indice) {

    agendamentos[indice].status = "Concluído";

    localStorage.setItem("agendamentos", JSON.stringify(agendamentos));

    mostrarAgendamentos();

}

function excluir(indice) {

    agendamentos.splice(indice, 1);

    localStorage.setItem("agendamentos", JSON.stringify(agendamentos));

    mostrarAgendamentos();

}
