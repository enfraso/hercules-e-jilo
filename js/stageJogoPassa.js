var fundo;
var etapaJogo;
var nivelSelecionado;

var imp_user1;
var rodada = 0;
var titulo;
var gpSelecao;
var gpNumeroJogadores;
var gpInputJogaodor1;
var gpBotoes;
var gpJogada;
var gpJogadorUm;
var gpComoJogarPassa;
var gpExplicacaoPassa;
var gpModalVoltar;

var txtNome1;
var btNivel1, btNivel2;
var btnAvacar, btnComo, btnSon, btnVoltar, btnImprimir;
var btnAudio;
var nomeJogador1;
var nomeJogador2;
var jogador;
var sonAviso;
var nSorteado;

var n;
var nJogadores = 1;
var imgInicial;
var imgJilo;
var imgHercules;
var arvore;
var macaInicial;
var posXInicial = 790;
var posYInicial = 85;
var tempoMaca = 300;
var flgOrganizar = false;
var caminhao1;
var caminhao2;
var caminhao3;
var flgDrag = false;
var tempoExplicacao = [300, 700, 1400, 800];
var arrPosMaca = [
    {},
    {'n': 1, 'x': 827, 'y': 520},
    {'n': 2, 'x': 877, 'y': 520},
    {'n': 3, 'x': 927, 'y': 520},
    {'n': 4, 'x': 977, 'y': 520},
    {'n': 5, 'x': 1026, 'y': 520},
    {'n': 6, 'x': 827, 'y': 575},
    {'n': 7, 'x': 877, 'y': 575},
    {'n': 8, 'x': 927, 'y': 575},
    {'n': 9, 'x': 977, 'y': 575},
    {'n': 10, 'x': 1026, 'y': 575},
];

var arrPosMacaDezena = [
    {},
    {'n': 1, 'x': 31, 'y': -90, 'fx': 440, 'fy': 162},
    {'n': 2, 'x': 193, 'y': -90, 'fx': 602, 'fy': 162},
    {'n': 3, 'x': 31, 'y': 0, 'fx': 440, 'fy': 252},
    {'n': 4, 'x': 193, 'y': 0, 'fx': 602, 'fy': 252},
    {'n': 5, 'x': 31, 'y': 90, 'fx': 440, 'fy': 342},
    {'n': 6, 'x': 193, 'y': 90, 'fx': 602, 'fy': 342},
    {'n': 7, 'x': 31, 'y': 180, 'fx': 440, 'fy': 432},
    {'n': 8, 'x': 193, 'y': 180, 'fx': 602, 'fy': 432},
    {'n': 9, 'x': 31, 'y': 270, 'fx': 440, 'fy': 522},
    {'n': 10, 'x': 193, 'y': 270, 'fx': 602, 'fy': 522},
];
var arrPosMacaCentena = [
    {},
    {'n': 1, 'x': -275, 'y': 22},
    {'n': 2, 'x': -155, 'y': 22},
    {'n': 3, 'x': -275, 'y': 80},
    {'n': 4, 'x': -155, 'y': 80},
    {'n': 5, 'x': -275, 'y': 138},
    {'n': 6, 'x': -155, 'y': 138},
    {'n': 7, 'x': -275, 'y': 196},
    {'n': 8, 'x': -155, 'y': 196},
    {'n': 9, 'x': -275, 'y': 253},
    {'n': 10, 'x': -155, 'y': 253},
];
var arrValorAngulo = [[9, 11, 13], [9, 11, 13]];
var text;
var fundoLoad;
var logoLoad;
var stageJogoPassa = {


    preload: function () {

    }, create: function () {
        tempoExplicacao = [300, 700, 1400, 800];
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

        stageJogoPassa.start();
    }, start: function () {
        game.load.spritesheet('fundoPassa', 'assets/passa/fundo_passa.png', 1200, 800);
        game.load.image('tituloPassa', 'assets/passa/titulo.png');
        game.load.spritesheet('arvore', 'assets/passa/arvore.png', 750, 770);
        game.load.image('barra', 'assets/passa/barra_cima.png');
        game.load.spritesheet('herculesPassa', 'assets/passa/hercules_passa.png', 325.6, 529.15);
        game.load.image('macaInicial', 'assets/passa/maca_incial.png');
        game.load.image('maca', 'assets/passa/maca.png');
        game.load.spritesheet('caixaMaca', 'assets/passa/caixa_maca.png', 289, 145);
        game.load.spritesheet('seta', 'assets/passa/seta.png', 165, 138);
        game.load.spritesheet('seta2', 'assets/passa/seta2.png', 165, 138);
        game.load.image('placa', 'assets/passa/placaUnidade.png');
        game.load.image('placaDezena', 'assets/passa/placaDezena.png');
        game.load.image('placaCentena', 'assets/passa/placaCentena.png');
        game.load.image('caixaGrande', 'assets/passa/caixaGrande.png');
        game.load.spritesheet('roletaPassa', 'assets/passa/roleta.png', 186, 186);
        game.load.image('ponteiroPassa', 'assets/passa/pondero.png');
        game.load.spritesheet('placaNumero', 'assets/passa/placa_numeros.png', 63, 63);
        game.load.image('caminhao1', 'assets/passa/caminhao1.png');
        game.load.image('caminhao2', 'assets/passa/caminhao2.png');
        game.load.image('caminhao3', 'assets/passa/caminhao3.png');
        game.load.image('barraNome', 'assets/passa/barra_nome.png');
        game.load.spritesheet('caminhao', 'assets/passa/caminhao.png', 520, 445);

        game.load.audio('ganhou7', ['son/passa/voce_ganhou_7_macas.mp3']);
        game.load.audio('ganhou8', ['son/passa/voce_ganhou_8_macas.mp3']);
        game.load.audio('ganhou9', ['son/passa/voce_ganhou_9_macas.mp3']);
        game.load.audio('ganhou10', ['son/passa/voce_ganhou_10_macas.mp3']);
        game.load.audio('ganhou11', ['son/passa/voce_ganhou_11_macas.mp3']);
        game.load.audio('ganhou12', ['son/passa/voce_ganhou_12_macas.mp3']);
        game.load.audio('ganhou13', ['son/passa/voce_ganhou_13_macas.mp3']);
        game.load.audio('tentePassa', ['son/passa/tente_novamente_1_caixa_10_macas.mp3']);
        game.load.audio('so10caixas', ['son/passa/so_pode_passar_10_caixas.mp3']);
        game.load.audio('passaMeio', ['son/passa/passar_caixa_para_meio.mp3']);
        game.load.audio('nivel1Passa', ['son/passa/passa_nivel_1.mp3']);
        game.load.audio('nivel2Passa', ['son/passa/passa_nivel_2.mp3']);
        game.load.audio('explicacaoPassa', ['son/passa/passa_explicacao_jogo.mp3']);
        game.load.audio('escolhaNivelPassa', ['son/passa/passa_escolha_nivel.mp3']);
        game.load.audio('escrevaNomePassa', ['son/passa/ola_passa_passa_escreva_nome.mp3']);
        game.load.audio('quantaCaixas', ['son/passa/legal_quantas_caixas_e_macas.mp3']);
        game.load.audio('cliqueMaca', ['son/passa/clique_macas_encher_caixa.mp3']);
        game.load.audio('10MacaCaixa', ['son/passa/10_macas_formam_1_caixa.mp3']);
        // game.load.audio('1caixaTem10', ['son/passa/1_caixa_cheia_tem_10_macas.mp3']);
        game.load.audio('passaCaminhao', ['son/passa/passar_caixas_para_caminhao.mp3']);
        game.load.audio('trilhaPassa', ['son/trilha/passa/trilha_sonora_passa_passa.mp3']);
        game.load.audio('mouseHercules', ['son/passa/mouse_hercules.mp3']);
        game.load.audio('efeitoCliqueMaca', ['son/passa/clique_maca.mp3']);

        game.load.audio('caminhaoPartindo', ['son/passa/caminhao_partindo.mp3']);
        game.load.audio('setaL', ['son/passa/clique_seta_laranja.mp3']);
        game.load.audio('setaM', ['son/passa/clique_seta_marrom.mp3']);
        game.load.audio('demostracao', ['son/passa/passa_demonstracao_jogo.mp3']);
        game.load.audio('soDezCheias', ['son/passa/so_pode_passar_10_caixas.mp3']);


        //como
        game.load.spritesheet('passaComo', 'assets/passa/PassaComo.png', 1200, 800);
        stageJogoPassa.load.start();


    }, update: function () {
        if (gpJogadorUm && gpJogadorUm.children[1]) {
            gpJogadorUm.children[1].children[1].text = gpJogadorUm.children[8].length;
            gpJogadorUm.children[1].children[4].text = gpJogadorUm.children[9].length;
            if (gpJogadorUm.children[8].length <= 1) {
                gpJogadorUm.children[1].children[2].text = 'Maçã';
            } else {
                gpJogadorUm.children[1].children[2].text = 'Maçãs';
            }
        }

        if (gpJogadorUm && gpJogadorUm.children[9] && gpJogadorUm.children[9].length == 10) {
            gpJogadorUm.children[11].animations.play('centena');
        }

    }, comecoJogo: function () {
        if (efeitoSom) {
            efeitoSom.destroy();
        }

        stageJogoPassa.sonInicial();
        etapaJogo = 0;
        fundo = game.add.sprite(0, 0, 'fundoPassa');
        arvore = game.add.sprite(1200, -48, 'arvore');
        //
        game.add.tween(arvore).to({x: 450}, 1200, "Linear", true);
        game.add.sprite(0, -10, 'barra');
        titulo = game.add.sprite(0, 20, 'tituloPassa');
        caminhao1 = game.add.sprite(40, 270, 'caminhao1');
        caminhao1.alpha = 0;
        game.add.tween(caminhao1).to({alpha: 1}, 1200, "Linear", true);

        game.stage.backgroundColor = 0x4d4d4d;


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
        musica = game.add.audio('trilhaPassa');
        musica.volume = 0.8;
        musica.loopFull(1);
        musica.play();


        imgHercules = game.add.sprite(1500, 280, 'herculesPassa');
        imgHercules.scale.setTo(.80, .80);
        imgHercules.inputEnabled = true;

        imgHercules.events.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            if (etapaJogo == 0) {
                efeitoSom = game.add.audio('mouseHercules');
                efeitoSom.volume = 1;
                efeitoSom.play();
            } else if (etapaJogo == 6) {
                efeitoSom = game.add.audio('aplausos');
                efeitoSom.volume = 1;
                efeitoSom.play();
            }
        }, this);

        game.add.tween(imgHercules).to({x: 690}, 1200, "Linear", true);

        macaInicial = game.add.sprite(1330, 550, 'macaInicial');
        game.add.tween(macaInicial).to({x: 420}, 1200, "Linear", true);

        imgJilo = game.add.sprite(1500, 480, 'jiloResta');
        imgJilo.animations.add('jilo');
        imgJilo.animations.play('jilo', 9, true);
        imgJilo.scale.setTo(0.70, 0.70);
        imgJilo.inputEnabled = true;
        //
        game.add.tween(imgJilo).to({x: 920}, 1200, "Linear", true);

        imgJilo.events.onInputOver.add(function () {
            if (etapaJogo <= 2) {
                if (efeitoSom) {
                    efeitoSom.destroy();
                }
                efeitoSom = game.add.audio('latido');
                efeitoSom.volume = 1;
                efeitoSom.play();
            }
        }, this);

        // var grade = game.add.sprite(0, 0, 'grade');
        gpExplicacaoPassa = game.add.group();

        gpJogadorUm = game.add.group();

        gpSelecao = game.add.group();
        gpNumeroJogadores = game.add.group();
        gpBotoes = game.add.group();
        gpInputJogaodor1 = game.add.group();
        gpNivel = game.add.group();
        gpJogada = game.add.group();
        gpComoJogarPassa = game.add.group();

        btnVoltar = game.add.button(10, 655, 'icoVoltar', stageJogoPassa.btVoltar, game, 1, 0, 0);
        btnVoltar.input.useHandCursor = true;
        btnVoltar.scale.setTo(.8, .8);
        gpBotoes.add(btnVoltar);

        btnImprimir = game.add.button(130, 655, 'icoImprimir', imprimir, game, 1, 0, 0);
        btnImprimir.input.useHandCursor = true;
        btnImprimir.url = 'pdf/passa/ficha_passa.pdf';
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

        btnComo = game.add.button(390, 655, 'icoAjuda', stageJogoPassa.comoJogar, game, 1, 0, 0);
        btnComo.nomeEstage = "stagePassaComo";
        btnComo.input.useHandCursor = true;
        btnComo.scale.setTo(.8, .8);
        gpBotoes.add(btnComo);

        btnAvacar = game.add.button(505, 655, 'icoAvancar', stageJogoPassa.avancarJogo, game, 1, 0, 0);
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


        btNivel1 = game.add.button(80, 120, 'iconivel', this.escolheNivel, game, 0, 0, 3);
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

        btNivel2 = game.add.button(200, 120, 'iconivel', this.escolheNivel, game, 1, 1, 4);
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
        txtNome1 = game.add.text(100, 120, "Jogador", {font: "30px Secular One", fill: "#7b4318"});
        gpSelecao.add(txtNome1);
        gpInputJogaodor1.add(txtNome1);


        imp_user1 = game.add.inputField(100, 170, {
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
        gpInputJogaodor1.visible = 1;


    }, sonInicial: function () {
        if (audio) {
            audio.destroy();
        }
        audio = game.add.audio('escrevaNomePassa');
        audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }

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
        audio = game.add.audio('nivel' + (nivelSelecionado + 1) + "Passa");
        audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }

    }, avancarJogo: function () {
        btnAvacar.animations.stop();
        btnAvacar.frame = 0;
        // console.log("etapaJogo " + etapaJogo);
        if (etapaJogo == 0) {
            jogador = 1;
            if ((imp_user1.value != "")) {
                if (nivelSelecionado >= 0) {
                    nomeJogadores[1] = imp_user1.value;
                    etapaJogo = 1;
                    stageJogoPassa.explicacaoJogo();
                } else {
                    if (gpNivel.visible == 0) {
                        gpInputJogaodor1.visible = 0;

                        gpNivel.visible = 1;
                        if (audio) {
                            audio.destroy();
                        }
                        audio = game.add.audio('escolhaNivelPassa');
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
        } else if (etapaJogo == 1) {
            arvore.frame = 1;
            if (gpExplicacaoPassa) {
                gpExplicacaoPassa.destroy();
            }
            gpExplicacaoPassa = game.add.group();
            gpMaca = game.add.group();

            gpExplicacaoPassa.add(gpMaca);
            game.add.tween(imgInicial).to({alpha: 0}, 800, "Linear", true);
            if (audio) {
                audio.destroy();
            }
            audio = game.add.audio('demostracao');
            audio.play();
            if (flgAudio == false) {
                audio.volume = 0;
            }

            stageJogoPassa.addMacaExplicacao(0, 9, posXInicial, posYInicial);
        } else if (etapaJogo == 2) {
            tempoExplicacao = [30, 60, 60, 40];

        } else if (etapaJogo == 3) {
            if (gpExplicacaoPassa) {
                gpExplicacaoPassa.destroy();
            }
            arvore.frame = 1;
            stageJogoPassa.iniciarJogo();
        } else if (etapaJogo == 4) {
            if (stageJogoPassa.verificarMudanca() == false) {
                stageJogoPassa.proximaRodada();
            } else {
                stageJogoPassa.proximaRodada();
                // console.log("náo pode mudar")
            }
        } else if (etapaJogo == 5) {
            stageJogoPassa.moverCaminhao();
        } else if (etapaJogo == 5.1) {
            if (gpJogadorUm.children[7].children[0].children.length == 11) {
                stageJogoPassa.moverCaminhao();
            } else {
                audio = game.add.audio('10MacaCaixa');
                audio.play();
                if (flgAudio == false) {
                    audio.volume = 0;
                }
            }
        } else if (etapaJogo == 6) {
            stageJogoPassa.voltarParaInicioJogo();
        }
    }, explicacaoJogo: function () {
        gpSelecao.visible = 0;
        caminhao1.visible = 0;
        gpNivel.visible = 0;
        gpInputJogaodor1.visible = 0;
        gpSelecao.visible = 0;

        game.add.tween(macaInicial).to({x: 1250}, 1200, "Linear", true);
        game.add.tween(imgJilo).to({x: 1600}, 1200, "Linear", true);
        game.add.tween(imgHercules).to({x: 1400}, 1200, "Linear", true);

        imgInicial = game.add.sprite(game.width / 2, 370, 'herculesJilo');
        imgInicial.animations.add('parabens');
        imgInicial.animations.play('parabens', 3, true);
        imgInicial.anchor.x = 0.5;
        imgInicial.anchor.y = 0.5;
        imgInicial.scale.setTo(0.2, 0.2)
        imgInicial.alpha = 0;

        game.add.tween(imgInicial).to({alpha: 1}, 1000, "Linear", true);
        game.add.tween(imgInicial.scale).to({x: 1, y: 1}, 1000, "Linear", true);

        btnAvacar.animations.play('avancar', 3, true);
        if (audio) {
            audio.destroy();
        }
        audio = game.add.audio('explicacaoPassa');
        audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }


    }, addMacaExplicacao: function (i, total, posX, posY) {

        etapaJogo = 2;
        var spMaca = game.add.sprite(posX, posY, 'maca');
        spMaca.name = "maca";
        spMaca.alpha = 0;
        gpExplicacaoPassa.children[0].add(spMaca);

        var anim = game.add.tween(spMaca).to({alpha: 1}, tempoExplicacao[0], "Linear", true);
        anim.onComplete.add(function () {
            posX += 60;

            if (posX >= 1150) {
                posX = posXInicial;
                posY += 60;
            }
            i++;
            if (i <= total) {
                stageJogoPassa.addMacaExplicacao(i, total, posX, posY);
            } else {
                stageJogoPassa.addCaixaExplicacao();
            }
        })
    }, addCaixaExplicacao: function (grupo) {
        var gpCaixa = game.add.group();
        gpCaixa.name = "caixa";
        gpExplicacaoPassa.add(gpCaixa);

        var caixa = game.add.sprite(800, 500, 'caixaMaca');
        caixa.scale.setTo(1.05, 1.05);
        caixa.name = "caixa";
        gpCaixa.add(caixa);

        var gpMacas = game.add.group();
        gpMacas.name = "macas";
        gpCaixa.add(gpMacas);
        stageJogoPassa.colocarNaCaixaExplicacao(n);


        var placa = game.add.sprite(800, 660, 'placa');
        placa.name = 'placaUnidade';
        gpExplicacaoPassa.add(placa);


    }, colocarNaCaixaExplicacao: function () {
        if (gpExplicacaoPassa.children[0].length > 0) {

            var maca = gpExplicacaoPassa.children[0].children[0];
            gpExplicacaoPassa.children[1].children[1].add(maca);

            var n = gpExplicacaoPassa.children[1].children[1].length;
            game.add.tween(maca.scale).to({x: 0.90, y: 0.90}, tempoExplicacao[1], "Linear", true);
            game.add.tween(maca).to({y: arrPosMaca[n]['y']}, tempoExplicacao[1], "Linear", true);
            var anim = game.add.tween(maca).to({x: arrPosMaca[n]['x']}, tempoExplicacao[1], "Linear", true);
            anim.onComplete.add(function () {
                stageJogoPassa.colocarNaCaixaExplicacao();

            })
        } else {
            var placaDezena = game.add.sprite(430, 100, 'placaDezena');
            placaDezena.name = 'PlacaDezena';
            gpExplicacaoPassa.add(placaDezena);

            var gpFundo = game.add.group();
            gpExplicacaoPassa.add(gpFundo);

            var caminhao = game.add.sprite(0, 200, 'caminhao');
            caminhao.name = "caminhao";
            gpExplicacaoPassa.add(caminhao);


            var gpDezena = game.add.group();

            var fundoDezena = game.add.graphics(arrPosMacaDezena[1]['fx'] - 10, arrPosMacaDezena[1]['fy'] - 10);
            fundoDezena.name = 'fundo';
            fundoDezena.beginFill(0xF59331, 1);
            fundoDezena.drawRect(0, 0, 325, 450);
            fundoDezena.alpha = 0.7;
            gpFundo.add(fundoDezena);

            for (var i = 1; i <= 10; i++) {
                var fundoCaixaDezena = game.add.graphics(arrPosMacaDezena[i]['fx'], arrPosMacaDezena[i]['fy']);
                fundoCaixaDezena.name = 'fundoDezena_' + i;
                fundoCaixaDezena.beginFill(0xF6EBA9, 1);
                fundoCaixaDezena.drawRect(0, 0, 140, 70);
                gpFundo.add(fundoCaixaDezena);


                var numeroQuadro = game.add.text(
                    arrPosMacaDezena[i]['fx'] + (fundoCaixaDezena.width / 2) - 10,
                    arrPosMacaDezena[i]['fy'] + (fundoCaixaDezena.height / 2) - 15, i, {
                        font: "30px Modern No. 20",
                        fill: '#FBBC04',
                        boundsAlignH: "right",
                        boundsAlignV: "middle"
                    });
                gpFundo.add(numeroQuadro);
                gpDezena.add(gpFundo);
                //
            }
            gpExplicacaoPassa.add(gpDezena);
            var gpCaixaDezena = game.add.group();
            gpCaixaDezena.name = "caixaDezena";
            gpExplicacaoPassa.add(gpCaixaDezena);

            var caixa = gpExplicacaoPassa.children[1];

            gpCaixaDezena.add(caixa);

            game.add.tween(caixa.scale).to({x: 0.50, y: 0.50}, tempoExplicacao[2], "Linear", true);
            game.add.tween(caixa).to({x: arrPosMacaDezena[1]['x']}, tempoExplicacao[2], "Linear", true);
            var anim = game.add.tween(caixa).to({y: arrPosMacaDezena[1]['y']}, tempoExplicacao[2], "Linear", true);
            anim.onComplete.add(function () {

                for (var i = 2; i <= 10; i++) {
                    var gpCaixa = game.add.group();
                    gpCaixa.name = "caixa";
                    gpCaixa.alpha = 0;

                    var caixa = game.add.sprite(800, 500, 'caixaMaca');
                    caixa.scale.setTo(1.05, 1.05);
                    caixa.name = "caixa";
                    gpCaixa.add(caixa);

                    var gpMacas = game.add.group();
                    gpMacas.name = "macas";
                    gpCaixa.add(gpMacas);

                    gpCaixa.scale.setTo(0.50, 0.50);
                    gpCaixa.x = arrPosMacaDezena[i]['x'];
                    gpCaixa.y = arrPosMacaDezena[i]['y'];

                    for (var m = 1; m <= 10; m++) {
                        var spMaca = game.add.sprite(arrPosMaca[m]['x'], arrPosMaca[m]['y'], 'maca');
                        gpMacas.add(spMaca);
                    }
                    gpExplicacaoPassa.children[5].add(gpCaixa);
                    var animCaixa = game.add.tween(gpCaixa).to({alpha: 1}, tempoExplicacao[2], "Linear", true);
                    animCaixa.onComplete.add(function () {
                        etapaJogo = 3;
                        for (var m = 0; m < 10; m++) {
                            var item = gpExplicacaoPassa.children[5].children[m];
                            game.add.tween(item.scale).to({x: 0.4, y: 0.4}, 800, "Linear", true);
                            game.add.tween(item).to({x: arrPosMacaCentena[(m + 1)]['x']}, tempoExplicacao[3], "Linear", true);
                            game.add.tween(item).to({y: arrPosMacaCentena[(m + 1)]['y']}, tempoExplicacao[3], "Linear", true);
                        }
                    })
                }
                var gpGrupoM = game.add.group();
                gpGrupoM.name = "espacoRoleta";
                gpGrupoM.alpha = 0;
                gpJogadorUm.add(gpGrupoM);

            })
        }

    }, addContagem: function (grupo) {
        var placaUnidade = game.add.sprite(950, 10, 'placaNumero');
        placaUnidade.name = 'placaNumero';
        placaUnidade.frame = 1;
        grupo.add(placaUnidade);


        var textoUnidade = game.add.text(968, 22, 0, {
            font: "40px Modern No. 20",
            fill: "#000000",
            // fontWeight:1000,
            boundsAlignH: "Center",
            boundsAlignV: "middle"
        });
        grupo.add(textoUnidade);

        var textoMaca = game.add.text(1020, 30, "Maçã", {
            font: "30px Modern No. 20",
            fill: "#000000",
            // fontWeight:1000,
            boundsAlignH: "right",
            boundsAlignV: "middle"
        });
        grupo.add(textoMaca);

        var placaDezena = game.add.sprite(570, 10, 'placaNumero');
        placaDezena.name = 'placaDezena';
        placaDezena.frame = 1;
        grupo.add(placaDezena);

        var textoDezena = game.add.text(588, 22, 0, {
            font: "40px Modern No. 20",
            fill: "#000000",
            // fontWeight:1000,
            boundsAlignH: "Center",
            boundsAlignV: "middle"
        });
        grupo.add(textoDezena);

        var textoCaixa = game.add.text(640, 30, "Caixas", {
            font: "30px Modern No. 20",
            fill: "#000000",
            // fontWeight:1000,
            boundsAlignH: "right",
            boundsAlignV: "middle"
        });
        grupo.add(textoCaixa);


        var placaCentena = game.add.sprite(170, 10, 'placaNumero');
        placaCentena.name = 'placaCentena';
        placaCentena.frame = 0;
        // placaCentena.visible = 0;
        grupo.add(placaCentena);

        var textoCentena = game.add.text(188, 22, 0, {
            font: "40px Modern No. 20",
            fill: "#000000",
            // fontWeight:1000,
            boundsAlignH: "Center",
            boundsAlignV: "middle"
        });
        // textoCentena.visible = 0;
        grupo.add(textoCentena);

        var textoCentena = game.add.text(240, 30, "Caminhão", {
            font: "30px Modern No. 20",
            fill: "#000000",
            // fontWeight:1000,
            boundsAlignH: "right",
            boundsAlignV: "middle"
        });
        // textoCentena.visible = 0;
        grupo.add(textoCentena);


    }, iniciarJogo: function () {

        var anguloSorteado = game.rnd.integerInRange(0, 2);
        nSorteado = arrValorAngulo[nivelSelecionado][anguloSorteado];

        arvore.frame = 1;
        var grupo = gpJogadorUm;
        game.add.tween(grupo.children[0]).to({alpha: 0}, 500, Phaser.Easing.Linear.None, true);
        etapaJogo = 4;

        var gpContagem = game.add.group();
        if (nivelSelecionado == 0) {
            gpContagem.alpha = 0;
        }
        gpContagem.name = "constagem";

        stageJogoPassa.addContagem(gpContagem);

        grupo.add(gpContagem);
        game.add.tween(gpContagem).to({alpha: 1}, 800, "Linear", true);
        game.add.tween(titulo).to({alpha: 0}, 800, "Linear", true);

        var fundoContagem = game.add.graphics(1, 1);
        fundoContagem.beginFill(0xffffff, 1);
        fundoContagem.drawRect(0, 0, 1, 1);
        if (nivelSelecionado == 0) {
            fundoContagem.visible = 0;
        }
        grupo.add(fundoContagem);


        var placa = game.add.sprite(800, 660, 'placa');
        placa.name = 'placaUnidade';
        grupo.add(placa);

        var placaDezena = game.add.sprite(430, 100, 'placaDezena');
        placaDezena.name = 'PlacaDezena';
        if (nivelSelecionado == 0) {
            placaDezena.visible = 0;
            placaDezena.alpha = 0;
        }
        grupo.add(placaDezena);

        var gpDezena = game.add.group();
        if (nivelSelecionado == 0) {
            gpDezena.visible = 0;
        }
        gpDezena.name = "fundoDezena";

        var gpFundo = game.add.group();

        var fundoDezena = game.add.graphics(arrPosMacaDezena[1]['fx'] - 10, arrPosMacaDezena[1]['fy'] - 10);
        fundoDezena.name = 'fundo';
        fundoDezena.beginFill(0xF59331, 1);
        fundoDezena.drawRect(0, 0, 325, 450);
        fundoDezena.alpha = 0.7;
        gpFundo.add(fundoDezena);


        for (var i = 1; i <= 10; i++) {
            if (nivelSelecionado == 0) {
                var fundoCaixaDezena = game.add.graphics(arrPosMacaDezena[i]['fx'], arrPosMacaDezena[i]['fy']);
                fundoCaixaDezena.name = 'fundoDezena_' + i;
                fundoCaixaDezena.beginFill(0xF6EBA9, 1);
                fundoCaixaDezena.drawRect(0, 0, 140, 70);
                gpFundo.add(fundoCaixaDezena);


                var numeroQuadro = game.add.text(
                    arrPosMacaDezena[i]['fx'] + (fundoCaixaDezena.width / 2) - 10,
                    arrPosMacaDezena[i]['fy'] + (fundoCaixaDezena.height / 2) - 15, i, {
                        font: "30px Modern No. 20",
                        fill: '#FBBC04',
                        boundsAlignH: "right",
                        boundsAlignV: "middle"
                    });
                gpFundo.add(numeroQuadro);
            }
            gpDezena.add(gpFundo);
            //
        }
        grupo.add(gpDezena);


        var caixaGrande = game.add.sprite(0, 200, 'caminhao');
        caixaGrande.name = "caminhao";
        caixaGrande.visible = 0;
        caixaGrande.frame = 0;
        caixaGrande.alpha = 0;
        grupo.add(caixaGrande);

        var gpCaixas = game.add.group();
        gpCaixas.name = "caixas";
        gpCaixas.completa = false;
        grupo.add(gpCaixas);

        var gpCaixa = game.add.group();
        gpCaixa.name = "caixa";
        gpCaixa.completa = false;
        gpCaixas.add(gpCaixa);

        var caixa = game.add.sprite(800, 500, 'caixaMaca');
        caixa.scale.setTo(1.05, 1.05);
        caixa.name = "caixa";
        gpCaixa.add(caixa);
        if (nivelSelecionado == 1) {
            caixa.frame = 1;
        }

        // var btFundo = game.add.graphics(0, 0);
        // btFundo.beginFill(0xffffff, 0);
        // btFundo.name = "bt";
        // btFundo.drawRect(0, 0, 290, 145);
        // gpCaixas.add(btFundo);

        var gpMaca = game.add.group();
        gpMaca.name = "grupoMaca";
        grupo.add(gpMaca);


        var gpDezena = game.add.group();
        gpDezena.name = "grupoDezena";
        grupo.add(gpDezena);

        var btnEnviarDezena = game.add.button(730, 320, 'seta', stageJogoPassa.enviarDezena, game, 0, 0, 0);
        btnEnviarDezena.name = "setaDezena";
        if (nivelSelecionado == 0) {
            btnEnviarDezena.visible = 0;
            btnEnviarDezena.alpha = 0;
        }
        btnEnviarDezena.input.useHandCursor = true;
        btnEnviarDezena.scale.setTo(.8, .8);
        btnEnviarDezena.animations.add('dezena', [], 3, true);
        // btnEnviarDezena.animations.play('dezena');
        grupo.add(btnEnviarDezena);

        var btnEnviarCentena = game.add.button(310, 320, 'seta2', stageJogoPassa.enviarCentena, game, 0, 0, 0);
        btnEnviarCentena.name = "setaCentena";
        if (nivelSelecionado == 0) {
            btnEnviarCentena.visible = 0;
            btnEnviarCentena.alpha = 0;
        }
        btnEnviarCentena.input.useHandCursor = true;
        btnEnviarCentena.animations.add('centena', [], 3, true);
        // btnEnviarCentena.animations.play('centena');
        grupo.add(btnEnviarCentena);

        var gpCentena = game.add.group();
        gpCentena.name = "grupoCentena";
        grupo.add(gpCentena);

        var cor = "#FF0000";

        nomeJogador1 = game.add.group();
        nomeJogador1.x = 40;
        nomeJogador1.y = 90;

        var txtNomeJogador1 = game.add.text(5, 0, nomeJogadores[jogador], {
            font: "30px Myriad Pro",
            fill: "#FF0000",
            // fontWeight:1000,
            boundsAlignH: "right",
            boundsAlignV: "middle"
        });

        var fundoJogador = game.add.sprite(-10, -5, 'barraNome');
        fundoJogador.name = 'fundoJogador1';
        nomeJogador1.add(fundoJogador);

        nomeJogador1.add(txtNomeJogador1);

        grupo.add(nomeJogador1);

        if (audio) {
            audio.destroy();
        }
        audio = game.add.audio('cliqueMaca');
        // audio = game.add.audio('ganhou' + nSorteado);
        audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }

        stageJogoPassa.addMaca(gpMaca, 1, nSorteado, posXInicial, posYInicial);

        gpJogadorUm.children[6].visible = 1;
        game.add.tween(gpJogadorUm.children[6]).to({alpha: 1}, 800, "Linear", true);


    }, addMaca: function (grupo, i, total, posX, posY) {

        var btnMaca = game.add.button(posX, posY, 'maca', stageJogoPassa.colocarNaCaixa);
        btnMaca.name = "maca";
        btnMaca.alpha = 0;
        btnMaca.correto = false;
        btnMaca.i = i;
        grupo.add(btnMaca);
        var anim = game.add.tween(btnMaca).to({alpha: 1}, tempoMaca, "Linear", true);
        anim.onComplete.add(function () {
            posX += 60;
            if (posX >= 1150) {
                posX = posXInicial;
                posY += 60;
            }
            i++;
            if (i <= total) {
                stageJogoPassa.addMaca(grupo, i, total, posX, posY);
            } else {
                stageJogoPassa.addCaixa(gpJogadorUm);
            }
        })

    }, colocarNaCaixa: function (maca) {
        var grupo = gpJogadorUm.children[7].children[0];
        if (nivelSelecionado == 0 && grupo && grupo.length <= 10 && maca.correto == false) {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            if (grupo.length <= 2) {
                efeitoSom = game.add.audio('maca' + grupo.length);
            } else {
                efeitoSom = game.add.audio('numero' + grupo.length);
            }
            efeitoSom.play();

        } else if (nivelSelecionado == 1 && grupo && maca.correto == false && grupo.length < 11) {
            efeitoSom.destroy();
            efeitoSom = game.add.audio('efeitoCliqueMaca');
            efeitoSom.play();
        } else if (nivelSelecionado == 1 && grupo && grupo.length == 11) {
            if (audio) {
                audio.destroy();
            }
            audio = game.add.audio('setaM');
            audio.play();
            if (flgAudio == false) {
                audio.volume = 0;
            }
        }
        if (maca.correto == false && gpJogadorUm.children[7].length > 0) {

            var nMacaCaixa = grupo.length;
            if (nMacaCaixa < 11 || nMacaCaixa == undefined) {
                maca.correto = true;
                grupo.add(maca);
                game.add.tween(maca).to({y: arrPosMaca[nMacaCaixa]['y']}, 500, "Linear", true);
                game.add.tween(maca.scale).to({x: 0.90, y: 0.90}, 500, "Linear", true);
                var anim = game.add.tween(maca).to({x: arrPosMaca[nMacaCaixa]['x']}, 500, "Linear", true);
                anim.onComplete.add(function () {

                    if (grupo.length >= 11 && gpJogadorUm.children[12].length == 0) {
                        gpJogadorUm.children[10].animations.play('dezena');
                        if (audio) {
                            audio.destroy();
                        }
                        audio = game.add.audio('passaMeio');
                        if (gpJogadorUm.children[9].length == 0) {
                            audio.play();
                            if (flgAudio == false) {
                                audio.volume = 0;
                            }
                        }
                        stageJogoPassa.mostrarQuadros();
                    } else if (gpJogadorUm.children[12].length == 1 && grupo.length >= 11) {
                        btnAvacar.animations.play('avancar', 3, true);
                    }
                })
            }
        }
    }, starDragCaixa: function (caixa) {
        flgDrag = true;
        game.add.tween(caixa).to({x: 0.50, y: 0.50}, 200, "Linear", true);

    }, stopDragCaixa: function (caixa, q) {
        flgDrag = false;
        // console.log(caixa)

    }, mostrarQuadros: function () {
        var grupoJogador = gpJogadorUm;
        if (grupoJogador.children[4].visible == 0 && grupoJogador.children[7].children[0].length == 11) {
            // placa dezena
            grupoJogador.children[4].visible = 1;
            game.add.tween(grupoJogador.children[4]).to({alpha: 1}, 800, "Linear", true);
            // fundo dezena
            grupoJogador.children[5].visible = 1;
            game.add.tween(grupoJogador.children[5]).to({alpha: 1}, 800, "Linear", true);
            // botao de enviar para dezena
            if (nivelSelecionado == 0) {
                grupoJogador.children[10].visible = 1;
                game.add.tween(grupoJogador.children[10]).to({alpha: 1}, 800, "Linear", true);
                grupoJogador.children[11].visible = 1;
                game.add.tween(grupoJogador.children[11]).to({alpha: 1}, 800, "Linear", true);
            }
            gpJogadorUm.children[5].forEach(function (item) {
                game.add.tween(item).to({alpha: 1}, 200, "Linear", true);
            })
        }

    }, organizaResto: function () {
        var grupo = gpJogadorUm;
        var posX = posXInicial;
        var posY = posYInicial;
        grupo.children[8].forEach(function (item) {
            game.add.tween(item).to({x: posX}, 800, "Linear", true);
            game.add.tween(item).to({y: posY}, 800, "Linear", true);
            posX += 60;
            if (posX >= 1150) {
                posX = posXInicial;
                posY += 60;
            }
        });
        if (grupo.children[8].length >= 10) {
            stageJogoPassa.addCaixa(grupo);
        }

    }, enviarDezena: function () {
        var grupo = gpJogadorUm;

        if (grupo.children[9].length < 10) {
            if (etapaJogo == 4 && gpJogadorUm.children[7].children[0] && grupo.children[7].children[0].length == 11) {
                etapaJogo = 4.1;
                flgOrganizar = true;

                grupo.children[10].animations.stop();
                grupo.children[10].frame = 0;
                if (grupo.children[7].children[0] && grupo.children[7].children[0].length == 11) {
                    var n = grupo.children[9].length;
                    n++;

                    game.add.tween(grupo.children[7].children[0].scale).to({x: 0.50, y: 0.50}, 800, "Linear", true);
                    game.add.tween(grupo.children[7].children[0]).to({x: arrPosMacaDezena[n]['x']}, 800, "Linear", true);
                    var anim = game.add.tween(grupo.children[7].children[0]).to({y: arrPosMacaDezena[n]['y']}, 800, "Linear", true);

                    anim.onComplete.add(function () {
                        etapaJogo = 4;
                        sonAviso = game.add.audio('acertou');
                        sonAviso.play();


                        btnAvacar.animations.play('avancar', 3, true);
                        if (grupo.children[8].length >= 10) {
                            btnAvacar.animations.stop();
                            btnAvacar.frame = 0;
                        }
                        if (grupo.children[9].length >= 10) {
                            btnAvacar.animations.stop();
                            btnAvacar.frame = 0;
                        }
                        var caixa = grupo.children[7].children[0];
                        grupo.children[9].add(caixa);
                        stageJogoPassa.organizaResto();
                        if (gpJogadorUm.children[9].length == 10) {


                            if (audio) {
                                audio.destroy();
                            }
                            audio = game.add.audio('setaL');
                            audio.play();
                            if (flgAudio == false) {
                                audio.volume = 0;
                            }
                            btnAvacar.animations.stop();
                            btnAvacar.frame = 0;
                        }


                    });
                } else {
                    if (audio) {
                        audio.destroy();
                    }
                    audio = game.add.audio('tentePassa');
                    audio.play();
                    if (flgAudio == false) {
                        audio.volume = 0;
                    }

                }
            } else {
                if (audio) {
                    audio.destroy();
                }
                audio = game.add.audio('tentePassa');
                audio.play();
                if (flgAudio == false) {
                    audio.volume = 0;
                }
                // audio.onStop.add(function () {
                //     audio = game.add.audio('10MacaCaixa');
                // audio.play();
                // });
            }
        }
    }, enviarCentena: function () {
        var grupo = gpJogadorUm;

        if (etapaJogo == 4 && grupo.children[9].length >= 10) {
            btnAvacar.animations.stop();
            btnAvacar.frame = 0;
            etapaJogo = 4.1;

            if (grupo.children[9].length >= 10) {

                var tempoCaixa = 500;
                for (var m = 9; m >= 0; m--) {
                    var item = grupo.children[9].children[m];
                    game.add.tween(item.scale).to({x: 0.4, y: 0.4}, tempoCaixa, "Linear", true);
                    game.add.tween(item).to({x: arrPosMacaCentena[(m + 1)]['x']}, tempoCaixa, "Linear", true);
                    game.add.tween(item).to({y: arrPosMacaCentena[(m + 1)]['y']}, tempoCaixa, "Linear", true);
                    grupo.children[12].add(item);
                }

                gpJogadorUm.children[1].children[7].text = 1;

                if (audio) {
                    audio.destroy();
                }
                audio = game.add.audio('quantaCaixas');
                audio.play();
                if (flgAudio == false) {
                    audio.volume = 0;
                }

                grupo.children[11].animations.stop();

                if (grupo.children[8].length >= 10) {
                    etapaJogo = 5.1;
                    stageJogoPassa.addCaixa(grupo);
                } else {
                    etapaJogo = 5;
                }
            } else {
                if (audio) {
                    audio.destroy();
                }
                audio = game.add.audio('so10caixas');
                audio.play();
                if (flgAudio == false) {
                    audio.volume = 0;
                }
            }
        } else {
            if (audio) {
                audio.destroy();
            }
            audio = game.add.audio('soDezCheias');
            audio.play();
            if (flgAudio == false) {
                audio.volume = 0;
            }

        }
    }, addCaixa: function (grupo) {
        if (grupo.children[7].length == 0 && grupo.children[9].length < 10) {
            var gpCaixa = game.add.group();
            gpCaixa.name = "caixa";
            gpCaixa.completa = false;
            grupo.children[7].add(gpCaixa);

            var caixa = game.add.sprite(800, 500, 'caixaMaca');
            caixa.scale.setTo(1.05, 1.05);
            caixa.name = "caixa";
            gpCaixa.add(caixa);
            if (nivelSelecionado == 1) {
                caixa.frame = 1;
            }
        }

    }, proximaRodada: function () {
        rodada++;

        var anguloSorteado = game.rnd.integerInRange(0, 2);
        nSorteado = arrValorAngulo[nivelSelecionado][anguloSorteado];


        var grupo = gpJogadorUm;
        if (grupo.children[9] && grupo.children[9].length == 10) {
            grupo.children[6].visible = 1;
            game.add.tween(grupo.children[6]).to({alpha: 1}, 800, "Linear", true);

            gpJogadorUm.children[11].animations.play('centena');
        } else {
            var flgNumMaca = false;
            var flgCaixa = false;
            var flgCaixaCompleta = false;

            if (grupo.children[8].length == 11) {
                flgCaixaCompleta = true;
            }

            if (grupo.children[8] && grupo.children[8].length < 10) {
                flgNumMaca = true;
                // } else {
                // console.log("tem mais de 10 mais ainda");
            }
            if (grupo.children[7] && grupo.children[7].length == 0) {
                flgCaixa = true;
            } else {
                if (grupo.children[7].children[0].length >= 11) {
                    if (audio) {
                        audio.destroy();
                    }
                    audio = game.add.audio('setaM');
                    audio.play();
                    if (flgAudio == false) {
                        audio.volume = 0;
                    }
                    // console.log("Tem uma Caixa na Unidade");

                    grupo.children[10].animations.play('dezena');
                } else {
                    if (grupo.children[7] && grupo.children[7].length > 0) {
                        if (audio) {
                            audio.destroy();
                        }
                        audio = game.add.audio('novamente');
                        audio.play();
                        if (flgAudio == false) {
                            audio.volume = 0;
                        }
                        audio.onStop.add(function () {
                            audio = game.add.audio('10MacaCaixa');
                            audio.play();
                            if (flgAudio == false) {
                                audio.volume = 0;
                            }
                        });
                    }
                }
            }
            if ((flgCaixa == true && flgNumMaca == true) || (flgCaixaCompleta == false && grupo.children[8].length == 0)) {

                var posX = posXInicial;
                var posY = posYInicial;
                for (m = 0; m < grupo.children[8].length; m++) {
                    posX += 60;
                    if (posX >= 1150) {
                        posX = posXInicial;
                        posY += 60;
                    }
                }
                if (audio) {
                    audio.destroy();
                }
                audio = game.add.audio('ganhou' + nSorteado);
                audio.play();
                if (flgAudio == false) {
                    audio.volume = 0;
                }

                stageJogoPassa.addMaca(grupo.children[8], 1, nSorteado, posX, posY);
            }
        }
    }, verificarMudanca: function () {
        var retorno = false;
        var grupo = gpJogadorUm;
        if (grupo.children[8] && grupo.children[8].length >= 10) {
            // console.log("tem maca para colocar na caixa")
            retorno = true;
        }
        if (grupo.children[7].length > 0 && grupo.children[7].children[0].length == 11) {
            // console.log("Caixa Completa");
            retorno = true;
        }
        return retorno;


    }, moverCaminhao: function () {
        etapaJogo = 6;
        gpJogadorUm.children[12].visible = 0;
        game.add.tween(gpJogadorUm.children[3]).to({alpha: 0}, 300, "Linear", true);
        game.add.tween(gpJogadorUm.children[4]).to({alpha: 0}, 300, "Linear", true);
        game.add.tween(gpJogadorUm.children[5]).to({alpha: 0}, 300, "Linear", true);
        game.add.tween(gpJogadorUm.children[9]).to({alpha: 0}, 300, "Linear", true);
        game.add.tween(gpJogadorUm.children[10]).to({alpha: 0}, 300, "Linear", true);
        var anim = game.add.tween(gpJogadorUm.children[11]).to({alpha: 0}, 300, "Linear", true);

        anim.onComplete.add(function () {
            game.add.tween(gpJogadorUm.children[6]).to({alpha: 0}, 1500, "Linear", true);
            game.add.tween(gpJogadorUm.children[6]).to({x: 800}, 1500, "Linear", true);
            game.add.tween(gpJogadorUm.children[6]).to({y: 500}, 1500, "Linear", true);
            game.add.tween(gpJogadorUm.children[6].scale).to({x: .1, y: .1}, 1500, "Linear", true);
        });


        var caminhao = gpJogadorUm.children[6];
        caminhao.animations.add('caminhao', [], 2, false);
        caminhao.animations.play('caminhao');

        imgHercules.x = 690;
        imgHercules.animations.add('herculesPassa', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4, true);
        imgHercules.animations.play('herculesPassa');

        imgJilo.x = 920;
        imgJilo.animations.add('jilo');
        imgJilo.animations.play('jilo', 9, true);
        imgJilo.inputEnabled = true;
        if (gpJogadorUm.children[7].length == 1) {
            game.add.tween(gpJogadorUm.children[7].children[0].scale).to({x: 0.50, y: 0.50}, 800, "Linear", true);
            game.add.tween(gpJogadorUm.children[7].children[0]).to({x: 200}, 800, "Linear", true);
            var anim2 = game.add.tween(gpJogadorUm.children[7].children[0]).to({y: 350}, 800, "Linear", true);
            anim.onComplete.add(function () {
                gpJogadorUm.children[9].alpha = 1;
                gpJogadorUm.children[9].add(gpJogadorUm.children[7].children[0]);
            })
        }
        if (audio) {
            audio.destroy();
        }
        audio = game.add.audio('aplausos');
        audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }
        audio.onStop.add(function () {
            audio = game.add.audio('caminhaoPartindo');
            audio.play();
            if (flgAudio == false) {
                audio.volume = 0;
            }
        });

    }, btVoltar: function () {
        if (etapaJogo != 0) {
            stageJogoPassa.modelVoltar();
        } else {
            var stage = new Object();
            stage.nomeEstage = "stageSelecaoJogos";
            mudarState(stage);
        }
    }, voltarParaInicioJogo: function () {
        if (audio) {
            audio.destroy();
        }
        tempoExplicacao = [300, 700, 1400, 800];
        if (gpModalVoltar) {
            gpModalVoltar.destroy();
        }
        arvore.frame = 0;
        jogador = null;
        rodada = 0;
        if (nomeJogador1) {
            nomeJogador1.destroy();
        }
        if (gpJogadorUm) {
            gpJogadorUm.destroy();
        }
        if (gpExplicacaoPassa) {
            gpExplicacaoPassa.destroy();
        }

        if (imgInicial) {
            imgInicial.destroy();

        }
        titulo.alpha = 1;
        titulo.visible = 1;
        gpBotoes.visible = 1;
        gpJogadorUm = game.add.group();
        rodada = 1;
        fundo.frame = 0;
        btNivel1.frame = 0;
        btNivel1.alpha = 1;
        btNivel2.frame = 1;
        btNivel2.alpha = 1;
        nivelSelecionado = -1;
        etapaJogo = 0;
        btnAvacar.visible = 1;
        gpNivel.visible = 0;
        gpInputJogaodor1.visible = 1;
        imp_user1.setText('');
        caminhao1.visible = 1;

    }, comoJogar: function () {
        btnComo.frame = 0;
        gpInputJogaodor1.visible = 0;
        gpJogadorUm.visible = 0;
        gpNivel.visible = 0;
        btnVoltar.visible = 0;
        btnImprimir.visible = 0;
        btnSon.visible = 0;
        btnComo.visible = 0;
        btnAvacar.visible = 0;

        // console.log("etapaJogo " + etapaJogo);
        if (efeitoSom) {
            efeitoSom.stop();
        }
        if (audio) {
            audio.stop();
        }
        gpComoJogarPassa = game.add.group();
        gpComoJogarPassa.visible = 1;
        var fundo = game.add.sprite(0, 0, 'passaComo');
        gpComoJogarPassa.add(fundo);

        var btnVoltarPassa = game.add.button(10, 675, 'icoVoltar', stageJogoPassa.fecharComo, game, 1, 0, 0);
        btnVoltarPassa.nomeEstage = "stageJogoPassa";
        btnVoltarPassa.input.useHandCursor = true;
        btnVoltarPassa.scale.setTo(.8, .8);
        gpComoJogarPassa.add(btnVoltarPassa);

    }, fecharComo: function () {
        if (etapaJogo == 0) {
            jogador = 1;
            etapaJogo
            if ((imp_user1.value != "")) {
                gpNivel.visible = 1;
            } else {
                gpInputJogaodor1.visible = 1;
            }
        }

        btnVoltar.visible = 1;
        btnImprimir.visible = 1;
        btnSon.visible = 1;
        btnComo.visible = 1;
        btnAvacar.visible = 1;
        gpComoJogarPassa.destroy();
        gpComoJogarPassa.visible = 0;
        gpJogadorUm.visible = 1;
        gpBotoes.visible = 1;

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
        gpBotoes.visible = 0;

        gpModalVoltar = game.add.group();
        gpModalVoltar.visible = 1;

        if (gpJogadorUm) {
            gpJogadorUm.visible = 0;
        }

        var fundoVoltar = game.add.sprite(0, 0, 'fundoVoltar');
        gpModalVoltar.add(fundoVoltar);

        var btnSim = game.add.button(680, 150, 'btnSim', stageJogoPassa.voltarParaInicioJogo, game, 1, 0, 0);
        btnSim.input.useHandCursor = true;
        btnSim.anchor.x = 0.5;
        gpModalVoltar.add(btnSim);

        var btnNao = game.add.button(1030, 150, 'btnNao', stageJogoPassa.fechaModalVoltar, game, 1, 0, 0);
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
            jogador = 1;
            if ((imp_user1.value != "")) {
                gpNivel.visible = 1;
            } else {
                gpInputJogaodor1.visible = 1;
            }
        }
        if (gpJogadorUm) {
            gpJogadorUm.visible = 1;
        }
        if (imgInicial) {
            imgInicial.visible = 1;

        }
        gpModalVoltar.visible = 0;
        gpModalVoltar.destroy();
        gpBotoes.visible = 1;

    }
}