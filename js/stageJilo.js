var audio;
var musica;
var efeitoSom;
var gpBotoes;
var stageJilo = {

    create: function () {

        if (efeitoSom) {
            efeitoSom.destroy();
        }
        if (audio) {
            audio.destroy();
        }
        if (musica) {
            musica.destroy();
        }
        musica = game.add.audio('trilhaJilo');
        musica.volume = 1;
        musica.loopFull(1);
        musica.play();


        audio = game.add.audio('jJilo');
        audio.play();

        game.add.sprite(0, 0, 'ceu');
        var sol = game.add.sprite((game.width / 2) + 50, 300, 'sol');
        sol.anchor.x = 0.5;
        sol.anchor.y = 0.5;

        var fundo = game.add.sprite(0, 0, 'fundoInicial');
        fundo.frame = 1;

        var jilo = game.add.sprite(530, 300, 'btnJilo');
        jilo.scale.setTo(1.3, 1.3);
        jilo.frame = 0;

        gpBotoes = game.add.group();

        stageJilo.botoes();

    }, botoes: function () {

        icoMusica = game.add.button(1080, 705, 'icoMusica', alterarMusica, game, 1, 0, 0);
        icoMusica.scale.setTo(.80, .80);
        icoMusica.onInputOver.add(function () {
            icoMusica.alpha = 0.8;
        });
        icoMusica.onInputOut.add(function () {
            icoMusica.alpha = 1;
        });
        btnVoltar = game.add.button(10, 655, 'icoVoltar', mudarState, game, 1, 0, 0);
        btnVoltar.nomeEstage = "stageInicialJogo";
        btnVoltar.input.useHandCursor = true;
        btnVoltar.scale.setTo(.8, .8);
        gpBotoes.add(btnVoltar);

        btnImprimir = game.add.sprite(130, 655, 'icoImprimir');
        btnImprimir.scale.setTo(.8, .8);
        btnImprimir.visible = 0.8;
        gpBotoes.add(btnImprimir);

        btnSon = game.add.button(270, 655, 'icoSon', repetirInstrucao, game, 1, 0, 0);
        btnSon.input.useHandCursor = true;
        btnSon.scale.setTo(.8, .8);
        gpBotoes.add(btnSon);

        btnComo = game.add.sprite(390, 655, 'icoAjuda');
        // btnComo.input.useHandCursor = false;
        btnComo.visible = 0.8;
        btnComo.scale.setTo(.8, .8);
        gpBotoes.add(btnComo);

        btnAvacar = game.add.button(505, 655, 'icoAvancar', stageSelecaoJogos.irJogo, game, 1, 0, 0);
        btnAvacar.input.useHandCursor = true;
        btnAvacar.animations.add('avancar');
        btnAvacar.animations.stop();
        btnAvacar.frame = 0
        gpBotoes.add(btnAvacar);


        btnVoltar.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('sonBtnVoltar')
            efeitoSom.volume = 1;
            efeitoSom.play();
        });

        btnSon.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('sonBtnInstrucao');
            efeitoSom.volume = 1;

            efeitoSom.play();
        });
        // menu balao
        var btnBingo = game.add.button(370, 240, 'btnBingo', imprimir, game, 1, 0, 0);
        btnBingo.url = 'pdf/jilo/bingo.pdf';
        btnBingo.alpha = 0;
        game.add.tween(btnBingo).to({alpha: 1}, 900, "Linear", true);

        // menu balao
        var btnBoliche = game.add.button(380, 80, 'btnBoliche', imprimir, game, 1, 0, 0);
        btnBoliche.url = 'pdf/jilo/boliche.pdf';
        btnBoliche.alpha = 0;
        btnBoliche.scale.setTo(.9, .9);
        game.add.tween(btnBoliche).to({alpha: 1}, 900, "Linear", true);


        // menu monta
        var btnDomino = game.add.button(540, 10, 'btnDomino', imprimir, game, 1, 0, 0);
        btnDomino.url = 'pdf/jilo/domino.pdf';
        btnDomino.alpha = 0;
        game.add.tween(btnDomino).to({alpha: 1}, 900, "Linear", true);


        // menu pasa
        var btnMemoria = game.add.button(660, 110, 'btnMemoria', imprimir, game, 1, 0, 0);
        btnMemoria.url = 'pdf/jilo/memoria.pdf';
        btnMemoria.alpha = 0;
        game.add.tween(btnMemoria).to({alpha: 1}, 900, "Linear", true);


        var btnVendinha = game.add.button(690, 240, 'btnVendinha', imprimir, game, 1, 0, 0);
        btnVendinha.url = 'pdf/jilo/vendinha.pdf';
        btnVendinha.alpha = 0;
        game.add.tween(btnVendinha).to({alpha: 1}, 900, "Linear", true);


    }
}