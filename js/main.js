const player = document.getElementsByClassName("block");
const bot = document.getElementsByClassName("block");
let jugadas = 0;

for (let i = 0; i <= player.length - 1; i ++) {

    player[i].addEventListener("click", () => {

        if (player[i].className == "block circle" || player[i].className == "block asp") {} else {
            player[i].classList.add("asp");

            let position = Math.round(Math.random() * 8);

            while (bot[position].className == "block asp" || bot[position].className == "block circle") {

                position = Math.round(Math.random() * 8);

                if (jugadas >= 4) {

                    window.location.reload();
                    break;

                }

            }

            bot[position].classList.add("circle");

            jugadas++;

            gameOver(player, "asp", "play");
            gameOver(bot, "circle", "bot");

        }

    });

}

const gameOver = (g, c, j) => {

    if (
        g[0].className == `block ${c}` &&
        g[1].className == `block ${c}` &&
        g[2].className == `block ${c}`
    ) {

        document.getElementById("alert").style.display = "flex";
        document.getElementById(`${j}`).style.display = "inline";

    } else if (
        g[3].className == `block ${c}` &&
        g[4].className == `block ${c}` &&
        g[5].className == `block ${c}`
    ) {

        document.getElementById("alert").style.display = "flex";
        document.getElementById(`${j}`).style.display = "inline";

    } else if (
        g[6].className == `block ${c}` &&
        g[7].className == `block ${c}` &&
        g[8].className == `block ${c}`
    ) {

        document.getElementById("alert").style.display = "flex";
        document.getElementById(`${j}`).style.display = "inline";

    } else if (
        g[0].className == `block ${c}` &&
        g[3].className == `block ${c}` &&
        g[6].className == `block ${c}`
    ) {

        document.getElementById("alert").style.display = "flex";
        document.getElementById(`${j}`).style.display = "inline";

    } else if (
        g[1].className == `block ${c}` &&
        g[4].className == `block ${c}` &&
        g[7].className == `block ${c}`
    ) {

        document.getElementById("alert").style.display = "flex";
        document.getElementById(`${j}`).style.display = "inline";

    } else if (
        g[2].className == `block ${c}` &&
        g[5].className == `block ${c}` &&
        g[8].className == `block ${c}`
    ) {

        document.getElementById("alert").style.display = "flex";
        document.getElementById(`${j}`).style.display = "inline";

    } else if (
        g[0].className == `block ${c}` &&
        g[4].className == `block ${c}` &&
        g[8].className == `block ${c}`
    ) {

        document.getElementById("alert").style.display = "flex";
        document.getElementById(`${j}`).style.display = "inline";

    } else if (
        g[2].className == `block ${c}` &&
        g[4].className == `block ${c}` &&
        g[6].className == `block ${c}`
    ) {

        document.getElementById("alert").style.display = "flex";
        document.getElementById(`${j}`).style.display = "inline";

    }

}

document.getElementById("ok").addEventListener("click", () => {

    window.location.reload();

});