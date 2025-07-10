var audio;
var musica;
var efeitoSom;
var gpBotoes;
var gpBotaoPdf;
var gpCredito;
var stageProfessor = {

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
        // musica = game.add.audio('trilha');
        // musica.volume = 1;
        // musica.loopFull(1);
        // musica.play();


        audio = game.add.audio('menuPrefessor');
        audio.play();

        if (musica) {
            musica.destroy()
        }
        musica = game.add.audio('trilhaProfessor');
        musica.loopFull(1);
        musica.volume = 1;
        musica.play();

        game.add.sprite(0, 0, 'fundoProfessor');

        var professor = game.add.sprite(10, 90, 'btnProfessores');
        professor.frame = 0;

        var logo = game.add.sprite(1020, 150, 'herculesJilo');
        logo.anchor.x = 0.5;
        logo.anchor.y = 0.5;
        logo.scale.setTo(0.5, 0.5);
        logo.animations.add('parabens');
        logo.animations.play('parabens', 3, true);

        gpBotoes = game.add.group();
        gpBotaoPdf = game.add.group();

        stageProfessor.botoes();
        stageProfessor.botaoProfessor();

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
        btnAvacar.frame = 0;
        gpBotoes.add(btnAvacar);


        btnVoltar.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('sonBtnVoltar');
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


        var btnSoftware = game.add.text(680, 200, "SOFTWARE ", {
            font: "20px Myriad Pro",
            fill: "#000000",
            boundsAlignH: "Center",
            boundsAlignV: "middle"
        });
        btnSoftware.inputEnabled = true;
        btnSoftware.events.onInputOver.add(function () {
            this.game.canvas.style.cursor = "pointer";
        });
        btnSoftware.events.onInputOut.add(function () {
            this.game.canvas.style.cursor = "default";
        });
        btnSoftware.events.onInputDown.add(function () {
            var objImprimir = new Object();
            objImprimir.url = 'pdf/professor/software.pdf';
            imprimir(objImprimir);
        });
        btnSoftware.anchor.x = 0.5;
        btnSoftware.anchor.y = 0.5;
        gpBotoes.add(btnSoftware);


        var btnOrientacao = game.add.text(680, 270, "ORIENTAÇÕES PEDAGÓGICAS", {
            font: "20px Myriad Pro",
            fill: "#000000",
            boundsAlignH: "Center",
            boundsAlignV: "middle"
        });
        // btnOrientacao.input.useHandCursor = true;
        btnOrientacao.inputEnabled = true;

        btnOrientacao.anchor.x = 0.5;
        btnOrientacao.anchor.y = 0.5;
        gpBotoes.add(btnOrientacao);
        btnOrientacao.events.onInputDown.add(function () {
            var objImprimir = new Object();
            objImprimir.url = 'pdf/professor/orientacao_pedagogicas.pdf';
            imprimir(objImprimir);
        });
        btnOrientacao.events.onInputOver.add(function () {
            this.game.canvas.style.cursor = "pointer";
        });
        btnOrientacao.events.onInputOut.add(function () {
            this.game.canvas.style.cursor = "default";
        });


        var btnObjetos = game.add.text(680, 370, "OBJETOS DE CONHECIMENTO \nMATEMÁTICOS EXPLORADOS \nNOS JOGOS\n", {
            font: "20px Myriad Pro",
            fill: "#000000",
            boundsAlignH: "center",
            boundsAlignV: "middle",
            align: 'center',
        });
        // btnObjetos.input.useHandCursor = true;
        btnObjetos.inputEnabled = true;
        btnObjetos.anchor.x = 0.5;
        btnObjetos.anchor.y = 0.5;
        gpBotoes.add(btnObjetos);

        btnObjetos.events.onInputDown.add(function () {
            var objImprimir = new Object();
            objImprimir.url = 'pdf/professor/objetos_conhecimento.pdf';
            imprimir(objImprimir);
        });
        btnObjetos.events.onInputOver.add(function () {
            this.game.canvas.style.cursor = "pointer";
        });
        btnObjetos.events.onInputOut.add(function () {
            this.game.canvas.style.cursor = "default";
        });


        var btnJogo = game.add.text(680, 450, "JOGOS", {
            font: "20px Myriad Pro",
            fill: "#000000",
            boundsAlignH: "center",
            boundsAlignV: "middle",
            align: 'center',
        });
        // btnJogo.input.useHandCursor = true;
        btnJogo.inputEnabled = true;
        btnJogo.anchor.x = 0.5;
        btnJogo.anchor.y = 0.5;
        gpBotoes.add(btnJogo);

        btnJogo.events.onInputDown.add(function () {
            var objImprimir = new Object();
            objImprimir.url = 'pdf/professor/jogos.pdf';
            imprimir(objImprimir);
        });
        btnJogo.events.onInputOver.add(function () {
            this.game.canvas.style.cursor = "pointer";
        });
        btnJogo.events.onInputOut.add(function () {
            this.game.canvas.style.cursor = "default";
        });


        var btnCredito = game.add.text(680, 510, "CRÉDITOS", {
            font: "20px Myriad Pro",
            fill: "#000000",
            boundsAlignH: "center",
            boundsAlignV: "middle",
            align: 'center',
        });
        // btnCredito.input.useHandCursor = true;
        btnCredito.inputEnabled = true;
        btnCredito.anchor.x = 0.5;
        btnCredito.anchor.y = 0.5;
        gpBotoes.add(btnCredito);

        btnCredito.events.onInputDown.add(function () {
            stageProfessor.credito();
        });
        btnCredito.events.onInputOver.add(function () {
            this.game.canvas.style.cursor = "pointer";
        });
        btnCredito.events.onInputOut.add(function () {
            this.game.canvas.style.cursor = "default";
        });


    }, credito: function () {

        gpBotoes.visible = 0;
        gpCredito = game.add.group();
        gpCredito.visible = 1;
        var fundo = game.add.sprite(0, 0, 'credito');
        gpCredito.add(fundo);

        var btnVoltarCredito = game.add.button(10, 675, 'icoVoltar', stageProfessor.fecharCredito, game, 1, 0, 0);
        btnVoltarCredito.input.useHandCursor = true;
        btnVoltarCredito.scale.setTo(.8, .8);
        gpCredito.add(btnVoltarCredito);

        var btnAvacar = game.add.button(game.width / 2, 710, 'icoAvancar', stageProfessor.avancarCredito, game, 1, 0, 0);
        btnAvacar.input.useHandCursor = true;
        btnAvacar.scale.setTo(.65, .65);
        btnAvacar.anchor.x = 0.5;
        btnAvacar.animations.add('avancar');
        btnAvacar.animations.stop();
        btnAvacar.frame = 0;
        gpCredito.add(btnAvacar);

    }, avancarCredito: function () {
        if (gpCredito.children[0].frame == 0) {
            gpCredito.children[0].frame = 1;
            gpCredito.children[2].scale.x *= -1;
        } else {
            gpCredito.children[0].frame = 0;
            gpCredito.children[2].scale.x *= -1;
        }

    }, fecharCredito: function () {
        gpBotoes.visible = 1;
        gpCredito.destroy();

    }, botaoProfessor: function () {

        // var JogoDigital = game.add.text(790, 40, "JOGOS DIGITAIS", {
        //     font: "20px Myriad Pro",
        //     fill: "#FFFFFF",
        //     boundsAlignH: "Center",
        //     boundsAlignV: "middle"
        // });
        // JogoDigital.alpha = 0;
        // JogoDigital.anchor.x = 0.5;
        // JogoDigital.anchor.y = 0.5;
        // gpBotaoPdf.add(JogoDigital);
        //
        // var btnPrato = game.add.button(790, 120, 'jsPratinho', imprimir, game, 1, 0, 1);
        // btnPrato.url = 'pdf/professor/pratinhos.pdf';
        // btnPrato.scale.setTo(0.9, 0.9);
        // btnPrato.alpha = 0;
        // btnPrato.anchor.x = 0.5;
        // btnPrato.anchor.y = 0.5;
        // gpBotaoPdf.add(btnPrato);
        //
        //
        // var btnResta = game.add.button(790, 230, 'jsResta', imprimir, game, 1, 0, 1);
        // btnResta.url = 'pdf/professor/resta.pdf';
        // btnResta.scale.setTo(0.9, 0.9);
        // btnResta.alpha = 0;
        // btnResta.anchor.x = 0.5;
        // btnResta.anchor.y = 0.5;
        // gpBotaoPdf.add(btnResta);
        //
        // // menu monta
        // var btnMonta = game.add.button(790, 380, 'jsMonta', imprimir, game, 1, 0, 1);
        // btnMonta.url = 'pdf/professor/monta.pdf';
        // btnMonta.scale.setTo(0.9, 0.9);
        // btnMonta.alpha = 0;
        // btnMonta.anchor.x = 0.5;
        // btnMonta.anchor.y = 0.5;
        // gpBotaoPdf.add(btnMonta);
        //
        // // menu pasa
        // var btnPassa = game.add.button(790, 530, 'jsPassa', imprimir, game, 1, 0, 1);
        // btnPassa.url = 'pdf/professor/passa_passa.pdf';
        // btnPassa.scale.setTo(0.9, 0.9);
        // btnPassa.alpha = 0;
        // btnPassa.anchor.x = 0.5;
        // btnPassa.anchor.y = 0.5;
        // gpBotaoPdf.add(btnPassa);
        //
        // var btnPorquinho = game.add.button(790, 650, 'jsPorquinho', imprimir, game, 1, 0, 1);
        // btnPorquinho.url = 'pdf/professor/porquinhos.pdf';
        // btnPorquinho.scale.setTo(0.9, 0.9);
        // btnPorquinho.alpha = 0;
        // btnPorquinho.anchor.x = 0.5;
        // btnPorquinho.anchor.y = 0.5;
        // gpBotaoPdf.add(btnPorquinho);
        //
        //
        // var JogoConcreto = game.add.text(1060, 40, "JOGOS CONCRETOS", {
        //     font: "20px Myriad Pro",
        //     fill: "#FFFFFF",
        //     boundsAlignH: "Center",
        //     boundsAlignV: "middle"
        // });
        // JogoConcreto.alpha = 0;
        // JogoConcreto.anchor.x = 0.5;
        // JogoConcreto.anchor.y = 0.5;
        // gpBotaoPdf.add(JogoConcreto);
        //
        //
        // var btnBingo = game.add.button(1060, 120, 'btnBingo', imprimir, game, 1, 0, 1);
        // btnBingo.url = 'pdf/professor/bingo.pdf';
        // btnBingo.scale.setTo(0.9, 0.9);
        // btnBingo.alpha = 0;
        // btnBingo.anchor.x = 0.5;
        // btnBingo.anchor.y = 0.5;
        // gpBotaoPdf.add(btnBingo);
        //
        //
        // var btnBoliche = game.add.button(1060, 260, 'btnBoliche', imprimir, game, 1, 0, 1);
        // btnBoliche.url = 'pdf/jilo/boliche.pdf';
        // btnBoliche.scale.setTo(0.9, 0.9);
        // btnBoliche.alpha = 0;
        // btnBoliche.anchor.x = 0.5;
        // btnBoliche.anchor.y = 0.5;
        // gpBotaoPdf.add(btnBoliche);
        //
        // var btnDomino = game.add.button(1060, 410, 'btnDomino', imprimir, game, 1, 0, 1);
        // btnDomino.url = 'pdf/jilo/domino.pdf';
        // btnDomino.scale.setTo(0.9, 0.9);
        // btnDomino.alpha = 0;
        // btnDomino.anchor.x = 0.5;
        // btnDomino.anchor.y = 0.5;
        // gpBotaoPdf.add(btnDomino);
        //
        // var btnMemoria = game.add.button(1060, 530, 'btnMemoria', imprimir, game, 1, 0, 1);
        // btnMemoria.url = 'pdf/jilo/memoria.pdf';
        // btnMemoria.scale.setTo(0.9, 0.9);
        // btnMemoria.alpha = 0;
        // btnMemoria.anchor.x = 0.5;
        // btnMemoria.anchor.y = 0.5;
        // gpBotaoPdf.add(btnMemoria);
        //
        // var btnVendinha = game.add.button(1060, 660, 'btnVendinha', imprimir, game, 1, 0, 1);
        // btnVendinha.url = 'pdf/jilo/vendinha.pdf';
        // btnVendinha.scale.setTo(0.9, 0.9);
        // btnVendinha.alpha = 0;
        // btnVendinha.anchor.x = 0.5;
        // btnVendinha.anchor.y = 0.5;
        // gpBotaoPdf.add(btnVendinha);
        stageProfessor.mostrarBotoes(n);

    }, mostrarBotoes: function (n) {
        if (gpBotaoPdf.children[n]) {
            var item = gpBotaoPdf.children[n];
            var anim = game.add.tween(item).to({alpha: 1}, 500, "Linear", true);
            anim.onComplete.add(function () {
                    stageProfessor.mostrarBotoes(n + 1);
                }
            )
        }
    }
}