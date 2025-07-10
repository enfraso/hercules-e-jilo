var audio;
var musica;
var efeitoSom;
var sol;
var etapaJogo = 0;
var logo;
var gpBotoes;

var stageInicialJogo = {

    create: function () {
        etapaJogo = 0;

        if (musica) {
            musica.destroy()
        }
        if (audio) {
            audio.destroy();
        }

        game.add.sprite(0, 0, 'ceu');
        sol = game.add.sprite((game.width / 2) + 50, 700, 'sol');
        sol.anchor.x = 0.5;
        sol.anchor.y = 0.5;
        sol.scale.setTo(.80, .80);

        game.add.sprite(0, 0, 'fundoInicial');

        gpBotoes = game.add.group();

        var obj = new Object();
        if (myParam == 'pratinho' && iniciarJogo == 0) {
            obj.nomeEstage = "stageJogoPratos";
            iniciarJogo = 1;
            mudarState(obj);
        } else if (myParam == 'monta' && iniciarJogo == 0) {
            obj.nomeEstage = "stageJogoMonta";
            iniciarJogo = 1;
            mudarState(obj);
        } else if (myParam == 'passapassa' && iniciarJogo == 0) {
            obj.nomeEstage = "stageJogoPassa";
            iniciarJogo = 1;
            mudarState(obj);
        } else if (myParam == 'porquinhos' && iniciarJogo == 0) {
            obj.nomeEstage = "stageJogoPorquinhos";
            iniciarJogo = 1;
            mudarState(obj);
        } else if (myParam == 'resta' && iniciarJogo == 0) {
            obj.nomeEstage = "stageJogoRestaMais";
            iniciarJogo = 1;
            mudarState(obj);
        }

        icoMusica = game.add.button(1080, 705, 'icoMusica', alterarMusica, game, 1, 0, 0);
        icoMusica.scale.setTo(.80, .80);
        icoMusica.onInputOver.add(function () {
            icoMusica.alpha = 0.8;
        });
        icoMusica.onInputOut.add(function () {
            icoMusica.alpha = 1;
        });
        if (musica) {
            musica.destroy()
        }
        musica = game.add.audio('trilhaAbertura');
        musica.loopFull(1);
        musica.volume = 1;
        // musica.play();

        if (audio) {
            audio.destroy()
        }
        audio = game.add.audio('olaInicial')
        audio.play();
        audio.onStop.add(function () {
            stageInicialJogo.escondeLogo();

        });

        btnVoltar = game.add.button(10, 655, 'icoVoltar', stageInicialJogo.btVoltar, game, 1, 0, 0);
        btnVoltar.input.useHandCursor = true;
        btnVoltar.scale.setTo(.8, .8);
        gpBotoes.add(btnVoltar);
        //
        // btnImprimir = game.add.button(130, 655, 'icoImprimir', imprimir, game, 1, 0, 0);
        btnImprimir = game.add.sprite(130, 655, 'icoImprimir');
        btnImprimir.scale.setTo(.8, .8);
        btnImprimir.visible = 0.8;
        gpBotoes.add(btnImprimir);

        btnSon = game.add.button(270, 655, 'icoSon', repetirInstrucao, game, 1, 0, 0);
        btnSon.scale.setTo(.8, .8);
        gpBotoes.add(btnSon);


        // btnComo = game.add.button(390, 655, 'icoAjuda', stageInicialJogo.comoJogar, game, 1, 0, 0);
        btnComo = game.add.sprite(390, 655, 'icoAjuda');
        // btnComo.input.useHandCursor = false;
        btnComo.visible = 0.8;
        btnComo.scale.setTo(.8, .8);
        gpBotoes.add(btnComo);

        btnAvacar = game.add.button(505, 655, 'icoAvancar', stageInicialJogo.avancarJogo, game, 1, 0, 0);
        btnAvacar.input.useHandCursor = true;
        btnAvacar.animations.add('avancar');
        btnAvacar.animations.play('avancar', 2, true);
        btnAvacar.frame = 0;
        gpBotoes.add(btnAvacar);


        btnVoltar.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('sonBtnVoltar')
            efeitoSom.play();
        });
        btnSon.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('sonBtnInstrucao')
            efeitoSom.play();
        });
        btnAvacar.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('sonBtnAvacao')
            efeitoSom.play();
        });
        etapaJogo = 1;
        stageInicialJogo.inicar();

    }, avancarJogo: function () {
        if (etapaJogo == 0) {
            etapaJogo = 1;
            btnAvacar.animations.stop();
            btnAvacar.frame = 0;
            stageInicialJogo.inicar();
        } else if (etapaJogo == 1) {
            etapaJogo = 2;
            stageInicialJogo.escondeLogo();
            // } else {
            // var stage = new Object();
            // stage.nomeEstage = "stageSelecaoJogos";
            // mudarState(stage);
        }

    }, inicar: function () {
        musica.play();
        logo = game.add.sprite((game.width / 2), (game.height / 2) - 70, 'herculesJilo');
        logo.anchor.x = 0.5;
        logo.anchor.y = 0.5;
        logo.scale.setTo(0.1, 0.1);
        logo.animations.add('parabens');
        logo.animations.play('parabens', 3, true);


        var anim = game.add.tween(logo.scale).to({x: 1, y: 1}, 4000, "Linear", true);
        anim.onComplete.add(function () {
            btnAvacar.animations.play('avancar', 2, true);
        });

        //
        // if (audio) {
        //     audio.destroy();
        // }
        // audio = game.add.audio('olaInicial');
        // audio.autoplay = true;
        // audio.play();
        //
        // audio.onStop.add(function () {
        //     stageInicialJogo.escondeLogo();
        //
        // });

    }, escondeLogo: function () {
        game.add.tween(logo.scale).to({x: 0.1, y: 0.1}, 1000, "Linear", true);
        var anim = game.add.tween(logo).to({alpha: 0}, 1000, "Linear", true);
        anim.onComplete.add(function () {
                logo.destroy();
                if (etapaJogo == 2) {
                    stageInicialJogo.chegarHercules();
                }
            }
        )

    }, chegarHercules: function () {

        if (musica) {
            musica.destroy();
        }
        musica = game.add.audio('trilhaPrincipal');
        musica.volume = 1;
        musica.loopFull(1);
        musica.play();

        btnAvacar.animations.stop();
        btnAvacar.frame = 0;
        if (audio) {
            audio.destroy();
        }
        etapaJogo = 3;

        audio = game.add.audio('bemVindo');
        audio.play();

        var hercules = game.add.button(560, 300, 'btnHercules', mudarState, game, 1, 0, 1);
        hercules.nomeEstage = "stageSelecaoJogos";
        hercules.input.useHandCursor = true;
        hercules.alpha = 0;

        var jilo = game.add.button(740, 440, 'btnJilo', mudarState, game, 1, 0, 1);
        jilo.nomeEstage = "stageJilo";
        jilo.input.useHandCursor = true;
        jilo.alpha = 0;

        var professor = game.add.button(320, 120, 'btnProfessores', mudarState, game, 1, 0, 1);
        professor.nomeEstage = "stageProfessor";
        professor.input.useHandCursor = true;
        professor.alpha = 0;


        hercules.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('menuInicial');
            efeitoSom.play();
        });

        jilo.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('menuInicial');
            efeitoSom.play();
        });

        professor.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('menuInicial');
            efeitoSom.play();
        });


        game.add.tween(sol.scale).to({x: 1, y: 1}, 7000, "Linear", true);
        game.add.tween(sol).to({y: 300}, 7000, "Linear", true);
        game.add.tween(hercules).to({alpha: 1}, 500, "Linear", true);
        game.add.tween(jilo).to({alpha: 1}, 500, "Linear", true);
        game.add.tween(professor).to({alpha: 1}, 500, "Linear", true);

    },
}