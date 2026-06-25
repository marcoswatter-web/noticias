const btn = document.getElementById("btnNoticias");
const msg = document.getElementById("mensagem");

btn.addEventListener("click", () => {
    const curiosidades = [
        "🎯 CS nasceu como um mod de Half-Life.",
        "🏆 O Counter-Strike é um dos eSports mais populares do mundo.",
        "💣 O mapa Dust II é um dos mais famosos da história dos games.",
        "🔥 Milhões de jogadores acompanham campeonatos de CS."
    ];

    const aleatoria =
        curiosidades[Math.floor(Math.random() * curiosidades.length)];

    msg.innerHTML = aleatoria;
});