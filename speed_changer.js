const interval = setInterval(() => {

    const header = document.querySelector("._3auIg");
    if (header) {
        clearInterval(interval);

        // Adicionar um ícone ao header para ativar a funcionalidade
        const button = document.createElement("button");
        button.innerHTML = "2x";
        button.classList.add("twoTimerButton");
        header.appendChild(button);

        // Programar a ação do click
        button.addEventListener("click", () => {
            const audios = document.querySelectorAll("audio");
            audios.forEach((audio) => {
                audio.playbackRate = 2;
            });
        });
    }

}, 1000);
