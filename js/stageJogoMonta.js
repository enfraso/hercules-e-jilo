var fundo;
var tituloJogo;
var etapaJogo;
var nivelSelecionado;
var posX = 60;
var posY = 500;
var ligaWidth = 66;
var posXFlorUm = -350;
var posXFlorDois = 1530;
var balaoFlor;
var ramalheteUmX = -110;
var ramalheteDoisX = 140;
var tempoAnimacao = [300, 1200];
var cb1, cb2;
var imp_user1, imp_user2;
var rodadaMonta = 1;

var gpSelecao;
var gpInputJogaodor1;
var gpInputJogaodor2;
var gpBotoes;
var gpJogada;
var gpExplicacao;
var gpFloresExp;
var gpJogadorUm;
var gpJogadorDois;
var gpComoJogarMonta;
var gpComoPagUm;
var gpComoPagDois;
var gpModalVoltar;

var pagina;

var txtJogada;
var anguloSorteado;

var txtNome1, txtNome2;
var btNivel1, btNivel2;
var btnAvacar, btnComo, btnSon, btnVoltar;
var btnAudio;
var nomeJogador1;
var nomeJogador2;
var jogador;
var music;
var sonAviso;
var btnVoltarComoMonta;
var btnAvacarComoMonta;

var boolSelecionado = false;

var n;
var x = 50;

var poxXFlor;
var poxYFlor;

var imgJilo;
var imgHercules;

var errou;
var acertou;
var imgInicial;
var flgTempo = false;
var txtExplicacaoMonta;
var tempo = 0;
var text;
var efeitoSom;
// inclinacao da flor
var anguloFlor = [{}, {}, {'0': -30, '1': 0, '2': 30},
    {'0': -40, '1': -10, '2': 10, '3': 40},
    {'0': -50, '1': -30, '2': 0, '3': 30, '4': 50}];
//possicao da flor no eixo X inicial;
var arrFlorInicialX = [{}, {},
    {'0': 920, '1': 880, '2': 845},
    {'0': 870, '1': 840, '2': 810, '3': 780},
    {'0': 830, '1': 806, '2': 782, '3': 758, '4': 734}];
var arrFlorJogadorX = [[],
    [{}, {},
        {'1': 520, '2': 560, '3': 600},
        {'1': 510, '2': 545, '3': 575, '4': 610},
        {'1': 520, '2': 540, '3': 560, '4': 580, '5': 600}],
    [{}, {},
        {'1': -570, '2': -530, '3': -490},
        {'1': -580, '2': -545, '3': -515, '4': -480},
        {'1': -570, '2': -550, '33': -530, '4': -510, '5': -480}]
];
var nArranjoMonta;
var arrSelecionadoMonta = [[], [], []];
var totalFloresJogado = [[], [], []];

var liga;
var ligaX;
var ligaY;
var arrValorAnguloMonta = [[2, 3, 4], [6, 5, 4]];
var arrRamalhete = [0, 0, 0];
var flgCompletoUm = false;
var flgCompletoDois = false;


var teste;
var tempo = 0;

var fundoLoad;
var logoLoad;

var stageJogoMonta = {

    preload: function () {
        // slickUI = game.plugins.add(Phaser.Plugin.SlickUI);
        // slickUI.load('assets/ui/kenney/kenney.json');

    }, create: function () {
        fundoLoad = game.add.sprite(0, 0, 'fundoLoad');

        logoLoad = game.add.sprite((game.width / 2), (game.height / 2) - 70, 'herculesJilo');
        logoLoad.anchor.x = 0.5;
        logoLoad.anchor.y = 0.5;
        logoLoad.animations.add('parabens');
        logoLoad.animations.play('parabens', 3, true);

        text = game.add.text(game.width / 2, 600, 'Carregando ', {fill: '#C1272D'});
        text.anchor.x = 0.5;


        // game.load.onLoadStart.add(stageCarregar.loadStart, this);
        // game.load.onFileComplete.add(stageCarregar.fileComplete, this);
        // game.load.onLoadComplete.add(stageCarregar.loadComplete, this);

        stageJogoMonta.start();


    }, start: function () {
        game.load.spritesheet('fundoMonta', 'assets/monta/fundo.png', 1200, 800);
        game.load.spritesheet('herculesMonta', 'assets/monta/herculesMonta.png', 325, 529);
        game.load.spritesheet('ligaMonta', 'assets/monta/liga.png', 62, 20);
        game.load.image('maisFlor', 'assets/monta/mais_flor.png');

        game.load.image('tituloMonta', 'assets/monta/titulo.png');
        game.load.spritesheet('balcao1', 'assets/monta/balcao1.png', 600, 283);
        game.load.spritesheet('balcao2', 'assets/monta/balcao2.png', 591, 282);
        game.load.image('caule', 'assets/monta/caule.png');
        game.load.image('caule2', 'assets/monta/caule2.png');
        game.load.spritesheet('flor', 'assets/monta/flor.png', 44, 87);
        game.load.image('fita', 'assets/monta/fita.png');
        game.load.image('laso', 'assets/monta/laso.png');
        game.load.spritesheet('roletaMonta', 'assets/monta/roleta.png', 186, 186);
        game.load.image('ponteiroMonta', 'assets/monta/pondero.png');
        game.load.spritesheet('vaso', 'assets/monta/vaso.png', 164, 154);
        game.load.spritesheet('balaoFlorAzul', 'assets/monta/balao_flores_azul.png', 125, 90);
        game.load.spritesheet('balaoFlorVermelho', 'assets/monta/balao_flores_vermelho.png', 125, 90);

        game.load.audio('3RamalheteBuque', ['son/monta/erro_3_ramalhetes_buque.mp3']);
        game.load.audio('4RamalheteBuque', ['son/monta/erro_4_ramalhetes_buque.mp3']);
        game.load.audio('5RamalheteBuque', ['son/monta/erro_5_ramalhetes_buque.mp3']);
        game.load.audio('ramalhe3Flores', ['son/monta/erro_formar_ramalhete_3_flores.mp3']);
        game.load.audio('ramalhe4Flores', ['son/monta/erro_formar_ramalhete_4_flores.mp3']);
        game.load.audio('ramalhe5Flores', ['son/monta/erro_formar_ramalhete_5_flores.mp3']);
        game.load.audio('ramalheteAntes', ['son/monta/erro_forme_ramalhete_antes.mp3']);
        // game.load.audio('fim', ['son/monta/fim_do_jogo.mp3']);
        game.load.audio('legalFim', ['son/monta/legal_fim_jogo.mp3']);
        game.load.audio('montaExplicacao', ['son/monta/monta_explicacao_jogo.mp3']);
        game.load.audio('montaNivel1', ['son/monta/monta_nivel_1.mp3']);
        game.load.audio('montaNivel2', ['son/monta/monta_nivel_2.mp3']);
        game.load.audio('olaMonta', ['son/monta/ola_monta_buque_escolha_jogadores.mp3']);
        game.load.audio('demonstracao3', ['son/monta/demonstracao_3.mp3']);
        game.load.audio('demonstracao4', ['son/monta/demonstracao_4.mp3']);
        game.load.audio('demonstracao5', ['son/monta/demonstracao_5.mp3']);
        game.load.audio('sonGiraRoleta', ['son/monta/gire_roleta_flores.mp3']);
        game.load.audio('3flores', ['son/monta/3_flores_3_ramalhetes.mp3']);
        game.load.audio('4flores', ['son/monta/4_flores_4_ramalhetes.mp3']);
        game.load.audio('5flores', ['son/monta/5_flores_5_ramalhetes.mp3']);
        game.load.audio('ganhou2', ['son/monta/ganhou_2_flores.mp3']);
        game.load.audio('ganhou3', ['son/monta/ganhou_3_flores.mp3']);
        game.load.audio('ganhou4', ['son/monta/ganhou_4_flores.mp3']);
        game.load.audio('ganhou5', ['son/monta/ganhou_5_flores.mp3']);
        game.load.audio('ganhou6', ['son/monta/ganhou_6_flores.mp3']);
        game.load.audio('cliqueFlor', ['son/monta/clique_flor.mp3']);

        game.load.audio('efBuque5', ['son/efeitos/monta/buque_com_5.mp3']);
        game.load.audio('efBuque4', ['son/efeitos/monta/buque_com_4.mp3']);
        game.load.audio('efBuque3', ['son/efeitos/monta/buque_com_3.mp3']);

        //
        game.load.spritesheet('fundoMontaComo', 'assets/monta/fundoMontaComo.png', 1200, 800);
        game.load.spritesheet('pag1', 'assets/monta/MontoComoPag1.png', 1200, 800);
        game.load.spritesheet('pag2', 'assets/monta/MontoComoPag2.png', 1200, 800);


        game.load.audio('musicaMonta', ['son/trilha/monta/monta.mp3']);

        stageJogoMonta.load.start();

    },
    update: function () {
        if (boolSelecionado == true && alvo != "") {
            stageJogoMonta.fixLocation();
        }
        if (etapaJogo == 11) {
            tempo++;
            if (tempo >= 200) {
                etapaJogo = 12;
                tempo = 0;
                stageJogoMonta.resultado();
            }
        }
        if (flgTempo == true) {
            tempo++;
        }

    }, comecoJogo: function () {

        tempoAnimacao = [300, 1200];
        stageJogoMonta.sonInicial();
        etapaJogo = 0;
        fundo = game.add.sprite(0, 0, 'fundoMonta');

        game.stage.backgroundColor = 0x4d4d4d;

        gpInicial = game.add.group();

        icoMusica = game.add.button(1100, 705, 'icoMusica', alterarMusica, game, 1, 0, 0);
        icoMusica.scale.setTo(.80, .80);
        icoMusica.onInputOver.add(function () {
            icoMusica.alpha = 0.8;
        });
        icoMusica.onInputOut.add(function () {
            icoMusica.alpha = 1;
        });
        if (musica) {
            musica.destroy();
        }
        musica = game.add.audio('musicaMonta');
        musica.volume = 0.8;
        musica.loopFull(1);
        musica.play();

        // var grade = game.add.sprite(0, 0, 'grade');
        tituloJogo = game.add.sprite(game.width / 2 - 185, 20, 'tituloMonta');

        gpJogadorUm = game.add.group();
        gpJogadorUm.name = "gpJogadorUm";
        gpJogadorUm.visible = 0;

        gpJogadorDois = game.add.group();
        gpJogadorDois.name = "gpJogadorDois";
        gpJogadorDois.visible = 0;
        gpJogadorDois.x = -1200;


        gpSelecao = game.add.group();
        gpBotoes = game.add.group();
        gpInputJogaodor1 = game.add.group();
        gpInputJogaodor2 = game.add.group();
        gpNivel = game.add.group();
        gpJogada = game.add.group();


        btnVoltar = game.add.button(10, 655, 'icoVoltar', stageJogoMonta.btVoltar, game, 1, 0, 0);
        btnVoltar.input.useHandCursor = true;
        btnVoltar.scale.setTo(.8, .8);
        gpBotoes.add(btnVoltar);
        //
        btnImprimir = game.add.button(130, 655, 'icoImprimir', imprimir, game, 1, 0, 0);
        btnImprimir.input.useHandCursor = true;
        btnImprimir.url = 'pdf/monta/ficha_monta.pdf';
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

        btnComo = game.add.button(390, 655, 'icoAjuda', stageJogoMonta.comoJogar, game, 1, 0, 0);
        btnComo.nomeEstage = "stageMontaComo";
        btnComo.input.useHandCursor = true;
        btnComo.scale.setTo(.8, .8);
        gpBotoes.add(btnComo);

        btnAvacar = game.add.button(505, 655, 'icoAvancar', stageJogoMonta.avancarJogo, game, 1, 0, 0);
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

        btnImprimir.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('sonBtnimprimir');
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
        btnComo.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('sonBtnComo');
            efeitoSom.volume = 1;
            efeitoSom.play();
        });
        btnAvacar.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
                efeitoSom.volume = 1;
            }
            efeitoSom = game.add.audio('sonBtnAvacao');
            efeitoSom.volume = 1;
            efeitoSom.play();
        });
        //
        cb1 = game.add.checkbox(100, 210, {
            text: '1 Jogador',
            style: {font: "30px Secular One", fill: "#7b4318"}
        }, 'circle', false);
        cb2 = game.add.checkbox(100, 270, {
            text: '2 Jogador',
            style: {font: "30px Secular One", fill: "#7b4318"}
        }, 'circle', false);


        cb1.events.onInputUp.add(function (elm, pointer) {
            btnAvacar.animations.play('avancar', 2, true);
            if (audio) {
                audio.destroy();
            }
            audio = game.add.audio('escrevaNome');
            audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }

            gpInputJogaodor1.visible = 1;
            gpInputJogaodor2.visible = 0;
            cb1.hide();
            cb2.hide();
            imp_user2.setText('');
            cb2.state = false;
            nJogadores = 1;

        }, this);
        cb2.events.onInputUp.add(function (elm, pointer) {
            btnAvacar.animations.play('avancar', 2, true);
            if (audio) {
                audio.destroy();
            }
            audio = game.add.audio('escrevaNome');

            audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }
            gpInputJogaodor1.visible = 1;
            gpInputJogaodor2.visible = 1;
            cb1.hide();
            cb2.hide();
            cb1.state = false;
            nJogadores = 2;


        }, this);


        btNivel1 = game.add.button(100, 460, 'iconivel', this.escolheNivel, game, 0, 0, 3);
        btNivel1.nivel = 0;
        gpNivel.add(btNivel1);
        btNivel1.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('nivel1');
            efeitoSom.volume = 1;
            efeitoSom.play();
        });

        btNivel2 = game.add.button(222, 460, 'iconivel', this.escolheNivel, game, 1, 1, 4);
        btNivel2.nivel = 1;
        gpNivel.add(btNivel2);

        btNivel2.onInputOver.add(function () {

            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('nivel2');
            efeitoSom.volume = 1;
            efeitoSom.play();
        });

        gpNivel.visible = 0;

        gpInputJogaodor1 = game.add.group();
        txtNome1 = game.add.text(200, 205, "Jogador 1", {font: "30px Secular One", fill: "#7b4318"});
        gpSelecao.add(txtNome1);
        gpInputJogaodor1.add(txtNome1);


        imp_user1 = game.add.inputField(200, 250, {
            font: '30px Myriad Pro',
            fill: '#c2273b',
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
        txtNome2 = game.add.text(200, 310, "Jogador 2", {
            font: "30px Secular One",
            fill: "#7b4318"
        });
        gpSelecao.add(txtNome2);
        gpInputJogaodor2.add(txtNome2);


        imp_user2 = game.add.inputField(200, 350, {
            font: '30px Myriad Pro',
            fill: '#1e398d',
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


        imgHercules = game.add.sprite(730, 170, 'herculesMonta');
        imgHercules.animations.add('herculesMonta', [0, 1, 2, 3, 4, 5, 6, 6, 6, 7, 8, 8, 8, 8, 8, 8, 9, 10, 11, 12, 12, 12, 12, 12, 12, 0], 8, true);
        imgHercules.animations.play('herculesMonta');

        imgJilo = game.add.sprite(920, 440, 'jiloResta');
        imgJilo.animations.add('jilo');
        imgJilo.animations.play('jilo', 9, true);
        imgJilo.scale.setTo(0.80, 0.80);
        imgJilo.inputEnabled = true;

        imgJilo.events.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            if (etapaJogo == 0) {
                efeitoSom = game.add.audio('latido');
                efeitoSom.volume = 1;
                efeitoSom.play();
            }
        }, this);


    }, fixLocation: function () {
        var xJogador;
        if (jogador == 1) {
            xJogador = gpJogadorUm.x;

        } else {
            xJogador = gpJogadorDois.x;
        }
        alvo.position.x = game.input.mousePointer.x - xJogador;
        alvo.position.y = game.input.mousePointer.y;

    }, sonInicial: function () {
        if (audio) {
            audio.destroy();
        }
        if (efeitoSom) {
            efeitoSom.destroy();
        }
        audio = game.add.audio('olaMonta');
        audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }
    }, mesaJogo: function () {
        if (efeitoSom) {
            efeitoSom.destroy();
        }

        var herculesMesa1 = game.add.sprite(570, 180, 'herculesMonta');
        herculesMesa1.name = "hercules";
        herculesMesa1.frame = 20 + nArranjoMonta;
        gpJogadorUm.add(herculesMesa1);

        herculesMesa1.events.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            if (etapaJogo == 4) {
                efeitoSom = game.add.audio('mouseHercules');
                efeitoSom.play();
            }
        }, this);


        var imgJiloMesa1 = game.add.sprite(900, 450, 'jiloResta');
        imgJiloMesa1.scale.setTo(0.80, 0.80);
        imgJiloMesa1.animations.add('jilo');
        imgJiloMesa1.animations.play('jilo', 9, true);

        imgJiloMesa1.events.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('latido');
            efeitoSom.play();
        }, this);

        gpJogadorUm.add(imgJiloMesa1);

        var balcao1 = game.add.sprite(game.width / 2, 440, 'balcao1');
        balcao1.name = "balcao";
        balcao1.anchor.x = 0.5;
        gpJogadorUm.add(balcao1);


        var herculesMesa2 = game.add.sprite(640, 180, 'herculesMonta');
        herculesMesa2.name = "hercules";
        herculesMesa2.scale.x *= -1;
        herculesMesa2.frame = 23 + nArranjoMonta;
        gpJogadorDois.add(herculesMesa2);
        herculesMesa2.events.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('mouseHercules');
            efeitoSom.play();
        }, this);

        var imgJiloMesa2 = game.add.sprite(60, 450, 'jiloResta2');
        imgJiloMesa2.animations.add('jilo');
        imgJiloMesa2.animations.play('jilo', 9, true);
        imgJiloMesa2.scale.setTo(.80, .80);
        imgJiloMesa2.events.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
                F
            }
            if (etapaJogo == 3) {
                efeitoSom = game.add.audio('latido');
                efeitoSom.play();
            }
        }, this);
        gpJogadorDois.add(imgJiloMesa2);

        var balcao2 = game.add.sprite(game.width / 2, 440, 'balcao2');
        balcao2.name = "balcao";
        balcao2.anchor.x = 0.5;
        gpJogadorDois.add(balcao2);


    }, escolheNivel: function (item) {
        btnAvacar.animations.play('avancar', 3, true);
        nivelSelecionado = item.nivel;
        fundo.frame = nivelSelecionado;
        btNivel1.alpha = 1;
        btNivel2.alpha = 1;

        btNivel1.setFrames(3, 0, 0);
        btNivel2.setFrames(4, 1, 1);
        item.alpha = 0.7;
        if (nivelSelecionado == 0) {
            btNivel1.setFrames(3);
        } else if (nivelSelecionado == 1) {
            btNivel2.setFrames(4);
        }
        if (audio) {
            audio.destroy();
        }
        audio = game.add.audio('montaNivel' + (nivelSelecionado + 1));
        audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }

    }, avancarJogo: function () {
        btnAvacar.animations.stop();
        btnAvacar.frame = 0;
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
                        stageJogoMonta.inicioJogo();
                    } else {
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
                            sonAlerta.volume = 1;
                            sonAlerta.play();
                            alert('Selecione o nivel', "Alerta");
                        }
                    }
                } else {
                    alert('Coloque o nome dos jogadores', "Alerta")
                }
            } else {
                alert('Seleciona a quantidade de jogadores', "Alerta")
            }
        } else if (etapaJogo == 1) {
            flgTempo = true;
            tempo = 0;
            stageJogoMonta.explicacaoJogo();
        } else if (etapaJogo == 1.1) {
            audio.resume();
            efeitoSom.resume();
            tempoAnimacao = [30, 100];

        } else if (etapaJogo == 2) {
            if (txtExplicacaoMonta) {
                txtExplicacaoMonta.destroy()
            }
            etapaJogo = 2.1;
            stageJogoMonta.sorteioArrajo();
        } else if (etapaJogo == 3) {
            if (jogador == 1) {
                stageJogoMonta.inicioJogador1();
            } else {
                stageJogoMonta.inicioJogador2();
            }
        } else if (etapaJogo == 4) {
            if (jogador == 1) {
                if (gpJogadorUm.children[4].children[0]) {
                    stageJogoMonta.giraRoleta(gpJogadorUm.children[4].children[0]);
                }
            } else {
                if (gpJogadorDois.children[4].children[0]) {
                    stageJogoMonta.giraRoleta(gpJogadorDois.children[4].children[0]);
                }
            }

        } else if (etapaJogo == 5) {
            if (audio) {
                audio.destroy();
            }
            audio = game.add.audio('tente');
            audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }
            audio.onStop.add(function () {
                audio = game.add.audio('ramalheteAntes');
                audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }
            });

        } else if (etapaJogo == 6) {
            // etapaJogo = 4;
            if (flgCompletoDois == true && flgCompletoUm == true) {
                stageJogoMonta.voltarParaInicioJogo();
            } else {
                stageJogoMonta.proximaRodada();
            }
        } else if (etapaJogo == 7) {
            if (audio) {
                audio.destroy();
            }
            audio = game.add.audio(nArranjoMonta + 'RamalheteBuque');
            audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }

        } else if (etapaJogo == 13) {
            stageJogoMonta.voltarParaInicioJogo();
        }
    },
    proximaRodada: function () {
        if (balaoFlor) {
            balaoFlor.destroy();
        }
        if (nJogadores == 1) {
            etapaJogo = 4;
            rodadaMonta++;
            stageJogoMonta.giraRoleta(gpJogadorUm.children[4].children[0]);
        } else {
            if (rodadaMonta == 1 && jogador == 1) {
                gpExplicacao.children[1].forEach(function (item) {
                    var n = item.children.length;
                    item.children[(n - 1)].frame = 3

                })

                jogador = 2;
                etapaJogo = 3;
                game.add.tween(gpJogadorUm).to({x: 1800}, 1000, "Linear", true);
                gpJogadorDois.visible = 1;

                var anin = game.add.tween(gpJogadorDois).to({x: 0}, 1000, "Linear", true);
                gpExplicacao.children[0].frame = 1;
                anin.onComplete.add(function () {
                    gpExplicacao.x = -80;
                    game.add.tween(gpExplicacao).to({alpha: 1}, 200, "Linear", true);
                    game.add.tween(txtJogada).to({alpha: 1}, 200, "Linear", true);
                })

            } else {
                rodadaMonta++;
                if (jogador == 1 && flgCompletoDois == false) {
                    stageJogoMonta.mudarJogador();
                } else if (jogador == 1 && flgCompletoDois == true) {
                    etapaJogo = 4;
                    stageJogoMonta.giraRoleta(gpJogadorUm.children[4].children[0]);

                } else if (jogador == 2 && flgCompletoUm == false) {
                    stageJogoMonta.mudarJogador();
                } else if (jogador == 2 && flgCompletoUm == true) {
                    etapaJogo = 4;
                    stageJogoMonta.giraRoleta(gpJogadorDois.children[4].children[0]);
                } else if (flgCompletoDois == true && flgCompletoUm == true) {

                }
                nomeJogador2.visible = 1;
                if (jogador == 2) {
                    nomeJogador1.alpha = 0.3;
                    nomeJogador2.alpha = 1;
                } else {
                    nomeJogador2.alpha = 0.3;
                    nomeJogador1.alpha = 1;
                }
            }
        }

    }, mudarJogador: function () {
        if (jogador == 1) {
            jogador = 2;
            game.add.tween(gpJogadorUm).to({x: 1800}, 1000, "Linear", true);
            var anin = game.add.tween(gpJogadorDois).to({x: -420}, 1000, "Linear", true);


        } else {
            jogador = 1;
            game.add.tween(gpJogadorUm).to({x: 430}, 1000, "Linear", true);
            var anin = game.add.tween(gpJogadorDois).to({x: -1900}, 1000, "Linear", true);
        }
        anin.onComplete.add(function () {
            etapaJogo = 4;
        });
    }
    ,
    inicioJogo: function () {
        imgHercules.animations.stop();
        imgHercules.visible = 0;
        imgJilo.visible = 0;

        gpInicial.visible = 0;
        gpSelecao.visible = 0;
        gpNivel.visible = 0;
        gpInputJogaodor1.visible = 0;
        gpInputJogaodor2.visible = 0;
        gpSelecao.visible = 0;
        cb1.hide();
        cb2.hide();

        if (audio) {
            audio.destroy();
        }
        audio = game.add.audio('montaExplicacao');
        audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }
        audio.onStop.add(function () {
            btnAvacar.animations.play('avancar', 2, true);
        });

        imgInicial = game.add.sprite((game.width / 2) - 233, 170, 'herculesJilo');
        imgInicial.animations.add('parabens');
        imgInicial.animations.play('parabens', 3, true);

    }
    ,
    explicacaoJogo: function () {
        btnAvacar.animations.stop();
        if (nivelSelecionado == 0) {
            nArranjoMonta = game.rnd.integerInRange(3, 4);
            // nArranjoMonta = 3;
        } else {
            nArranjoMonta = game.rnd.integerInRange(4, 5);
            // nArranjoMonta = 5;
        }
        stageJogoMonta.mesaJogo();

        etapaJogo = 1.1;
        if (imgInicial) {
            imgInicial.destroy();
        }
        gpExplicacao = game.add.group();

        poxXFlor = 100;
        poxYFlor = 300;

        var vaso = game.add.sprite(860, 517, 'vaso');
        vaso.scale.setTo(0.9, 0.9);
        gpExplicacao.add(vaso);
        gpFloresExp = game.add.group();

        var ramoFlor = game.add.group();

        if (audio) {
            audio.destroy();
        }
        audio = game.add.audio('demonstracao' + nArranjoMonta);
        audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }

        if (etapaJogo != 0) {
            txtExplicacaoMonta = game.add.text(game.width / 2, 400, " FLORES ", {
                font: "30px Clarendon BT",
                fill: "#FFFFFF",
            });
            txtExplicacaoMonta.anchor.x = 0.5;
            txtExplicacaoMonta.anchor.y = 0.5;
            stageJogoMonta.criarFlorExplicacao(0, nArranjoMonta - 1, ramoFlor, 0);
        }

    }
    ,
    criarFlorExplicacao: function (n, total, ramoFlor, grupo) {
        if (etapaJogo != 0) {
            btnAvacar.animations.stop();
            var gpFlor = game.add.group();
            gpFlor.n = n;
            gpFlor.t = total;


            var flor = game.add.sprite(0, 0, 'flor');
            flor.anchor.x = 0.5;
            flor.anchor.y = 1;
            gpFlor.add(flor);

            var caule = game.add.sprite(0, 40, 'caule');
            caule.anchor.x = 0.5;
            caule.anchor.y = 1;
            gpFlor.add(caule);

            gpFlor.scale.setTo(0.2, 0.2);
            gpFlor.x = poxXFlor;
            gpFlor.y = poxYFlor;

            gpFloresExp.add(ramoFlor);

            ramoFlor.add(gpFlor);
            var anim = game.add.tween(gpFlor.scale).to({x: 1, y: 1}, tempoAnimacao[0], "Linear", true);
            anim.onComplete.add(function () {
                if (n < total) {
                    poxXFlor += 50;
                    n++;
                    stageJogoMonta.criarFlorExplicacao(n, total, ramoFlor, grupo);
                } else {
                    txtExplicacaoMonta.text = "Ramalhete";
                    stageJogoMonta.amaraligaExplicacao(ramoFlor, total, grupo);
                    gpExplicacao.add(gpFloresExp);
                }
            }, this);
        }

    }
    ,
    amaraligaExplicacao: function (ramoFlor, total, grupo) {
        if (etapaJogo != 0) {

            var liga = game.add.sprite(160, 290, 'ligaMonta');
            liga.width = total * ligaWidth + 9;
            liga.anchor.x = 0.5;

            var posCentralFlor = ramoFlor.children[total - 1].x - ramoFlor.children[0].x;

            var f = 0;
            ramoFlor.forEach(function (item) {
                item.children[0].frame = 1;
                f++;
                game.add.tween(item).to({x: posCentralFlor + f}, tempoAnimacao[1], "Linear", true);
                game.add.tween(item.children[0]).to({angle: anguloFlor[item.t][item.n]}, tempoAnimacao[1], "Linear", true);
            });
            game.add.tween(liga).to({x: posCentralFlor + 2}, tempoAnimacao[1], "Linear", true);
            ramoFlor.add(liga);
            var animLiga = game.add.tween(liga).to({width: 6 + total + 2}, tempoAnimacao[1], "Linear", true);
            animLiga.onComplete.add(function () {
                liga.frame = 1;
                ramoFlor.add(liga);
                var mov = game.add.tween(ramoFlor).to({x: ramoFlor.x - (grupo * 160) + 900}, tempoAnimacao[1], "Linear", true);
                mov.onComplete.add(function () {
                    if (total > grupo) {
                        grupo++;
                        poxXFlor = 100;
                        poxYFlor = 300;

                        var ramoFlor = game.add.group();

                        stageJogoMonta.criarFlorExplicacao(0, total, ramoFlor, grupo);
                    } else {
                        stageJogoMonta.colocarFlorVasoExp(0);
                    }
                })
            })
        }

    }
    ,
    colocarFlorVasoExp: function (n) {
        if (etapaJogo != 0) {
            txtExplicacaoMonta.text = "Buquê";
            var nRamo = gpFloresExp.length;
            if (n < nRamo) {

                game.add.tween(gpFloresExp.children[n]).to({x: arrFlorInicialX[nArranjoMonta - 1][n]}, tempoAnimacao[1], "Linear", true);
                var anim = game.add.tween(gpFloresExp.children[n]).to({y: 181}, tempoAnimacao[1], "Linear", true);
                anim.onComplete.add(function () {
                    n++;
                    stageJogoMonta.colocarFlorVasoExp(n);
                })
            } else {
                var caule = game.add.sprite(930, 492, 'caule2');
                caule.height = 1;
                caule.visible = 0;
                gpExplicacao.add(caule)

                // var fita = game.add.sprite(940, 487, 'fita');
                var fita = game.add.sprite(500, 487, 'fita');
                fita.width = 200;
                fita.anchor.x = 0.5;
                gpExplicacao.add(fita);

                var laso = game.add.sprite(460, 483, 'laso');
                // var laso = game.add.sprite(890, 483, 'laso');
                gpExplicacao.add(laso);

                game.add.tween(fita).to({x: 940}, tempoAnimacao[1], "Linear", true);
                var animLaso = game.add.tween(laso).to({x: 890}, tempoAnimacao[1], "Linear", true);

                animLaso.onComplete.add(function () {
                    caule.visible = 1
                    game.add.tween(fita).to({width: 50}, tempoAnimacao[1], "Linear", true);
                    game.add.tween(caule).to({height: 25}, tempoAnimacao[1], "Linear", true);


                    var n = nArranjoMonta - 1;
                    gpFloresExp.forEach(function (ramo) {
                        ramo.forEach(function (flor) {
                            game.add.tween(flor).to({angle: anguloFlor[nArranjoMonta - 1][n]}, tempoAnimacao[1], "Linear", true);
                            var anim = game.add.tween(flor).to({y: flor.y - 13}, tempoAnimacao[1], "Linear", true);
                            anim.onComplete.add(function () {
                                fita.visible = 0;
                                flgTempo = false;
                            });
                        })
                        n--;
                    });
                })
                etapaJogo = 2;
                btnAvacar.animations.play('avancar', 3, true);
            }
        }

    }
    ,
    sorteioArrajo: function () {
        nomeJogador1 = game.add.group();
        nomeJogador1.x = 40;
        nomeJogador1.y = 110;

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
            nomeJogador2.y = 110;
        }

        stageJogoMonta.iniciarJogo();

    }
    ,
    iniciarJogo: function () {
        if (jogador == 1) {
            gpJogadorUm.x = 900
            gpJogadorUm.visible = 1;
            game.add.tween(gpJogadorUm).to({x: 0}, tempoAnimacao[1], "Linear", true);
            gpExplicacao.children[0].frame = 0;

        } else {
            gpExplicacao.children[0].frame = 1;
        }
        var anim = game.add.tween(gpExplicacao.scale).to({x: .85, y: .85}, tempoAnimacao[1], "Linear", true);
        game.add.tween(gpExplicacao).to({x: -320}, tempoAnimacao[1], "Linear", true);
        game.add.tween(gpExplicacao).to({y: -70}, tempoAnimacao[1], "Linear", true);
        anim.onComplete.add(function () {
            etapaJogo = 3;
            if (audio) {
                audio.destroy();
            }
            audio = game.add.audio(nArranjoMonta + 'flores');
            audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }
            audio.onStop.add(function () {
                btnAvacar.animations.play('avancar', 2, true);
            });
            if (jogador == 1) {
                var txtAjudaX = 1000;
            } else {
                var txtAjudaX = 180;
            }
            var txtAjudaY = 200;

            txtJogada = game.add.text(txtAjudaX, txtAjudaY, nArranjoMonta + " FLORES \n" + nArranjoMonta + " RAMALHETES \n1 BUQUÊ! ", {
                font: "30px Clarendon BT",
                fill: "#FFFFFF",
            });
            txtJogada.name = "txt Explicacao"
            txtJogada.anchor.x = 0.5;

        }, this);


    }
    ,
    inicioJogador1: function () {

        if (nJogadores == 2) {
            nomeJogador2.visible = 1;
            if (jogador == 2) {
                nomeJogador1.alpha = 0.3;
                nomeJogador2.alpha = 1;
            } else {
                nomeJogador2.alpha = 0.3;
                nomeJogador1.alpha = 1;
            }
        }

        if (audio) {
            audio.destroy();
        }
        audio = game.add.audio('sonGiraRoleta');
        audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }

        // roleta
        etapaJogo = 4;
        game.add.tween(txtJogada).to({alpha: 0}, 250, "Linear", true);
        game.add.tween(gpExplicacao).to({alpha: 0}, 250, "Linear", true);

        var hercules = gpJogadorUm.children[0];
        game.add.tween(hercules).to({x: hercules.x - 80}, 500, "Linear", true);
        game.add.tween(gpJogadorUm.children[1]).to({x: 80}, 500, "Linear", true);
        gpJogadorUm.children[1].animations.stop();

        var anim = game.add.tween(gpJogadorUm).to({x: 430}, 500, "Linear", true);
        anim.onComplete.add(function () {

            var vaso = game.add.sprite(400, 370, 'vaso');
            vaso.scale.setTo(0.7, 0.7);
            vaso.name = "vaso";
            vaso.alpha = 0;
            gpJogadorUm.add(vaso);
            game.add.tween(vaso).to({alpha: 1}, 300, "Linear", true);

            stageJogoMonta.addRoleta(gpJogadorUm);

            var gpBuque = game.add.group();
            gpBuque.name = "buque";
            gpJogadorUm.add(gpBuque);
            btnAvacar.animations.play('avancar', 3, true);


            var txtJogada = game.add.text(550, 550, nArranjoMonta + " FLORES \n" + nArranjoMonta + " RAMALHETES \n1 BUQUÊ! ", {
                font: "30px Clarendon BT",
                fill: "#FFFFFF",
            });
            txtJogada.anchor.x = 0.5;
            txtJogada.alpha = 0;
            game.add.tween(txtJogada).to({alpha: 1}, 300, "Linear", true);
            gpJogadorUm.add(txtJogada);

        }, this);

    }
    ,
    inicioJogador2: function () {

        if (nJogadores == 2) {
            nomeJogador2.visible = 1;
            if (jogador == 2) {
                nomeJogador1.alpha = 0.3;
                nomeJogador2.alpha = 1;
            } else {
                nomeJogador2.alpha = 0.3;
                nomeJogador1.alpha = 1;
            }
        }

        if (audio) {
            audio.destroy();
        }
        audio = game.add.audio('sonGiraRoleta');
        audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }
        etapaJogo = 4;
        game.add.tween(txtJogada).to({alpha: 0}, 250, "Linear", true);
        game.add.tween(gpExplicacao).to({alpha: 0}, 250, "Linear", true);

        var hercules = gpJogadorDois.children[0];
        game.add.tween(hercules).to({x: 710}, 500, "Linear", true);
        gpJogadorDois.children[1].animations.stop();
        gpJogadorDois.children[1].frame = 14;
        game.add.tween(gpJogadorDois.children[1]).to({x: 860}, 500, "Linear", true);

        var anim = game.add.tween(gpJogadorDois).to({x: -420}, 500, "Linear", true);
        anim.onComplete.add(function () {

            var vaso = game.add.sprite(680, 370, 'vaso');
            vaso.name = "vaso";
            vaso.frame = 1;
            vaso.scale.setTo(0.7, 0.7);
            vaso.alpha = 0;
            gpJogadorDois.add(vaso);
            game.add.tween(vaso).to({alpha: 1}, 300, "Linear", true);


            stageJogoMonta.addRoleta(gpJogadorDois);

            var gpBuque = game.add.group();
            gpBuque.name = "buque";
            gpJogadorDois.add(gpBuque);
            btnAvacar.animations.play('avancar', 3, true);

            var txtJogada = game.add.text(580, 550, nArranjoMonta + " FLORES \n" + nArranjoMonta + " RAMALHETES \n1 BUQUÊ! ", {
                font: "30px Clarendon BT",
                fill: "#FFFFFF",
            });
            txtJogada.anchor.x = 0.5;
            txtJogada.alpha = 0;
            game.add.tween(txtJogada).to({alpha: 1}, 300, "Linear", true);
            gpJogadorDois.add(txtJogada);
        }, this);


    }
    ,
    addRoleta: function (grupo) {


        var gpRoleta = game.add.group();
        gpRoleta.name = "roleta";
        gpRoleta.alpha = 0;

        var roleta = game.add.button(170, 220, 'roletaMonta', stageJogoMonta.giraRoleta, nivelSelecionado,
            nivelSelecionado, nivelSelecionado);
        roleta.name = grupo.name;
        roleta.anchor.x = 0.5;
        roleta.anchor.y = 0.5;
        roleta.frame = nivelSelecionado;
        gpRoleta.add(roleta);

        var ponteiro = game.add.sprite(170 - (roleta.width / 2), 125, 'ponteiroMonta');
        ponteiro.x = ponteiro.x + ponteiro.width / 2;
        ponteiro.y = ponteiro.y + ponteiro.height / 2;
        ponteiro.anchor.x = 0.5;
        ponteiro.anchor.y = 0.5;
        gpRoleta.add(ponteiro);
        grupo.add(gpRoleta);
        if (jogador == 2) {
            gpRoleta.x = 850;
        }

        game.add.tween(gpRoleta).to({alpha: 1}, 400, "Linear", true);


    }, giraRoleta: function (roleta) {
        if (etapaJogo == 4) {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('roletaGirando');
            efeitoSom.play();


            anguloSorteado = null;
            // if (balaoFlor) {
            //     balaoFlor.destroy();
            // }

            flgGiraRoleta = true;
            etapaJogo = 4.1;

            var angulo = game.rnd.integerInRange(0, 360);

            if (angulo >= 54 && angulo < 67) {
                angulo = 68;
            } else if (angulo >= 114 && angulo < 127) {
                angulo = 128;
            } else if (angulo >= 184 && angulo < 197) {
                angulo = 188;
            } else if (angulo >= 234 && angulo < 247) {
                angulo = 248;
            } else if (angulo >= 294 && angulo < 307) {
                angulo = 308;
            } else if (angulo >= 354 || angulo < 7) {
                angulo = 8;
            }
            anguloSorteado = angulo + (game.rnd.integerInRange(1, 3) * 360);

            var giro = game.add.tween(roleta.parent.children[1]).to({angle: anguloSorteado}, 2000, Phaser.Easing.Linear.None, true);
            giro.onComplete.add(function () {
                efeitoSom.stop();
                etapaJogo = 5;
                nSorteado = stageJogoMonta.verificarSorteio(roleta.parent.children[1].angle);
                if (sonAviso) {
                    sonAviso.destroy();
                }
                sonAviso = game.add.audio('ganhou' + (arrValorAnguloMonta[nivelSelecionado][nSorteado]));
                sonAviso.volume = 1;
                sonAviso.play();

                sonAviso.onStop.add(function () {
                    balaoFlor.destroy();
                });

                stageJogoMonta.iniciarJogada();

            }, this);
        }
    }
    ,
    verificarSorteio: function (angulo) {
        if (angulo >= 0 && angulo < 60 || angulo >= -180 && angulo < -120) {
            return 0;
        } else if (angulo >= 60 && angulo < 120 || angulo >= -120 && angulo < -60) {
            return 1;
        } else if (angulo >= 120 && angulo < 180 || angulo >= -60 && angulo < 0) {
            return 2;
        }

    }
    ,
    iniciarJogada: function () {
        var n = totalFloresJogado[jogador];
        if (totalFloresJogado[jogador] == "") {
            n = 0;
        } else {
            n = totalFloresJogado[jogador];
        }
        var total = totalFloresJogado[jogador] + arrValorAnguloMonta[nivelSelecionado][nSorteado] - 1;
        totalFloresJogado[jogador] = total + 1;
        var grupo;


        if (jogador == 1) {
            var posX = posXFlorUm;
            grupo = gpJogadorUm.children[5];
            if (rodadaMonta == 1) {
                stageJogoMonta.addLaso(gpJogadorUm);
            }
        } else {
            var posX = posXFlorDois;
            grupo = gpJogadorDois.children[5];
            if (rodadaMonta == 1) {
                stageJogoMonta.addLaso(gpJogadorDois);
            }
        }

        if (grupo.length > 0) {
            grupo.forEach(function (item) {
                    if (item.name == "flor" && item.correto == false) {
                        if (jogador == 1) {
                            posX += 50;
                        } else {
                            posX -= 50;
                        }
                    }
                }
            )
        }
        if (jogador == 1) {
            if (balaoFlor) {
                balaoFlor.destroy();
            }
            balaoFlor = game.add.sprite(900, 140, 'balaoFlorVermelho');
            balaoFlor.x = 450;
            balaoFlor.y = 400;
            balaoFlor.visible = 0;
        } else {
            balaoFlor = game.add.sprite(180, 140, 'balaoFlorAzul');
            balaoFlor.x = 620;
            balaoFlor.y = 400;
            balaoFlor.visible = 0;
        }

        balaoFlor.frame = arrValorAnguloMonta[nivelSelecionado][nSorteado];
        balaoFlor.visible = 1;


        stageJogoMonta.criarFlorJogador(n, total, grupo, posX, 1);
        // stageJogoMonta.addLiga(grupo);
        // if (rodadaMonta==1){
        //     stageJogoMonta.addLiga(grupo);
        // }

    }
    ,
    addLaso: function (gpJogador) {


        var gpLaso = game.add.group();
        gpLaso.name = "laso";
        gpLaso.alpha = 0;

        var caule = game.add.sprite(0, 0, 'caule2');
        caule.x = -5;
        caule.y = 3;
        // caule.visible = 0;
        caule.height = 2;
        gpLaso.add(caule);

        var fita = game.add.sprite(0, 0, 'fita');
        fita.width = 60;
        fita.anchor.x = 0.5;
        fita.alpha = 0;
        gpLaso.add(fita)

        var laso = game.add.button(0, 0, 'laso', stageJogoMonta.buquesCompletos);
        laso.anchor.x = 0.5;
        laso.scale.setTo(5, 5);
        gpLaso.add(laso)
        game.add.tween(laso.scale).to({x: 0.8, y: 0.8}, 1000, "Linear", true);

        if (jogador == 1) {
            gpLaso.x = -300;
        } else {
            gpLaso.x = 1500;
        }
        gpLaso.y = 170;
        gpJogador.add(gpLaso);
        game.add.tween(gpLaso).to({alpha: 1}, 1000, "Linear", true);

    }
    ,
    criarFlorJogador: function (n, total, grupo, posX, nFlorAdd) {

        var gpFlor = game.add.group();
        gpFlor.name = "flor";
        gpFlor.n = n;
        gpFlor.t = total;
        gpFlor.correto = false;
        gpFlor.seleciondado = false;

        var flor = game.add.button(0, 0, 'flor', stageJogoMonta.selecionarItem, game);
        flor.anchor.x = 0.5;
        flor.anchor.y = 1;
        gpFlor.add(flor);


        var caule = game.add.button(0, 40, 'caule', stageJogoMonta.selecionarItem, game);
        caule.anchor.x = 0.5;
        caule.anchor.y = 1;
        gpFlor.add(caule);
        gpFlor.scale.setTo(0.2, 0.2);
        gpFlor.x = posX;
        gpFlor.y = 600;

        grupo.add(gpFlor);

        var anim = game.add.tween(gpFlor.scale).to({x: 1, y: 1}, 800, "Linear", true);
        anim.onComplete.add(function () {
            if (n < total) {
                if (jogador == 1) {
                    posX += 50;
                } else {
                    posX -= 50;
                }

                n++;
                nFlorAdd++;
                stageJogoMonta.criarFlorJogador(n, total, grupo, posX, nFlorAdd);
            } else if (n == total) {
                stageJogoMonta.verificarFloresDisponivel(grupo)
                stageJogoMonta.addLiga(grupo);
            }
        }, this);

    }
    ,
    addLiga: function (grupo) {
        var flgLiga = false;
        grupo.forEach(function (item) {
            if (item.name == "liga") {
                flgLiga = true;
            }
        });

        if (flgLiga == false) {
            if (jogador == 1) {
                var liga = game.add.button(-300, 480, 'ligaMonta', stageJogoMonta.selecionaLiga, game);
                liga.frame = 0;
            } else {
                var liga = game.add.button(posXFlorDois, 480, 'ligaMonta', stageJogoMonta.selecionaLiga, game);
                liga.frame = 2;
            }

            liga.name = "liga";
            liga.anchor.x = 0.5;
            liga.inputEnabled = true;
            liga.seleciondado = false;
            liga.correto = false;
            grupo.add(liga)

            ligaX = liga.x;
            ligaY = liga.y;

        }
        stageJogoMonta.verificarFloresDisponivel(grupo);


    }
    ,
    verificarFloresDisponivel: function (grupo) {
        var florDisponivel = 0;
        var flgFlorDisponivel = true;
        var qtdRamalhe = 0;
        grupo.forEach(function (item) {
            if (item.name == "flor" && item.correto == false) {
                florDisponivel++;
            }
            if (item.name == "ramalhete") {
                qtdRamalhe++;
            }
        });

        var numeroFlores = nArranjoMonta;

        if (qtdRamalhe < nArranjoMonta) {
            if (florDisponivel < numeroFlores) {
                flgFlorDisponivel = false;
            }
            if (flgFlorDisponivel == false) {
                etapaJogo = 6;
                btnAvacar.animations.play('avancar', 3, true);
            }
            return flgFlorDisponivel;
        } else {
            btnAvacar.animations.stop();
            btnAvacar.frame = 0;
            // btnAvacar.animations.play('avancar', 3, true);
            etapaJogo = 7;
            return false;
        }

    }, selecionarItem: function (item) {
        if (efeitoSom) {
            efeitoSom.destroy();
        }
        efeitoSom = game.add.audio('cliqueFlor')
        efeitoSom.volume = 1;
        efeitoSom.play();

        if ((etapaJogo == 5 || etapaJogo == 6) && boolSelecionado == false) {
            if (item.parent.correto == false) {
                if (item.parent.seleciondado == false) {
                    item.parent.seleciondado = true;
                    item.frame = 1;
                    arrSelecionadoMonta[jogador].push(item.parent.n);
                } else {
                    var index = arrSelecionadoMonta[jogador].indexOf(item.parent.n);
                    item.frame = 0;
                    item.parent.seleciondado = false;
                    arrSelecionadoMonta[jogador].splice(index, 1);
                }
            }
        }

    }, selecionaLiga: function (liga) {
        if (liga.correto == false) {
            alvo = liga;
            var ligaMax = 0;
            var ligaMin = 0;
            if (arrSelecionadoMonta[jogador].length > 0) {
                if (jogador == 1) {
                    var nMax = Math.max.apply(null, arrSelecionadoMonta[jogador]);
                    var nMin = Math.min.apply(null, arrSelecionadoMonta[jogador]);
                } else {
                    // jogador e invertido pois as flores vem da direita para a esquerda ou seja a flor que vem
                    // primeiro na verdade e a que tem o maior numero "n"
                    var nMin = Math.max.apply(null, arrSelecionadoMonta[jogador]);
                    var nMax = Math.min.apply(null, arrSelecionadoMonta[jogador]);
                }
                liga.parent.children.forEach(function (item, i) {
                    if (item.name == "flor") {
                        if (item.n == nMax) {
                            ligaMax = i;
                        }
                        if (item.n == nMin) {
                            ligaMin = i;
                        }
                    }
                })

                var tamanho = liga.parent.children[ligaMax].x - liga.parent.children[ligaMin].x;

                if (boolSelecionado == false) {
                    liga.width = tamanho + 44;
                    boolSelecionado = true;

                    liga.width = tamanho + 44;
                } else {
                    var numeroSelecionado = arrSelecionadoMonta[jogador].length;

                    var nFlores = nArranjoMonta;
                    if (nFlores == numeroSelecionado) {

                        if (jogador == 1) {
                            var yMin = liga.parent.children[ligaMin].y - liga.parent.children[ligaMin].height + 40;
                            var yMax = liga.parent.children[ligaMax].y + 40;
                            var xMin = liga.parent.children[ligaMin].x - liga.width / 2 - 10;
                            var xMax = liga.parent.children[ligaMax].x + liga.width / 2 + 10;
                        } else {

                            var yMin = liga.parent.children[ligaMax].y - liga.parent.children[ligaMax].height + 40;
                            var yMax = liga.parent.children[ligaMin].y + 40;
                            var xMin = liga.parent.children[ligaMax].x - liga.width / 2 - 10;
                            var xMax = liga.parent.children[ligaMin].x + liga.width / 2 + 10;
                        }


                        if (liga.x >= xMin && liga.x <= xMax && liga.y <= yMax && liga.y >= yMin) {

                            liga.width = tamanho + 44;
                            if (jogador == 1) {
                                liga.x = xMin + liga.width / 2 + tamanho / 2;
                            } else {
                                liga.x = xMin + liga.width / 2 - (tamanho / 2) + 22;
                            }

                            liga.y = liga.parent.children[ligaMin].y - 3;
                            liga.correto = true;
                            if (jogador == 1) {
                                liga.frame = 1;
                            } else {
                                liga.frame = 3;
                            }
                            boolSelecionado = false;
                            stageJogoMonta.amaraLiga(liga.parent);
                        } else {
                            efeitoSom = game.add.audio('linguaErrou');
                            efeitoSom.play();

                            if (jogador == 1) {
                                liga.x = posXFlorUm;
                            } else {
                                liga.x = posXFlorDois;
                            }
                            liga.y = ligaY;
                            liga.width = ligaWidth;
                            boolSelecionado = false;
                        }

                    } else {
                        if (jogador == 1) {
                            liga.x = posXFlorUm;
                        } else {
                            liga.x = posXFlorDois;
                        }
                        liga.y = ligaY;
                        liga.width = ligaWidth;

                        if (audio) {
                            audio.destroy();
                        }

                        audio = game.add.audio('novamente');
                        audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }
                        audio.onStop.add(function () {
                            audio = game.add.audio('ramalhe' + nArranjoMonta + 'Flores');
                            audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }
                        });
                    }
                    boolSelecionado = false;
                }
            } else {
                // console.log("seleciona as flores");
            }
        }
    }
    ,
    amaraLiga: function (buque) {
        // console.log("linguinhaAcertou");
        efeitoSom = game.add.audio('linguinhaAcertou');
        efeitoSom.play();
        efeitoSom.onStop.add(function () {
            efeitoSom = game.add.audio('acertou');
            efeitoSom.play();
        });

        var nRamalhete = arrRamalhete[jogador];
        nRamalhete++;
        arrRamalhete[jogador] = nRamalhete;

        var gpRamalhete = game.add.group();
        gpRamalhete.noVaso = false;
        gpRamalhete.name = "ramalhete";
        gpRamalhete.x = 0;
        gpRamalhete.n = nRamalhete;
        buque.add(gpRamalhete);
        //
        var gpFlor = game.add.group();
        gpRamalhete.add(gpFlor);
        var nflorMin = Math.min.apply(null, arrSelecionadoMonta[jogador]);
        var nflorMax = Math.max.apply(null, arrSelecionadoMonta[jogador]);

        var florMin = 0;
        var florMax = 0;

        buque.children.forEach(function (item, i) {
            if (item.name == "flor") {
                if (item.n == nflorMax) {
                    florMax = i;
                }
                if (item.n == nflorMin) {
                    florMin = i;
                }
            }
        })

        var pX = buque.children[florMin].x;


        var f = 0;
        buque.forEach(function (item) {
            if (item.name == "flor" && item.seleciondado == true) {
                item.correto = true;
                game.add.tween(item).to({x: pX + f}, 800, "Linear", true);
                game.add.tween(item.children[0]).to({angle: anguloFlor[nArranjoMonta - 1][f]}, 800, "Linear", true);
                f++;
            }
        });

        arrSelecionadoMonta[jogador].sort();
        var arrSelecionadoMontaInvert = arrSelecionadoMonta[jogador].reverse();
        var diferenca = 0;
        nRamalhete = 0;
        buque.children.forEach(function (item) {
            if (item.key = "ramalhete") {
                nRamalhete++
            }
        })

        arrSelecionadoMontaInvert.forEach(function (n) {
                var florMin = Math.min.apply(null, arrSelecionadoMontaInvert);
                var florMax = Math.min.apply(null, arrSelecionadoMontaInvert);
                buque.children.forEach(function (item) {
                    if (item.name == "flor" && item.seleciondado == true && item.n == n) {
                        gpFlor.add(item);
                        var minX = item.x;
                        if (jogador == 1) {
                            if (item.n == florMin) {
                                diferenca = 350 + minX;
                            }
                        } else {
                            if (item.n == florMax) {
                                diferenca = (1530 - minX);
                            }

                        }

                    }

                });
            }
        );
        buque.forEach(function (item) {
            if (item.name == "liga") {
                // mover ligar e seu tamalho
                gpFlor.add(item);
                game.add.tween(item).to({width: nArranjoMonta + 6}, 800, "Linear", true);
                var anim = game.add.tween(item).to({x: pX}, 800, "Linear", true);
            }

        });
        game.add.tween(gpRamalhete).to({y: -190}, 800, "Linear", true);
        gpRamalhete.forEach(function (item) {
            if (jogador == 1) {
                game.add.tween(item).to({x: (item.x - diferenca)}, 800, "Linear", true);
            } else {
                game.add.tween(item).to({x: (item.x + diferenca)}, 800, "Linear", true);
            }

        });

        var r = 0;
        buque.forEach(function (item) {
            if (item.name == "ramalhete") {
                r++;
            }
        })
        if (jogador == 1) {
            var xRamalhete = ramalheteUmX
        } else {
            var xRamalhete = ramalheteDoisX
        }

        if (jogador == 1) {
            game.add.tween(gpRamalhete).to({x: xRamalhete + (r * 135)}, 800, "Linear", true);
        } else {
            game.add.tween(gpRamalhete).to({x: xRamalhete - (r * 135)}, 800, "Linear", true);
        }
        stageJogoMonta.organizaFlorProximaRodada(buque);

        if (jogador == 1) {
            arrSelecionadoMonta[1] = [];
        } else {
            arrSelecionadoMonta[2] = [];
        }

        if (r < nArranjoMonta) {
            btnAvacar.animations.play('avancar', 3, true);
        }

    }
    ,
    esconderRestoFlor: function (grupo) {

        grupo.forEach(function (item) {
            if (item.name == "flor") {
                var anim = game.add.tween(item).to({alpha: 0}, 800, "Linear", true);
                anim.onComplete.add(function (obj) {
                    obj.destroy();
                }, this);
            }

        });
    }, buquesCompletos: function (laso) {
        if (etapaJogo == 7) {
            if (balaoFlor) {
                balaoFlor.destroy();
            }
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('efBuque' + 4)
            efeitoSom.volume = 1;
            efeitoSom.play();

            var grupo = laso.parent.parent;
            game.add.tween(grupo.children[6]).to({alpha: 0}, 100, "Linear", true);

            stageJogoMonta.esconderRestoFlor(grupo.children[5]);
            grupo.forEach(function (item) {

                if (item.key == "jiloResta") {
                    game.add.tween(item).to({alpha: 0}, 800, "Linear", true);
                }
                if (item.name == "roleta") {
                    var anim = game.add.tween(item).to({alpha: 0}, 800, "Linear", true);
                    anim.onComplete.add(function (obj) {
                        obj.destroy();
                        if (jogador == 1) {
                            game.add.tween(grupo.children[4]).to({x: +160}, 800, "Linear", true);
                        } else {
                            game.add.tween(grupo.children[4]).to({x: -800}, 800, "Linear", true);
                        }
                        game.add.tween(grupo.children[4].scale).to({x: 1.5, y: 1.5}, 800, "Linear", true);
                        var animRamalhete = game.add.tween(grupo.children[4]).to({y: -240}, 800, "Linear", true);
                        animRamalhete.onComplete.add(function (obj) {
                            stageJogoMonta.moverParaFormarBuque(grupo.children[4], 0);
                        });

                    }, this);
                } else if (item.name == "vaso") {
                    if (jogador == 1) {
                        game.add.tween(item).to({x: 380}, 800, "Linear", true);
                    } else {
                        game.add.tween(item).to({x: 610}, 800, "Linear", true);
                    }
                    game.add.tween(item.scale).to({x: 1.2, y: 1.2}, 800, "Linear", true);
                    game.add.tween(item).to({y: 470}, 800, "Linear", true);

                } else if (item.name == "hercules") {
                    game.add.tween(item).to({alpha: 0}, 800, "Linear", true);
                    if (jogador == 1) {
                        game.add.tween(item).to({x: 1300}, 800, "Linear", true);
                    } else {
                        game.add.tween(item).to({x: 0}, 800, "Linear", true);
                    }

                } else if (item.name == "balcao") {
                    if (jogador == 1) {
                        game.add.tween(item).to({x: 1300}, 800, "Linear", true);
                    } else {
                        game.add.tween(item).to({x: 0}, 800, "Linear", true);
                    }
                }
            });
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
                audio = game.add.audio(nArranjoMonta + 'RamalheteBuque');
                audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }
            });
        }
    }
    ,
    organizaFlorProximaRodada: function (buque) {

        if (jogador == 1) {
            var posX = posXFlorUm;
        } else {
            var posX = posXFlorDois;
        }

        buque.forEach(function (item) {
            if (item.name == "flor") {
                game.add.tween(item).to({x: posX}, 400, "Linear", true);
                if (jogador == 1) {
                    posX += 50;
                } else {
                    posX -= 50;
                }
            }
        })
        var flgDisponibilidade = stageJogoMonta.verificarFloresDisponivel(buque);
        if (flgDisponibilidade == true) {
            stageJogoMonta.addLiga(buque);
        }
    }, moverParaFormarBuque: function (buque, n) {
        stageJogoMonta.moverRamalheteVaso(buque.children[n]);
    }, moverRamalheteVaso: function (ramalhete) {
        ramalhete.noVaso = true;
        game.add.tween(ramalhete).to({y: -166}, 800, "Linear", true);
        var anim = game.add.tween(ramalhete).to({x: arrFlorJogadorX[jogador][nArranjoMonta - 1][ramalhete.n]}, 800, "Linear", true);

        anim.onComplete.add(function () {
            var nflgRamalheteVaso = 0;

            ramalhete.parent.forEach(function (item) {
                if (item.noVaso == true) {
                    nflgRamalheteVaso++;
                }
            })
            if (nflgRamalheteVaso == nArranjoMonta) {
                stageJogoMonta.criarBuque();
            } else {
                stageJogoMonta.moverParaFormarBuque(ramalhete.parent, ramalhete.n);
            }
        })


    }, criarBuque: function () {
        if (jogador == 1) {
            var grupo = gpJogadorUm;
        } else {
            var grupo = gpJogadorDois;
        }
        var buque = grupo.children[4];
        var laso = grupo.children[6];
        laso.children[1].alpha = 1;

        game.add.tween(laso.children[1]).to({width: 200}, 800, "Linear", true);
        game.add.tween(laso).to({y: 433}, 800, "Linear", true);
        game.add.tween(laso.scale).to({x: 1.5, y: 1.5}, 800, "Linear", true);

        if (jogador == 1) {
            var anim = game.add.tween(laso).to({x: 480}, 800, "Linear", true);
        } else {
            var anim = game.add.tween(laso).to({x: 705}, 800, "Linear", true);
        }
        anim.onComplete.add(function () {
            laso.children[0].visible = 1;
            game.add.tween(laso.children[0]).to({height: 25}, 300, "Linear", true);

            game.add.tween(laso.children[1]).to({width: 20}, 800, "Linear", true);
            buque.forEach(function (item) {
                if (item.name == "ramalhete") {
                    var n = item.n - 1;
                    laso.children[1].visible = 0;
                    item.children[0].forEach(function (flor) {
                        var animResultado = game.add.tween(flor).to({angle: anguloFlor[nArranjoMonta - 1][n]}, 800, "Linear", true);
                        var animResultado = game.add.tween(flor).to({y: flor.y - 15}, 800, "Linear", true);
                        animResultado.onComplete.add(function () {
                            etapaJogo = 11;
                        })
                    })
                }
            })
        })
    }
    ,
    resultado: function () {


        if ((flgCompletoDois == true && flgCompletoUm == true) || nJogadores == 1) {
            etapaJogo = 13;
        } else {
            etapaJogo = 6;
        }
        var gpJogador;
        if (jogador == 1) {
            gpJogador = gpJogadorUm;
            flgCompletoUm = true;

            gpJogador.children[1].destroy();
            var imgJiloMesa1 = game.add.sprite(200, 450, 'jiloResta2');
            imgJiloMesa1.scale.setTo(0.80, 0.80);
            imgJiloMesa1.animations.add('jilo');
            imgJiloMesa1.animations.play('jilo', 9, true);
            imgJiloMesa1.alpha = 0;
            gpJogador.addChildAt(imgJiloMesa1, 1)


            game.add.tween(gpJogador.children[0]).to({x: 50}, 800, "Linear", true);
            game.add.tween(gpJogador.children[1]).to({x: -100}, 800, "Linear", true);
            game.add.tween(gpJogador.children[2]).to({x: 600}, 800, "Linear", true);
            game.add.tween(gpJogador.children[3]).to({x: 400}, 800, "Linear", true);
            game.add.tween(gpJogador.children[4]).to({x: 250}, 800, "Linear", true);
            game.add.tween(gpJogador.children[6]).to({x: 465}, 800, "Linear", true);


        } else {
            gpJogador = gpJogadorDois;
            flgCompletoDois = true;

            gpJogador.children[1].destroy();
            var imgJiloMesa2 = game.add.sprite(800, 450, 'jiloResta');
            imgJiloMesa2.scale.setTo(0.80, 0.80);
            imgJiloMesa2.animations.add('jilo');
            imgJiloMesa2.animations.play('jilo', 9, true);
            imgJiloMesa2.alpha = 0;
            gpJogador.addChildAt(imgJiloMesa2, 1)


            game.add.tween(gpJogador.children[0]).to({x: 1150}, 800, "Linear", true);
            game.add.tween(gpJogador.children[1]).to({x: 1050}, 800, "Linear", true);
            game.add.tween(gpJogador.children[2]).to({x: 600}, 800, "Linear", true);
            game.add.tween(gpJogador.children[3]).to({x: 680}, 800, "Linear", true);
            game.add.tween(gpJogador.children[4]).to({x: -250}, 800, "Linear", true);
            game.add.tween(gpJogador.children[6]).to({x: 750}, 800, "Linear", true);

        }

        gpJogador.children[0].frame = 19;
        gpJogador.children[0].animations.add('herculesMonta', [13, 14, 15, 16, 17, 18, 19, 20, 19, 18, 19, 20, 21, 22], 5, true);
        gpJogador.children[0].animations.play('herculesMonta');
        // gpJogador.children[1].scale.x *= -1;
        gpJogador.children[1].animations.play('jilo', 9, true);

        game.add.tween(gpJogador.children[0]).to({alpha: 1}, 800, "Linear", true);
        game.add.tween(gpJogador.children[1]).to({alpha: 1}, 1200, "Linear", true);
        game.add.tween(gpJogador.children[1]).to({y: 450}, 1200, "Linear", true);
        game.add.tween(gpJogador.children[3]).to({y: 365}, 800, "Linear", true);
        game.add.tween(gpJogador.children[3].scale).to({x: 0.8, y: 0.8}, 800, "Linear", true);
        game.add.tween(gpJogador.children[4].scale).to({x: 1, y: 1}, 800, "Linear", true);
        game.add.tween(gpJogador.children[4]).to({y: -105}, 800, "Linear", true);
        game.add.tween(gpJogador.children[6].scale).to({x: 1, y: 1}, 800, "Linear", true);
        game.add.tween(gpJogador.children[6]).to({y: 345}, 800, "Linear", true);

        if (audio) {
            audio.destroy();
        }
        audio = game.add.audio('legalFim');
        audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }
        audio.onStop.add(function () {
            btnAvacar.animations.play('avancar', 2, true);
        });

    }
    ,
    btVoltar: function () {
        if (etapaJogo != 0) {
            stageJogoMonta.modelVoltar();
        } else {
            var stage = new Object();
            stage.nomeEstage = "stageSelecaoJogos";
            mudarState(stage);
        }
    }
    ,
    voltarParaInicioJogo: function () {
        if (gpModalVoltar) {
            gpModalVoltar.destroy();
        }
        tempoAnimacao = [300, 1200];
        if (audio) {
            audio.destroy();
        }
        arrRamalhete = [0, 0, 0];
        flgCompletoDois = false;
        flgCompletoUm = false;

        nivelSelecionado = "";
        if (balaoFlor) {
            balaoFlor.destroy();
        }

        if (nomeJogador1) {
            nomeJogador1.destroy();
        }
        if (nomeJogador2) {
            nomeJogador2.destroy();
        }

        if (gpExplicacao) {
            gpExplicacao.destroy();
        }
        if (gpFloresExp) {
            gpFloresExp.destroy();
        }
        if (txtJogada) {
            txtJogada.destroy();
        }
        if (imgInicial) {
            imgInicial.destroy();
        }
        if (txtExplicacaoMonta) {
            txtExplicacaoMonta.destroy();
        }
        nJogadores = "";
        rodadaMonta = 1;
        fundo.frame = 0;
        btNivel1.frame = 0;
        btNivel1.alpha = 1;
        btNivel2.frame = 1;
        btNivel2.alpha = 1;
        nivelSelecionado = -1;
        etapaJogo = 0;
        btnAvacar.visible = 1;
        gpNivel.visible = 0;
        gpInicial.visible = 1;

        gpInputJogaodor1.visible = 0;
        gpInputJogaodor2.visible = 0;

        cb1.state = false;
        cb2.state = false;
        cb1.show();
        cb2.show();

        imp_user1.setText('');
        imp_user2.setText('');

        imgHercules.animations.add('herculesMonta', [0, 1, 2, 3, 4, 5, 6, 6, 6, 7, 8, 8, 8, 8, 8, 8, 9, 10, 11, 12, 12, 12, 12, 12, 12, 0], 8, true);
        imgHercules.animations.play('herculesMonta');
        imgHercules.visible = 1;
        imgJilo.visible = 1;

        for (var i = gpJogadorUm.children.length - 1; i >= 0; i--) {
            gpJogadorUm.children[i].destroy();
        }
        for (var i = gpJogadorDois.children.length - 1; i >= 0; i--) {
            gpJogadorDois.children[i].destroy();
        }
        gpJogadorUm.visible = 0;
        gpJogadorDois.visible = 0;

        btnVoltar.visible = 1;
        btnImprimir.visible = 1;
        btnSon.visible = 1;
        btnComo.visible = 1;
        btnAvacar.visible = 1;

    }
    , comoJogar: function () {
        gpBotoes.visible = 1;
        btnComo.frame = 0;
        pagina = 1;
        gpNivel.visible = 0;
        btnVoltar.visible = 0;
        btnImprimir.visible = 0;
        btnSon.visible = 0;
        btnComo.visible = 0;
        btnAvacar.visible = 0;

        gpComoJogarMonta = game.add.group();
        gpComoJogarMonta.visible = 1;

        gpJogadorDois.visible = 0;
        gpJogadorUm.visible = 0;

        var fundoComoMonta = game.add.sprite(0, 0, 'fundoMontaComo');
        gpComoJogarMonta.add(fundoComoMonta)

        gpComoPagUm = game.add.group();
        gpComoJogarMonta.add(gpComoPagUm);
        gpComoPagUm.x = 0;
        gpComoPagUm.x = 0;

        gpComoPagDois = game.add.group();
        gpComoPagDois.x = 1300;
        gpComoJogarMonta.add(gpComoPagDois)

        btnVoltarComoMonta = game.add.button(10, 675, 'icoVoltar', stageJogoMonta.fecharComo, game, 1, 0, 0);
        btnVoltarComoMonta.input.useHandCursor = true;
        btnVoltarComoMonta.scale.setTo(.8, .8);
        gpComoJogarMonta.add(btnVoltarComoMonta);

        btnAvacarComoMonta = game.add.button(game.width / 2, 655, 'icoAvancar', stageJogoMonta.avancarJogoComo, game, 1, 0, 0);
        btnAvacarComoMonta.input.useHandCursor = true;
        btnAvacarComoMonta.anchor.x = 0.5;
        gpComoJogarMonta.add(btnAvacarComoMonta);

        btnAvacarComoMonta.onInputOver.add(function () {
            // if (efeitoSom) {
            //     efeitoSom.destroy();
            // }
            efeitoSom = game.add.audio('sonBtnAvacao')
            efeitoSom.play();
        });
        var fundoPag1 = game.add.sprite(0, 0, 'pag1');
        gpComoPagUm.add(fundoPag1);

        var fundoPag2 = game.add.sprite(0, 0, 'pag2');
        gpComoPagDois.add(fundoPag2);


    }
    ,
    fecharComo: function () {
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

        gpJogadorDois.visible = 1;
        gpJogadorUm.visible = 1;
        gpComoJogarMonta.destroy();
        gpComoJogarMonta.visible = 0;
        btnVoltar.visible = 1;
        btnImprimir.visible = 1;
        btnSon.visible = 1;
        btnComo.visible = 1;
        btnAvacar.visible = 1;


    }, avancarJogoComo: function () {
        if (pagina == 1) {
            pagina = 2;
            btnAvacarComoMonta.scale.x *= -1;
            game.add.tween(gpComoPagUm).to({x: -1200}, 800, "Linear", true);
            game.add.tween(gpComoPagDois).to({x: 0}, 800, "Linear", true);
        } else {
            pagina = 1;
            btnAvacarComoMonta.scale.x *= -1;
            game.add.tween(gpComoPagUm).to({x: 0}, 800, "Linear", true);
            game.add.tween(gpComoPagDois).to({x: 1200}, 800, "Linear", true);
        }
    }, modelVoltar: function () {

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
        btnVoltar.visible = 0;
        btnImprimir.visible = 0;
        btnSon.visible = 0;
        btnComo.visible = 0;
        btnAvacar.visible = 0;

        gpModalVoltar = game.add.group();
        gpModalVoltar.visible = 1;

        gpJogadorDois.visible = 0;
        gpJogadorUm.visible = 0;

        var fundoVoltar = game.add.sprite(0, 0, 'fundoVoltar');
        gpModalVoltar.add(fundoVoltar);

        var btnSim = game.add.button(680, 150, 'btnSim', stageJogoMonta.voltarParaInicioJogo, game, 1, 0, 0);
        btnSim.input.useHandCursor = true;
        btnSim.anchor.x = 0.5;
        gpModalVoltar.add(btnSim);


        var btnNao = game.add.button(1030, 150, 'btnNao', stageJogoMonta.fechaModalVoltar, game, 1, 0, 0);
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

        gpJogadorDois.visible = 1;
        gpJogadorUm.visible = 1;
        gpModalVoltar.visible = 0;
        gpModalVoltar.destroy();
        btnVoltar.visible = 1;
        btnImprimir.visible = 1;
        btnSon.visible = 1;
        btnComo.visible = 1;
        btnAvacar.visible = 1;
    }
}