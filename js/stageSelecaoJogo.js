var audio;
var musica;
var efeitoSom;
var gpBotoes;
var jogoSelecionado;
var btnSel;
var stageSelecaoJogos = {

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
        musica = game.add.audio('trilhaPrincipal');
        musica.volume = 1;
        musica.loopFull(1);
        musica.play();


        if (audio) {
            audio.destroy();
        }
        audio = game.add.audio('jHercules');
        audio.play();

        game.add.sprite(0, 0, 'ceu');
        var sol = game.add.sprite((game.width / 2) + 50, 300, 'sol');
        sol.anchor.x = 0.5;
        sol.anchor.y = 0.5;

        var fundo = game.add.sprite(0, 0, 'fundoInicial');
        fundo.frame = 1;

        var hercules = game.add.sprite(480, 235, 'btnHercules');
        hercules.scale.setTo(1.2, 1.2);
        hercules.frame = 0;

        gpBotoes = game.add.group();

        stageSelecaoJogos.botoes();

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
        var btnPrato = game.add.button(380, 250, 'jsPratinho', stageSelecaoJogos.explicacaoJogo, game);
        btnPrato.nomeEstage = "stageJogoPratos"
        btnPrato.scale.setTo(0.9, 0.9);
        btnPrato.audio = "jPratos";
        btnPrato.alpha = 0;
        game.add.tween(btnPrato).to({alpha: 1}, 900, "Linear", true);


        // menu balao
        var btnResta = game.add.button(400, 120, 'jsResta', stageSelecaoJogos.explicacaoJogo, game);
        btnResta.nomeEstage = "stageJogoRestaMais";
        btnResta.scale.setTo(0.9, 0.9);
        btnResta.audio = "jResta";
        btnResta.alpha = 0;
        game.add.tween(btnResta).to({alpha: 1}, 900, "Linear", true);

        // menu monta
        var btnMonta = game.add.button(540, 20, 'jsMonta', stageSelecaoJogos.explicacaoJogo, game);
        btnMonta.nomeEstage = "stageJogoMonta";
        btnMonta.scale.setTo(0.9, 0.9);
        btnMonta.audio = "jMonta";
        btnMonta.alpha = 0;
        game.add.tween(btnMonta).to({alpha: 1}, 900, "Linear", true);

        // menu pasa
        var btnPassa = game.add.button(700, 130, 'jsPassa', stageSelecaoJogos.explicacaoJogo, game);
        btnPassa.nomeEstage = "stageJogoPassa";
        btnPassa.scale.setTo(0.9, 0.9);
        btnPassa.audio = "jPassa";
        btnPassa.alpha = 0;
        game.add.tween(btnPassa).to({alpha: 1}, 900, "Linear", true);

        var btnPorquinho = game.add.button(720, 220, 'jsPorquinho', stageSelecaoJogos.explicacaoJogo, game);
        btnPorquinho.nomeEstage = "stageJogoPorquinhos";
        btnPorquinho.scale.setTo(0.9, 0.9);
        btnPorquinho.audio = "jPorquinho";
        btnPorquinho.alpha = 0;
        game.add.tween(btnPorquinho).to({alpha: 1}, 900, "Linear", true);

    }, explicacaoJogo: function (obj) {

        if (btnSel) {
            btnSel.frame = 0;
        }
        obj.frame = 1;
        btnSel = obj;
        jogoSelecionado = new Object();
        jogoSelecionado.nomeEstage = obj.nomeEstage;


        if (audio) {
            audio.destroy();
        }
        if (obj.audio) {
            audio = game.add.audio(obj.audio);
            audio.play();
        }

        btnAvacar.animations.play('avancar', 2, true);

    }, irJogo: function () {
        if (jogoSelecionado) {
            mudarState(jogoSelecionado);
        }
    }
}