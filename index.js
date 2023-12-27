var jogador = [
    { nome: "Jogador1", vt: 58, dt: 28 },
    { nome: "jogador2", vt: 62, dt: 33 },
    { nome: "jogador3", vt: 52, dt: 20 },
];

function calcularPontuacao(vt, dt) {
    // Adicione aqui a lógica para calcular a pontuação com base em vt e dt
    return vt - dt;
}

function rankearPartidas(nome, vt, dt) {
    var pontuacao = calcularPontuacao(vt, dt);
    var rank;

    switch (true) {
        case (pontuacao <= 10):
            rank = "Ferro";
            break;
        case (pontuacao >= 11 && pontuacao <= 20):
            rank = "Bronze";
            break;
        case (pontuacao >= 21 && pontuacao <= 50):
            rank = "Prata";
            break;
        case (pontuacao >= 51 && pontuacao <= 80):
            rank = "Ouro";
            break;
        case (pontuacao >= 81 && pontuacao <= 90):
            rank = "Diamante";
            break;
        case (pontuacao >= 91 && pontuacao <= 100):
            rank = "Lendario";
            break;
        case (pontuacao >= 101):
            rank = "Imortal";
            break;
    }

    console.log(`O jogador ${nome} está no rank ${rank} com pontuação ${pontuacao}`);
}

for (var i = 0; i < jogador.length; i++) {
    var jogadorRank = jogador[i];
    rankearPartidas(jogadorRank.nome, jogadorRank.vt, jogadorRank.dt);
}
