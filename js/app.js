var game = new Phaser.Game(1200, 800, Phaser.AUTO, '');

var btn;
var menuHome;
var nJogadores = "";
var nomeJogadores = [];
var efeitoSom;
var sonAviso;
var audio;
var sonAlerta;
var musica;
var icoMusica;
var nomeJogador1;
var nomeJogador2;
var myParam;
var iniciarJogo = 0;
var flgAudio = true;

Phaser.Device.whenReady(function () {
    game.plugins.add(PhaserInput.Plugin);
    game.plugins.add(new Phaser.Plugin.SaveCPU)

});

game.state.add('stageSelecaoJogos', stageSelecaoJogos);
game.state.add('stageCarregar', stageCarregar);
game.state.add('stageJogoPratos', stageJogoPratos);
game.state.add('stageJogoMonta', stageJogoMonta);
game.state.add('stageJogoPassa', stageJogoPassa);
game.state.add('stageInicialJogo', stageInicialJogo);
game.state.add('stageJogoRestaMais', stageJogoRestaMais);
game.state.add('stageJogoPorquinhos', stageJogoPorquinhos);
game.state.add('stageJilo', stageJilo);
game.state.add('stageProfessor', stageProfessor);
game.state.start('stageCarregar');


function alterarMusica() {
    if (musica.paused) {
        musica.resume();
    } else {
        musica.pause();
    }
}

function mudarState(item) {
    if (musica) {
        musica.destroy();
    }
    if (audio) {
        audio.destroy();
    }
    game.state.start(item.nomeEstage);
}

function imprimir(item) {
    item.frame = 0;
    window.open(item.url, "_blank");
}

function repetirInstrucao(item) {
    if (audio) {
        audio.volume = 1;
        audio.play();
        audio.onStop.add(function () {
            if (flgAudio == false) {
                audio.volume = 1;
            }
        });
    }
}

function desligaAudio(item) {
    if (flgAudio == true) {
        audio.volume = 0;
        flgAudio = false;
    } else {
        audio.volume = 1;
        flgAudio = true;
    }
}

function addChechBox(_x, _y, _labelObj, _sprite) {
    var cb = game.add.group();
    var texture = game.add.sprite(_x, _y, _sprite);
    var text = game.add.text(_x + texture.width + 5, _y, _labelObj.text, _labelObj.style);
    var button = game.add.sprite(_x - 2, _y - 2);
    button.width = texture.width + 5 + text.width + 4;
    button.height = (text.height > texture.height) ? text.height + 4 : texture.height + 4;
    button.inputEnabled = true;
    button.input.useHandCursor = true;

    cb.add(texture);
    cb.add(text);
    cb.add(button);

    return cb;
}