document.addEventListener("DOMContentLoaded", function () {
    const scroll = document.getElementById("scroll");
    const content = document.getElementById("content");
    const closedMessage = document.querySelector(".closed-message");

    // Inicialmente, o pergaminho começa fechado
    scroll.classList.add("closed");

    scroll.addEventListener("click", function () {
        if (scroll.classList.contains("closed")) {
            // Abre o pergaminho
            scroll.classList.remove("closed");
            scroll.classList.add("open");
            closedMessage.style.display = "none"; // Oculta a mensagem ao abrir
        } else {
            // Fecha o pergaminho
            scroll.classList.remove("open");
            scroll.classList.add("closed");
            closedMessage.style.display = "block"; // Mostra a mensagem ao fechar
        }
    });

    // Opcional: Permitir alterar o texto do pergaminho posteriormente
    window.setScrollText = function (text) {
        content.innerHTML = `<p>${text}</p>`;
    };
});
