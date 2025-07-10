var fundoP;
var tituloJogoP;
var etapaJogo;
var nivelSelecionado;
var imgJilo;
var rodadaPorq = 0;
var cor;

var cb1, cb2;
var imp_user1, imp_user2;
var rodada = 1;
var flgTemMoedaGanhando = false;

var gpInicial;
var gpSelecao;
var gpInputJogaodor1;
var gpInputJogaodor2;
var gpBotoes;
var gpComoJogarPorco;
var gpEsteraPorco;
var gpJogadorDois;
var gpJogadorUm;
var gpJogada;
var gpResultadoNivel1;
var gpResultadoNivel2;
var gpQuadroCompra;
var gpLayoutResultado;
var gpModalVoltar;
var gpExplicacaoPorquinho;

var txtNome1, txtNome2;
var btNivel1, btNivel2;
var btnAvacar, btnComo, btnSon, btnVoltar;
var btnAudio;
var nomeJogador1;
var nomeJogador2;
var jogador;
var alvo;
var flgAcertou = false;
var flgAddNota = false;
var posXInicialP = 830;
var posYInicialP = 370;
var tamanhoW = 70;
var tamanhoH = 70;

var animArco;

var errou;
var acertou;
var alvoPorco;
var valorBrinquedo;
var brinquedoSelecionado;
var flgJogadorUmCompleto = false;
var flgJogadorDoisCompleto = false;
var imgInicial;
var flgBinquedoDisponivel = true;

var arrQuantidadePorco = [[7, 11, 13, 16], [7, 11, 13, 16]];
//var arrQuantidadePorco = [[50, 51, 53, 56], [50, 51, 53, 56]];
var arrSize = [0.65, 0.80, 1, 1.1];
var posBrinquedoX = 820;
var posBrinquedoY = 210;
var posBrinquedoXInicial = 820;
var posBrinquedoYInicial = 210;
var arrPosMoedaDezena = [
    {'n': 1, 'x': 440, 'mx': 580, 'y': 230, 'sx': 0.3, 'sy': 0.25},
    {'n': 2, 'x': 620, 'mx': 760, 'y': 230, 'sx': 0.3, 'sy': 0.25},
    {'n': 3, 'x': 440, 'mx': 580, 'y': 320, 'sx': 0.3, 'sy': 0.3},
    {'n': 4, 'x': 620, 'mx': 760, 'y': 320, 'sx': 0.3, 'sy': 0.3},
    {'n': 5, 'x': 440, 'mx': 580, 'y': 410, 'sx': 0.3, 'sy': 0.3},
    {'n': 6, 'x': 620, 'mx': 760, 'y': 410, 'sx': 0.3, 'sy': 0.3},
    {'n': 7, 'x': 440, 'mx': 580, 'y': 500, 'sx': 0.3, 'sy': 0.3},
    {'n': 8, 'x': 620, 'mx': 760, 'y': 500, 'sx': 0.3, 'sy': 0.3},
    {'n': 9, 'x': 440, 'mx': 580, 'y': 590, 'sx': 0.3, 'sy': 0.3},
    {'n': 10, 'x': 620, 'mx': 760, 'y': 590, 'sx': 0.3, 'sy': 0.3},
];

var text;
var fundoLoad;
var logoLoad;
var audio;
var efeitoSom;

var stageJogoPorquinhos = {

    preload: function () {

    }, create: function () {
        fundoLoad = game.add.sprite(0, 0, 'fundoLoad');

        logoLoad = game.add.sprite((game.width / 2), (game.height / 2) - 70, 'herculesJilo');
        logoLoad.anchor.x = 0.5;
        logoLoad.anchor.y = 0.5;
        logoLoad.animations.add('parabens');
        logoLoad.animations.play('parabens', 3, true);

        text = game.add.text(game.width / 2, 600, 'Carregando ', {fill: '#C1272D'});
        text.anchor.x = 0.5;

        stageJogoPorquinhos.start();

        if (efeitoSom) {
            efeitoSom.destroy();
        }
        if (audio) {
            audio.destroy();
        }
        if (musica) {
            musica.destroy();
        }


    }, start: function () {
        game.load.audio('musicaPorquinhos', ['son/trilha/porquinhos/trilha_porquinhos.mp3']);
        game.load.image('bolaP', 'assets/porquinhos/bola.png');
        game.load.image('bola2P', 'assets/porquinhos/bola2.png');
        game.load.image('caminhaoP', 'assets/porquinhos/caminhao.png');
        game.load.image('curtina', 'assets/porquinhos/curtina.png');
        game.load.image('cifrao', 'assets/porquinhos/cifrao.png');
        game.load.spritesheet('fundoP', 'assets/porquinhos/fundo.png', 1200, 800);
        game.load.image('herculesP', 'assets/porquinhos/hercules.png');
        game.load.spritesheet('herculesAnim', 'assets/porquinhos/hercules_anim.png', 325.6, 529.2);
        game.load.spritesheet('prateleira', 'assets/porquinhos/prateleira.png', 1200, 23);
        game.load.spritesheet('porco', 'assets/porquinhos/porco.png', 175, 150);
        game.load.image('carro', 'assets/porquinhos/carro.png');
        game.load.image('raquete', 'assets/porquinhos/raquete.png');
        game.load.image('tituloP', 'assets/porquinhos/titulo.png');
        game.load.image('urso', 'assets/porquinhos/urso.png');
        game.load.image('boneca', 'assets/porquinhos/boneca.png');
        game.load.image('alvo', 'assets/porquinhos/alvo.png');
        game.load.image('arco', 'assets/porquinhos/arco.png');
        game.load.image('flecha', 'assets/porquinhos/flecha.png');
        game.load.image('bau', 'assets/porquinhos/bau.png');
        game.load.image('querbrado', 'assets/porquinhos/porco_querbrado.png');
        game.load.image('boom', 'assets/porquinhos/boom.png');
        game.load.image('comoJogarP', 'assets/porquinhos/comoJogar.png');
        game.load.spritesheet('moeda', 'assets/porquinhos/moeda.png', 160, 163);
        game.load.spritesheet('nota10', 'assets/porquinhos/nota_10.png', 440, 212);
        game.load.spritesheet('nota100', 'assets/porquinhos/nota_100.png', 440, 212);
        game.load.spritesheet('setaP', 'assets/porquinhos/seta.png', 126, 76);
        game.load.spritesheet('marcador', 'assets/porquinhos/marcador.png', 95, 65);
        game.load.spritesheet('balcoResultado', 'assets/porquinhos/balcao_resultado.png', 1200, 221);
        game.load.spritesheet('compra', 'assets/porquinhos/compra.png', 330, 361);

        game.load.image('b10', 'assets/porquinhos/b_10.png');
        game.load.image('b20', 'assets/porquinhos/b_20.png');
        game.load.image('b30', 'assets/porquinhos/b_30.png');
        game.load.image('b40', 'assets/porquinhos/b_40.png');
        game.load.image('b50', 'assets/porquinhos/b_50.png');
        game.load.image('b60', 'assets/porquinhos/b_60.png');
        game.load.image('b70', 'assets/porquinhos/b_70.png');
        game.load.image('b80', 'assets/porquinhos/b_80.png');
        game.load.image('b90', 'assets/porquinhos/b_90.png');
        game.load.image('b103', 'assets/porquinhos/b_103.png');
        game.load.image('b110', 'assets/porquinhos/b_110.png');

        game.load.audio('acertouP', ['son/porquinho/acerte_porquinho.mp3']);
        game.load.audio('cliqueArco', ['son/porquinho/clique_arco.mp3']);
        game.load.audio('cliqueBrinquedo', ['son/porquinho/clique_brinquedo.mp3']);
        // game.load.audio('clique10', ['son/porquinho/clique_notas_10.mp3']);
        // game.load.audio('concluirCompra', ['son/porquinho/concluir_compra.mp3']);
        game.load.audio('erro10Cedulas', ['son/porquinho/erro_10_cedulas.mp3']);
        game.load.audio('erro10moeda', ['son/porquinho/erro_10_moedas.mp3']);
        game.load.audio('errotroca10', ['son/porquinho/erro_fazer_troca_10_reais.mp3']);
        game.load.audio('errotroca100', ['son/porquinho/erro_fazer_troca_100_reais.mp3']);
        game.load.audio('explicacaoP', ['son/porquinho/explicacao_porquinhos.mp3']);
        // game.load.audio('junte10', ['son/porquinho/junte_10_moedas.mp3']);
        game.load.audio('juntou100', ['son/porquinho/juntou_100_reais.mp3']);
        game.load.audio('lojaNivel1', ['son/porquinho/loja_hercules_nivel_1.mp3']);
        game.load.audio('lojaNivel2', ['son/porquinho/loja_hercules_nivel_2.mp3']);
        game.load.audio('nivel1P', ['son/porquinho/nivel_1_porquinhos.mp3']);
        game.load.audio('nivel2P', ['son/porquinho/nivel_2_porquinhos.mp3']);
        game.load.audio('apresentacaoP', ['son/porquinho/ola_porquinhos.mp3']);
        // game.load.audio('parabensTroca10', ['son/porquinho/parabens_troca_10_reais.mp3']);
        // game.load.audio('registroFicha', ['son/porquinho/registro_ficha_v2.mp3']);
        game.load.audio('somMoeda', ['son/porquinho/moeda.mp3']);

        game.load.audio('cliquePalito', ['son/efeitos/restamais/clique_palito.mp3']);

        game.load.audio('clickBringuedo', ['son/porquinho/brinquedo_click.mp3']);
        game.load.audio('cedula10', ['son/porquinho/cedula_10.mp3']);
        game.load.audio('cedula20', ['son/porquinho/cedula_20.mp3']);
        game.load.audio('cedula30', ['son/porquinho/cedula_30.mp3']);
        game.load.audio('cedula40', ['son/porquinho/cedula_40.mp3']);
        game.load.audio('cedula50', ['son/porquinho/cedula_50.mp3']);
        game.load.audio('cedula60', ['son/porquinho/cedula_60.mp3']);
        game.load.audio('cedula70', ['son/porquinho/cedula_70.mp3']);
        game.load.audio('cedula80', ['son/porquinho/cedula_80.mp3']);
        game.load.audio('cedula90', ['son/porquinho/cedula_90.mp3']);
        game.load.audio('cedula100', ['son/porquinho/cedula_100.mp3']);
        game.load.audio('concluirACompra', ['son/porquinho/concluir_a_compra.mp3']);
        game.load.audio('dinheiroInsuficiente', ['son/porquinho/dinheiro_insuficiente.mp3']);
        game.load.audio('erroPreco', ['son/porquinho/erro_preco_brinquedo.mp3']);
        game.load.audio('compraMaisBriquedo', ['son/porquinho/comprar_mais_brinquedos.mp3']);
        // game.load.audio('fichaDesenhe', ['son/porquinho/ficha_desenhe_brinquedo.mp3']);
        game.load.audio('flecha', ['son/porquinho/flecha.mp3']);
        game.load.audio('junte10de1', ['son/porquinho/junte_10_de_1.mp3']);
        game.load.audio('legalDGastou', ['son/porquinho/legal_quanto_dinheiro_gastou_sobrou.mp3']);
        // game.load.audio('lojaCompra', ['son/porquinho/loja_comprar_brinquedo.mp3']);
        game.load.audio('porquinhoQuebra', ['son/porquinho/porquinho_quebrando.mp3']);
        // game.load.audio('primeiroTroque', ['son/porquinho/primeiro_troque_notas.mp3']);
        game.load.audio('vcJuntou', ['son/porquinho/voce_juntou_10_de_10.mp3']);
        game.load.audio('explicacaoPorquinhos', ['son/porquinho/demonstracao_porquinhos.mp3']);
        game.load.audio('comoComprar', ['son/porquinho/como_comprar.mp3']);
        game.load.audio('comotrocarMoedas', ['son/porquinho/como_trocar_moedas.mp3']);
        game.load.audio('comoTrocarNota', ['son/porquinho/como_trocar_notas.mp3']);

        stageJogoPorquinhos.load.start();
        // console.log("on load st")

    }, comecoJogo: function () {
        // console.log("iniciao jogo")
        nJogadores = "";
        if (efeitoSom) {
            efeitoSom.destroy();
        }

        stageJogoPorquinhos.sonInicial();
        etapaJogo = 0;
        fundoP = game.add.sprite(0, 0, 'fundoP');

        // fundoP.frame =4;
        game.stage.backgroundColor = 0x4d4d4d;


        tituloJogoP = game.add.sprite(game.width / 2, 30, 'tituloP');
        tituloJogoP.anchor.x = 0.5;

        gpInicial = game.add.group();

        stageJogoPorquinhos.mostarObjetos();


        gpLayoutResultado = game.add.group();
        gpQuadroCompra = game.add.group();
        gpResultadoNivel1 = game.add.group();
        gpResultadoNivel1.visible = 0;
        gpResultadoNivel2 = game.add.group();
        gpResultadoNivel2.visible = 0;
        gpSelecao = game.add.group();
        gpBotoes = game.add.group();
        gpInputJogaodor1 = game.add.group();
        gpInputJogaodor2 = game.add.group();
        gpNivel = game.add.group();

        gpLayoutResultado.visible = 0;
        stageJogoPorquinhos.criarLayourResultado();
        stageJogoPorquinhos.criarQuadroCompra();


        icoMusica = game.add.button(1100, 705, 'icoMusica', alterarMusica, game, 1, 0, 0);
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
        musica = game.add.audio('musicaPorquinhos');
        musica.loopFull(1);
        musica.volume = 0.2;
        musica.play();


        btnVoltar = game.add.button(10, 655, 'icoVoltar', stageJogoPorquinhos.btVoltar, game, 1, 0, 0);
        btnVoltar.input.useHandCursor = true;
        btnVoltar.scale.setTo(.8, .8);
        gpBotoes.add(btnVoltar);
        //
        btnImprimir = game.add.button(130, 655, 'icoImprimir', imprimir, game, 1, 0, 0);
        btnImprimir.input.useHandCursor = true;
        btnImprimir.url = 'pdf/porquinho/ficha_nivel.pdf';
        btnImprimir.scale.setTo(.8, .8);
        gpBotoes.add(btnImprimir);

        btnSon = game.add.button(270, 655, 'icoSon', repetirInstrucao, game, 1, 0, 0);
        btnSon.input.useHandCursor = true;
        btnSon.scale.setTo(.8, .8);
        gpBotoes.add(btnSon);

        btnAudio = game.add.button(1010, 715, 'btnCorneta', desligaAudio, game, 0, 0, 0);
        btnAudio.input.useHandCursor = true;
        btnAudio.scale.setTo(.60, .60);
        gpBotoes.add(btnAudio);
        btnAudio.onInputDown.add(function () {
            if (flgAudio == true) {
                btnAudio.frame = 1;
            } else {
                btnAudio.frame = 3;
            }
        })
        btnAudio.onInputOut.add(function () {
            if (flgAudio == true) {
                btnAudio.frame = 0;
            } else {
                btnAudio.frame = 2;
            }
        });
        btnAudio.onInputOver.add(function () {
            if (flgAudio == true) {
                btnAudio.frame = 1;
            } else {
                btnAudio.frame = 3;
            }
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('sonBtnVoltar');
            efeitoSom.play();
        });


        btnComo = game.add.button(390, 655, 'icoAjuda', stageJogoPorquinhos.comoJogar, game, 1, 0, 0);
        btnComo.input.useHandCursor = true;
        btnComo.scale.setTo(.8, .8);
        gpBotoes.add(btnComo);
        btnComo.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('sonBtnVoltar');
            efeitoSom.play();
        });

        btnAvacar = game.add.button(505, 655, 'icoAvancar', stageJogoPorquinhos.avancarJogo, game, 1, 0, 0);
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
            efeitoSom.play();
        });

        btnImprimir.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('sonBtnimprimir');
            efeitoSom.play();
        });
        btnSon.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('sonBtnInstrucao')
            efeitoSom.play();
        });
        btnComo.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('sonBtnComo')
            efeitoSom.play();
        });
        btnAvacar.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('sonBtnAvacao')
            efeitoSom.play();
        });
        //
        //
        cb1 = game.add.checkbox(100, 210, {
            text: '1 Jogador',
            style: {font: "30px Secular One", fill: "#7b4318"}
        }, 'circle', false);
        cb2 = game.add.checkbox(100, 270, {
            text: '2 Jogador',
            style: {font: "30px Secular One", fill: "#7b4318"}
        }, 'circle', false);


        cb1.events.onInputUp.add(function () {
            btnAvacar.animations.play('avancar', 2, true);
            if (audio) {
                audio.destroy();
            }
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            audio = game.add.audio('escrevaNome');
            audio.play();
            if (flgAudio == false) {
                audio.volume = 0;
            }
            if (flgAudio == false) {
                audio.volume = 0;
            }

            audio.onStop.add(function () {
                btnAvacar.animations.play('avancar', 2, true);
            });
            gpInputJogaodor1.visible = 1;
            gpInputJogaodor2.visible = 0;
            cb1.hide();
            cb2.hide();
            cb1.visible = 0;
            cb2.visible = 0;
            imp_user2.setText('');
            cb2.state = false;
            nJogadores = 1;

        }, this);
        cb2.events.onInputUp.add(function () {
            btnAvacar.animations.play('avancar', 2, true);
            if (audio) {
                audio.destroy();
            }
            if (flgAudio == false) {
                audio.volume = 0;
            }
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            audio = game.add.audio('escrevaNome');
            audio.play();
            if (flgAudio == false) {
                audio.volume = 0;
            }

            audio.onStop.add(function () {
                btnAvacar.animations.play('avancar', 2, true);
            });
            gpInputJogaodor1.visible = 1;
            gpInputJogaodor2.visible = 1;
            cb1.hide();
            cb2.hide();
            cb1.visible = 0;
            cb2.visible = 0;
            cb1.state = false;
            nJogadores = 2;


        }, this);


        btNivel1 = game.add.button(100, 210, 'iconivel', this.escolheNivel, game, 0, 0, 3);
        btNivel1.nivel = 0;
        gpNivel.add(btNivel1);
        btNivel1.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('nivel1')
            efeitoSom.play();
        });

        btNivel2 = game.add.button(222, 210, 'iconivel', this.escolheNivel, game, 1, 1, 4);
        btNivel2.nivel = 1;
        gpNivel.add(btNivel2);

        btNivel2.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('nivel2')
            efeitoSom.play();
        });

        gpNivel.visible = 0;

        gpInputJogaodor1 = game.add.group();
        txtNome1 = game.add.text(100, 150, "Jogador 1", {font: "30px Secular One", fill: "#7b4318"});
        gpSelecao.add(txtNome1);
        gpInputJogaodor1.add(txtNome1);


        imp_user1 = game.add.inputField(100, 200, {
            font: '30px Myriad Pro',
            fill: '#FF0000',
            placeHolderColor: '#666',
            fillAlpha: 1,
            backgroundColor: '#F8D391',
            fontWeight: 'normal',
            forceCase: PhaserInput.ForceCase.upper,
            width: 200,
            max: 20,
            padding: 6,
            borderWidth: 1,
            borderColor: '#AF2B13',
            borderRadius: 8,
            placeHolder: 'Nome',
            textAlign: 'left',
            zoom: true,
        });
        if (nomeJogadores[1] != "") {
            imp_user1.valeu = nomeJogadores[1];
        }
        imp_user1.blockInput = false;
        gpSelecao.add(imp_user1);
        gpInputJogaodor1.add(imp_user1);
        gpInputJogaodor1.visible = 0;

        gpInputJogaodor2 = game.add.group();
        txtNome2 = game.add.text(100, 260, "Jogador 2", {
            font: "30px Secular One",
            fill: "#7b4318"
        });
        gpSelecao.add(txtNome2);
        gpInputJogaodor2.add(txtNome2);


        imp_user2 = game.add.inputField(100, 300, {
            font: '30px Myriad Pro',
            fill: '#056ABA',
            placeHolderColor: '#666',
            fillAlpha: 1,
            backgroundColor: '#F8D391',
            fontWeight: 'normal',
            forceCase: PhaserInput.ForceCase.upper,
            width: 200,
            max: 20,
            padding: 6,
            borderWidth: 1,
            borderColor: '#AF2B13',
            borderRadius: 8,
            placeHolder: 'Nome',
            textAlign: 'left',
            zoom: true,
        });
        imp_user2.blockInput = false;
        gpSelecao.add(imp_user2);
        gpInputJogaodor2.add(imp_user2);
        gpInputJogaodor2.visible = 0;
        if (nomeJogadores[2] != "") {
            imp_user2.valeu = nomeJogadores[2];
        }


    }, update: function () {
        if (etapaJogo == 6) {
            game.physics.arcade.collide(flecha.bullets, alvoPorco, stageJogoPorquinhos.acertouAlvo);
        }

        if (etapaJogo >= 4) {
            var grupo;
            if (jogador == 1) {
                grupo = gpJogadorUm;
            } else {
                grupo = gpJogadorDois;
            }
            if (grupo && grupo.children[7]) {
                grupo.children[9].text = grupo.children[1].length;
                grupo.children[10].text = grupo.children[2].length;
                grupo.children[11].text = grupo.children[3].length;
            }
        }

        // if (this.game.input.mousePointer.x != posXm || posYm != this.game.input.mousePointer.y) {
        //     console.log("X " + ((this.game.input.mousePointer.x) ) + "- Y " + ((this.game.input.mousePointer.y)));
        // }
        // posXm = this.game.input.mousePointer.x;
        // posYm = this.game.input.mousePointer.y;

    },
    sonInicial: function () {
        if (audio) {
            audio.resume();
        }

        audio = game.add.audio('apresentacaoP');
        audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }
    }, mostarObjetos: function () {

        gpInicial.add(game.add.sprite(355, 262, 'prateleira'));
        gpInicial.add(game.add.sprite(58, 420, 'prateleira'));

        imgJilo = game.add.sprite(780, 450, 'jiloCabeca');
        imgJilo.scale.setTo(0.8, 0.8);
        imgJilo.animations.add('mover');
        imgJilo.animations.play('mover', 1, true);
        gpInicial.add(imgJilo);

        var hercules = game.add.sprite(830, 180, 'herculesP');
        gpInicial.add(hercules);
        gpInicial.add(game.add.sprite(0, 600, 'curtina'));

        var nInicial = gpInicial.length;
        var obj1 = game.add.sprite(400, 145, 'urso');
        obj1.alpha = 0;
        gpInicial.add(obj1);
        gpInicial.add(game.add.sprite(530, 170, 'bolaP'));

        var obj2 = game.add.sprite(650, 115, 'boneca')
        obj2.alpha = 0;
        gpInicial.add(obj2);

        var obj3 = game.add.sprite(800, 170, 'carro');
        obj3.alpha = 0;
        gpInicial.add(obj3);

        //prateleira2
        var obj4 = game.add.sprite(360, 335, 'caminhaoP');
        obj4.alpha = 0
        gpInicial.add(obj4);

        var obj5 = game.add.sprite(540, 325, 'bola2P');
        obj5.alpha = 0
        gpInicial.add(obj5);

        var obj6 = game.add.sprite(670, 335, 'raquete');
        obj6.alpha = 0
        gpInicial.add(obj6);

        var obj7 = game.add.sprite(20, 480, 'porco');
        obj7.frame = 1;
        obj7.alpha = 0;
        gpInicial.add(obj7);

        var obj8 = game.add.sprite(200, 480, 'porco');
        obj8.frame = 1;
        obj8.alpha = 0;
        gpInicial.add(obj8);

        var obj9 = game.add.sprite(380, 480, 'porco');
        obj9.frame = 1;
        obj9.alpha = 0;
        gpInicial.add(obj9);

        var obj10 = game.add.sprite(560, 480, 'porco');
        obj10.frame = 1;
        obj10.alpha = 0;
        gpInicial.add(obj10);

        var nFinal = gpInicial.length;

        stageJogoPorquinhos.mostrarObjIniciais(nInicial, nFinal);

    }, mostrarObjIniciais: function (n, total) {
        var anim = game.add.tween(gpInicial.children[n]).to({alpha: 1}, 400, Phaser.Easing.Linear.None, true);
        anim.onComplete.add(function () {
            var proximo = n + 1;
            if (proximo < total) {
                stageJogoPorquinhos.mostrarObjIniciais(proximo, total);
            }
        });
    }, ocultarObjIniciais: function () {
        gpNivel.visible = 0;
        gpInicial.forEach(function (item) {

            var anim = game.add.tween(item).to({alpha: 0}, 400, Phaser.Easing.Linear.None, true);
            anim.onComplete.add(function () {
                item.destroy();
                if (etapaJogo == 1) {
                    etapaJogo = 2;
                    stageJogoPorquinhos.logoJogo();
                }

            });
        })

    }, criarLayourResultado: function () {

        var imgHerculesB = game.add.sprite(500, 200, 'herculesAnim');
        imgHerculesB.scale.setTo(0.90, 0.90);
        imgHerculesB.frame = 39;
        imgHerculesB.name = "hercules";
        gpLayoutResultado.add(imgHerculesB);


        var imgJilo = game.add.sprite(400, 380, 'jiloCabeca');
        imgJilo.scale.setTo(0.8, 0.8);
        imgJilo.animations.add('mover');
        imgJilo.animations.play('mover', 1, true);
        gpLayoutResultado.add(imgJilo);


        var txtSorteado = game.add.text(40, 280, "Quanto sobrou de dinheiro da sua compra?\nQuanto que você gastou?", {
            font: "25px Secular One", fill: "#7A5630"
        });
        gpLayoutResultado.add(txtSorteado);


    }, criarQuadroCompra: function () {

        var gpCompraUm = game.add.group();
        gpQuadroCompra.add(gpCompraUm);

        var compraUm = game.add.sprite(780, 150, 'compra');
        compraUm.name = "caixa Jogador 1";
        compraUm.visible = 0;
        gpCompraUm.add(compraUm);

        var gpCompraObj = game.add.group();
        gpCompraUm.add(gpCompraObj);


        var gpCompraDois = game.add.group();
        gpQuadroCompra.add(gpCompraDois);

        var compraDois = game.add.sprite(780, 150, 'compra');
        compraDois.name = "caixa Jogador 1";
        compraDois.visible = 0;
        compraDois.frame = 1;
        gpCompraDois.add(compraDois);

        var gpCompraObjDois = game.add.group();
        gpCompraDois.add(gpCompraObjDois);


    }, escolheNivel: function (item) {
        nivelSelecionado = item.nivel;
        // fundoP.frame = nivelSelecionado;
        btNivel1.alpha = 1;
        btNivel2.alpha = 1;

        btNivel1.setFrames(3, 0, 0);
        btNivel2.setFrames(4, 1, 1);
        item.alpha = 0.7;
        if (audio) {
            audio.destroy();
        }
        if (nivelSelecionado == 0) {
            audio = game.add.audio('nivel1P')
            audio.play();
            if (flgAudio == false) {
                audio.volume = 0;
            }

            btNivel1.setFrames(3);

            btnImprimir.url = 'pdf/porquinho/ficha_nivel.pdf';

        } else if (nivelSelecionado == 1) {
            btnImprimir.url = 'pdf/porquinho/ficha_nivel.pdf';
            btNivel2.setFrames(4);
            audio = game.add.audio('nivel2P')
            audio.play();
            if (flgAudio == false) {
                audio.volume = 0;
            }
        }
        audio.onStop.add(function () {
            btnAvacar.animations.play('avancar', 2, true);
        })

    }, avancarJogo: function () {
        btnAvacar.animations.stop();
        btnAvacar.frame = 0;
        // console.log("etapaJogo " + etapaJogo);
        if (etapaJogo == 0) {
            if (nJogadores != "") {
                jogador = 1;
                if ((nJogadores == 1 && imp_user1.value != "") || (nJogadores == 2 && imp_user1.value != "" && imp_user2.value != "")) {
                    if (nivelSelecionado >= 0) {
                        nomeJogadores[1] = imp_user1.value;
                        if (nJogadores == 2) {
                            nomeJogadores[2] = imp_user2.value;
                        }
                        etapaJogo = 1;
                        stageJogoPorquinhos.ocultarObjIniciais();
                    } else {
                        gpInputJogaodor1.visible = 0;
                        gpInputJogaodor2.visible = 0;

                        if (gpNivel.visible == 0) {
                            gpNivel.visible = 1;
                            if (audio) {
                                audio.destroy();
                            }
                            audio = game.add.audio('escolhaNivel');
                            audio.play();
                            if (flgAudio == false) {
                                audio.volume = 0;
                            }

                        } else {
                            sonAlerta = game.add.audio('aletaNivel');
                            sonAlerta.play();
                            alert('Selecione o nivel', "Alerta");
                        }
                    }
                } else {
                    alert('Coloque o nome dos jogadores', "Alerta");
                }
            } else {
                alert('Seleciona a quantidade de jogadores', "Alerta");
            }

        } else if (etapaJogo == 2) {
            etapaJogo = 2.1;
            stageJogoPorquinhos.explicacaoJogo();
        } else if (etapaJogo == 3) {
            stageJogoPorquinhos.inicializarJogo();
        } else if (etapaJogo == 4) {
            stageJogoPorquinhos.indicarJogador();
        } else if (etapaJogo == 5) {
            stageJogoPorquinhos.inicioJogada();
        } else if (etapaJogo == 6) {
            if (audio) {
                audio.destroy();
            }
            audio = game.add.audio('cliqueArco');
            audio.play();
            if (flgAudio == false) {
                audio.volume = 0;
            }
        } else if (etapaJogo == 8) {
            if (flgTemMoedaGanhando == false) {
                stageJogoPorquinhos.proximaRodada();
            }
        } else if (etapaJogo == 9) {

            var grupo;
            if (jogador == 1) {
                grupo = gpJogadorUm;
            } else {
                grupo = gpJogadorDois;
            }
            if (audio) {
                audio.destroy();
            }
            audio = game.add.audio('xii');
            audio.play();
            if (flgAudio == false) {
                audio.volume = 0;
            }
            audio.onStop.add(function () {
                if (grupo.children[2].length < 10) {
                    audio = game.add.audio('errotroca10');
                    audio.play();
                    if (flgAudio == false) {
                        audio.volume = 0;
                    }
                    audio.onStop.add(function () {
                        audio = game.add.audio('comotrocarMoedas');
                        audio.play();
                        if (flgAudio == false) {
                            audio.volume = 0;
                        }
                    });
                } else if (grupo.children[2].length == 10) {
                    audio = game.add.audio('errotroca100');
                    audio.play();
                    if (flgAudio == false) {
                        audio.volume = 0;
                    }
                    audio.onStop.add(function () {
                        audio = game.add.audio('comoTrocarNota');
                        audio.play();
                        if (flgAudio == false) {
                            audio.volume = 0;
                        }
                    });
                }
            })

        } else if (etapaJogo == 10) {
            if (audio) {
                audio.destroy();
            }
            audio = game.add.audio('xii');
            audio.play();
            if (flgAudio == false) {
                audio.volume = 0;
            }
            audio.onStop.add(function () {
                audio = game.add.audio('errotroca10');
                audio.play();
                if (flgAudio == false) {
                    audio.volume = 0;
                }
            })
        } else if (etapaJogo == 11) {
            if (jogador == 1) {
                grupo = gpJogadorUm;
            } else {
                grupo = gpJogadorDois;
            }
            if (grupo.children[1].length > 10) {
                // console.log('ainda tem moeda para enviar para dezena');
            } else {
                stageJogoPorquinhos.goToShop();
            }
        } else if (etapaJogo == 14) {
            var grupo;
            var grupoNivel;
            var valorMenosBrinquedo = 120;
            var valorDisponivel = 0;
            if (nivelSelecionado == 1) {
                if (jogador == 1) {
                    grupo = gpJogadorUm;
                } else {
                    grupo = gpJogadorDois;
                }
                if (nivelSelecionado == 0) {
                    grupoNivel = gpResultadoNivel1;
                } else {
                    grupoNivel = gpResultadoNivel2;
                }

                grupoNivel.forEach(function (obj) {
                    if (obj.valor < valorMenosBrinquedo) {
                        valorMenosBrinquedo = obj.valor;
                    }
                });
                // conta so  da unidade
                gpJogadorUm.children[1].forEach(function (obj) {
                    valorDisponivel++;

                });//conta  dezena
                gpJogadorUm.children[2].forEach(function (obj) {
                    valorDisponivel += 10;
                });
                if (valorDisponivel < valorMenosBrinquedo) {
                    var i = 0;
                    gpResultadoNivel2.forEach(function (obj) {
                        if (obj.flgSelecionado == false && obj.key != "balcoResultado") {
                            obj.visible = 1;
                            game.add.tween(obj).to({alpha: 0}, 500, "Linear", true, 0);
                        }
                        if (obj.key == "balcoResultado") {
                            obj.visible = 1;
                            obj.alpha = 1;
                        }
                        i++;
                    });
                    stageJogoPorquinhos.resultadoParcial();

                } else {
                    if (audio) {
                        audio.destroy();
                    }
                    audio = game.add.audio('xii')
                    audio.play();
                    if (flgAudio == false) {
                        audio.volume = 0;
                    }
                    audio.onStop.add(function () {
                        audio = game.add.audio('compraMaisBriquedo');
                        audio.play();
                        if (flgAudio == false) {
                            audio.volume = 0;
                        }
                        audio.onStop.add(function () {
                            audio = game.add.audio('comoComprar');
                            audio.play();
                            if (flgAudio == false) {
                                audio.volume = 0;
                            }
                        });
                    })
                }
            }
        } else if (etapaJogo == 15) {
            stageJogoPorquinhos.comprarBriquedo();
        } else if (etapaJogo == 17) {
            if (nJogadores == 2) {
                if (flgJogadorUmCompleto == true && flgJogadorDoisCompleto == true) {
                    stageJogoPorquinhos.voltaParaInicio()
                } else {
                    stageJogoPorquinhos.proximoJogador();
                }
            } else {
                if (flgJogadorUmCompleto == true) {
                    stageJogoPorquinhos.voltaParaInicio()
                } else {
                    stageJogoPorquinhos.proximoJogador();
                }
            }


        }
    }, logoJogo: function () {

        if (audio) {
            audio.destroy();
        }
        audio = game.add.audio('explicacaoP');
        audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }

        fundoP.frame = 1;
        imgInicial = game.add.sprite(game.width / 2, 370, 'herculesJilo');
        imgInicial.animations.add('parabens');
        imgInicial.animations.play('parabens', 3, true);
        imgInicial.anchor.x = 0.5;
        imgInicial.anchor.y = 0.5;
        imgInicial.scale.setTo(0.2, 0.2);
        imgInicial.alpha = 0;
        //
        game.add.tween(imgInicial).to({alpha: 1}, 700, "Linear", true);
        game.add.tween(imgInicial.scale).to({x: 1, y: 1}, 1000, "Linear", true);


    }, explicacaoJogo: function () {

        if (audio) {
            audio.destroy();
        }
        audio = game.add.audio('explicacaoPorquinhos');
        audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }

        fundoP.frame = 6;
        game.add.tween(imgInicial).to({alpha: 0}, 300, "Linear", true);
        gpExplicacaoPorquinho = game.add.group();

        var alvo = game.add.sprite(0, 0, 'alvo');
        alvo.anchor.x = 0.5;
        // alvo.alpha = 0;
        alvo.name = "alvo";
        alvo.x = 1000;
        alvo.y = 150;
        gpExplicacaoPorquinho.add(alvo);


        var arco = game.add.sprite(0, 0, 'arco');
        arco.name = "arco";
        arco.anchor.x = 0.5;
        arco.x = 1000;
        arco.y = 680;
        gpExplicacaoPorquinho.add(arco);

        game.add.tween(arco).to({y: 620}, 300, "Linear", true);

        var flecharA = game.add.sprite(0, 0, 'flecha');
        flecharA.anchor.x = 0.5;
        flecharA.anchor.y = 0.3;
        flecharA.x = arco.x;
        flecharA.y = arco.y;
        gpExplicacaoPorquinho.add(flecharA);

        var porcao = game.add.sprite(0, 0, 'porco');
        porcao.scale.setTo(0.75, .75);
        porcao.anchor.x = 0.5;
        porcao.align = 0;
        porcao.frame = 0;
        porcao.anchor.y = 0.5;
        porcao.y = 230;
        porcao.x = 1000;
        // porcao.alpha = 0;
        gpExplicacaoPorquinho.add(porcao);

        var gpMoedas = game.add.group();
        gpExplicacaoPorquinho.add(gpMoedas);


        game.add.tween(arco).to({y: 620}, 500, "Linear", true);
        var anim = game.add.tween(flecharA).to({y: 620}, 500, "Linear", true);

        anim.onComplete.add(function () {
            game.add.tween(arco.scale).to({x: 0.8, y: 0.8}, 1000, "Linear", true, 0, -1, true);
            // pausa
            var anim2 = game.add.tween(flecharA).to({y: 620}, 200, "Linear", true);
            anim2.onComplete.add(function () {
                var animAcertou = game.add.tween(flecharA).to({y: 260}, 680, "Linear", true);
                animAcertou.onComplete.add(function () {
                    porcao.destroy();
                    flecharA.destroy();

                    var porcoQuebrador = game.add.sprite(900, 160, 'querbrado');
                    gpExplicacaoPorquinho.add(porcoQuebrador);

                    game.add.tween(arco).to({y: 680}, 500, "Linear", true);

                    for (var m = 0; m < 10; m++) {
                        var moeda = game.add.sprite(0, 0, 'moeda');
                        moeda.name = "moeda";
                        moeda.x = 1000;
                        moeda.y = 240;
                        moeda.anchor.x = 0.5;
                        moeda.anchor.y = 0.5;
                        moeda.scale.setTo(.65, .65);
                        gpMoedas.add(moeda);
                    }
                    var boom = game.add.sprite(840, 140, 'boom');

                    var animBoom = game.add.tween(boom).to({alpha: 0}, 800, "Linear", true, 0);
                    animBoom.onComplete.add(function () {
                        boom.destroy();
                        stageJogoPorquinhos.organizarMoedaExplicacao(0);
                    });
                })
            })
        });


    }, organizarMoedaExplicacao: function (n) {
        var posX = posXInicialP;
        var posY = posYInicialP;
        if (n < 10) {

            for (var m = 0; m < n; m++) {
                posX += tamanhoW;
                if (posX >= (1200 - tamanhoW)) {
                    posX = posXInicialP;
                    posY += tamanhoH;
                }
            }

            var anim = game.add.tween(gpExplicacaoPorquinho.children[2].children[n]).to({
                x: posX,
                y: posY
            }, 500, "Linear", true, 0);
            anim.onComplete.add(function () {
                stageJogoPorquinhos.organizarMoedaExplicacao(n + 1);
            });
        } else {
            // console.log('mover');
            gpExplicacaoPorquinho.children[2].forEach(function (moeda) {
                moeda.frame = 1;

            });
            var animEspera = game.add.tween(gpExplicacaoPorquinho.children[0]).to({alpha: 1}, 300, "Linear", true);
            var posX = arrPosMoedaDezena[0]['x'];
            var posY = arrPosMoedaDezena[0]['y'];

            animEspera.onComplete.add(function () {
                var flgNota = false;
                gpExplicacaoPorquinho.children[2].forEach(function (moeda) {
                    game.add.tween(moeda.scale).to({
                        x: arrPosMoedaDezena[0]['sx'],
                        y: arrPosMoedaDezena[0]['sy']
                    }, 500, "Linear", true);

                    var anim = game.add.tween(moeda).to({
                        x: posX,
                        y: posY,
                        alpha: 1
                    }, 500, "Linear", true, 0);
                    anim.onComplete.add(function () {
                        if (flgNota == false) {
                            // console.log('aqui')
                            flgNota = true;
                            var gpNota = game.add.group();
                            gpExplicacaoPorquinho.add(gpNota);

                            var nota = game.add.sprite(0, 0, 'nota10');
                            nota.x = arrPosMoedaDezena[0]['x'] - 30;
                            nota.y = arrPosMoedaDezena[0]['y'] - 30;
                            nota.scale.setTo(.4, .4);
                            gpNota.add(nota);

                            var animNota = game.add.tween(nota).to({alpha: 1}, 1000, "Linear", true, 0);
                            animNota.onComplete.add(function () {
                                stageJogoPorquinhos.addNotaExplicacao();
                            })
                        }
                    });
                    posX += 30;
                    if (posX >= arrPosMoedaDezena[0]['mx']) {
                        posX = arrPosMoedaDezena[0]['x'];
                        posY += 30;
                    }

                })


            })
        }
    }, addNotaExplicacao: function () {
        for (var n = 1; n < 10; n++) {
            var nota = game.add.sprite(0, 0, 'nota10');
            nota.x = arrPosMoedaDezena[n]['x'] - 30;
            nota.y = arrPosMoedaDezena[n]['y'] - 30;
            nota.scale.setTo(.4, .4);
            nota.alpha = 0;
            gpExplicacaoPorquinho.children[4].add(nota);
            var anim = game.add.tween(nota).to({alpha: 1}, 1000, "Linear", true, 0);
            anim.onComplete.add(function () {
                gpExplicacaoPorquinho.children[2].visible = 0;
                if (n == 10) {
                    var s = 0;
                    gpExplicacaoPorquinho.children[4].forEach(function (notaSeleciona) {
                        notaSeleciona.frame = 1;
                        s++;
                        if (s == 10) {
                            var animEspera = game.add.tween(notaSeleciona).to({alpha: 1}, 200, "Linear", true, 0);
                            animEspera.onComplete.add(function () {
                                var flgNota = false;
                                gpExplicacaoPorquinho.children[4].forEach(function (notaB) {
                                    game.add.tween(notaB.scale).to({x: 0.75, y: 0.75}, 1200, "Linear", true);
                                    var animNotaB = game.add.tween(notaB).to({x: 40, y: 220}, 1200, "Linear", true, 0);

                                    animNotaB.onComplete.add(function () {
                                        notaB.frame = 0;
                                        if (flgNota == false) {
                                            var notaCem = game.add.sprite(0, 0, 'nota100');
                                            notaCem.x = 10;
                                            notaCem.y = 220;
                                            notaCem.alpha = 0;
                                            notaCem.scale.setTo(.8, .8);
                                            gpExplicacaoPorquinho.add(notaCem);
                                            game.add.tween(notaCem).to({alpha: 1}, 1200, "Linear", true, 0);
                                            etapaJogo = 3;
                                        }
                                        notaB.destroy();
                                    })
                                });
                            });
                        }
                    })
                }
            });

        }
    }, inicializarJogo: function () {
        var anim = game.add.tween(gpExplicacaoPorquinho).to({alpha: 0}, 500, "Linear", true, 0);

        gpJogada = game.add.group();

        anim.onComplete.add(function () {
            gpExplicacaoPorquinho.destroy();
            fundoP.frame = 1;


            var imgHerculesB = game.add.sprite(800, 170, 'herculesAnim');
            imgHerculesB.scale.setTo(0.90, 0.90);
            imgHerculesB.frame = 39;
            imgHerculesB.name = "hercules";
            gpJogada.add(imgHerculesB);


            var imgJiloB = game.add.sprite(980, 410, 'jiloResta');
            imgJiloB.animations.add('jilo');
            imgJiloB.animations.play('jilo', 9, true);
            imgJiloB.scale.setTo(0.75, 0.75);
            imgJiloB.name = "jilo";
            imgJiloB.inputEnabled = true;
            gpJogada.add(imgJiloB);

            imgJilo.events.onInputOver.add(function () {
                if (efeitoSom) {
                    efeitoSom.destroy();
                }
                efeitoSom = game.add.audio('latido');
                efeitoSom.volume = 1;
                efeitoSom.play();
            }, this);

            nomeJogador1 = game.add.group();
            nomeJogador1.x = 40;
            nomeJogador1.y = 120;

            var txtNomeJogador1 = game.add.text(0, 0, nomeJogadores[1], {
                font: "30px Myriad Pro",
                fill: "#FF0000",
                // fontWeight:1000,
                boundsAlignH: "right",
                boundsAlignV: "middle"
            });

            var fundoJogador = game.add.graphics(0, 0);
            fundoJogador.name = 'fundoJogador1';
            fundoJogador.beginFill(0xFD4EEF3, 1);
            fundoJogador.lineStyle(1, 0x603813, 1);
            fundoJogador.moveTo(-5, -5);
            fundoJogador.lineTo(txtNomeJogador1.width + 5, -5);
            fundoJogador.lineTo(txtNomeJogador1.width + 5, 40);
            fundoJogador.lineTo(-5, 40);
            nomeJogador1.add(fundoJogador);

            nomeJogador1.add(txtNomeJogador1);
            if (nJogadores == 2) {

                nomeJogador2 = game.add.group();
                var txtNomeJogador2 = game.add.text(0, 0, nomeJogadores[2], {
                    font: "30px Myriad Pro",
                    fill: "#056ABA",
                    // fontWeight:500,
                    boundsAlignH: "right",
                    boundsAlignV: "middle"
                });
                px = game.width - (txtNomeJogador2.width + 40);

                var fundoJogador2 = game.add.graphics(0, 0);
                fundoJogador2.name = 'fundoJogador2';
                fundoJogador2.beginFill(0xFD4EEF3, 1);
                fundoJogador2.lineStyle(1, 0x603813, 1);
                fundoJogador2.moveTo(-5, -5);
                fundoJogador2.lineTo(txtNomeJogador2.width + 5, -5);
                fundoJogador2.lineTo(txtNomeJogador2.width + 5, 40);
                fundoJogador2.lineTo(-5, 40);
                nomeJogador2.add(fundoJogador2);

                nomeJogador2.add(txtNomeJogador2);
                nomeJogador2.x = px;
                nomeJogador2.y = 120;
            }


            var alvo = game.add.sprite(1000, 150, 'alvo');
            alvo.anchor.x = 0.5;
            alvo.alpha = 0;
            alvo.name = "alvo"
            gpJogada.add(alvo);

            gpEsteraPorco = game.add.group();
            gpEsteraPorco.name = "esteria";
            gpJogada.add(gpEsteraPorco);


            gpArcoFlecha = game.add.group();
            gpArcoFlecha.alpha = 0;
            gpArcoFlecha.name = "arcoFlecha";
            gpArcoFlecha.x = 1000;
            gpArcoFlecha.y = 650;
            gpJogada.add(gpArcoFlecha);

            var arco = game.add.button(0, 0, 'arco', stageJogoPorquinhos.atiraFlecha);
            arco.name = "arco";
            arco.anchor.x = 0.5;
            gpArcoFlecha.add(arco);

            var flecharA = game.add.sprite(0, 0, 'flecha');
            flecharA.anchor.x = 0.5;
            flecharA.anchor.y = 0.3;
            gpArcoFlecha.add(flecharA);


            flecha = game.add.weapon(2, 'flecha');
            flecha.bulletAngleOffset = 90;
            flecha.bulletKillType = Phaser.Weapon.KILL_LIFESPAN;
            flecha.bulletLifespan = 600;
            flecha.bulletSpeed = 600;
            flecha.force = 0.1;

            flecha.trackSprite(arco, 0, 0);

            gpJogadorUm = game.add.group();
            gpJogadorDois = game.add.group();


            stageJogoPorquinhos.addEstruturarJogador(gpJogadorUm, 1);
            if (nJogadores == 2) {
                stageJogoPorquinhos.addEstruturarJogador(gpJogadorDois, 2);
            }
            stageJogoPorquinhos.contruirEsteiraAlgo();
            // if (nivelSelecionado == 0) {
            stageJogoPorquinhos.contrucaoResultaNivel1();
            // } else {
            stageJogoPorquinhos.contrucaoResultaNivel2();
            // }
            stageJogoPorquinhos.preparaJogada();
        })

    }, addEstruturarJogador: function (grupo, jogador) {
        var gpMoedas = game.add.group();
        gpMoedas.name = "moedas";
        grupo.add(gpMoedas);

        var gpUnidade = game.add.group();
        gpUnidade.name = "unidade";
        grupo.add(gpUnidade);

        var gpDezena = game.add.group();
        gpDezena.name = "dezena";
        grupo.add(gpDezena);

        var gpCentena = game.add.group();
        gpCentena.name = "centena";
        grupo.add(gpCentena);

        var btnEnviarDezena = game.add.button(730, 500, 'setaP', stageJogoPorquinhos.moverMoedaDezena, game, 1, 1, 1);
        btnEnviarDezena.name = "setaPDezena";
        btnEnviarDezena.jogador = jogador;
        btnEnviarDezena.visible = 0;
        btnEnviarDezena.alpha = 0;
        btnEnviarDezena.input.useHandCursor = true;
        btnEnviarDezena.scale.setTo(.8, .8);
        grupo.add(btnEnviarDezena);

        var btnEnviarCentena = game.add.button(330, 500, 'setaP', stageJogoPorquinhos.moverMoedaCentena, game, 0, 0, 0);
        btnEnviarCentena.name = "setaPCentena";
        btnEnviarCentena.jogador = jogador;
        btnEnviarCentena.visible = 0;
        btnEnviarCentena.alpha = 0;
        btnEnviarCentena.input.useHandCursor = true;
        btnEnviarCentena.scale.setTo(.8, .8);
        grupo.add(btnEnviarCentena);


        var maradorUnidade = game.add.sprite(0, 0, 'marcador');
        maradorUnidade.anchor.x = 0.5;
        maradorUnidade.anchor.y = 0.3;
        maradorUnidade.frame = 0;
        maradorUnidade.visible = 0;
        maradorUnidade.x = 1000;
        maradorUnidade.y = 40;
        grupo.add(maradorUnidade);

        var maradorDezena = game.add.sprite(0, 0, 'marcador');
        maradorDezena.anchor.x = 0.5;
        maradorDezena.anchor.y = 0.3;
        maradorDezena.frame = 1;
        maradorDezena.x = 600;
        maradorDezena.y = 40;
        maradorDezena.visible = 0;
        grupo.add(maradorDezena);

        var maradorCentena = game.add.sprite(0, 0, 'marcador');
        maradorCentena.anchor.x = 0.5;
        maradorCentena.anchor.y = 0.3;
        maradorCentena.frame = 2;
        maradorCentena.x = 200;
        maradorCentena.y = 40;
        maradorCentena.visible = 0;
        grupo.add(maradorCentena);

        var txtUnidade = game.add.text((game.width / 2), 220, "0", {
            font: "35px Secular One", fill: "#7A5630", boundsAlignH: "center",
            boundsAlignV: "middle"
        });
        txtUnidade.anchor.x = 0.5;
        txtUnidade.anchor.y = 0.5;
        txtUnidade.x = 1000;
        txtUnidade.y = 60;
        txtUnidade.visible = 0;
        grupo.add(txtUnidade);

        var txtDezena = game.add.text((game.width / 2), 220, "0", {
            font: "35px Secular One", fill: "#7A5630", boundsAlignH: "center",
            boundsAlignV: "middle"
        });
        txtDezena.anchor.x = 0.5;
        txtDezena.anchor.y = 0.5;
        txtDezena.x = 600;
        txtDezena.y = 60;
        txtDezena.visible = 0;
        grupo.add(txtDezena);

        var txtCentena = game.add.text((game.width / 2), 220, "0", {
            font: "35px Secular One", fill: "#7A5630", boundsAlignH: "center",
            boundsAlignV: "middle"
        });
        txtCentena.anchor.x = 0.5;
        txtCentena.anchor.y = 0.5;
        txtCentena.x = 200;
        txtCentena.y = 60;
        txtCentena.visible = 0;
        grupo.add(txtCentena);


    }, contruirEsteiraAlgo: function () {

        var gpPorcosAlgo = game.add.group();
        gpPorcosAlgo.name = "grupo porca para acertar";
        gpEsteraPorco.add(gpPorcosAlgo);

        var mascara = game.add.graphics(0, 0);
        mascara.beginFill(0xffffff, 1);
        mascara.drawRect(0, 0, 417, 400);
        mascara.x = 783;
        mascara.y = 120;
        gpEsteraPorco.add(mascara);

        gpEsteraPorco.mask = mascara;

    }, preparaJogada: function () {
        etapaJogo = 4;

        rodadaPorq++;
        stageJogoPorquinhos.indicarJogador();


    }, indicarJogador: function () {
        if (audio) {
            audio.destroy();
        }
        if (gpJogada.children[2]) {
            gpJogada.children[2].visible = 0;
        }

        tituloJogoP.visible = 1;
        if (jogador == 1) {
            cor = "#FF0000";
        } else {
            cor = "#056ABA";
        }
        if (jogador == 2) {
            nomeJogador1.alpha = 0.5;
            nomeJogador2.alpha = 1;
        } else if (nJogadores == 2) {
            nomeJogador2.alpha = 0.2;
            nomeJogador1.alpha = 1;
        }

        game.add.tween(gpJogada.children[4]).to({alpha: 1}, 300, "Linear", true);

        fundoP.frame = 1;
        etapaJogo = 5;

        if (!gpJogada.children[5]) {
            var txtJogada = game.add.text((game.width / 2), 140, "Jogada " + rodadaPorq, {
                font: "35px Myriad Pro Bold",
                fill: "#7A5630"
            });
            txtJogada.anchor.x = 0.5;
            gpJogada.add(txtJogada);
        } else {
            gpJogada.children[5].text = "Jogada " + rodadaPorq;
        }

        if (!gpJogada.children[6]) {
            var txtJogadorRodada = game.add.text((game.width / 2), 220, nomeJogadores[jogador] + " acerte nos porquinhos e junte muito dinheiro. ", {
                font: "24px Secular One", fill: "#7A5630", boundsAlignH: "center",
                boundsAlignV: "middle"
            });
            txtJogadorRodada.anchor.x = 0.5;
            gpJogada.add(txtJogadorRodada);
        } else {
            txtJogadorRodada = gpJogada.children[6];
            txtJogadorRodada.colors = [];
            txtJogadorRodada.text = nomeJogadores[jogador] + " acerte nos porquinhos e junte muito dinheiro.";
        }
        txtJogadorRodada.colors = [];
        txtJogadorRodada.addColor(cor, 0);
        txtJogadorRodada.addColor('#7A5630', nomeJogadores[jogador].length);


        if (!gpJogada.children[7]) {
            var txtJogadorRodadaSua = game.add.text((game.width / 2), 260, "É a sua vez!!  ", {
                font: "24px Secular One", fill: "#7A5630", boundsAlignH: "center",
                boundsAlignV: "middle"
            });
            txtJogadorRodadaSua.anchor.x = 0.5;
            gpJogada.add(txtJogadorRodadaSua);
        }

        // audio.stop();
        // audio = game.add.audio('explicacao')
        //  audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }
        // audio.onStop.add(function () {
        //     btnAvacar.animations.play('avancar', 2, true);
        // });


    }, inicioJogada: function () {
        if (audio) {
            audio.destroy();
        }
        audio = game.add.audio('acertouP');
        if (rodadaPorq == 1) {
            audio.play();
            if (flgAudio == false) {
                audio.volume = 0;
            }
        }

        gpJogada.children[5].text = 'Jogada ' + rodadaPorq;

        tituloJogoP.visible = 0;
        if (jogador == 1) {
            fundoP.frame = 2;
            gpJogadorUm.visible = 1;
        } else {
            gpJogadorDois.visible = 1;
            fundoP.frame = 3;
        }

        var grupo;
        if (jogador == 1) {
            grupo = gpJogadorUm;
        } else {
            grupo = gpJogadorDois;
        }

        for (var m = 6; m <= 11; m++) {
            game.add.tween(grupo.children[m]).to({visible: 1}, 300, "Linear", true);
        }

        game.add.tween(gpJogada.children[0]).to({alpha: 0}, 300, "Linear", true);
        game.add.tween(gpJogada.children[1]).to({alpha: 0}, 300, "Linear", true);

        gpJogada.children[4].visible = 1;
        game.add.tween(gpJogada.children[6]).to({alpha: 0}, 300, "Linear", true);
        game.add.tween(gpJogada.children[7]).to({alpha: 0}, 300, "Linear", true);
        //alvo
        gpJogada.children[2].visible = 1;
        game.add.tween(gpJogada.children[2]).to({alpha: 1}, 1000, "Linear", true);

        var anim = game.add.tween(gpJogada.children[4]).to({y: 620}, 300, "Linear", true);
        anim.onComplete.add(function () {
            gpJogada.children[0].visible = 0;
            gpJogada.children[1].visible = 0;
            animArco = game.add.tween(gpJogada.children[4].scale).to({
                x: 0.8,
                y: 0.8
            }, 1000, "Linear", true, 0, -1, true);

        });
        grupo.children[4].visible = 1;
        if (grupo.children[4].alpha < 1) {
            game.add.tween(grupo.children[4]).to({alpha: 1}, 300, "Linear", true, 0);
        }
        // grupo.children[5].visible = 1;
        // if (grupo.children[5].alpha < 1) {
        //     game.add.tween(grupo.children[5]).to({alpha: 1}, 300, "Linear", true, 0);
        // }

        etapaJogo = 6;

        stageJogoPorquinhos.gerarAlgoPorco();
    }, gerarAlgoPorco: function () {

        if (etapaJogo >= 6) {
            if (gpJogada.children[4]) {
                gpJogada.children[4].visible = 1;
            }
            if (gpJogada.children[3]) {
                gpJogada.children[3].visible = 1;
            }
            if (gpJogada.children[6]) {
                gpJogada.children[6].visible = 0;
            }
            if (gpJogada.children[7]) {
                gpJogada.children[7].visible = 0;
            }
            var vlrSorteio = game.rnd.integerInRange(0, 3);

            var gpPorcos = game.add.group();

            gpPorcos.valor = arrQuantidadePorco[nivelSelecionado][vlrSorteio];
            gpPorcos.x = 1300;
            gpPorcos.y = 230;
            gpEsteraPorco.add(gpPorcos);


            var porcao = game.add.sprite(0, 0, 'porco');
            porcao.anchor.x = 0.5;
            porcao.anchor.y = 0.5;
            porcao.frame = 0;
            porcao.valor = arrQuantidadePorco[nivelSelecionado][vlrSorteio];
            porcao.scale.setTo(arrSize[vlrSorteio], arrSize[vlrSorteio]);
            gpPorcos.add(porcao);


            var txtNumero = game.add.text(porcao.x, porcao.y + 10, arrQuantidadePorco[nivelSelecionado][vlrSorteio], {
                font: "35px Secular One",
                fill: "#7b4318"
            });
            txtNumero.anchor.x = 0.5;
            txtNumero.anchor.y = 0.5;
            gpPorcos.add(txtNumero);
            game.physics.arcade.enable([gpPorcos]);
            alvoPorco = gpPorcos;


            var anim = game.add.tween(gpPorcos).to({x: 700}, game.rnd.integerInRange(1700, 3100), "Linear", true, 0);
            anim.force = 0.1;

            anim.onComplete.add(function () {
                gpPorcos.destroy();
                if (flgAcertou == false) {
                    stageJogoPorquinhos.gerarAlgoPorco();
                }
            });
        }
    }, atiraFlecha: function () {
        if (efeitoSom) {
            efeitoSom.destroy();
        }
        efeitoSom = game.add.audio('flecha');
        efeitoSom.play();

        if (etapaJogo == 6) {
            flecha.fire();
        }

    }, addMoedaJogador: function (nMoedas) {
        var grupo;
        flgTemMoedaGanhando = true;
        if (jogador == 1) {
            grupo = gpJogadorUm;
        } else {
            grupo = gpJogadorDois;
        }
        for (var m = 0; m < nMoedas; m++) {
            var moeda = game.add.button(0, 0, 'moeda', stageJogoPorquinhos.selecionaMoeda);
            moeda.name = "moeda";
            moeda.flgSelecionado = false;
            moeda.flgCorreta = false;
            moeda.flgMovida = false;
            moeda.x = 1000;
            moeda.y = 240;
            moeda.anchor.x = 0.5;
            moeda.anchor.y = 0.5;
            moeda.scale.setTo(.65, .65);
            grupo.children[0].add(moeda);
        }
        stageJogoPorquinhos.organizarNovasMoeda();

    }, organizarNovasMoeda: function () {
        var grupo;
        if (jogador == 1) {
            grupo = gpJogadorUm;
        } else {
            grupo = gpJogadorDois;
        }

        var posX = posXInicialP;
        var posY = posYInicialP;
        if (grupo.children[1].length > 0) {
            for (var m = 0; m < grupo.children[1].length; m++) {
                posX += tamanhoW;
                if (posX >= (1200 - tamanhoW)) {
                    posX = posXInicialP;
                    posY += tamanhoH;
                }
            }
        }
        if (grupo.children[0].length > 0) {
            var n = grupo.children[0].length - 1;
            var objMoeda = grupo.children[0].children[n];
            var anim = game.add.tween(objMoeda).to({x: posX, y: posY}, 500, "Linear", true, 0);
            anim.onComplete.add(function () {
                grupo.children[1].add(objMoeda);
                stageJogoPorquinhos.organizarNovasMoeda();
            });
        } else {
            flgTemMoedaGanhando = false;
            var anim = game.add.tween(gpJogada.children[8]).to({alpha: 0}, 800, "Linear", true, 0);
            anim.onComplete.add(function () {
                gpJogada.children[8].destroy();
            });
            if (grupo.children[1].length < 10) {
                etapaJogo = 8;
                // console.log('proxima rodada');
                btnAvacar.animations.play('avancar', 2, true);
            } else if (grupo.children[1].length >= 10) {
                etapaJogo = 9;
                gpJogada.children[8].visible = 1;
            }

        }

    }, selecionaMoeda: function (moedaSelecionada) {
        if (etapaJogo < 10 || etapaJogo >= 11) {
            if (moedaSelecionada.flgCorreta == false && moedaSelecionada.flgSelecionado == false) {
                moedaSelecionada.flgSelecionado = true;
                moedaSelecionada.frame = 1;
            } else if (moedaSelecionada.flgCorreta == false && moedaSelecionada.flgSelecionado == true) {
                moedaSelecionada.flgSelecionado = false;
                moedaSelecionada.frame = 0;
            }
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('somMoeda')
            efeitoSom.play();
            audio.destroy();

            stageJogoPorquinhos.verificaQuantidadeMoedaSelecionada();
        }


    }, selecionaNotaDez: function (nota) {
        if (nota.flgSelecionado == false) {
            nota.flgSelecionado = true;
            nota.frame = 1;
            if (etapaJogo > 10) {
                nota.alpha = 0.5;
            }
        } else {
            nota.flgSelecionado = false;
            nota.frame = 0;
            nota.alpha = 1;
        }

        var grupo;
        if (jogador == 1) {
            grupo = gpJogadorUm;
        } else {
            grupo = gpJogadorDois;
        }
        var nNota = 0;
        grupo.children[2].forEach(function (qtdNota) {
            if (qtdNota.flgSelecionado == true) {
                nNota++;
            }
        })
        if (efeitoSom) {
            efeitoSom.destroy();
        }
        efeitoSom = game.add.audio('cedula' + nNota + '0');
        efeitoSom.play();


    }, selecionaNotaCem: function () {
        if (etapaJogo == 12) {
            etapaJogo = 13;
            stageJogoPorquinhos.trocarCem();
        }
        if (efeitoSom) {
            efeitoSom.destroy();
        }
        efeitoSom = game.add.audio('cliquePalito');
        efeitoSom.play();

    }, verificaQuantidadeMoedaSelecionada: function () {
        var grupo;
        if (jogador == 1) {
            grupo = gpJogadorUm;
        } else {
            grupo = gpJogadorDois;
        }
        var mSelecionada = 0;
        var posY = 0;
        grupo.children[1].forEach(function (moeda) {
            if (moeda.flgSelecionado == true) {
                mSelecionada++;
            }
            if (moeda.y >= posY) {
                posY = moeda.y;
            }
        });

        if (nivelSelecionado == 0) {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('numero' + mSelecionada);
            efeitoSom.play();
        }
        // if (mSelecionada == 10) {
        //     grupo.children[4].alpha = 0;
        //     grupo.children[4].y = posY + 30;
        //     grupo.children[4].visible = 1;
        //     game.add.tween(grupo.children[4]).to({alpha: 1}, 300, "Linear", true, 0);
        // }

    }, moverMoedaDezena: function () {

        if (jogador == 1) {
            var grupo = gpJogadorUm;
        } else {
            var grupo = gpJogadorDois;
        }

        grupo.children[5].visible = 1;
        if (grupo.children[5].alpha < 1) {
            game.add.tween(grupo.children[5]).to({alpha: 1}, 300, "Linear", true, 0);
        }

        var mSelecionada = 0;
        grupo.children[1].forEach(function (moeda) {
            if (moeda.flgSelecionado == true) {
                mSelecionada++;
            }
        });

        if (mSelecionada == 10 && grupo.children[2].length < 10) {
            var i = grupo.children[2].length;
            var posX = arrPosMoedaDezena[i]['x'];
            var posY = arrPosMoedaDezena[i]['y'];
            flgAddNota = false;

            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('moedaVirando');
            efeitoSom.play();


            grupo.children[1].forEach(function (moeda) {
                if (moeda.flgSelecionado == true) {
                    moeda.flgCorreta = true;
                    game.add.tween(moeda.scale).to({
                        x: arrPosMoedaDezena[i]['sx'],
                        y: arrPosMoedaDezena[i]['sy']
                    }, 800, "Linear", true);

                    var anim = game.add.tween(moeda).to({
                        x: posX,
                        y: posY,
                        alpha: 1
                    }, 800, "Linear", true, 0);

                    anim.onComplete.add(function (obj) {
                        if (flgAddNota == false) {
                            flgAddNota = true;
                            stageJogoPorquinhos.addNotaDez(i);
                        }
                        var anim2 = game.add.tween(moeda).to({alpha: 0}, 800, "Linear", true, 0);
                        anim2.onComplete.add(function () {
                            moeda.destroy();
                        })
                    });
                    posX += 30;
                    if (posX >= arrPosMoedaDezena[i]['mx']) {
                        posX = arrPosMoedaDezena[i]['x'];
                        posY += 30;
                    }
                }
            });
        } else if (mSelecionada == 10 && grupo.children[3].length == 1) {
            alert('enviar as nota para centena antes de enviar as moeda')
        } else {
            if (audio) {
                audio.destroy();
            }
            audio = game.add.audio('novamente');
            audio.play();
            if (flgAudio == false) {
                audio.volume = 0;
            }
            audio.onStop.add(function () {
                audio = game.add.audio('erro10moeda');
                audio.play();
                if (flgAudio == false) {
                    audio.volume = 0;
                }
            })
        }

    }, moverMoedaCentena: function () {
        if (jogador == 1) {
            var grupo = gpJogadorUm;
        } else {
            var grupo = gpJogadorDois;
        }
        if (grupo.children[2].length > 0) {
            var nNotaSelecionada = 0;
            grupo.children[2].forEach(function (nota) {
                if (nota.flgSelecionado == true) {
                    nNotaSelecionada++;
                }
            })
            if (nNotaSelecionada == 10) {
                var flgNota = false;
                grupo.children[2].forEach(function (nota) {
                    nota.frame = 0;
                    game.add.tween(nota.scale).to({x: 0.75, y: 0.75}, 1200, "Linear", true);
                    var anim = game.add.tween(nota).to({x: 40, y: 220}, 1200, "Linear", true, 0);
                    anim.onComplete.add(function () {
                        if (flgNota == false) {
                            flgNota = true;
                            var notaCem = game.add.button(0, 0, 'nota100', stageJogoPorquinhos.selecionaNotaCem);
                            notaCem.x = 10;
                            notaCem.flgSelecionado = false;
                            notaCem.y = 220;
                            notaCem.alpha = 0;
                            notaCem.scale.setTo(.8, .8);
                            grupo.children[3].add(notaCem);
                            game.add.tween(notaCem).to({alpha: 1}, 1200, "Linear", true, 0);

                            if (audio) {
                                audio.destroy();
                            }
                            audio = game.add.audio('exelente');
                            audio.play();
                            if (flgAudio == false) {
                                audio.volume = 0;
                            }
                            audio.onStop.add(function () {
                                audio = game.add.audio('juntou100');
                                audio.play();
                                if (flgAudio == false) {
                                    audio.volume = 0;
                                }
                            })

                            btnAvacar.animations.play('avancar', 2, true);

                        }
                        var anim2 = game.add.tween(nota).to({x: 40, y: 220}, 1200, "Linear", true, 0);
                        anim2.onComplete.add(function () {
                            etapaJogo = 11;
                            nota.destroy();
                        })
                    })
                });
                if (grupo.children[1].length < 10) {
                    if (grupo.children[4].alpha < 1) {
                        game.add.tween(grupo.children[4]).to({alpha: 1}, 300, "Linear", true, 0);
                    }
                }
            } else {
                if (audio) {
                    audio.destroy();
                }
                audio = game.add.audio('xii')
                audio.play();
                if (flgAudio == false) {
                    audio.volume = 0;
                }
                audio.onStop.add(function () {
                    audio = game.add.audio('erro10Cedulas');
                    audio.play();
                    if (flgAudio == false) {
                        audio.volume = 0;
                    }

                    if (grupo.children[2].length == 10) {
                        audio.onStop.add(function () {
                            audio = game.add.audio('comoTrocarNota');
                            audio.play();
                            if (flgAudio == false) {
                                audio.volume = 0;
                            }
                        });
                    }
                });
            }
        }
    }, organizaRestoMoeda: function () {
        var grupo;
        if (jogador == 1) {
            grupo = gpJogadorUm;
        } else {
            grupo = gpJogadorDois;
        }
        if (grupo.children[2].length == 10) {
            etapaJogo = 10;
        } else {
            etapaJogo = 8;
        }
        var posX = posXInicialP;
        var posY = posYInicialP;
        grupo.children[1].forEach(function (item) {

            game.add.tween(item).to({x: posX, y: posY}, 500, "Linear", true);
            posX += tamanhoW;
            if (posX >= (1200 - tamanhoW)) {
                posX = posXInicialP;
                posY += tamanhoH;
            }
        });
    },
    addNotaDez: function (i) {
        if (efeitoSom) {
            efeitoSom.destroy();
        }
        efeitoSom = game.add.audio('sonParabens');
        efeitoSom.play();

        var grupo;
        if (jogador == 1) {
            grupo = gpJogadorUm;
        } else {
            grupo = gpJogadorDois;
        }
        var nota = game.add.button(0, 0, 'nota10', stageJogoPorquinhos.selecionaNotaDez);
        nota.x = arrPosMoedaDezena[i]['x'] - 30;
        nota.y = arrPosMoedaDezena[i]['y'] - 30;
        nota.flgSelecionado = false;
        nota.alpha = 0;
        nota.scale.setTo(.4, .4);
        grupo.children[2].add(nota);
        var anim = game.add.tween(nota).to({alpha: 1}, 1000, "Linear", true, 0);
        anim.onComplete.add(function () {
            stageJogoPorquinhos.organizaRestoMoeda();
        });
        var nNota = 0;
        grupo.children[2].forEach(function (nota) {
            nNota++;
        });
        if (nNota == 10) {
            if (audio) {
                audio.destroy();
            }
            audio = game.add.audio('vcJuntou');
            audio.play();
            if (flgAudio == false) {
                audio.volume = 0;
            }
        }
    }, contrucaoResultaNivel1: function () {

        for (var obj = gpResultadoNivel1.children.length; obj > 0; obj--) {
            gpResultadoNivel1.children[obj].destroy();
        }
        var prateleiraC = game.add.sprite(0, 282, 'prateleira');
        prateleiraC.flgEsconde = true;
        prateleiraC.flgSelecionado = false;
        gpResultadoNivel1.add(prateleiraC);

        var prateleiraB = game.add.sprite(0, 435, 'prateleira');
        prateleiraB.flgEsconde = true;
        prateleiraB.flgSelecionado = false;
        gpResultadoNivel1.add(prateleiraB);

        imgJilo = game.add.sprite(790, 380, 'jiloCabeca');
        imgJilo.scale.setTo(0.8, 0.8);
        imgJilo.flgEsconde = true;
        imgJilo.flgSelecionado = false;
        imgJilo.animations.add('mover');
        imgJilo.animations.play('mover', 1, true);
        gpResultadoNivel1.add(imgJilo);

        var hercules = game.add.sprite(850, 160, 'herculesP');
        hercules.scale.setTo(0.8, 0.8);
        hercules.flgEsconde = true;
        hercules.flgSelecionado = false;
        gpResultadoNivel1.add(hercules);


        var btn20 = game.add.button(90, 150, 'b20', stageJogoPorquinhos.selecionaBrinquedo);
        btn20.scale.setTo(0.9, 0.9);
        btn20.flgSelecionado = false;
        btn20.valor = 20;
        btn20.posx = 90;
        btn20.posy = 150;
        btn20.flgEsconde = true;
        gpResultadoNivel1.add(btn20);

        var btn40 = game.add.button(220, 150, 'b40', stageJogoPorquinhos.selecionaBrinquedo);
        btn40.scale.setTo(0.9, 0.9);
        btn40.flgSelecionado = false;
        btn40.valor = 40;
        btn40.posx = 220;
        btn40.posy = 150;
        btn40.flgEsconde = true;
        gpResultadoNivel1.add(btn40);

        var btn50 = game.add.button(370, 150, 'b50', stageJogoPorquinhos.selecionaBrinquedo);
        btn50.scale.setTo(0.9, 0.9);
        btn50.flgSelecionado = false;
        btn50.valor = 50;
        btn50.posx = 370;
        btn50.posy = 150;
        btn50.flgEsconde = true;
        gpResultadoNivel1.add(btn50);

        var btn30 = game.add.button(520, 150, 'b30', stageJogoPorquinhos.selecionaBrinquedo);
        btn30.scale.setTo(0.9, 0.9);
        btn30.flgSelecionado = false;
        btn30.valor = 30;
        btn30.posx = 520;
        btn30.posy = 150;
        btn30.flgEsconde = true;
        gpResultadoNivel1.add(btn30);

        var btn103 = game.add.button(650, 150, 'b103', stageJogoPorquinhos.selecionaBrinquedo);
        btn103.scale.setTo(0.9, 0.9);
        btn103.flgSelecionado = false;
        btn103.valor = 103;
        btn103.posx = 650;
        btn103.posy = 150;
        btn103.flgEsconde = true;
        gpResultadoNivel1.add(btn103);

        // segunda prateleira
        var btn70 = game.add.button(70, 300, 'b70', stageJogoPorquinhos.selecionaBrinquedo);
        btn70.scale.setTo(0.9, 0.9);
        btn70.flgSelecionado = false;
        btn70.valor = 70;
        btn70.posx = 70;
        btn70.posy = 300;
        btn70.flgEsconde = true;
        gpResultadoNivel1.add(btn70);

        var btn10 = game.add.button(210, 300, 'b10', stageJogoPorquinhos.selecionaBrinquedo);
        btn10.scale.setTo(0.9, 0.9);
        btn10.flgSelecionado = false;
        btn10.valor = 10;
        btn10.posx = 210;
        btn10.posy = 300;
        btn10.flgEsconde = true;
        gpResultadoNivel1.add(btn10);

        var btn60 = game.add.button(360, 300, 'b60', stageJogoPorquinhos.selecionaBrinquedo);
        btn60.scale.setTo(0.9, 0.9);
        btn60.flgSelecionado = false;
        btn60.valor = 60;
        btn60.posx = 360;
        btn60.posy = 300;
        btn60.flgEsconde = true;
        gpResultadoNivel1.add(btn60);

        var btn90 = game.add.button(480, 300, 'b90', stageJogoPorquinhos.selecionaBrinquedo);
        btn90.scale.setTo(0.9, 0.9);
        btn90.flgSelecionado = false;
        btn90.valor = 90;
        btn90.posx = 480;
        btn90.posy = 300;
        btn90.flgEsconde = true;
        gpResultadoNivel1.add(btn90);

        var btn80 = game.add.button(640, 300, 'b80', stageJogoPorquinhos.selecionaBrinquedo);
        btn80.scale.setTo(0.9, 0.9);
        btn80.flgSelecionado = false;
        btn80.valor = 80;
        btn80.posx = 640;
        btn80.posy = 300;
        btn80.flgEsconde = true;
        gpResultadoNivel1.add(btn80);

        var balcao = game.add.sprite(0, 530, 'balcoResultado');
        balcao.flgEsconde = false;
        balcao.flgSelecionado = false;
        gpResultadoNivel1.add(balcao);

    }, contrucaoResultaNivel2: function () {

        for (var obj = gpResultadoNivel2.children.length; obj > 0; obj--) {
            gpResultadoNivel2.children[obj].destroy();
        }


        var prateleiraC = game.add.sprite(0, 282, 'prateleira');
        prateleiraC.flgEsconde = true;
        prateleiraC.flgSelecionado = false;
        gpResultadoNivel2.add(prateleiraC)

        var prateleiraB = game.add.sprite(0, 435, 'prateleira');
        prateleiraB.flgEsconde = true;
        prateleiraB.flgSelecionado = false;
        gpResultadoNivel2.add(prateleiraB)

        imgJilo = game.add.sprite(790, 380, 'jiloCabeca');
        imgJilo.scale.setTo(0.8, 0.8);
        imgJilo.flgEsconde = true;
        imgJilo.flgSelecionado = false;
        imgJilo.animations.add('mover');
        imgJilo.animations.play('mover', 1, true);
        gpResultadoNivel2.add(imgJilo);

        var hercules = game.add.sprite(850, 160, 'herculesP');
        hercules.scale.setTo(0.8, 0.8);
        hercules.flgEsconde = true;
        hercules.flgSelecionado = false;
        gpResultadoNivel2.add(hercules);


        var btn20 = game.add.button(90, 150, 'b20', stageJogoPorquinhos.selecionaBrinquedo);
        btn20.scale.setTo(0.9, 0.9);
        btn20.flgSelecionado = false;
        btn20.valor = 20;
        btn20.posx = 90;
        btn20.posy = 150;
        btn20.flgEsconde = true;
        gpResultadoNivel2.add(btn20);

        var btn40 = game.add.button(220, 150, 'b40', stageJogoPorquinhos.selecionaBrinquedo);
        btn40.scale.setTo(0.9, 0.9);
        btn40.flgSelecionado = false;
        btn40.valor = 40;
        btn40.posx = 220;
        btn40.posy = 150;
        btn40.flgEsconde = true;
        gpResultadoNivel2.add(btn40);

        var btn50 = game.add.button(370, 150, 'b50', stageJogoPorquinhos.selecionaBrinquedo);
        btn50.scale.setTo(0.9, 0.9);
        btn50.flgSelecionado = false;
        btn50.valor = 50;
        btn50.posx = 370;
        btn50.posy = 150;
        btn50.flgEsconde = true;
        gpResultadoNivel2.add(btn50);

        var btn30 = game.add.button(520, 150, 'b30', stageJogoPorquinhos.selecionaBrinquedo);
        btn30.scale.setTo(0.9, 0.9);
        btn30.flgSelecionado = false;
        btn30.valor = 30;
        btn30.posx = 520;
        btn30.posy = 150;
        btn30.flgEsconde = true;
        gpResultadoNivel2.add(btn30);

        var btn103 = game.add.button(650, 150, 'b103', stageJogoPorquinhos.selecionaBrinquedo);
        btn103.scale.setTo(0.9, 0.9);
        btn103.flgSelecionado = false;
        btn103.valor = 103;
        btn103.posx = 650;
        btn103.posy = 150;
        btn103.flgEsconde = true;
        gpResultadoNivel2.add(btn103);

        // segunda prateleira
        var btn70 = game.add.button(70, 300, 'b70', stageJogoPorquinhos.selecionaBrinquedo);
        btn70.scale.setTo(0.9, 0.9);
        btn70.flgSelecionado = false;
        btn70.valor = 70;
        btn70.posx = 70;
        btn70.posy = 300;
        btn70.flgEsconde = true;
        gpResultadoNivel2.add(btn70);

        var btn10 = game.add.button(210, 300, 'b10', stageJogoPorquinhos.selecionaBrinquedo);
        btn10.scale.setTo(0.9, 0.9);
        btn10.flgSelecionado = false;
        btn10.valor = 10;
        btn10.posx = 210;
        btn10.posy = 300;
        btn10.flgEsconde = true;
        gpResultadoNivel2.add(btn10);

        var btn60 = game.add.button(360, 300, 'b60', stageJogoPorquinhos.selecionaBrinquedo);
        btn60.scale.setTo(0.9, 0.9);
        btn60.flgSelecionado = false;
        btn60.valor = 60;
        btn60.posx = 360;
        btn60.posy = 300;
        btn60.flgEsconde = true;
        gpResultadoNivel2.add(btn60);

        var btn90 = game.add.button(480, 300, 'b90', stageJogoPorquinhos.selecionaBrinquedo);
        btn90.scale.setTo(0.9, 0.9);
        btn90.flgSelecionado = false;
        btn90.valor = 90;
        btn90.posx = 480;
        btn90.posy = 300;
        btn90.flgEsconde = true;
        gpResultadoNivel2.add(btn90);

        var btn80 = game.add.button(640, 300, 'b80', stageJogoPorquinhos.selecionaBrinquedo);
        btn80.scale.setTo(0.9, 0.9);
        btn80.flgSelecionado = false;
        btn80.valor = 80;
        btn80.posx = 640;
        btn80.posy = 300;
        btn80.flgEsconde = true;
        gpResultadoNivel2.add(btn80);

        var balcao = game.add.sprite(0, 530, 'balcoResultado');
        balcao.flgEsconde = false;
        balcao.flgSelecionado = false;
        gpResultadoNivel2.add(balcao);


    }, mudarJogador: function () {
        posBrinquedoX = posBrinquedoXInicial;
        posBrinquedoY = posBrinquedoYInicial;
        fundoP.frame = 1;

        //hercules
        gpJogada.children[0].alpha = 1;
        gpJogada.children[0].visible = 1;
        //jilo
        gpJogada.children[1].alpha = 1;
        gpJogada.children[1].visible = 1;

        //alvo
        gpJogada.children[3].visible = 0;

        //texto Jogador
        gpJogada.children[6].alpha = 1;
        gpJogada.children[6].visible = 1;
        gpJogada.children[7].alpha = 1;
        gpJogada.children[7].visible = 1;

        if (jogador == 1) {
            jogador = 2;
            fundoP.frame = 2;
        } else {
            rodadaPorq++;
            jogador = 1;
            fundoP.frame = 3;
        }
        gpJogadorUm.visible = 0;
        gpJogadorDois.visible = 0;
        stageJogoPorquinhos.indicarJogador();

    }, proximaRodada: function () {
        var grupo;
        if (jogador == 1) {
            grupo = gpJogadorUm;
        } else {
            grupo = gpJogadorDois;
        }
        if (grupo.children[3].length >= 1) {
            stageJogoPorquinhos.goToShop();
        } else {
            if (grupo.children[1].length >= 10) {
                if (audio) {
                    audio.destroy();
                }
                audio = game.add.audio('errotroca10');
                audio.play();
                if (flgAudio == false) {
                    audio.volume = 0;
                }

                // console.log("Ainda tem moeda suficiente");
            } else if (grupo.children[2].length == 10) {
                if (audio) {
                    audio.destroy();
                }
                audio = game.add.audio('xii');
                audio.play();
                if (flgAudio == false) {
                    audio.volume = 0;
                }
                audio.onStop.add(function () {
                    audio = game.add.audio('errotroca100');
                    audio.play();
                    if (flgAudio == false) {
                        audio.volume = 0;
                    }
                    audio.onStop.add(function () {
                        audio = game.add.audio('comoTrocarNota');
                        audio.play();
                        if (flgAudio == false) {
                            audio.volume = 0;
                        }
                    });
                });
            } else {
                flgAcertou = false;
                if (nJogadores == 2) {
                    if (flgJogadorDoisCompleto == true || flgJogadorUmCompleto == true) {
                        rodadaPorq++;
                        stageJogoPorquinhos.inicioJogada();
                    } else {
                        stageJogoPorquinhos.mudarJogador();
                    }
                } else {
                    rodadaPorq++;
                    stageJogoPorquinhos.inicioJogada();
                }
            }
        }
    }, goToShop: function () {
        etapaJogo = 12;
        var gpResultado;
        var tempo = 300;
        if (nivelSelecionado == 0) {
            gpResultado = gpResultadoNivel1;
            gpResultadoNivel1.alpha = 0;
            gpResultadoNivel1.visible = 1;

            if (audio) {
                audio.destroy();
            }

            audio = game.add.audio('aplausos');
            audio.play();
            if (flgAudio == false) {
                audio.volume = 0;
            }
            audio.onStop.add(function () {
                audio = game.add.audio('lojaNivel1');
                audio.play();
                if (flgAudio == false) {
                    audio.volume = 0;
                }
            });


        } else {
            gpResultado = gpResultadoNivel2;
            gpResultadoNivel2.alpha = 0;
            gpResultadoNivel2.visible = 1;

            if (audio) {
                audio.destroy();
            }
            audio = game.add.audio('aplausos');
            audio.play();
            if (flgAudio == false) {
                audio.volume = 0;
            }
            audio.onStop.add(function () {
                audio = game.add.audio('lojaNivel2');
                audio.play();
                if (flgAudio == false) {
                    audio.volume = 0;
                }
            });
        }
        game.add.tween(gpResultado).to({alpha: 1}, tempo, "Linear", true, 0);

        var grupo;
        if (jogador == 1) {
            grupo = gpJogadorUm;
            fundoP.frame = 4;
        } else {
            grupo = gpJogadorDois;
            fundoP.frame = 5;
        }
        gpResultado.children[0].frame = 0;
        gpResultado.children[1].frame = 0;
        gpResultadoNivel2.forEach(function (item) {
            item.visible = 1;
            item.alpha = 1;
        })
        //nota100
        grupo.children[3].children[0].frame = 1;
        game.add.tween(grupo.children[3]).to({x: 20, y: 320}, tempo, "Linear", true, 0);
        game.add.tween(grupo.children[3].scale).to({x: 0.7, y: 0.7}, tempo, "Linear", true);
        //setas
        game.add.tween(grupo.children[4]).to({alpha: 0}, tempo, "Linear", true, 0);
        game.add.tween(grupo.children[5]).to({alpha: 0}, tempo, "Linear", true, 0);
        var anim = game.add.tween(gpJogada).to({alpha: 0}, tempo, "Linear", true, 0);
        anim.onComplete.add(function () {
            gpJogada.visible = 0;
            grupo.children[4].visible = 0;
            grupo.children[5].visible = 0;
        });

        var posX = 750;
        var posY = 570;
        grupo.children[1].forEach(function (moeda) {
            // moeda.frame = 1;
            game.add.tween(moeda.scale).to({x: .50, y: .50}, tempo, "Linear", true, 0);
            game.add.tween(moeda).to({x: posX, y: posY}, tempo, "Linear", true, 0);
            posX += 65;
        });
        posX = 510;
        posY = 510;
        grupo.children[2].forEach(function (nota) {
            nota.flgSelecionado = false;
            game.add.tween(nota).to({x: posX, y: posY}, tempo, "Linear", true, 0);
            game.add.tween(nota.scale).to({x: .22, y: .22}, 300, "Linear", true, 0);
            if (posY == 510) {
                posY = 560;
            } else {
                posY = 510;
                posX += 95;
            }
        })

    }, trocarCem: function () {
        if (audio) {
            audio.destroy();
        }
        audio = game.add.audio('cliqueBrinquedo');
        audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }
        etapaJogo = 14;
        var tempo = 400;

        var grupo;
        if (jogador == 1) {
            grupo = gpJogadorUm;
        } else {
            grupo = gpJogadorDois;
        }

        var anim = game.add.tween(grupo.children[3].children[0]).to({x: -250}, tempo, "Linear", true, 0);
        anim.onComplete.add(function () {
            grupo.children[3].children[0].destroy();

            var posx = 35;
            var posy = 510;
            for (var n = 0; n < 10; n++) {
                var nota = game.add.button(0, 0, 'nota10', stageJogoPorquinhos.selecionaNotaDez);
                nota.scale.setTo(.22, .22);
                nota.x = -50;
                nota.y = 530;
                nota.flgSelecionado = false;
                grupo.children[2].add(nota);
                game.add.tween(nota).to({x: posx, y: posy}, (tempo + 100), "Linear", true, 0);
                if (n == 4) {
                    posx = 35;
                    posy = 560;
                } else {
                    posx += 95;
                }
            }
        });
        btnAvacar.animations.play('avancar', 2, true);

    }, selecionaBrinquedo: function (brinquedo) {
        if (efeitoSom) {
            efeitoSom.destroy();
        }
        efeitoSom = game.add.audio('clickBringuedo');
        efeitoSom.play();

        if (etapaJogo == 14) {
            brinquedoSelecionado = brinquedo;
            var grupo;
            var grupoNivel;
            gpQuadroCompra.visible = 1;
            if (jogador == 1) {
                grupo = gpJogadorUm;
                gpQuadroCompra.children[0].children[0].visible = 1;
                gpQuadroCompra.children[0].children[0].alpha = 0;
                game.add.tween(gpQuadroCompra.children[0].children[0]).to({alpha: 1}, 500, "Linear", true, 0);
                gpQuadroCompra.children[0].visible = 1;
            } else {
                grupo = gpJogadorDois;
                gpQuadroCompra.children[1].children[0].visible = 1;
                gpQuadroCompra.children[1].children[0].alpha = 0;
                game.add.tween(gpQuadroCompra.children[1].children[0]).to({alpha: 1}, 500, "Linear", true, 0);
                gpQuadroCompra.children[1].visible = 1;
            }
            if (nivelSelecionado == 0) {
                grupoNivel = gpResultadoNivel1;
            } else {
                grupoNivel = gpResultadoNivel2;
            }

            etapaJogo = 15;
            valorBrinquedo = brinquedo.valor;
            brinquedo.flgSelecionado = true;
            var i = 0;
            grupoNivel.forEach(function (obj) {
                if (obj.flgSelecionado == false && obj.flgEsconde == true) {//&& i != 12
                    var anim = game.add.tween(obj).to({alpha: 0}, 300, "Linear", true, 0);
                    anim.onComplete.add(function () {
                        obj.visible = 0;
                    })
                }
                i++;
            })
            game.add.tween(brinquedo.scale).to({x: 1.5, y: 1.5}, 300, "Linear", true, 0);
            game.add.tween(brinquedo).to({x: 220, y: 170}, 300, "Linear", true, 0);


            if (audio) {
                audio.destroy();
            }
            audio = game.add.audio('concluirACompra');
            audio.play();
            if (flgAudio == false) {
                audio.volume = 0;
            }


        } else if (etapaJogo < 14) {
            if (audio) {
                audio.destroy();
            }
            audio = game.add.audio('cliqueBrinquedo');
            audio.play();
            if (flgAudio == false) {
                audio.volume = 0;
            }
            // console.log("troque os cem reais antes de comprar");
        }
    }, comprarBriquedo: function () {

        var valorSelecionado = 0;
        flgBinquedoDisponivel = true;
        var grupo;
        var grupoNivel;
        var grupoCompra;
        var valorDisponivel = 0;
        if (jogador == 1) {
            grupo = gpJogadorUm;
            grupoCompra = gpQuadroCompra.children[0].children[1];
            grupoCompra.visible = 1;
        } else {
            grupo = gpJogadorDois;
            grupoCompra = gpQuadroCompra.children[1].children[1];
            grupoCompra.visible = 1;
        }
        if (nivelSelecionado == 0) {
            grupoNivel = gpResultadoNivel1;
        } else {
            grupoNivel = gpResultadoNivel2;
        }

        // conta so  da unidade
        grupo.children[1].forEach(function (obj) {
            valorDisponivel++;
            //selecionado
            if (obj.flgSelecionado == true) {
                valorSelecionado++;
            }

        });//conta  dezena
        grupo.children[2].forEach(function (obj) {
            // disponivel
            valorDisponivel += 10;
            // selecionado
            if (obj.flgSelecionado == true) {
                valorSelecionado += 10;
            }
        });
        if (valorDisponivel >= valorBrinquedo) {
            if (valorSelecionado == valorBrinquedo) {


                etapaJogo = 16;
                // destruir dinheriro Usado
                for (var n = grupo.children[1].length - 1; n >= 0; n--) {
                    if (grupo.children[1].children[n].flgSelecionado == true) {
                        grupo.children[1].children[n].destroy();
                    }
                }
                for (var n = (grupo.children[2].length - 1); n >= 0; n--) {
                    if (grupo.children[2].children[n].flgSelecionado == true) {
                        grupo.children[2].children[n].destroy();
                    }
                }
                if (nivelSelecionado == 0) {
                    var anim = game.add.tween(brinquedoSelecionado).to({x: 850, y: 230}, 500, "Linear", true, 0);
                    anim.onComplete.add(function () {
                        grupoCompra.add(brinquedoSelecionado);
                    });

                    stageJogoPorquinhos.resultadoParcial();
                } else {
                    if (efeitoSom) {
                        efeitoSom.destroy();
                    }
                    efeitoSom = game.add.audio('sonParabens');
                    efeitoSom.play();

                    etapaJogo = 14;
                    gpResultadoNivel2.forEach(function (obj) {
                        if (obj.flgSelecionado == false) {
                            obj.visible = 1;
                            game.add.tween(obj).to({alpha: 1}, 500, "Linear", true, 0);
                        }
                    });
                    gpResultadoNivel2.children[2].visible = 0;
                    gpResultadoNivel2.children[3].visible = 0;

                    gpResultadoNivel2.children[0].frame = 1;
                    gpResultadoNivel2.children[1].frame = 1;

                    game.add.tween(gpResultadoNivel2.children[0]).to({alpha: 1}, 500, "Linear", true, 0);
                    game.add.tween(gpResultadoNivel2.children[1]).to({alpha: 1}, 500, "Linear", true, 0);

                    game.add.tween(brinquedoSelecionado.scale).to({x: 0.6, y: 0.6}, 500, "Linear", true, 0);
                    var anim = game.add.tween(brinquedoSelecionado).to({
                        x: posBrinquedoX,
                        y: posBrinquedoY
                    }, 500, "Linear", true, 0);

                    posBrinquedoX += (brinquedoSelecionado.width * 0.55);

                    if (posBrinquedoX >= 990) {
                        posBrinquedoY += (brinquedoSelecionado.height * 0.55);
                        posBrinquedoX = posBrinquedoXInicial;
                    }

                    anim.onComplete.add(function () {
                        grupoCompra.add(brinquedoSelecionado);
                    });

                }

            } else {
                if (audio) {
                    audio.destroy();
                }
                audio = game.add.audio('xii');
                audio.play();
                if (flgAudio == false) {
                    audio.volume = 0;
                }
                audio.onStop.add(function () {
                    audio = game.add.audio('erroPreco');
                    audio.play();
                    if (flgAudio == false) {
                        audio.volume = 0;
                    }
                })
            }
        } else {
            if (nivelSelecionado == 0) {
                if (jogador == 1) {
                    gpQuadroCompra.children[0].visible = 0;
                } else {
                    gpQuadroCompra.children[1].visible = 0;
                }
            } else {
                gpResultadoNivel2.children[2].visible = 0;
                gpResultadoNivel2.children[3].visible = 0;
            }

            grupoNivel.forEach(function (obj) {
                if (obj.key != 'jiloCabeca' || obj.key != 'herculesP') {
                    obj.visible = 1;
                }
                game.add.tween(obj).to({alpha: 1}, 300, "Linear", true, 0);
            });

            brinquedoSelecionado.flgSelecionado = false;
            game.add.tween(brinquedoSelecionado.scale).to({x: 0.9, y: 0.9}, 300, "Linear", true, 0);
            game.add.tween(brinquedoSelecionado).to({
                x: brinquedoSelecionado.posx,
                y: brinquedoSelecionado.posy
            }, 300, "Linear", true, 0);
            etapaJogo = 14;
            btnAvacar.animations.play('avancar', 2, true);
            // console.log("valor disponivel maior que o brinquedo");
            if (audio) {
                audio.destroy();
            }
            audio = game.add.audio('tente');
            audio.play();
            if (flgAudio == false) {
                audio.volume = 0;
            }

            audio.onStop.add(function () {
                audio = game.add.audio('dinheiroInsuficiente');
                audio.play();
                if (flgAudio == false) {
                    audio.volume = 0;
                }
            });
        }

    }, resultadoParcial: function () {
        if (audio) {
            audio.destroy();
        }
        audio = game.add.audio('legalDGastou');
        audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }

        etapaJogo = 17;
        gpLayoutResultado.visible = 1;
        gpLayoutResultado.children[2].visible = 1;
        // var grupo;
        if (jogador == 1) {
            game.add.tween(nomeJogador1).to({x: 40, y: 240}, 300, "Linear", true, 0);
            flgJogadorUmCompleto = true
        } else {
            game.add.tween(nomeJogador2).to({x: 40 + nomeJogador2.width, y: 240}, 300, "Linear", true, 0);
            flgJogadorDoisCompleto = true
        }

    }, proximoJogador: function () {
        flgAcertou = false;
        var grupoCompra;

        if (jogador == 1) {
            nomeJogador1.visible = 0;
            grupoCompra = gpQuadroCompra.children[0];
        } else {
            nomeJogador2.visible = 0;
            grupoCompra = gpQuadroCompra.children[1];

        }
        gpJogada.visible = 0;
        if (nivelSelecionado == 0) {
            gpResultadoNivel1.visible = 0;
            gpResultadoNivel1.forEach(function (obj) {
                obj.visible = 1;
                obj.alpha = 1;
            })
            // gpResultadoNivel1.children[2].visible =0;
            // gpResultadoNivel1.children[3].visible =0;
        } else {
            gpResultadoNivel2.visible = 0;
            gpResultadoNivel2.forEach(function (obj) {
                obj.visible = 1;
            })
        }

        if (nJogadores == 2 && (flgJogadorUmCompleto == false || flgJogadorDoisCompleto == false)) {
            gpJogada.visible = 1;
            game.add.tween(gpJogada).to({alpha: 1}, 500, "Linear", true, 0);
            grupoCompra.visible = 0;
            gpQuadroCompra.visible = 0;
            gpLayoutResultado.visible = 0;
            stageJogoPorquinhos.mudarJogador();
        } else if (nJogadores == 2 && (flgJogadorUmCompleto == true || flgJogadorDoisCompleto == true)) {
            stageJogoPorquinhos.resultadoFinal();
        } else {
            stageJogoPorquinhos.voltaParaInicio();
        }

    }, resultadoFinal: function () {// so quando tem 2 jogadores

        for (var n = gpJogadorUm.children[1].length - 1; n >= 0; n--) {
            gpJogadorUm.children[1].children[n].destroy();
        }
        for (var n = gpJogadorUm.children[2].length - 1; n >= 0; n--) {
            gpJogadorUm.children[2].children[n].destroy();
        }
        for (var n = gpJogadorDois.children[2].length - 1; n >= 0; n--) {
            gpJogadorDois.children[2].children[n].destroy();
        }
        for (var n = gpJogadorDois.children[1].length - 1; n >= 0; n--) {
            gpJogadorDois.children[1].children[n].destroy();
        }

        tituloJogoP.visible = 1;

        gpJogadorUm.visible = 0;
        gpJogadorDois.visible = 0;
        nomeJogador1.alpha = 1;
        nomeJogador1.visible = 1;
        nomeJogador1.x = 85;
        nomeJogador1.y = 215;

        gpQuadroCompra.children[0].visible = 1;
        gpQuadroCompra.children[0].x = -700;
        gpQuadroCompra.children[0].y = 100;

        nomeJogador2.alpha = 1;
        nomeJogador2.visible = 1;
        nomeJogador2.x = 1100;
        nomeJogador2.y = 215;
        gpQuadroCompra.children[1].visible = 1;
        gpQuadroCompra.children[1].y = 100;
        gpQuadroCompra.children[1].x = 0;


        gpLayoutResultado.children[2].visible = 0;

    }, btVoltar: function () {
        if (etapaJogo != 0) {
            stageJogoPorquinhos.modelVoltar();
        } else {
            var stage = new Object();
            stage.nomeEstage = "stageSelecaoJogos";
            mudarState(stage);
        }

    }, voltaParaInicio: function () {
        if (gpExplicacaoPorquinho) {
            gpExplicacaoPorquinho.destroy();
        }
        if (gpModalVoltar) {
            gpModalVoltar.destroy();
        }
        etapaJogo = 0;
        rodada = 1;
        nJogadores = "";
        btnImprimir.url = 'pdf/porquinho/ficha_nivel.pdf';
        flgJogadorDoisCompleto = false;
        flgJogadorUmCompleto = false;
        rodadaPorq = 0;
        if (gpJogada) {
            gpJogada.destroy();
        }
        if (imgInicial) {
            imgInicial.destroy();
        }
        if (nomeJogador1) {
            nomeJogador1.destroy();
        }
        if (nomeJogador2) {
            nomeJogador2.destroy();
        }
        nomeJogadores[1] = "";
        nomeJogadores[2] = "";
        fundoP.frame = 0;

        if (gpQuadroCompra) {
            gpQuadroCompra.visible = 0;
        }
        if (gpJogadorUm && gpJogadorUm.children[1]) {
            for (var n = gpJogadorUm.children[1].length - 1; n >= 0; n--) {
                gpJogadorUm.children[1].children[n].destroy();
            }
        }
        if (gpJogadorUm && gpJogadorUm.children[2]) {
            for (var n = gpJogadorUm.children[2].length - 1; n >= 0; n--) {
                gpJogadorUm.children[2].children[n].destroy();
            }
        }
        if (gpJogadorDois && gpJogadorDois.children[2]) {
            for (var n = gpJogadorDois.children[2].length - 1; n >= 0; n--) {
                gpJogadorDois.children[2].children[n].destroy();
            }
        }
        if (gpJogadorDois && gpJogadorDois.children[1]) {
            for (var n = gpJogadorDois.children[1].length - 1; n >= 0; n--) {
                gpJogadorDois.children[1].children[n].destroy();
            }
        }
        if (gpJogadorDois) {
            for (var n = gpJogadorDois.length - 1; n >= 0; n--) {
                gpJogadorDois.children[n].destroy();
            }
        }
        if (gpJogadorUm) {
            for (var n = gpJogadorUm.length - 1; n >= 0; n--) {
                gpJogadorUm.children[n].destroy();
            }
        }
        if (gpResultadoNivel1) {
            for (var n = gpResultadoNivel1.length - 1; n >= 0; n--) {
                gpResultadoNivel1.children[n].destroy();
            }
        }

        if (gpResultadoNivel2) {
            for (var n = gpResultadoNivel2.length - 1; n >= 0; n--) {
                gpResultadoNivel2.children[n].destroy();
            }
        }
        if (gpQuadroCompra.children[0].children[1]) {
            for (var n = gpQuadroCompra.children[0].children[1].length - 1; n >= 0; n--) {
                gpQuadroCompra.children[0].children[1].children[n].destroy();
            }
        }
        if (gpQuadroCompra.children[1].children[1]) {
            for (var n = gpQuadroCompra.children[1].children[1].length - 1; n >= 0; n--) {
                gpQuadroCompra.children[1].children[1].children[n].destroy();
            }
        }
        tituloJogoP.visible = 1;

        nInicial = 0;
        stageJogoPorquinhos.mostarObjetos();

        flgCompletoUm = false;
        flgCompletoDois = false;
        gpLayoutResultado.visible = 0;

        efeitoSom.destroy();
        audio.destroy();
        gpNivel.visible = 0;
        btNivel1.frame = 0;
        btNivel1.alpha = 1;
        btNivel2.frame = 1;
        btNivel2.alpha = 1;
        nivelSelecionado = -1;
        etapaJogo = 0;
        btnAvacar.visible = 1;
        gpSelecao.visible = 1;
        gpNivel.visible = 0;
        gpInicial.visible = 1;
        gpBotoes.visible = 1;

        cb1.visible = 1;
        cb2.visible = 1;

        gpInputJogaodor1.visible = 0;
        gpInputJogaodor2.visible = 0;
        gpResultadoNivel1.visible = 0;
        gpResultadoNivel2.visible = 0;
        flgAcertou = false;

        gpQuadroCompra.children[1].visible = 0;
        gpQuadroCompra.children[0].visible = 0;

        imp_user1.setText('');
        imp_user2.setText('');
        cb1.show();
        cb2.show();

    }, comoJogar: function () {
        btnComo.frame = 0;
        cb1.hide();
        cb2.hide();
        gpBotoes.visible = 0;

        if (gpComoJogarPorco) {
            gpComoJogarPorco.destroy();
        }

        gpComoJogarPorco = game.add.group();
        gpComoJogarPorco.visible = 1;
        if (efeitoSom) {
            efeitoSom.destroy();
        }
        if (audio) {
            audio.destroy();
        }
        // var gpNivel = game.add.group();
        var fundoComoPorquinho = game.add.sprite(0, 0, 'comoJogarP');
        gpComoJogarPorco.add(fundoComoPorquinho);

        var btnVoltarPorco = game.add.button(10, 675, 'icoVoltar', stageJogoPorquinhos.fecharComo, game, 1, 0, 0);
        btnVoltarPorco.input.useHandCursor = true;
        btnVoltarPorco.scale.setTo(.8, .8);
        gpComoJogarPorco.add(btnVoltarPorco);

    }, fecharComo: function () {

        if (etapaJogo == 0) {
            if (nJogadores != "") {
                jogador = 1;
                if ((nJogadores == 1 && imp_user1.value != "") || (nJogadores == 2 && imp_user1.value != "" && imp_user2.value != "")) {
                    if (nivelSelecionado >= 0) {
                        nomeJogadores[1] = imp_user1.value;
                        if (nJogadores == 2) {
                            nomeJogadores[2] = imp_user2.value;
                        }
                    } else {
                        if (gpNivel.visible == 0) {
                            gpNivel.visible = 1;
                        }

                    }
                }
            } else {
                cb1.show();
                cb2.show();
            }
        }


        gpComoJogarPorco.destroy();
        gpComoJogarPorco.visible = 0;
        gpBotoes.visible = 1;
    }, acertouAlvo: function (flecha, porco) {
        flgAcertou = true;
        etapaJogo = 7;
        flecha.kill();
        porco.parent.kill();

        if (efeitoSom) {
            efeitoSom.destroy();
        }
        efeitoSom = game.add.audio('porquinhoQuebra');
        efeitoSom.play();

        var porcoQuebrador = game.add.sprite(900, 160, 'querbrado');
        gpJogada.add(porcoQuebrador);
        var boom = game.add.sprite(840, 140, 'boom');

        var anim = game.add.tween(boom).to({alpha: 0}, 800, "Linear", true, 0);
        anim.onComplete.add(function () {
            boom.destroy();
            game.add.tween(boom).to({alpha: 0}, 1000, "Linear", true, 0);
        });
        game.add.tween(gpJogada.children[4]).to({y: 680}, 300, "Linear", true, 0);

        animArco.stop(true);

        var grupo;
        if (jogador == 1) {
            grupo = gpJogadorUm;
        } else {
            grupo = gpJogadorDois;
        }
        if (grupo.children[2].length == 0 && grupo.children[3].length == 0) {
            audio.destroy();
            audio = game.add.audio('junte10de1');
        }
        if (grupo.children[1].length == 0 && grupo.children[2].length == 0 && grupo.children[3].length == 0) {
            audio.play();
            if (flgAudio == false) {
                audio.volume = 0;
            }
        }


        stageJogoPorquinhos.addMoedaJogador(porco.valor);
    }, modelVoltar: function () {
        gpExplicacaoPorquinho.visible = 0;

        if (audio) {
            audio.destroy();
        }
        audio = game.add.audio('sair');
        audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }

        btnComo.frame = 0;
        pagina = 1;
        gpNivel.visible = 0;
        gpBotoes.visible = 0;

        gpModalVoltar = game.add.group();
        gpModalVoltar.visible = 1;

        if (gpJogadorDois) {
            gpJogadorDois.visible = 0;
        }
        if (gpJogadorUm) {
            gpJogadorUm.visible = 0;
        }

        var fundoVoltar = game.add.sprite(0, 0, 'fundoVoltar');
        gpModalVoltar.add(fundoVoltar);

        var btnSim = game.add.button(680, 150, 'btnSim', stageJogoPorquinhos.voltaParaInicio, game, 1, 0, 0);
        btnSim.input.useHandCursor = true;
        btnSim.anchor.x = 0.5;
        gpModalVoltar.add(btnSim);

        var btnNao = game.add.button(1030, 150, 'btnNao', stageJogoPorquinhos.fechaModalVoltar, game, 1, 0, 0);
        btnNao.input.useHandCursor = true;
        btnNao.anchor.x = 0.5;
        gpModalVoltar.add(btnNao);

        btnSim.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('sairEfeito')
            efeitoSom.volume = 1;
            efeitoSom.play();
        });

        btnNao.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('sairEfeito')
            efeitoSom.volume = 1;
            efeitoSom.play();
        });

    }, fechaModalVoltar: function () {
        if (audio) {
            audio.destroy();
        }
        if (gpExplicacaoPorquinho) {
            gpExplicacaoPorquinho.visible = 1;
        }
        if (etapaJogo == 0) {
            if (nJogadores != "") {
                jogador = 1;
                if ((nJogadores == 1 && imp_user1.value != "") || (nJogadores == 2 && imp_user1.value != "" && imp_user2.value != "")) {
                    if (nivelSelecionado >= 0) {
                        nomeJogadores[1] = imp_user1.value;
                        if (nJogadores == 2) {
                            nomeJogadores[2] = imp_user2.value;
                        }
                    } else {
                        if (gpNivel.visible == 0) {
                            gpNivel.visible = 1;
                        }

                    }
                }
            } else {
                cb1.show();
                cb2.show();
            }
        }

        if (gpJogadorDois && jogador == 2) {
            gpJogadorDois.visible = 1;
        }
        if (gpJogadorUm && jogador == 1) {
            gpJogadorUm.visible = 1;
        }
        gpModalVoltar.destroy();
        gpModalVoltar.visible = 0;
        gpBotoes.visible = 1;
    }
}