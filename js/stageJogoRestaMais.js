var fundo;
var tituloJogo;
var etapaJogo;
var nivelSelecionado;
var posX = 60;
var posY = 500;
var posYinicial = 0;

var balaoVermelho;
var balaoAzul;

var cb1, cb2;
var imp_user1, imp_user2;
var nJogadas = 5;
var rodadaResta = 1;

var gpInicial;
var gpSelecao;
var gpRoleta;
var gpInputJogaodor1;
var gpInputJogaodor2;
var gpBotoes;
var gpContagem;
var ponteiro;
var gpJogada;
var gpLiga;
var gpSorvete;
var gpResultado;
var gpResultadoPalito;
var gpAmarados;
var gpResultadoPicole;
var gpResultadoJogador1;
var gpResultadoJogador2;
var gpTelaResultado;
var gpTelaResultadoFinal;
var gpAjudaPalito;
var gpComoJogarResta;
var gpModalVoltar;

var txtNome1, txtNome2;
var btNivel1, btNivel2;
var btnAvacar, btnComo, btnSon, btnVoltar;
var btnAudio;
var nomeJogador1;
var nomeJogador2;
var jogador;
var imgInicial;
var flgGiraRoleta = false;
var anguloSorteado;
var minPalidoX;

var arrSelecionadosResta = [];
var gpObj;
var n;
var herculoesContagem;
var arrValorAnguloResta = [[2, 3, 4], [6, 5, 4]];
var arrNumero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var arrTextoNumero = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez', 'Onze', "Doze", "Treze", "Quatorze", "Quinze"];
var nSorteadoResta;
var flgAvancar = false;
var arrDisponivelResta;
var maxPalitoResta = [[10], [11, 12, 13, 14, 15]];
var nmaxPalitoResta;
var pAjudaSorteio = 0;
var x = 50;
var arrPosLigaResta = [];
var alvo;
var nLiga = 0;
var boolSelecionado = false;

var imgHercules;
var imgJilo;
var imgCarrinhoSorvete;

var resultadoRodada;
var resultadoSelecionado;
var poXResultado = [0, 20, 1160];

var errou;
var acertou;

var text;
var fundoLoad;
var logoLoad;
var txtRodada;
var sonAviso;
var stageJogoRestaMais = {

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


        // game.load.onLoadStart.add(stageCarregar.loadStart, this);
        // game.load.onFileComplete.add(stageCarregar.fileComplete, this);
        // game.load.onLoadComplete.add(stageCarregar.loadComplete, this);

        stageJogoRestaMais.start();


    }, start: function () {
        game.load.spritesheet('hercules', 'assets/restaMais/hercules.png', 325.6, 529.2);
        game.load.spritesheet('carrinhoSorvete', 'assets/restaMais/carrinhoSorvete.png', 522.55, 558.05);
        game.load.image('tituloResta', 'assets/restaMais/titulo.png');
        game.load.spritesheet('fundo', 'assets/restaMais/fundo.png', 1200, 800);
        game.load.spritesheet('roleta', 'assets/restaMais/roleta.png', 189.4, 189.4);
        game.load.image('ponteiro', 'assets/restaMais/ponteiro.png');
        game.load.spritesheet('acertou', 'assets/restaMais/acertou.png', 125.9, 89);
        game.load.spritesheet('tenteNovamente', 'assets/restaMais/tente_novamente.png', 139, 98);
        game.load.image('mascara', 'assets/restaMais/marcara.svg');
        game.load.spritesheet('naoRestou', 'assets/restaMais/nao_restou.png', 174, 129);
        game.load.spritesheet('palito', 'assets/restaMais/palito.png', 30, 165);
        game.load.spritesheet('sorvete', 'assets/restaMais/sorvete.png', 60, 145);
        game.load.spritesheet('liga', 'assets/restaMais/liga.png', 120, 46);

        game.load.audio('musicaResta', ['son/trilha/restamais/jogo_resta_mais.mp3']);

        game.load.audio('aprupe_2', ['son/resta_mais/agrupe_2.mp3']);
        game.load.audio('aprupe_3', ['son/resta_mais/agrupe_3.mp3']);
        game.load.audio('aprupe_4', ['son/resta_mais/agrupe_4.mp3']);
        game.load.audio('aprupe_5', ['son/resta_mais/agrupe_5.mp3']);
        game.load.audio('aprupe_6', ['son/resta_mais/agrupe_6.mp3']);
        game.load.audio('selecaoPalito', ['son/resta_mais/clique_palitos_liguinha.mp3']);
        game.load.audio('contarCorreto', ['son/resta_mais/contar_correto_hercules.mp3']);
        game.load.audio('escolhaJogadoresResta', ['son/resta_mais/escolha_jogadores.mp3']);
        game.load.audio('explicacao', ['son/resta_mais/explicacao_jogo.mp3']);
        game.load.audio('giraRoleta', ['son/resta_mais/gire_roleta.mp3']);
        game.load.audio('legalGanhou', ['son/resta_mais/legal_picole_ganho.mp3']);
        game.load.audio('naoRestouAudio', ['son/resta_mais/nao_restou_palito.mp3']);
        game.load.audio('nivelSelecionado0', ['son/resta_mais/nivel_1.mp3']);
        game.load.audio('nivelSelecionado1', ['son/resta_mais/nivel_2.mp3']);
        game.load.audio('quanto', ['son/resta_mais/quantos_picoles.mp3']);
        game.load.audio('sao2', ['son/resta_mais/sao_2_palitos.mp3']);
        game.load.audio('sao3', ['son/resta_mais/sao_3_palitos.mp3']);
        game.load.audio('sao4', ['son/resta_mais/sao_4_palitos.mp3']);
        game.load.audio('sao5', ['son/resta_mais/sao_5_palitos.mp3']);
        game.load.audio('sao6', ['son/resta_mais/sao_6_palitos.mp3']);

        // efeitos
        game.load.audio('carrinho', ['son/efeitos/restamais/carrinho.mp3']);
        game.load.audio('palito', ['son/efeitos/restamais/clique_palito.mp3']);

        game.load.audio('linguaErrou', ['son/efeitos/restamais/liguinha_erro.mp3']);
        game.load.audio('palitoCaindo', ['son/efeitos/restamais/palito_caindo.mp3']);


        // como jogar
        game.load.spritesheet('hercules', 'assets/restaMais/hercules.png', 325.6, 529.2);
        game.load.image('tituloResta', 'assets/restaMais/titulo.png');
        game.load.spritesheet('fundoComo', 'assets/restaMais/fundo_como.png', 1200, 800);
        game.load.spritesheet('roleta', 'assets/restaMais/roleta.png', 189.4, 189.4);
        game.load.image('ponteiro', 'assets/restaMais/ponteiro.png');

        game.load.audio('explicacao', ['son/restaMais/explicacao_jogo.mp3']);


        stageJogoRestaMais.load.start();

    }, comecoJogo: function () {
        if (efeitoSom) {
            efeitoSom.destroy();
        }

        stageJogoRestaMais.sonInicial();
        etapaJogo = 0;
        fundo = game.add.sprite(0, 0, 'fundo');

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
            musica.destroy()
        }
        musica = game.add.audio('musicaResta');
        musica.loopFull(1);
        musica.volume = 0.8;
        musica.play();

        if (audio) {
            audio.destroy();
        }
        audio = game.add.audio('escolhaJogadoresResta')
        audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }

        // var grade = game.add.sprite(0, 0, 'grade');

        tituloJogo = game.add.sprite(game.width / 2 - 176, 20, 'tituloResta');

        gpSelecao = game.add.group();
        gpBotoes = game.add.group();
        gpInputJogaodor1 = game.add.group();
        gpInputJogaodor2 = game.add.group();
        gpRoleta = game.add.group();
        gpNivel = game.add.group();
        gpContagem = game.add.group();
        gpObj = game.add.group();
        gpJogada = game.add.group();
        gpSorvete = game.add.group();
        gpResultadoJogador1 = game.add.group();
        gpResultadoJogador2 = game.add.group();
        gpTelaResultadoFinal = game.add.group();

        btnVoltar = game.add.button(10, 655, 'icoVoltar', stageJogoRestaMais.btVoltar, game, 1, 0, 0);
        btnVoltar.input.useHandCursor = true;
        btnVoltar.scale.setTo(.8, .8);
        gpBotoes.add(btnVoltar);
        //
        btnImprimir = game.add.button(130, 655, 'icoImprimir', imprimir, game, 1, 0, 0);
        btnImprimir.input.useHandCursor = true;
        btnImprimir.url = 'pdf/restamais/ficha_resta_mais.pdf';
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

        btnComo = game.add.button(390, 655, 'icoAjuda', stageJogoRestaMais.comoJogar, game, 1, 0, 0);
        // btnComo.nomeEstage = "stageRestaComo";
        btnComo.input.useHandCursor = true;
        btnComo.scale.setTo(.8, .8);
        gpBotoes.add(btnComo);

        btnAvacar = game.add.button(505, 655, 'icoAvancar', stageJogoRestaMais.avancarJogo, game, 1, 0, 0);
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
            efeitoSom = game.add.audio('sonBtnInstrucao');
            efeitoSom.play();
        });
        btnComo.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('sonBtnComo');
            efeitoSom.play();
        });
        btnAvacar.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('sonBtnAvacao');
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
            audio.onStop.add(function () {
                btnAvacar.animations.play('avancar', 2, true);
            });

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

            audio.onStop.add(function () {
                btnAvacar.animations.play('avancar', 2, true);
            })
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
            efeitoSom = game.add.audio('nivel1')
            efeitoSom.play();
        });

        btNivel2 = game.add.button(222, 460, 'iconivel', this.escolheNivel, game, 1, 1, 4);
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
        txtNome1 = game.add.text(200, 205, "Jogador 1", {font: "30px Secular One", fill: "#7b4318"});
        gpSelecao.add(txtNome1);
        gpInputJogaodor1.add(txtNome1);


        imp_user1 = game.add.inputField(200, 250, {
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
        txtNome2 = game.add.text(200, 310, "Jogador 2", {
            font: "30px Secular One",
            fill: "#7b4318"
        });
        gpSelecao.add(txtNome2);
        gpInputJogaodor2.add(txtNome2);


        imp_user2 = game.add.inputField(200, 350, {
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


        imgHercules = game.add.sprite(740, 170, 'hercules');
        imgHercules.frame = 56;
        imgHercules.animations.add('hercules', [45, 45, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59], 6, true);
        imgHercules.animations.play('hercules');

        imgJilo = game.add.sprite(890, 400, 'jiloResta');
        imgJilo.animations.add('jilo');
        imgJilo.animations.play('jilo', 9, true);
        imgJilo.inputEnabled = true;
        imgJilo.scale.setTo(0.95, 0.95);
        imgJilo.events.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('latido');
            efeitoSom.play();
        }, this);

        imgCarrinhoSorvete = game.add.sprite(460, 150, 'carrinhoSorvete');
        imgCarrinhoSorvete.scale.setTo(0.95, 0.95);
        imgCarrinhoSorvete.inputEnabled = true;
        // imgCarrinhoSorvete.events.onInputOver.add(function () {
        //     if (efeitoSom) {
        //         efeitoSom.destroy();
        //     }
        //     efeitoSom = game.add.audio('carrinho');
        //     efeitoSom.play();
        // });

    }, update: function () {
        if (boolSelecionado == true && alvo != "") {
            stageJogoRestaMais.fixLocation();
        }
    },
    sonInicial: function () {
        if (audio) {
            audio.resume();
        }

        // audio = game.add.audio('escolhaJogadores');
        // audio.play();
    }, escolheNivel: function (item) {
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
        audio = game.add.audio('nivelSelecionado' + nivelSelecionado);
        audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
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
                        stageJogoRestaMais.inicioJogo();
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
        } else if (etapaJogo == 1) {
            if (audio) {
                audio.destroy();
            }
            //
            stageJogoRestaMais.criarGrupo();
        } else if (etapaJogo == 2) {
            flgAvancar = true;
        } else if (etapaJogo == 3) {
            stageJogoRestaMais.giraRoleta();
        } else if (etapaJogo == 4) {
            etapaJogo = 5;
            gpJogada = game.add.group();

            x = 50;
            pAjudaSorteio = 0;
            if (gpAjudaPalito) {
                gpAjudaPalito.destroy();
            }
            gpAjudaPalito = game.add.group();
            stageJogoRestaMais.montarPalitoSorteio();
        } else if (etapaJogo == 5) {
            imgJilo.animations.stop();
            etapaJogo = 6;
            stageJogoRestaMais.montarLiga();

        } else if (etapaJogo == 6) {
            audio.destroy();
            audio = game.add.audio('tente');
            audio.play();
            if (flgAudio == false) {
                audio.volume = 0;
            }
            audio.onStop.add(function () {
                audio = game.add.audio('selecaoPalito');
                audio.play();
                if (flgAudio == false) {
                    audio.volume = 0;
                }
            });

        } else if (etapaJogo == 6.5) {
            etapaJogo = 7;
            stageJogoRestaMais.esconderGrupo();
        } else if (etapaJogo == 8) {
            etapaJogo = 8.1;
            var anim = game.add.tween(imgCarrinhoSorvete).to({alpha: 0}, 800, "Linear", true);
            anim.onComplete.add(function () {
                etapaJogo = 10;
                gpContagem.destroy();
                stageJogoRestaMais.resultado();
            }, this);

        } else if (etapaJogo == 10) {
            etapaJogo = 11;
            stageJogoRestaMais.acumularPicole();
        } else if (etapaJogo == 14) {
            stageJogoRestaMais.proximaRodada();
        } else if (etapaJogo == 12) {
            stageJogoRestaMais.proximoNivel();
        } else if (etapaJogo == 13) {
            stageJogoRestaMais.resultadoFinal();
        }
    }, inicioJogo: function () {
        nomeJogador1 = game.add.group();
        nomeJogador1.x = 40;
        nomeJogador1.y = 90;

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
            nomeJogador2.y = 90;
        }

        txtRodada = game.add.text((game.width / 2), 90, "Jogada " + rodadaResta, {
            font: "35px Myriad Pro Bold",
            fill: "#7A5630"
        });
        txtRodada.anchor.x = 0.5;
        imgHercules.animations.stop();
        imgHercules.visible = 0;

        imgJilo.visible = 0;
        imgCarrinhoSorvete.visible = 0;

        if (gpResultadoPicole) {
            gpResultadoPicole.destroy();
        }
        gpResultadoPicole = game.add.group();
        gpInicial.visible = 0;
        gpSelecao.visible = 0;
        gpNivel.visible = 0;
        gpInputJogaodor1.visible = 0;
        gpInputJogaodor2.visible = 0;
        pratoGrid = 0;
        gpSelecao.visible = 0;

        audio.destroy();
        audio = game.add.audio('explicacao')
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

    }, criarGrupo: function () {
        // console.log("criarGrupo");
        gpContagem = game.add.group();
        gpObj = game.add.group();
        gpRoleta = game.add.group();
        gpAmarados = game.add.group();
        gpLiga = game.add.group();

        if (nivelSelecionado == 0) {
            nmaxPalitoResta = 0;
        } else {
            nmaxPalitoResta = game.rnd.integerInRange(0, 4);
        }

        arrDisponivelResta = [0, (maxPalitoResta[nivelSelecionado][nmaxPalitoResta]) - 1];
        etapaJogo = 2;
        imgInicial.destroy();

        imgHercules.visible = 1;
        imgHercules.frame = 0;

        imgJilo.visible = 1;
        if (jogador == 1) {
            imgCarrinhoSorvete.frame = 0;
        } else {
            imgCarrinhoSorvete.frame = 6;
        }
        imgCarrinhoSorvete.visible = 1;


        balaoVermelho = game.add.sprite(970, 180, 'balaoVermelho2');
        balaoVermelho.alpha = 0;
        gpContagem.add(balaoVermelho);

        balaoAzul = game.add.sprite(970, 180, 'balaoAzul2');
        balaoAzul.alpha = 0;
        gpContagem.add(balaoAzul);

        n = 0;
        posX = 40;
        posY = 500;
        btnAvacar.animations.stop();
        btnAvacar.frame = 0;
        for (var i = 0; i < maxPalitoResta[nivelSelecionado][nmaxPalitoResta]; i++) {
            var palito = game.add.button(posX, posYinicial, 'palito', stageJogoRestaMais.selecionarItem, game);
            palito.visible = 0;
            palito.alpha = 0;
            palito.esconde = 0;
            palito.correto = false;
            palito.n = i;
            palito.seleciondado = false;
            gpObj.add(palito);

            var numero = game.add.text(40, posY - 80, arrNumero[i], {font: "80px AppleMyungjo 일반체", fill: "#ED1C24"});
            numero.esconde = 1;
            numero.visible = 0;
            numero.alpha = 0;
            gpObj.add(numero);

            var textoNumero = game.add.text(numero.x + numero.width + 10, posY - 45, arrTextoNumero[i], {
                font: "40px AppleMyungjo 일반체",
                fill: "#ED1C24"
            });
            textoNumero.esconde = 1;
            textoNumero.visible = 0;
            textoNumero.alpha = 0;
            gpObj.add(textoNumero);

            posX += 35;

        }
        gpContagem.add(gpObj);
        flgAvancar = false;
        stageJogoRestaMais.mostrarGrupo();

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

    }, mostrarGrupo: function () {

        // btnAvacar.animations.play('avancar', 2, true);
        //
        minPalidoX = "";
        var velocidade;
        var tempo;
        if (flgAvancar == false) {
            velocidade = 1000;
            tempo = 1000;
        } else {
            velocidade = 1;
            tempo = 1;
        }
        if (gpObj.children[n]) {
            gpObj.children[n].visible = 1;

            if (gpObj.children[n].esconde == 0) {
                game.add.tween(gpObj.children[n]).to({y: posY}, velocidade, "Linear", true);
                stageJogoRestaMais.contagemPalito(gpObj.children[n].n + 1, velocidade);
            } else {
                if (flgAvancar == true) {
                    gpObj.children[n].visible = 0;
                }
                if (flgAvancar == false) {
                    tempo = 500;
                }
            }
            var animacao = game.add.tween(gpObj.children[n]).to({alpha: 1}, tempo, "Linear", true);
            if (gpObj.children[n].esconde == 0) {
                stageJogoRestaMais.esconderPalito();
            }
            n++;
            animacao.onComplete.add(function () {
                if (n == gpObj.children.length) {
                    var obN = n - 1;
                    var obT = n - 2;
                    var anim = game.add.tween(gpObj.children[obN]).to({alpha: 0}, 500, "Linear", true);
                    var anim = game.add.tween(gpObj.children[obT]).to({alpha: 0}, 500, "Linear", true);
                    etapaJogo = 3;
                    stageJogoRestaMais.iniciarRoleta();
                    btnAvacar.animations.play('avancar', 2, true);
                } else {
                    stageJogoRestaMais.mostrarGrupo();
                }
            }, this);
        }

    }, esconderPalito: function () {
        if (n > 2) {
            var obN = n - 1;
            var obT = n - 2;
            var anim = game.add.tween(gpObj.children[obN]).to({alpha: 0}, 500, "Linear", true);
            var anim = game.add.tween(gpObj.children[obT]).to({alpha: 0}, 500, "Linear", true);
        }
    }, contagemPalito: function (n, velocidade) {
        if (sonAviso) {
            sonAviso.destroy();
        }
        if (velocidade > 2) {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('palitoCaindo');
            efeitoSom.play();

            sonAviso = game.add.audio('numero' + n);
            sonAviso.play();


            if (jogador == 1) {
                balaoVermelho.alpha = 0;
                balaoVermelho.visible = 1;
                balaoVermelho.frame = n;
                var anim = game.add.tween(balaoVermelho).to({alpha: 1}, 500, "Linear", true);
            } else {
                balaoAzul.alpha = 0;
                balaoAzul.visible = 1;
                balaoAzul.frame = n;
                var anim = game.add.tween(balaoAzul).to({alpha: 1}, 500, "Linear", true);
            }
        }


        if (n > 10) {
            imgHercules.frame = n - 10;
        } else {
            imgHercules.frame = n;
        }

    }, getMinXPalito: function () {
        var min = 500;
        gpObj.forEach(function (palito) {
            if (palito.key == "palito" && palito.correto == false && palito.seleciondado == true) {
                if (min >= palito.x) {
                    min = palito.x;
                }
            }
        });
        minPalidoX = min - 10;
    }, selecionarItem: function (item) {
        if (audio) {
            audio.stop();
        }
        if (efeitoSom) {
            efeitoSom.stop();
        }
        if (etapaJogo == 6) {

            efeitoSom = game.add.audio('palito');
            efeitoSom.play();

            if (acertou) {
                acertou.destroy();
            }
            if (errou) {
                errou.destroy();
            }
            var flgDisponivel = arrDisponivelResta.indexOf(item.n);
            if (item.correto == false) {
                if (flgDisponivel != -1) {
                    if (item.seleciondado == false) {
                        arrSelecionadosResta.push(item.n);
                        item.seleciondado = true;
                        item.frame = arrValorAnguloResta[nivelSelecionado][nSorteadoResta];
                    } else {
                        var index = arrSelecionadosResta.indexOf(item.n);
                        item.frame = 0;
                        item.seleciondado = false;
                        arrSelecionadosResta.splice(index, 1);

                    }
                    var menor = item.n - 1;
                    var maior = item.n + 1;
                    if (menor < 0) {
                        menor = 0;
                    }
                    if (maior >= (maxPalitoResta[nivelSelecionado][nmaxPalitoResta] - 1)) {
                        maior = maxPalitoResta[nivelSelecionado][nmaxPalitoResta] - 1;
                    }
                    arrDisponivelResta = [menor, item.n, maior];
                    stageJogoRestaMais.getMinXPalito();
                }
            }
            var flgSelecionado = false;
            gpObj.forEach(function (item) {
                if (item.key == "palito" && item.seleciondado == true) {
                    flgSelecionado = true;
                }
            });
            if (flgSelecionado == false) {
                arrDisponivelResta = [0, (maxPalitoResta[nivelSelecionado][nmaxPalitoResta]) - 1];
            }
        } else if (etapaJogo == 7) {
            efeitoSom = game.add.audio('palito');
            efeitoSom.play();

            if (acertou) {
                acertou.destroy();
            }
            if (errou) {
                errou.destroy();
            }

            if (resultadoSelecionado == 0) {
                imgHercules.animations.add('hercules', [37, 38, 39, 40, 41, 42, 43, 33], 15, false);
                imgHercules.animations.play('hercules');
            }
            resultadoSelecionado++;

            stageJogoRestaMais.ganharPicole(item);
        }
    }, iniciarRoleta: function () {
        if (audio) {
            audio.stop();
        }
        audio = game.add.audio('giraRoleta');
        audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }

        balaoAzul.visible = 0;
        balaoVermelho.visible = 0;

        txtRodada.visible = 1;

        var roleta = game.add.button(game.width / 2, 240, 'roleta', stageJogoRestaMais.giraRoleta, nivelSelecionado, nivelSelecionado, nivelSelecionado);
        roleta.anchor.x = 0.5;
        roleta.anchor.y = 0.5;
        roleta.frame = nivelSelecionado;
        gpRoleta.add(roleta);

        ponteiro = game.add.sprite(game.width / 2, 240, 'ponteiro');
        ponteiro.anchor.x = 0.5;
        ponteiro.anchor.y = 0.5;
        gpRoleta.add(ponteiro);


    }, giraRoleta: function () {
        if (etapaJogo == 3) {

            flgGiraRoleta = true;
            imgHercules.animations.add('hercules', [44, 45, 46, 47, 48, 49, 50, 51, 52], 25, false);
            imgHercules.animations.play('hercules');

            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('roletaGirando');
            efeitoSom.play();

            etapaJogo = 3.1;
            gpJogada.destroy();
            gpLiga = game.add.group();
            var angulo = game.rnd.integerInRange(0, 360);
            if (angulo >= 56 && angulo < 64) {
                angulo = 65;
            } else if (angulo >= 116 && angulo < 124) {
                angulo = 125;
            } else if (angulo >= 186 && angulo < 194) {
                angulo = 185;
            } else if (angulo >= 236 && angulo < 244) {
                angulo = 245;
            } else if (angulo >= 296 && angulo < 304) {
                angulo = 305;
            } else if (angulo >= 356 || angulo < 4) {
                angulo = 5;
            }
            anguloSorteado = angulo + (game.rnd.integerInRange(1, 3) * 360);
            var anim = game.add.tween(ponteiro).to({angle: anguloSorteado}, 2000, Phaser.Easing.Linear.None, true);
            anim.onComplete.add(function () {
                // etapaJogo = 4;
                efeitoSom.stop();
                nSorteadoResta = stageJogoRestaMais.verificarSorteio(ponteiro.angle);
                if (audio) {
                    audio.destroy();
                }
                audio = game.add.audio('aprupe_' + arrValorAnguloResta[nivelSelecionado][nSorteadoResta]);
                audio.play();
                if (flgAudio == false) {
                    audio.volume = 0;
                }
                audio.onStop.add(function () {
                    if (etapaJogo == 3.1) {
                        etapaJogo = 5;
                        gpJogada = game.add.group();
                        gpJogada.name = "gpJogada";

                        x = 50;
                        pAjudaSorteio = 0;
                        if (gpAjudaPalito) {
                            gpAjudaPalito.destroy()
                        }
                        gpAjudaPalito = game.add.group();
                        stageJogoRestaMais.montarPalitoSorteio();
                    }
                }, this)
            }, this);
        }
    }, montarLiga: function () {
        if (audio) {
            audio.resume();
        }
        audio = game.add.audio('selecaoPalito');
        audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }


        nLiga = Math.trunc(Number((maxPalitoResta[nivelSelecionado][nmaxPalitoResta]) / arrValorAnguloResta[nivelSelecionado][nSorteadoResta]));
        var lx = 90;
        var ly = 460;
        for (var l = 0; l < nLiga; l++) {
            var liga = game.add.button(lx, ly, 'liga', stageJogoRestaMais.dragObj, game);
            liga.correto = false;
            liga.anchor.x = 0.5;
            liga.anchor.y = 0.5;
            liga.width = 90;
            if (nivelSelecionado != 1) {
                lx += liga.width;
            }
            if (jogador == 1) {
                liga.frame = 0;
            } else {
                liga.frame = 2;
            }
            gpLiga.add(liga);
        }
        btnAvacar.visible = 1;
    }, montarPalitoSorteio: function () {
        btnAvacar.animations.play('avancar', 3, true);

        if (pAjudaSorteio < arrValorAnguloResta[nivelSelecionado][nSorteadoResta]) {
            pAjudaSorteio++;
            var pSorteado = game.add.sprite(x, 130, 'palito');
            pSorteado.name = "palito";
            pSorteado.alpha = 0
            pSorteado.frame = arrValorAnguloResta[nivelSelecionado][nSorteadoResta];
            gpAjudaPalito.add(pSorteado);


            var numeroContagem = game.add.text(x + 24, 210, pAjudaSorteio, {
                font: "80px AppleMyungjo 일반체",
                fill: "#BE1E2D"
            });
            numeroContagem.name = "numero_" + pAjudaSorteio;
            gpJogada.add(numeroContagem);

            if (jogador == 1) {
                balaoVermelho.visible = 1;
                balaoVermelho.alpha = 1;
                balaoVermelho.frame = pAjudaSorteio;
            } else {
                balaoAzul.visible = 1;
                balaoAzul.alpha = 1;
                balaoAzul.frame = pAjudaSorteio;
            }
            imgHercules.frame = pAjudaSorteio;

            sonAviso = game.add.audio('numero' + pAjudaSorteio);
            sonAviso.play();
            x += 30;

            var anim = game.add.tween(pSorteado).to({alpha: 1}, 1200, "Linear", true);
            anim.onComplete.add(function () {
                numeroContagem.destroy();
                balaoVermelho.visible = 0;
                balaoAzul.visible = 0;
                stageJogoRestaMais.montarPalitoSorteio();

            });
        } else {
            var obj;
            var xInicial = gpAjudaPalito.children[0].x;
            var xFim = xInicial;

            for (var p = 1; p < gpAjudaPalito.length; p++) {
                xFim += 19;
                obj = gpAjudaPalito.children[p];
                game.add.tween(obj).to({x: xFim}, 500, "Linear", true);
            }
            gpJogada.add(gpAjudaPalito);

            if (arrValorAnguloResta[nivelSelecionado][nSorteadoResta] != 2) {
                var liga = game.add.sprite(xInicial - 6, gpAjudaPalito.children[0].y + 50, 'liga');
            } else {
                var liga = game.add.sprite(xInicial, gpAjudaPalito.children[0].y + 50, 'liga');
            }
            if (jogador == 1) {
                liga.frame = 1;
            } else {
                liga.frame = 3;
            }

            liga.width = 31 * gpAjudaPalito.length;

            var anim = game.add.tween(liga).to({width: 26 * gpAjudaPalito.length}, 500, "Linear", true);
            gpJogada.add(liga);
            anim.onComplete.add(function () {
                game.add.tween(gpJogada).to({alpha: 0.7}, 500, "Linear", true);
            })
            // }
        }
    }, verificarSorteio: function (angulo) {
        // arrValorAnguloResta
        if (angulo >= 0 && angulo < 60 || angulo >= -180 && angulo < -120) {
            return 0;
        } else if (angulo >= 60 && angulo < 120 || angulo >= -120 && angulo < -60) {
            return 1;
        } else if (angulo >= 120 && angulo < 180 || angulo >= -60 && angulo < 0) {
            return 2;
        }

    }, dragObj: function (liga) {
        if (liga.correto == false) {
            if (boolSelecionado == false) {
                arrPosLigaResta = [liga.x, liga.y];
                alvo = liga;
                boolSelecionado = true;
                if (acertou) {
                    acertou.destroy();
                }
                if (errou) {
                    errou.destroy();
                }
            } else {
                boolSelecionado = false;
                if (arrSelecionadosResta.length == arrValorAnguloResta[nivelSelecionado][nSorteadoResta]) {
                    if (liga.x >= minPalidoX && liga.x <= (arrValorAnguloResta[nivelSelecionado][nSorteadoResta] * 35 + minPalidoX - 20)
                        && (liga.y >= (posY + 20) && liga.y < (posY + 200))) {

                        var objCorreto = [];
                        var min = 50;
                        var max = 0
                        var gpGrupoPalitos = game.add.group();
                        gpObj.forEach(function (item) {
                            if (item.key == "palito" && item.correto == false) {
                                if (arrSelecionadosResta.indexOf(item.n) >= 0) {
                                    item.correto = true;
                                    objCorreto.push(item);
                                    gpGrupoPalitos.add(item);

                                } else {
                                    if (item.n <= min) {
                                        min = item.n;

                                    }
                                    if (item.n >= max) {
                                        max = item.n;
                                    }
                                }
                            }
                        });
                        arrDisponivelResta = [min, max];
                        arrSelecionadosResta = [];

                        liga.correto = true;
                        liga.inputEnabled = false;
                        liga.width = (arrValorAnguloResta[nivelSelecionado][nSorteadoResta] * 30) + 30;
                        liga.x = minPalidoX + (liga.width / 2);

                        gpGrupoPalitos.add(liga);

                        gpAmarados.add(gpGrupoPalitos);

                        stageJogoRestaMais.agruparPalitos(gpGrupoPalitos);
                        stageJogoRestaMais.verificarRestoMais();

                        acertou = game.add.sprite(1000, 200, 'acertou');
                        if (jogador == 2) {
                            acertou.frame = 1;
                        } else {
                            acertou.frame = 0;
                        }

                        sonAviso = game.add.audio('linguinhaAcertou');
                        sonAviso.play();
                        sonAviso.onStop.add(function () {
                            sonAviso = game.add.audio('acertou');
                            sonAviso.play();
                        })


                    } else {
                        errou = game.add.sprite(720, 210, 'tenteNovamente');
                        if (jogador == 2) {
                            errou.frame = 1;
                        } else {
                            errou.frame = 0;
                        }
                        sonAviso = game.add.audio('linguaErrou');
                        sonAviso.play();
                        sonAviso.onStop.add(function () {
                            sonAviso = game.add.audio('tente');
                            sonAviso.play();
                        })


                        liga.x = arrPosLigaResta[0];
                        liga.y = arrPosLigaResta[1];
                    }
                } else {
                    sonAviso = game.add.audio('tente');
                    sonAviso.play();

                    sonAviso.onStop.add(function () {
                        sonAviso = game.add.audio('sao' + arrValorAnguloResta[nivelSelecionado][nSorteadoResta]);
                        sonAviso.play();
                    })

                    errou = game.add.sprite(720, 210, 'tenteNovamente');
                    if (jogador == 2) {
                        errou.frame = 1;
                    } else {
                        errou.frame = 0;
                    }
                    liga.x = arrPosLigaResta[0];
                    liga.y = arrPosLigaResta[1];
                }
                arrPosLigaResta = [];
                alvo = "";
            }
        }
    }, verificarRestoMais: function () {
        var ndisponivel = 0;
        gpObj.forEach(function (item) {
            if (item.key == "palito" && item.correto == false) {
                ndisponivel++
            }
        });
        if (ndisponivel < arrValorAnguloResta[nivelSelecionado][nSorteadoResta]) {
            resultadoSelecionado = 0;
            gpResultado = game.add.group();
            gpResultadoPalito = game.add.group();

            etapaJogo = 6.5;
            gpRoleta.destroy();
            if (ndisponivel != 0) {
                if (efeitoSom) {
                    efeitoSom.destroy();
                }

                gpObj.forEach(function (item) {
                    if (item.key == "palito" && item.correto == false) {
                        gpResultadoPalito.add(item);
                    }
                });
                imgHercules.animations.add('hercules', [44, 43, 42, 41, 40, 39, 38, 36], 10, false);
                imgHercules.animations.play('hercules');
            }
            resultadoRodada = ndisponivel;
            btnAvacar.animations.play('avancar', 3, true);

        }
        if (ndisponivel < arrValorAnguloResta[nivelSelecionado][nSorteadoResta] || ndisponivel == 0) {
            game.add.tween(gpJogada).to({alpha: 0}, 500, "Linear", true);
            // etapaJogo = 8;
        }
    }, esconderGrupo: function () {
        if (audio) {
            audio.destroy();
        }
        etapaJogo = 7;
        var animGp = game.add.tween(gpAmarados).to({alpha: 0}, 500, "Linear", true);
        animGp.onComplete.add(function () {
            gpAmarados.destroy();
        }, this);
        if (jogador == 1) {
            imgCarrinhoSorvete.animations.add('carrinhoTampa', [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5], 25, false);
        } else {
            imgCarrinhoSorvete.animations.add('carrinhoTampa', [6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11], 25, false);
        }
        imgCarrinhoSorvete.animations.play('carrinhoTampa');
        imgCarrinhoSorvete.animations.currentAnim.onComplete.add(function () {
            imgJilo.animations.play('jilo', 9, true);
            if (resultadoRodada == 0) {
                imgHercules.animations.add('hercules', [41, 40, 39, 38, 37, 36], 15, false);
                imgHercules.animations.play('hercules');

                etapaJogo = 8;

                if (acertou) {
                    acertou.destroy();
                }
                if (errou) {
                    errou.destroy();
                }
                imgHercules.frame = 14;
                var naoRestou = game.add.sprite(970, 180, 'naoRestou');
                if (jogador == 1) {

                    naoRestou.frame = 0;
                } else {
                    naoRestou.frame = 1;
                }

                audio = game.add.audio('naoRestouAudio');
                audio.play();
                if (flgAudio == false) {
                    audio.volume = 0;
                }
                gpContagem.add(naoRestou);
            } else {
                audio = game.add.audio('contarCorreto');
                audio.play();
                if (flgAudio == false) {
                    audio.volume = 0;
                }

            }

        });
    }, ganharPicole: function (item) {
        sonAviso = game.add.audio('numero' + resultadoSelecionado);
        sonAviso.play();

        var total = gpResultadoPalito.children.length;
        var anim = game.add.tween(item).to({x: (game.width / 2) - ((total * 40) + 50) + (resultadoSelecionado * 35)}, 800, "Linear", true);
        game.add.tween(item).to({y: 210}, 800, "Linear", true);

        var sorvete = game.add.sprite(710, 410, 'sorvete');
        sorvete.anchor.x = 0.5;
        sorvete.n = resultadoSelecionado;
        sorvete.anchor.y = 1;
        sorvete.scale.setTo(0.45, 0.45);
        sorvete.alpha = 0;
        sorvete.angle = 180;
        sorvete.frame = rodadaResta;
        gpSorvete.add(sorvete);

        var arrSorveteMao = [
            {'s': 0, 'x': 0, 'y': 323, 'a': 0},
            {'s': 1, 'x': 796, 'y': 323, 'a': 0},
            {'s': 2, 'x': 793, 'y': 326, 'a': -20},
            {'s': 3, 'x': 800, 'y': 326, 'a': 20},
            {'s': 4, 'x': 786, 'y': 329, 'a': -30},
            {'s': 5, 'x': 806, 'y': 329, 'a': 30},
        ];
        game.add.tween(sorvete).to({x: arrSorveteMao[resultadoSelecionado]['x']}, 800, "Linear", true);
        game.add.tween(sorvete).to({y: arrSorveteMao[resultadoSelecionado]['y']}, 800, "Linear", true);
        game.add.tween(sorvete).to({alpha: 1}, 800, "Linear", true);
        var animSorvete = game.add.tween(sorvete).to({angle: arrSorveteMao[resultadoSelecionado]['a']}, 800, "Linear", true);
        animSorvete.onComplete.add(function () {
            if (resultadoSelecionado == resultadoRodada) {
                stageJogoRestaMais.fecharCarrinho();
                btnAvacar.animations.play('avancar', 3, true);
            }
        }, this);


        if (resultadoSelecionado == resultadoRodada) {
            etapaJogo = 8;
        }


    }, agruparPalitos: function (grupo) {
        var valorX = grupo.children[0].x;
        var valorX1 = grupo.children[grupo.length - 1].x - (grupo.length * 4);

        for (var g = 0; g < grupo.length; g++) {
            if (grupo.children[g].key == "liga") {
                if (jogador == 1) {
                    grupo.children[g].frame = 1;
                } else {
                    grupo.children[g].frame = 3;
                }

                var w = grupo.children[g].x;
                game.add.tween(grupo.children[g]).to({width: 20 * grupo.length}, 500, "Linear", true);
                game.add.tween(grupo.children[g]).to({x: valorX1}, 500, "Linear", true);
            } else {
                game.add.tween(grupo.children[g]).to({x: valorX}, 500, "Linear", true);
                valorX += 19;
            }
        }

    }, fixLocation: function (item) {
        alvo.position.x = game.input.mousePointer.x;
        alvo.position.y = game.input.mousePointer.y;

    }, fecharCarrinho: function () {

        if (jogador == 1) {
            imgCarrinhoSorvete.animations.add('carrinhoTampa', [5, 4, 4, 3, 3, 2, 2, 1, 1, 0, 0], 25, false);
        } else {
            imgCarrinhoSorvete.animations.add('carrinhoTampa', [11, 10, 10, 9, 9, 8, 8, 7, 7, 6], 25, false);
        }
        imgCarrinhoSorvete.animations.play('carrinhoTampa');

    }, resultado: function () {
        if (txtRodada) {
            txtRodada.visible = 0;
        }
        gpTelaResultado = game.add.group();
        for (var g = 0; g < gpSorvete.length; g++) {
            gpSorvete.destroy(g, true);
        }
        if (audio) {
            audio.stop();
        }
        audio = game.add.audio('quanto');
        audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }
        audio.onStop.add(function () {
            btnAvacar.animations.play('avancar', 2, true);
        })

        var txtJogada = game.add.text(game.width / 2, 220, "Jogada " + rodadaResta, {
            font: "40px Secular One",
            fill: "#7b4318"
        });
        txtJogada.x -= (txtJogada.width / 2);
        gpTelaResultado.add(txtJogada);

        if (resultadoRodada == 0) {
            var txtJogada = game.add.text(game.width / 2, 350, "0", {
                font: "120px Secular One",
                fill: "#7b4318"
            });
            txtJogada.x -= (txtJogada.width / 2);
            gpTelaResultado.add(txtJogada);
        } else {

            imgHercules.animations.add('hercules', [37, 38, 39, 40, 41, 42, 43, 33], 15, false);
            imgHercules.animations.play('hercules');

            var animacao = game.add.tween(gpResultadoPalito).to({y: +100}, 500, "Linear", true);


            var txtIgual = game.add.text(game.width / 2, 350, "=", {
                font: "50px Secular One",
                fill: "#7b4318"
            });
            txtIgual.x -= (txtIgual.width / 2);
            gpTelaResultado.add(txtIgual);

            var sx = (game.width / 2) + 30;
            for (var s = 0; s < resultadoRodada; s++) {
                var picole = game.add.sprite(sx, 320, 'sorvete');
                picole.scale.setTo(0.70, 0.70);
                picole.rodada = rodadaResta;
                picole.frame = rodadaResta;
                picole.acumulado = false;
                gpResultadoPicole.add(picole);
                sx += 38;
            }
        }
        imgHercules.animations.add('hercules', [15, 16, , 17, 18, 19, 20, 21, 20, 19, 18, 17, 16], 8, true);
        imgHercules.animations.play('hercules');

        imgHercules.inputEnabled = true;
        // imgHercules.events.onInputOver.add(function () {
        //     if (efeitoSom) {
        //         efeitoSom.destroy();
        //     }
        //     efeitoSom = game.add.audio('aplausos');
        //     efeitoSom.play();
        // }, this);


    }, acumularPicole: function () {
        stageJogoRestaMais.moverPicoleResultado(0, 1);

    }, moverPicoleResultado: function (p, numero) {
        if (resultadoRodada == 0) {
            if (jogador == 1) {
                poXResultado[jogador] += 27;
            } else {
                poXResultado[jogador] -= 27;
            }
        }
        if (p <= (gpResultadoPicole.children.length - 1)) {
            var obj = gpResultadoPicole.children[p];
            if (obj.acumulado == false) {
                obj.acumulado = true;
                var ppX = poXResultado[jogador];
                if (jogador == 1) {
                    gpResultadoJogador1.add(obj);
                    game.add.tween(obj).to({x: ppX}, 1000, "Linear", true);
                    poXResultado[jogador] += 24;
                } else {
                    gpResultadoJogador2.add(obj);
                    game.add.tween(obj).to({x: ppX}, 1000, "Linear", true);
                    poXResultado[jogador] -= 24;
                }

                game.add.tween(gpResultadoPalito.children[(numero - 1)]).to({alpha: 0}, 1000, "Linear", true);
                game.add.tween(obj.scale).to({x: 0.40, y: 0.40}, 1000, "Linear", true);
                var animacao = game.add.tween(obj).to({y: 10}, 1000, "Linear", true);

                animacao.onComplete.add(function () {
                    stageJogoRestaMais.moverPicoleResultado(p, (numero + 1));
                }, this);

            } else {
                stageJogoRestaMais.moverPicoleResultado(p + 1, numero);
            }

        } else {
            game.add.tween(gpTelaResultado).to({alpha: 0}, 500, "Linear", true);
            if (rodadaResta == nJogadas && nJogadores == jogador) {
                etapaJogo = 13;
            } else {
                etapaJogo = 14;
                // stageJogoRestaMais.proximaRodada();
            }
        }
    }, resultadoFinal: function () {
        imgHercules.visible = 0;
        imgJilo.visible = 0;
        if (audio) {
            audio.destroy();
        }
        audio = game.add.audio('legalGanhou');
        audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }
        audio.onStop.add(function () {
            btnAvacar.animations.play('avancar', 2, true);
        });

        etapaJogo = 12;
        if (gpTelaResultado) {
            gpTelaResultado.destroy();
        }
        gpTelaResultadoFinal = game.add.group();

        posYJogadao = 150;
        for (var j = 1; j <= nJogadas; j++) {


            var graphics = game.add.graphics(0, 0);
            graphics.beginFill(0x2E3192, .2);
            graphics.drawRect(100, (posYJogadao - 20), 1000, 90);
            gpTelaResultadoFinal.add(graphics);


            var txtJogada = game.add.text((game.width / 2), posYJogadao, "Jogada " + j, {
                font: "40px Secular One",
                fill: "#7b4318"
            });
            txtJogada.x -= (txtJogada.width / 2);

            gpTelaResultadoFinal.add(txtJogada);
            var sxa = 1;
            gpResultadoJogador1.forEach(function (sorvete) {
                if (sorvete.rodada == j) {
                    game.add.tween(sorvete).to({y: posYJogadao - 20}, 500, "Linear", true);
                    game.add.tween(sorvete).to({x: 200 + (sxa * 35)}, 500, "Linear", true);
                    game.add.tween(sorvete.scale).to({x: .6, y: .6}, 500, "Linear", true);
                    sxa++;
                }

            })
            if (nJogadores == 2) {
                var sxb = 1;
                gpResultadoJogador2.forEach(function (sorvete) {
                    if (sorvete.rodada == j) {
                        game.add.tween(sorvete).to({y: posYJogadao - 20}, 500, "Linear", true);
                        game.add.tween(sorvete).to({x: 1000 - (sxb * 32)}, 500, "Linear", true);
                        game.add.tween(sorvete.scale).to({x: .6, y: .6}, 500, "Linear", true);
                        sxb++;
                    }

                })
            }
            posYJogadao += 110;
        }

    }, proximaRodada: function () {

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

        if (txtRodada) {
            txtRodada.visible = 1;
        }
        btnAvacar.animations.play('avancar', 2, true);

        imgHercules.animations.stop();
        imgCarrinhoSorvete.alpha = 1;
        if (gpAjudaPalito) {
            gpAjudaPalito.destroy()
        }
        if (gpJogada) {
            gpJogada.destroy()
        }
        if (nJogadores == 2) {
            if (jogador == 2) {
                jogador = 1;
                rodadaResta++;

                txtRodada.text = "Jogada " + rodadaResta;
            } else {
                jogador = 2;
            }
        } else {
            rodadaResta++;
            txtRodada.text = "Jogada " + rodadaResta;
        }

        if (gpTelaResultado) {
            gpTelaResultado.destroy();
        }
        etapaJogo = 1;

        stageJogoRestaMais.criarGrupo();


    }, btVoltar: function () {
        if (etapaJogo != 0) {
            stageJogoRestaMais.modelVoltar();
        } else {
            var stage = new Object();
            stage.nomeEstage = "stageSelecaoJogos";
            mudarState(stage);
        }
    }, proximoNivel: function () {
        gpTelaResultadoFinal.destroy();
        gpResultadoJogador1.destroy();
        if (gpResultadoJogador2) {
            gpResultadoJogador2.destroy();
        }
        if (nivelSelecionado < 1) {
            rodadaResta = 1;
            nivelSelecionado++;
            etapaJogo = 1;
            fundo.frame = nivelSelecionado;
            imgCarrinhoSorvete.visible = 1;
            imgCarrinhoSorvete.alpha = 1;
            poXResultado = [0, 30, 1160];
            gpResultadoJogador1 = game.add.group();
            gpResultadoJogador2 = game.add.group();

            stageJogoRestaMais.inicioJogo();
        } else {
            stageJogoRestaMais.voltarParaInicioJogo();
        }

    }, voltarParaInicioJogo: function () {
        if (gpModalVoltar) {
            gpModalVoltar.destroy();
        }
        etapaJogo = 0;
        rodadaResta = 1;

        imgHercules.visible = 1;
        imgJilo.visible = 1;

        imgCarrinhoSorvete.alpha = 1;
        imgHercules.inputEnabled = false;

        imgHercules.animations.add('hercules', [56, 56, 56, 56, 57, 58, 59, 60, 60, 60, 60, 61, 62, 63, 63, 63, 63, 63, 64, 65, 66, 67, 68, 69], 7, true);
        imgHercules.animations.play('hercules');

        imgCarrinhoSorvete.frame = 0;


        efeitoSom.destroy();
        audio.destroy();
        if (acertou) {
            acertou.destroy();
        }
        if (errou) {
            errou.destroy();
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

        if (gpContagem) {
            gpContagem.destroy();
        }
        if (gpRoleta) {
            gpRoleta.destroy();
        }
        if (herculoesContagem) {
            herculoesContagem.destroy();
        }
        if (gpJogada) {
            gpJogada.destroy();
        }
        if (gpAjudaPalito) {
            gpAjudaPalito.destroy();
        }
        if (gpLiga) {
            gpLiga.destroy();
        }
        if (gpResultado) {
            gpResultado.destroy();
        }
        if (gpTelaResultado) {
            gpTelaResultado.destroy();
        }
        if (gpResultadoPicole) {
            gpResultadoPicole.destroy();
        }
        if (gpResultadoPalito) {
            gpResultadoPalito.destroy();
        }
        if (gpAmarados) {
            gpAmarados.destroy();
        }
        if (gpTelaResultadoFinal) {
            gpTelaResultadoFinal.destroy();
        }
        if (gpResultadoJogador1) {
            gpResultadoJogador1.destroy();
        }
        if (gpResultadoJogador2) {
            gpResultadoJogador2.destroy();
        }
        if (gpObj) {
            gpObj.destroy();
        }
        if (gpObj) {
            gpObj.destroy();
        }
        if (gpAjudaPalito) {
            gpAjudaPalito.destroy();
        }
        for (var g = 0; g < gpSorvete.length; g++) {
            gpSorvete.destroy(g, true);
        }
        gpResultadoJogador1 = game.add.group();
        gpResultadoJogador2 = game.add.group();

        fundo.frame = 0;
        poXResultado = [0, 30, 1160];
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

        cb1.state = false;
        cb2.state = false;
        cb1.show();
        cb2.show();

        gpInputJogaodor1.visible = 0;
        gpInputJogaodor2.visible = 0;
        cb1.checked = false;
        cb2.checked = false;
        imp_user1.setText('');
        imp_user2.setText('');
        if (txtRodada) {
            txtRodada.destroy();
        }
        btnVoltar.visible = 1;
        btnImprimir.visible = 1;
        btnSon.visible = 1;
        btnComo.visible = 1;
        btnAvacar.visible = 1;

    }, comoJogar: function () {
        cb1.hide();
        cb2.hide();
        btnVoltar.visible = 0;
        btnImprimir.visible = 0;
        btnSon.visible = 0;
        btnComo.visible = 0;
        btnAvacar.visible = 0;
        gpContagem.visible = 0;
        if (gpComoJogarResta) {
            gpComoJogarResta.destroy();
        }

        gpComoJogarResta = game.add.group();
        gpComoJogarResta.visible = 1;
        if (efeitoSom) {
            efeitoSom.destroy();
        }
        if (audio) {
            audio.destroy();
        }
        // var gpNivel = game.add.group();
        fundo = game.add.sprite(0, 0, 'fundoComo');
        gpComoJogarResta.add(fundo);


        var btnVoltarComoResta = game.add.button(10, 675, 'icoVoltar', stageJogoRestaMais.fecharComo, game, 1, 0, 0);
        btnVoltarComoResta.nomeEstage = "stageJogoRestaMais";
        btnVoltarComoResta.input.useHandCursor = true;
        btnVoltarComoResta.scale.setTo(.8, .8);
        gpComoJogarResta.add(btnVoltarComoResta);


    }, fecharComo: function () {
        btnComo.frame = 0;
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

        gpComoJogarResta.destroy();
        gpComoJogarResta.visible = 0;
        btnVoltar.visible = 1;
        btnImprimir.visible = 1;
        btnSon.visible = 1;
        btnComo.visible = 1;
        btnAvacar.visible = 1;
        gpContagem.visible = 1;

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

        if (gpContagem) {
            gpContagem.visible = 0;
        }
        if (gpAjudaPalito) {
            gpAjudaPalito.visible = 0;
        }
        if (gpJogada) {
            gpJogada.visible = 0;
        }
        if (gpAjudaPalito) {
            gpAjudaPalito.visible = 0;
        }
        if (gpLiga) {
            gpLiga.visible = 0;
        }

        gpModalVoltar = game.add.group();
        gpModalVoltar.visible = 1;

        if (gpResultadoJogador1) {
            gpResultadoJogador1.visible = 0;
        }
        if (gpResultadoJogador2) {
            gpResultadoJogador2.visible = 0;
        }

        var fundoVoltar = game.add.sprite(0, 0, 'fundoVoltar');
        gpModalVoltar.add(fundoVoltar);

        var btnSim = game.add.button(680, 150, 'btnSim', stageJogoRestaMais.voltarParaInicioJogo, game, 1, 0, 0);
        btnSim.input.useHandCursor = true;
        btnSim.anchor.x = 0.5;
        gpModalVoltar.add(btnSim);

        var btnNao = game.add.button(1030, 150, 'btnNao', stageJogoRestaMais.fechaModalVoltar, game, 1, 0, 0);
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
        btnComo.frame = 0;
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
        if (gpAjudaPalito) {
            gpAjudaPalito.visible = 1;
        }
        if (gpContagem) {
            gpContagem.visible = 1;
        }
        if (gpJogada) {
            gpJogada.visible = 1;
        }
        if (gpAjudaPalito) {
            gpAjudaPalito.visible = 1;
        }
        if (gpLiga) {
            gpLiga.visible = 1;
        }
        gpModalVoltar.destroy();
        gpModalVoltar.visible = 0;
        btnVoltar.visible = 1;
        btnImprimir.visible = 1;
        btnSon.visible = 1;
        btnComo.visible = 1;
        btnAvacar.visible = 1;
        gpContagem.visible = 1;


    }
}