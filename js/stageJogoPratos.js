var n;
var fundo;
var tituloJogo;
var imgInicial;
var etapaJogo;
var hercoInicial;
var jiloInicial;
var nivelSelecionado;
var osoY;
var opa;
var muitoBem;
var flgItensExiste = false;
var inicialPosX = 180;
var inicialPosY = 130;
var posX = 50;
var posY = 100;
var balao;
var pratoSorteadoD;
var maoSorteadaD;
var flgVoltar = 0;
var osoYInicial = 180;
var distanciaW = 135;
var distanciaH = 140;
var maxW = 1000;
var arrNumeroPratos = [5, 5, 10];
var arrItems = [];
var arrNivelInicial = [0, 5, 0];
var arrNivel = [5, 10, 10];
var arrNumeroObj = [10, 15, 10];
var itemCorreto;
var arrImgItem = ['prato0', 'prato1', 'prato2', 'prato3', 'prato4', 'prato5', 'prato6', 'prato7', 'prato8', 'prato9', 'prato10'];
var textoNumero = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
var arrEscala = [1.2, 1.2, 1.2];
var arrEscalaDisplay = [1, 1, 0.8];
var arrResultado = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var bandeja;
var text;
var fundoLoad;
var logoLoad;
var arrPratos = [[
    {'n': 1, 'x': 66, 'y': 477, 'tx': 157, 'ty': 437, 'nx': 125, 'ny': 414},
    {'n': 2, 'x': 210, 'y': 300, 'tx': 287, 'ty': 265, 'nx': 230, 'ny': 248},
    {'n': 3, 'x': 475, 'y': 200, 'tx': 550, 'ty': 160, 'nx': 500, 'ny': 150},
    {'n': 4, 'x': 710, 'y': 300, 'tx': 887, 'ty': 265, 'nx': 815, 'ny': 248},
    {'n': 5, 'x': 890, 'y': 477, 'tx': 1020, 'ty': 437, 'nx': 960, 'ny': 414},
    {'n': 0, 'x': 475, 'y': 447, 'tx': 575, 'ty': 410, 'nx': 510, 'ny': 390},
], [
    {'n': 5, 'x': 66, 'y': 477, 'tx': 157, 'ty': 437, 'nx': 95, 'ny': 420},
    {'n': 6, 'x': 210, 'y': 300, 'tx': 287, 'ty': 265, 'nx': 235, 'ny': 248},
    {'n': 7, 'x': 475, 'y': 200, 'tx': 550, 'ty': 160, 'nx': 500, 'ny': 150},
    {'n': 8, 'x': 710, 'y': 300, 'tx': 860, 'ty': 265, 'nx': 800, 'ny': 248},
    {'n': 9, 'x': 890, 'y': 477, 'tx': 1020, 'ty': 437, 'nx': 960, 'ny': 420},
    {'n': 10, 'x': 475, 'y': 447, 'tx': 575, 'ty': 410, 'nx': 510, 'ny': 390},
], [
    {'n': 0, 'x': 50, 'y': 180, 'tx': 70, 'ty': 130, 'nx': 150, 'ny': 120},
    {'n': 1, 'x': 270, 'y': 180, 'tx': 290, 'ty': 130, 'nx': 370, 'ny': 120},
    {'n': 2, 'x': 490, 'y': 180, 'tx': 510, 'ty': 130, 'nx': 590, 'ny': 120},
    {'n': 3, 'x': 710, 'y': 180, 'tx': 710, 'ty': 130, 'nx': 800, 'ny': 120},
    {'n': 4, 'x': 930, 'y': 180, 'tx': 930, 'ty': 130, 'nx': 1030, 'ny': 120},
    {'n': 5, 'x': 50, 'y': 350, 'tx': 40, 'ty': 310, 'nx': 130, 'ny': 300},
    {'n': 6, 'x': 270, 'y': 350, 'tx': 290, 'ty': 310, 'nx': 370, 'ny': 300},
    {'n': 7, 'x': 490, 'y': 350, 'tx': 510, 'ty': 310, 'nx': 590, 'ny': 300},
    {'n': 8, 'x': 710, 'y': 350, 'tx': 720, 'ty': 310, 'nx': 800, 'ny': 300},
    {'n': 9, 'x': 930, 'y': 350, 'tx': 940, 'ty': 310, 'nx': 1030, 'ny': 300},
    {'n': 10, 'x': 50, 'y': 540, 'tx': 50, 'ty': 500, 'nx': 150, 'ny': 490},
]];
// var arrPositivo = ['acertou', 'continue', 'exelente', 'isso', 'muito_bem', 'parabens', 'caminho', 'otimo'];
var arrPositivo = ['muito_bem', 'acertou'];
// var arrNegativo = ['errou', 'tente', 'desta_vez', 'na_proxima', 'novamente', 'xii'];
var arrNegativo = ['xii', 'novamente'];


var osoGanhos;
var pratoGrid = 0;
var qtdCorretos = 0;
var selCorreto = 0;
var nCorretos = 0;
var nSelecionados = 0;
var cb1, cb2;
var imp_user1, imp_user2;
var nJogadasPratos = 6;
var rodadaPrato = 1;
var tempoAnimacao = [500, 2000, 800];

var gpInicial;
var gpMostarNumeros;
var gpSorteado;
var gpBotoes;
var gpInputJogaodor1, gpInputJogaodor2;
var gpSelecao;
var gpJogo;
var gpNivel;
var gpHeculesSorteio;
var gpOso;
var gpResultadoParcial;
var gpResultadoFinal;
var gpComoJogar;
var gpPratos;
var grid;
var gpModalVoltar;

var txtNome1, txtNome2;
var btNivel1, btNivel2, btNivel3;
var btnAvacar, btnComo, btnSon, btnVoltar, btnImprimir;
var btnAudio;
var nomeJogador1, nomeJogador2;

var jogador;

//Como Jogar
var obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11;
var n = 0;

var stageJogoPratos = {

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

        stageJogoPratos.start();


    }, start: function () {

        game.load.spritesheet('fundoPratos', 'assets/jogoPratos/fundo.png', 1200, 800);
        game.load.image('tituloPratos', 'assets/jogoPratos/titulo_pratos.svg');
        game.load.image('herJiloInicial', 'assets/jogoPratos/hercules_inicial.png');
        game.load.spritesheet('numerosTxt', 'assets/jogoPratos/numeroTexto.svg', 120, 43);
        game.load.spritesheet('numeros', 'assets/jogoPratos/numeros.svg', 72, 55.8);
        game.load.spritesheet('pratosSelecao', 'assets/jogoPratos/pratosSelecao.png', 249.50, 153);
        game.load.spritesheet('maos', 'assets/jogoPratos/maos.png', 370, 380);
        game.load.spritesheet('herculesContagem', 'assets/geral/hercu_contagem.png', 401.65, 587.5);

        game.load.image('oso', 'assets/jogoPratos/oso.png');
        game.load.spritesheet('prato0', 'assets/jogoPratos/prato0.png', 148.70, 150.80);
        game.load.spritesheet('prato1', 'assets/jogoPratos/prato1.png', 148.70, 150.80);
        game.load.spritesheet('prato2', 'assets/jogoPratos/prato2.png', 148.70, 150.80);
        game.load.spritesheet('prato3', 'assets/jogoPratos/prato3.png', 148.70, 150.80);
        game.load.spritesheet('prato4', 'assets/jogoPratos/prato4.png', 148.70, 150.80);
        game.load.spritesheet('prato5', 'assets/jogoPratos/prato5.png', 148.70, 150.80);
        game.load.spritesheet('prato6', 'assets/jogoPratos/prato6.png', 148.70, 150.80);
        game.load.spritesheet('prato7', 'assets/jogoPratos/prato7.png', 148.70, 150.80);
        game.load.spritesheet('prato8', 'assets/jogoPratos/prato8.png', 148.70, 150.80);
        game.load.spritesheet('prato9', 'assets/jogoPratos/prato9.png', 148.70, 150.80);
        game.load.spritesheet('prato10', 'assets/jogoPratos/prato10.png', 148.70, 150.80);
        game.load.spritesheet('notaAmarela', 'assets/jogoPratos/nota_amarela.png', 99, 77);
        game.load.spritesheet('notaAzul', 'assets/jogoPratos/nota_azul.png', 99, 77);
        game.load.spritesheet('notaVermelho', 'assets/jogoPratos/nota_vermelha.png', 99, 77);
        game.load.spritesheet('bandejaVermelha', 'assets/jogoPratos/bandeja_vermelha.png', 173.85, 171.15);
        game.load.spritesheet('bandejaAzul', 'assets/jogoPratos/bandeja_azul.png', 173.85, 171.15);
        game.load.spritesheet('resultadoParcialAzul', 'assets/jogoPratos/resultado_parcial_azul.png', 674.7, 457);
        game.load.spritesheet('resultadoParcialVermelho', 'assets/jogoPratos/resultado_parcial_vermelho.png', 674.7, 457);
        game.load.spritesheet('resultadoFinalAzul', 'assets/jogoPratos/resultado_final_azul.png', 460, 600);
        game.load.spritesheet('resultadoFinalVermelho', 'assets/jogoPratos/resultado_final_vermelho.png', 460, 600);
        game.load.spritesheet('numeros', 'assets/jogoPratos/numeros.png', 125, 137.55);
        game.load.spritesheet('numerosVermelho', 'assets/jogoPratos/numeros_vermelho.png', 140, 140);
        game.load.spritesheet('numerosAzul', 'assets/jogoPratos/numeros_azul.png', 140, 140);

        game.load.spritesheet('muitoBem', 'assets/jogoPratos/muito_bem.png', 130, 89);
        game.load.spritesheet('opa', 'assets/jogoPratos/opa.png', 130, 89);
        game.load.image('ola', 'assets/jogoPratos/ola.png');


        game.load.audio('musicaPratinho', ['son/trilha/pratinho/jogo_pratinhos.mp3']);
        game.load.audio('escolhaNivel', ['son/pratos/escolha_nivel.mp3']);
        game.load.audio('explicacaoNivelPratos1', ['son/pratos/nivel_1.mp3']);
        game.load.audio('explicacaoNivelPratos2', ['son/pratos/nivel_2.mp3']);
        game.load.audio('explicacaoNivelPratos3', ['son/pratos/nivel_3.mp3']);


        game.load.audio('explicacao', ['son/pratos/explicacao_jogo.mp3']);
        game.load.audio('encontra0', ['son/pratos/encontra_0.mp3']);
        game.load.audio('encontra1', ['son/pratos/encontra_1.mp3']);
        game.load.audio('encontra2', ['son/pratos/encontra_2.mp3']);
        game.load.audio('encontra3', ['son/pratos/encontra_3.mp3']);
        game.load.audio('encontra4', ['son/pratos/encontra_4.mp3']);
        game.load.audio('encontra5', ['son/pratos/encontra_5.mp3']);
        game.load.audio('encontra6', ['son/pratos/encontra_6.mp3']);
        game.load.audio('encontra7', ['son/pratos/encontra_7.mp3']);
        game.load.audio('encontra8', ['son/pratos/encontra_8.mp3']);
        game.load.audio('encontra9', ['son/pratos/encontra_9.mp3']);
        game.load.audio('encontra10', ['son/pratos/encontra_10.mp3']);
        game.load.audio('contarCorretoJilo', ['son/pratos/contar_correto_jilo.mp3']);
        game.load.audio('quantosOso', ['son/pratos/quanto_osos.mp3']);
        game.load.audio('legalOsoganho', ['son/pratos/legal_oso_ganho.mp3']);

        game.load.audio('osoCaindo', ['son/pratos/oso_caindo.mp3']);


        //Loda como Jogar
        game.load.image('fundoComoPrat', 'assets/comoPratos/fundo_como_pratos.png');

        stageJogoPratos.load.start();


    }, comecoJogo: function () {
        rodadaPrato = 1;
        stageJogoPratos.sonInicial();

        etapaJogo = 0;

        fundo = game.add.sprite(0, 0, 'fundoPratos');
        fundo.scale.setTo(1, 1);
        fundo.frame = 0;


        icoMusica = game.add.button(1100, 705, 'icoMusica', alterarMusica, game, 1, 0, 0);
        icoMusica.scale.setTo(.80, .80);
        icoMusica.onInputOver.add(function () {
            icoMusica.alpha = 0.8;
        });
        icoMusica.onInputOut.add(function () {
            if (musica.paused) {
                icoMusica.alpha = 0.6;
            } else {
                icoMusica.alpha = 1;
            }

        });

        if (musica) {
            musica.destroy()
        }
        musica = game.add.audio('musicaPratinho');
        musica.loopFull(1);
        musica.volume = 1;
        musica.play();

        tituloJogo = game.add.sprite(game.width / 2 - 264, 25, 'tituloPratos');

        gpInicial = game.add.group();

        hercoInicial = game.add.sprite(650, 182, 'herJiloInicial');
        gpInicial.add(hercoInicial);
        hercoInicial.inputEnabled = true;
        hercoInicial.events.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
        }, this);

        jiloInicial = game.add.sprite(880, 394, 'jiloAnim');
        jiloInicial.scale.setTo(.75, .75);
        jiloInicial.animations.add('jilo');
        jiloInicial.animations.play('jilo', 6, true);
        gpInicial.add(jiloInicial);


        var tijela = game.add.sprite(650, 520, 'tijela');
        gpInicial.add(tijela);

        jiloInicial.inputEnabled = true;
        jiloInicial.events.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('arfando');
            efeitoSom.play();
        }, this);

        grid = game.add.group();
        gpHeculesSorteio = game.add.group();
        gpResultadoParcial = game.add.group();
        gpResultadoFinal = game.add.group();
        gpSelecao = game.add.group();
        gpBotoes = game.add.group();
        gpInputJogaodor1 = game.add.group();
        gpInputJogaodor2 = game.add.group();
        gpNivel = game.add.group();
        gpPratos = game.add.group();
        gpJogo = game.add.group();
        gpSorteado = game.add.group();


        btnVoltar = game.add.button(10, 655, 'icoVoltar', stageJogoPratos.btVoltar, game, 1, 0, 0);
        btnVoltar.input.useHandCursor = true;
        btnVoltar.scale.setTo(.8, .8);
        gpBotoes.add(btnVoltar);
        //
        btnImprimir = game.add.button(130, 655, 'icoImprimir', imprimir, game, 1, 0, 0);
        btnImprimir.input.useHandCursor = true;
        btnImprimir.url = 'pdf/pratinhos/ficha.pdf'
        btnImprimir.scale.setTo(.8, .8);
        gpBotoes.add(btnImprimir);

        btnSon = game.add.button(270, 655, 'icoSon', stageJogoPratos.repetirInstrucao, game, 1, 0, 0);
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

        btnComo = game.add.button(390, 655, 'icoAjuda', stageJogoPratos.comoJogar, game, 1, 0, 0);
        btnComo.nomeEstage = "stagePratosComo";
        btnComo.input.useHandCursor = true;
        btnComo.scale.setTo(.8, .8);
        gpBotoes.add(btnComo);

        btnAvacar = game.add.button(505, 655, 'icoAvancar', stageJogoPratos.avancarJogo, game, 1, 0, 0);
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

        btNivel1 = game.add.button(100, 428, 'iconivel', this.escolheNivel, game, 0, 0, 3);
        btNivel1.nivel = 0;
        gpNivel.add(btNivel1);
        btNivel1.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('nivel1');
            efeitoSom.play();
        });

        btNivel2 = game.add.button(222, 428, 'iconivel', this.escolheNivel, game, 1, 1, 4);
        btNivel2.nivel = 1;
        gpNivel.add(btNivel2);

        btNivel2.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('nivel2');
            efeitoSom.play();
        });

        btNivel3 = game.add.button(340, 428, 'iconivel', this.escolheNivel, game, 2, 2, 5);
        btNivel3.nivel = 2;
        gpNivel.add(btNivel3);
        gpNivel.visible = 0;
        btNivel3.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('nivel3');
            efeitoSom.play();
        });


        gpInputJogaodor1 = game.add.group();
        txtNome1 = game.add.text(200, 205, "Jogador 1", {font: "30px Myriad Pro", fill: "#7b4318"});
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
            font: "30px Myriad Pro",
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

    }, update: function () {
        // if (this.game.input.mousePointer.x != posX || posY != this.game.input.mousePointer.y) {
        //     console.log("X " + ((this.game.input.mousePointer.x) ) + "- Y " + ((this.game.input.mousePointer.y)));
        // }
        // posX = this.game.input.mousePointer.x;
        // posY = this.game.input.mousePointer.y;

        if (selCorreto == qtdCorretos && etapaJogo == 4) {
            etapaJogo = 5;
            stageJogoPratos.mostarSelecaoCorreta();
        }
    }, sonInicial: function () {
        if (efeitoSom) {
            efeitoSom.destroy();
        }
        if (audio) {
            audio.destroy();
        }

        audio = game.add.audio('escolhaJogadores');
        audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }
    }, escolheNivel: function (item) {
        nivelSelecionado = item.nivel;
        btNivel1.alpha = 1;
        btNivel2.alpha = 1;
        btNivel3.alpha = 1;

        btNivel1.setFrames(3, 0, 0);
        btNivel2.setFrames(4, 1, 1);
        btNivel3.setFrames(5, 2, 2);
        item.alpha = 0.7;
        audio.destroy();
        // console.log("nivelSelecionado " + nivelSelecionado);
        if (nivelSelecionado == 0) {
            audio = game.add.audio('explicacaoNivelPratos1');
            btNivel1.setFrames(3);
        } else if (nivelSelecionado == 1) {
            audio = game.add.audio('explicacaoNivelPratos2');
            btNivel2.setFrames(4);
        } else if (nivelSelecionado == 2) {
            audio = game.add.audio('explicacaoNivelPratos3');
            btNivel3.setFrames(5);
        }
        audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }
        btnAvacar.animations.play('avancar', 2, true);
    }, avancarJogo: function () {
        if (audio) {
            audio.destroy();
        }
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
                        stageJogoPratos.mostarNumeros();
                    } else {
                        if (gpNivel.visible == 0) {
                            gpNivel.visible = 1;
                            if (audio) {
                                audio.destroy();
                            }
                            audio = game.add.audio('escolhaNivel')
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

                    sonAlerta = game.add.audio('alertaNomeJogador');
                    sonAlerta.play();
                }
            } else {
                alert('Seleciona a quantidade de jogadores', "Alerta");

                sonAlerta = game.add.audio('alertaQtdJogador');
                sonAlerta.play();
            }
        } else if (etapaJogo == 1) {
            tempoAnimacao = [0, 0, 0];
            etapaJogo = 1.5;
            stageJogoPratos.animarPrato();
        } else if (etapaJogo == 1.5) {
            tempoAnimacao = [500, 2000, 800];
            etapaJogo = 2;
            gpMostarNumeros.destroy();
            stageJogoPratos.inicioJogoPrato();

        } else if (etapaJogo == 2) {
            etapaJogo = 3;
            imgInicial.destroy();
            stageJogoPratos.sorteio();
        } else if (etapaJogo == 3) {
            etapaJogo = 4;
            var obj = Object();
            obj.nivel = nivelSelecionado;
            obj.itemCorreto = itemCorreto;

            stageJogoPratos.geraAlternativas(obj);
        } else if (etapaJogo == 6) {
            stageJogoPratos.avalicaoPratos();

        } else if (etapaJogo == 8) {
            stageJogoPratos.proximoNivel()

        }
    }, inicioJogoPrato: function () {
        audio = game.add.audio('explicacao');
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

    }, mostarNumeros: function () {
        fundo.frame = nivelSelecionado;
        gpMostarNumeros = game.add.group();
        gpSelecao.visible = 0;
        gpNivel.visible = 0;
        gpInicial.visible = 0;
        gpInputJogaodor1.visible = 0;
        gpInputJogaodor2.visible = 0;
        pratoGrid = 0;
        gpSelecao.visible = 0;
        cb1.hide();
        cb2.hide();

        nomeJogador1 = game.add.group();
        nomeJogador1.x = 40;
        nomeJogador1.y = 80;

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
            // fundoJogador2.drawRect(-5, -5, txtNomeJogador2.width + 5, 40);
            fundoJogador2.lineStyle(1, 0x603813, 1);
            fundoJogador2.moveTo(-5, -5);
            fundoJogador2.lineTo(txtNomeJogador2.width + 5, -5);
            fundoJogador2.lineTo(txtNomeJogador2.width + 5, 40);
            fundoJogador2.lineTo(-5, 40);
            nomeJogador2.add(fundoJogador2);

            nomeJogador2.add(txtNomeJogador2);
            nomeJogador2.x = px;
            nomeJogador2.y = 80;
            nomeJogador2.visible = 0;
        }

        var imgJilo = game.add.sprite(760, 520, 'jilo');
        imgJilo.scale.setTo(0.8, 0.8);
        imgJilo.animations.add('jilo');
        imgJilo.animations.play('jilo', 5, true);
        gpMostarNumeros.add(imgJilo);
        imgJilo.inputEnabled = true;
        imgJilo.events.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            if (etapaJogo == 0) {
                efeitoSom = game.add.audio('latido');
                efeitoSom.play();
            }
        }, this);


        var ola = game.add.sprite(680, 620, 'ola');
        gpMostarNumeros.add(ola);


        stageJogoPratos.animarPrato();

    }, animarPrato: function () {

        audio.destroy();
        if (tempoAnimacao[0] != 0 && (gpComoJogar == undefined || gpComoJogar.visible == 0)) {
            audio = game.add.audio('numero' + arrPratos[nivelSelecionado][pratoGrid]['n']);
            audio.play();
            if (flgAudio == false) {
                audio.volume = 0;
            }
        }

        // mostra a animacao dos numero antes de comecar a rodada
        var gp = game.add.group();
        var bt = game.add.button(
            arrPratos[nivelSelecionado][pratoGrid]['x'],
            arrPratos[nivelSelecionado][pratoGrid]['y'], 'pratosSelecao', stageJogoPratos.repetirNumero, game,
            arrPratos[nivelSelecionado][pratoGrid]['n'],
            arrPratos[nivelSelecionado][pratoGrid]['n'],
            arrPratos[nivelSelecionado][pratoGrid]['n']
        );
        bt.scale.setTo(arrEscalaDisplay[nivelSelecionado], arrEscalaDisplay[nivelSelecionado]);
        bt.alpha = 0;
        bt.numero = arrPratos[nivelSelecionado][pratoGrid]['n'];
        game.add.tween(bt).to({alpha: 1}, tempoAnimacao[0], "Linear", true);
        gp.add(bt);

        var numeroTexto = game.add.sprite(arrPratos[nivelSelecionado][pratoGrid]['tx'], arrPratos[nivelSelecionado][pratoGrid]['ty'], 'numerosTxt');
        numeroTexto.alpha = 0;
        gp.add(numeroTexto);
        numeroTexto.frame = arrPratos[nivelSelecionado][pratoGrid]['n'];
        game.add.tween(numeroTexto).to({alpha: 1}, tempoAnimacao[1], "Linear", true);


        var numero = game.add.sprite(arrPratos[nivelSelecionado][pratoGrid]['nx'], arrPratos[nivelSelecionado][pratoGrid]['ny'], 'numeros');
        numero.alpha = -100;
        numero.scale.setTo(1.3, 1.3);
        numero.frame = arrPratos[nivelSelecionado][pratoGrid]['n'];
        gp.add(numero);
        var animacao = game.add.tween(numero).to({alpha: 1}, tempoAnimacao[1], "Linear", true);
        gpMostarNumeros.add(gp);

        animacao.onComplete.add(stageJogoPratos.escondeTextoNumero, this);

        if (pratoGrid < arrNumeroPratos[nivelSelecionado]) {
            pratoGrid++;
            animacao.onComplete.add(stageJogoPratos.animarPrato, this);
        } else {
            btnAvacar.animations.play('avancar', 2, true);
            etapaJogo = 1.5;
        }

    }, escondeTextoNumero: function (obj) {
        var numeroTextoEsconde = game.add.tween(obj.parent.children[1]).to({alpha: 0}, tempoAnimacao[2], Phaser.Easing.Linear.None, true);
        numeroTextoEsconde.onComplete.add(stageJogoPratos.destruirItem, this);
    }, repetirNumero: function (obj) {

        audio = game.add.audio('numero' + obj.numero);
        audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }

        var bt = obj.parent.children[0];
        bt.alpha = 0;
        game.add.tween(bt).to({alpha: 1}, 500, "Linear", true);

        var numero = obj.parent.children[1];
        numero.alpha = 0;
        game.add.tween(numero).to({alpha: 1}, 2000, "Linear", true);


    }, sorteio: function () {
        btnAvacar.animations.stop();
        btnAvacar.frame = 0;
        gpHeculesSorteio.destroy();
        gpSorteado = game.add.group();
        posX = 50;
        posY = 100;
        qtdCorretos = 0;
        flgItensExiste = false;

        gpJogo.destroy();
        gpJogo = game.add.group();
        arrItems = [];
        itemCorreto = game.rnd.integerInRange(arrNivelInicial[nivelSelecionado], arrNivel[nivelSelecionado]);

        audio = game.add.audio('encontra' + itemCorreto);
        audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }
        audio.onStop.add(function () {
            btnAvacar.animations.play('avancar', 2, true);
        })


        if (itemCorreto > 1) {
            var txtSorteado = game.add.text(0, 150, nomeJogadores[jogador] + " ache todos os pratinhos com " + itemCorreto + " brigadeiros.", {
                font: "30px Secular One", fill: "#7A5630"
            });
        } else {
            var txtSorteado = game.add.text(0, 150, nomeJogadores[jogador] + " ache todos os pratinhos com " + itemCorreto + " brigadeiro.", {
                font: "30px Secular One", fill: "#7A5630"
            });
        }

        var cor;
        if (jogador == 1) {
            cor = "#FF0000";
        } else {
            cor = "#056ABA";
        }
        txtSorteado.addColor(cor, 0);
        txtSorteado.addColor('#7A5630', nomeJogadores[jogador].length);
        txtSorteado.addColor(cor, 29 + nomeJogadores[jogador].length);
        txtSorteado.addColor('#7A5630', nomeJogadores[jogador].length + 29 + 1);

        txtSorteado.x = (game.width / 2) - (txtSorteado.width / 2);
        gpSorteado.add(txtSorteado);

        var maoSorteada = game.add.button(game.width / 2 - 195, 200, 'maos', stageJogoPratos.geraAlternativas, game);
        maoSorteada.itemCorreto = itemCorreto;
        maoSorteada.nivel = nivelSelecionado;
        maoSorteada.input.useHandCursor = true;
        maoSorteada.frame = itemCorreto;
        maoSorteada.events.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('risada');
            efeitoSom.play();
        }, this);

        var pratoSorteado = game.add.button(game.width / 2 - 125, 470, 'pratosSelecao', stageJogoPratos.geraAlternativas, game);
        pratoSorteado.itemCorreto = itemCorreto;
        pratoSorteado.nivel = nivelSelecionado;
        pratoSorteado.input.useHandCursor = true;
        pratoSorteado.frame = itemCorreto;
        gpSorteado.add(maoSorteada);
        gpSorteado.add(pratoSorteado);

    },
    geraAlternativas: function (item) {
        gpSorteado.destroy();
        nCorretos = 0;
        nSelecionados = 0;
        qtdCorretos = 0;
        arrItems = [];
        for (var i = arrNivelInicial[nivelSelecionado]; i < arrNumeroObj[nivelSelecionado]; i++) {
            var rand = game.rnd.integerInRange(arrNivelInicial[nivelSelecionado], arrNivel[nivelSelecionado]);
            arrItems[i] = rand;
            if (rand == itemCorreto) {
                qtdCorretos++;
                flgItensExiste = true;
            }
        }

        if (flgItensExiste == false) {
            stageJogoPratos.geraAlternativas(item);
        } else {
            stageJogoPratos.montaGrid(item);
        }
    },
    montaGrid: function (item) {
        nomeJogador1.visible = 1;
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
        osoY = osoYInicial
        gpHeculesSorteio = game.add.group();
        selCorreto = 0;
        btnAvacar.visible = 0;
        grid.destroy();
        grid = game.add.group();

        posX = inicialPosX;
        posY = inicialPosY;
        var notaX;
        if (jogador == 1) {
            notaX = 230;
        } else {
            notaX = 870 - (30 * arrNivelInicial[item.nivel]);
        }
        for (var i = arrNivelInicial[item.nivel]; i < arrNumeroObj[item.nivel]; i++) {
            var gpPrato = game.add.group();
            var doce = game.add.button(posX, posY, arrImgItem[arrItems[i]], this.selecaoItem, game);
            doce.inputEnabled = true;
            doce.input.useHandCursor = true;
            doce.valor = arrItems[i];
            doce.selecionado = false;
            var f = game.rnd.integerInRange(0, 5);
            doce.frame = f;
            doce.scale.setTo(arrEscala[item.nivel], arrEscala[item.nivel]);
            gpPrato.add(doce);

            posX = posX + (distanciaW * arrEscala[item.nivel]) + 10;
            if (posX >= maxW) {
                posX = inicialPosX;
                posY = posY + (distanciaH * arrEscala[item.nivel]);
            }
            if (arrItems[i] == itemCorreto) {
                var nota;
                if (jogador == 1) {
                    nota = game.add.sprite(notaX, 470, 'notaVermelho');

                } else {
                    nota = game.add.sprite(notaX, 470, 'notaAzul');
                }
                notaX = notaX + 30;
                nota.scale.setTo(1.1, 1.1);
                nota.frame = itemCorreto;

                gpPrato.add(nota);
            }
            grid.add(gpPrato);
        }
        var txtJogada = game.add.text((game.width / 2), 90, "Jogada " + rodadaPrato, {
            font: "35px Myriad Pro Bold",
            fill: "#7A5630"
        });
        txtJogada.anchor.x = 0.5;

        gpJogo.add(txtJogada);
        gpJogo.add(grid);

        maoSorteadaD = game.add.sprite(game.width / 2 - 158, 475, 'maos');
        maoSorteadaD.scale.setTo(0.8, 0.8);
        maoSorteadaD.frame = itemCorreto;

        pratoSorteadoD = game.add.sprite(game.width / 2 - 100, 680, 'pratosSelecao');
        pratoSorteadoD.scale.setTo(0.8, 0.8);
        pratoSorteadoD.frame = itemCorreto;

        var imgJilo = game.add.sprite(825, 520, 'jilo');
        imgJilo.scale.setTo(0.8, 0.8);
        imgJilo.animations.add('jilo');
        imgJilo.animations.play('jilo', 5, true);
        imgJilo.inputEnabled = true;
        imgJilo.events.onInputOver.add(function () {
            if (efeitoSom) {
                efeitoSom.destroy();
            }
            efeitoSom = game.add.audio('latido');
            efeitoSom.play();
        }, this);

        gpHeculesSorteio.add(maoSorteadaD);
        gpHeculesSorteio.add(pratoSorteadoD);
        gpHeculesSorteio.add(imgJilo);


        if (jogador == 1) {
            bandeja = game.add.sprite(30, 480, 'bandejaVermelha');
        } else {
            bandeja = game.add.sprite(1020, 480, 'bandejaAzul');
        }
        bandeja.frame = 0;
        gpHeculesSorteio.add(bandeja);

        osoGanhos = 0;

        //
    },
    espera: function (obj) {
        var animacao = game.add.tween(obj).to({alpha: 0}, 1400, "Linear", true);
        animacao.onComplete.add(stageJogoPratos.destruirItem, this);
    },
    selecaoItem: function (obj) {
        if (etapaJogo == 3) {
            etapaJogo = 4
        }
        if (etapaJogo == 4) {
            if (obj.selecionado == false) {
                obj.selecionado = true;
                if (obj.valor == itemCorreto) {
                    if (sonAviso) {
                        sonAviso.destroy();
                    }

                    var sorteioSon = game.rnd.integerInRange(0, 1);
                    sonAviso = game.add.audio(arrPositivo[sorteioSon]);
                    sonAviso.play();

                    muitoBem = game.add.sprite(660, 490, 'muitoBem');
                    muitoBem.frame = sorteioSon;
                    muitoBem.alpha = 0;

                    var animacao = game.add.tween(muitoBem).to({alpha: 1}, 1400, "Linear", true);
                    animacao.onComplete.add(stageJogoPratos.espera, this);


                    var nota;
                    var addOso;
                    if (jogador == 1) {
                        nota = game.add.sprite(obj.x + obj.width - 90, obj.y + 100, 'notaVermelho');
                        addOso = game.add.sprite(80, osoY, 'oso');
                    } else {
                        nota = game.add.sprite(obj.x + obj.width - 90, obj.y + 100, 'notaAzul');
                        addOso = game.add.sprite(1070, osoY, 'oso');
                    }
                    selCorreto++;

                    var m = obj.parent.children.length - 1;
                    stageJogoPratos.destruirItem(obj.parent.children[m]);
                    addOso.rotation = 30;
                    osoY = osoY + 30;
                    obj.parent.add(addOso);
                } else {

                    if (sonAviso) {
                        sonAviso.destroy();
                    }
                    var sorteioSon = game.rnd.integerInRange(0, 1);
                    sonAviso = game.add.audio(arrNegativo[sorteioSon]);
                    sonAviso.play();

                    opa = game.add.sprite(730, 540, 'opa');
                    opa.frame = sorteioSon;
                    opa.alpha = 0;
                    var animacao = game.add.tween(opa).to({alpha: 1}, 1400, "Linear", true);
                    animacao.onComplete.add(stageJogoPratos.espera, this);

                    var nota = game.add.sprite(obj.x + obj.width - 90, obj.y + 100, 'notaAmarela');
                }
                nota.frame = obj.valor;
                obj.parent.add(nota);
            }
        } else if (etapaJogo == 5) {
            if (obj.valor == itemCorreto) {
                osoGanhos++;
                maoSorteadaD.frame = osoGanhos;
                // pratoSorteadoD.frame = osoGanhos;
                pratoSorteadoD.visible = 0;

                var addOso;
                if (jogador == 1) {
                    addOso = game.add.sprite(80, osoY, 'oso');
                } else {
                    addOso = game.add.sprite(1070, osoY, 'oso');
                }
                addOso.rotation = 30;
                gpHeculesSorteio.add(addOso);

                var animacao = game.add.tween(addOso).to({y: 600}, 1200, "Linear", true);
                animacao.onComplete.add(stageJogoPratos.mudarOsoBandeja, this);
                animacao.onComplete.add(stageJogoPratos.balaoContagem, this);
                stageJogoPratos.destruirItem(obj.parent);

                if (sonAviso) {
                    sonAviso.destroy();
                }
                sonAviso = game.add.audio("osoCaindo");
                sonAviso.play();
            }
        }

    }, balaoContagem: function () {
        if (balao) {
            balao.destroy();
        }
        if (jogador == 1) {
            balao = game.add.sprite(700, 500, 'balaoVermelho');
        } else if (jogador == 2) {
            balao = game.add.sprite(700, 500, 'balaoAzul');
        }
        balao.alpha = 0;
        balao.frame = osoGanhos;

        audio.destroy();
        audio = game.add.audio('numero' + osoGanhos);
        audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }

        var animacaoOso = game.add.tween(balao).to({alpha: 1}, 1200, "Linear", true);
        if (etapaJogo == 5 && osoGanhos == qtdCorretos) {
            animacaoOso.onComplete.add(stageJogoPratos.resultado, this);
        }

    }, resultado: function (obj) {
        gpJogo.destroy();
        if (etapaJogo == 5 && osoGanhos == qtdCorretos) {
            stageJogoPratos.resultadoParcial(obj);

        }
    }, mudarOsoBandeja: function (obj) {
        bandeja.frame++;
        stageJogoPratos.destruirItem(obj);

    }, mostarSelecaoCorreta: function () {
        audio.destroy();
        audio = game.add.audio('contarCorretoJilo');
        audio.play();
        if (flgAudio == false) {
            audio.volume = 0;
        }

        pratoSorteadoD.visible = 0;
        gpOso = game.add.group();
        grid.forEach(function (item) {
            if (item.children[0].valor != itemCorreto) {
                var animacao = game.add.tween(item).to({alpha: 0}, 500, "Linear", true);
                animacao.onComplete.add(stageJogoPratos.destruirItem, this);
            }
        });
    }, resultadoParcial: function (obj) {
        if (flgVoltar == 0) {
            if (bandeja) {
                bandeja.destroy();
            }
            if (audio) {
                audio.resume();
            }
            audio = game.add.audio('quantosOso');
            audio.play();
            if (flgAudio == false) {
                audio.volume = 0;
            }
            audio.onStop.add(function () {
                btnAvacar.animations.play('avancar', 2, true);
            })

            if (maoSorteadaD) {
                var animacao = game.add.tween(maoSorteadaD).to({alpha: 0}, 200, "Linear", true);
            }
            btnAvacar.alpha = 0
            btnAvacar.visible = 1;
            var animacao = game.add.tween(btnAvacar).to({alpha: 1}, 500, "Linear", true);
            etapaJogo = 6;
            gpResultadoParcial = game.add.group();

            var txtRodada = game.add.text(540, 165, "Jogada " + rodadaPrato, {
                font: "35px Myriad Pro Bold",
                fill: "#7A5630"
            });
            gpResultadoParcial.add(txtRodada);

            var quadro;
            if (jogador == 1) {
                quadro = game.add.button(370, 170, 'resultadoParcialVermelho', stageJogoPratos.avalicaoPratos, game, 0, 0, 0);
            } else {
                quadro = game.add.button(370, 170, 'resultadoParcialAzul', stageJogoPratos.avalicaoPratos, game, 0, 0, 0);
            }
            quadro.animations.add('resultado');
            quadro.animations.play('resultado', 2, true);

            quadro.scale.setTo(.7, .7);
            gpResultadoParcial.add(quadro);

            var numero;
            if (jogador == 1) {
                numero = game.add.sprite(560, 240, 'numerosVermelho');
            } else if (jogador == 2) {
                numero = game.add.sprite(560, 240, 'numerosAzul');
            }
            numero.scale.setTo(0.7, 0.7);
            numero.frame = qtdCorretos;
            gpResultadoParcial.add(numero);

            var x = quadro.x + 110;
            for (var n = 0; n < qtdCorretos; n++) {
                var oso = game.add.sprite(x, 350, 'oso');
                // oso.rotation = 45;
                oso.scale.setTo(.85, .85);
                gpResultadoParcial.add(oso);
                x = x + 40;
            }
            arrResultado[nivelSelecionado][jogador] = arrResultado[nivelSelecionado][jogador] + qtdCorretos;

            if (nJogadores == jogador) {
                rodadaPrato++;
                jogador = 1
            } else {
                jogador = 2;

            }
        }

    }, avalicaoPratos: function () {
        if (flgVoltar == 0) {
            gpResultadoParcial.destroy();
            gpHeculesSorteio.destroy();
            if (rodadaPrato == nJogadasPratos) {
                stageJogoPratos.resultadoFinal();
            } else {
                stageJogoPratos.novoSorteio();
            }
        }

    }, resultadoFinal: function () {
        if (flgVoltar == 0) {
            if (audio) {
                audio.resume();
            }
            audio = game.add.audio('legalOsoganho');
            audio.play();
            if (flgAudio == false) {
                audio.volume = 0;
            }
            audio.onStop.add(function () {
                btnAvacar.animations.play('avancar', 2, true);
            });
            rodadaPrato = 1;
            etapaJogo = 8;
            if (balao) {
                balao.destroy();
            }
            gpSelecao.destroy();
            gpHeculesSorteio.destroy();
            gpResultadoFinal = game.add.group();
            nomeJogador1.alpha = 1;
            if (nJogadores == 2) {
                nomeJogador2.alpha = 1;
                var quadroVermelho = game.add.button(100, 180, 'resultadoFinalVermelho', stageJogoPratos.proximoNivel, game, 0, 0, 0);
                quadroVermelho.scale.setTo(.8, .8);
                gpResultadoFinal.add(quadroVermelho);
                quadroVermelho.animations.add('resultado');
                quadroVermelho.animations.play('resultado', 5, true);
                quadroVermelho.events.onInputOver.add(function () {
                    if (efeitoSom) {
                        efeitoSom.destroy();
                    }
                    efeitoSom = game.add.audio('son15');
                    efeitoSom.play();
                }, this);

                var nPoteVermelho;
                if (arrResultado[nivelSelecionado][1] >= 10) {
                    nPoteVermelho = 10;
                } else {
                    nPoteVermelho = arrResultado[nivelSelecionado][1];
                }
                var poteVermelho = game.add.sprite(200, 410, 'bandejaVermelha');
                poteVermelho.frame = nPoteVermelho;
                gpResultadoFinal.add(poteVermelho);


                var numeroVermelho = game.add.sprite(220, 270, 'numerosVermelho');
                numeroVermelho.scale.setTo(.85, .85);
                numeroVermelho.frame = arrResultado[nivelSelecionado][1];
                gpResultadoFinal.add(numeroVermelho);

                // jogador 2
                var quadroAzul = game.add.button(780, 180, 'resultadoFinalAzul', stageJogoPratos.proximoNivel, game, 0, 0, 0);
                quadroAzul.scale.setTo(.8, .8);
                gpResultadoFinal.add(quadroAzul);
                quadroAzul.animations.add('resultado');
                quadroAzul.animations.play('resultado', 5, true);
                quadroAzul.events.onInputOver.add(function () {
                    if (efeitoSom) {
                        efeitoSom.destroy();
                    }
                    efeitoSom = game.add.audio('son15');
                    efeitoSom.play();
                }, this);

                var nPoteAzul;
                if (arrResultado[nivelSelecionado][1] >= 10) {
                    nPoteAzul = 10;
                } else {
                    nPoteAzul = arrResultado[nivelSelecionado][1];
                }
                var poteAzul = game.add.sprite(870, 410, 'bandejaAzul');
                poteAzul.frame = nPoteAzul;
                gpResultadoFinal.add(poteAzul);


                var numeroAzul = game.add.sprite(910, 270, 'numerosAzul');
                numeroAzul.frame = arrResultado[nivelSelecionado][2];
                numeroAzul.scale.setTo(.85, .85);
                gpResultadoFinal.add(numeroAzul);

                var hercParabens = game.add.sprite((game.width / 2) - 40, 180, 'hecolisParabens');
                hercParabens.animations.add('parabens');
                hercParabens.animations.frames = [0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 4, 4, 4, 4];
                hercParabens.animations.play('parabens', 5, true);
                gpResultadoFinal.add(hercParabens);
                hercParabens.inputEnabled = true;
                hercParabens.events.onInputOver.add(function () {
                    if (efeitoSom) {
                        efeitoSom.destroy();
                    }
                    efeitoSom = game.add.audio('aplausos');
                    efeitoSom.play();
                }, this);

                var imgJilo = game.add.sprite((game.width / 2) - 160, 390, 'jiloCabeca');
                imgJilo.scale.setTo(0.8, 0.8);
                imgJilo.animations.add('mover');
                imgJilo.animations.play('mover', 1, true);
                gpResultadoFinal.add(imgJilo);
                imgJilo.inputEnabled = true;
                imgJilo.events.onInputOver.add(function () {
                    if (efeitoSom) {
                        efeitoSom.destroy();
                    }
                    efeitoSom = game.add.audio('latido');
                    efeitoSom.play();
                }, this);


            } else {
                var quadro = game.add.button((game.width / 2) - 180, 150, 'resultadoFinalVermelho', stageJogoPratos.proximoNivel, game, 0, 0, 0);
                quadro.scale.setTo(.8, .8);
                gpResultadoFinal.add(quadro);
                quadro.animations.add('resultado');
                quadro.animations.play('resultado', 5, true);
                quadro.events.onInputOver.add(function () {
                    if (efeitoSom) {
                        efeitoSom.destroy();
                    }
                    efeitoSom = game.add.audio('son15');
                    efeitoSom.play();
                }, this);

                var nPote;
                if (arrResultado[nivelSelecionado][1] >= 10) {
                    nPote = 10;
                } else {
                    nPote = arrResultado[nivelSelecionado][1];
                }
                var pote = game.add.sprite((game.width / 2 - 90), 360, 'bandejaVermelha');
                pote.frame = nPote;
                gpResultadoFinal.add(pote);

                var numero = game.add.sprite((game.width / 2) - 40, 240, 'numerosVermelho');
                numero.scale.setTo(.7, .7);
                numero.frame = arrResultado[nivelSelecionado][1];
                gpResultadoFinal.add(numero);

                var hercParabens = game.add.sprite(920, 290, 'hecolisParabens');
                hercParabens.animations.add('parabens');
                hercParabens.animations.frames = [0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 4, 4, 4, 4];
                hercParabens.animations.play('parabens', 5, true);
                gpResultadoFinal.add(hercParabens);

                var imgJilo = game.add.sprite(780, 500, 'jiloCabeca');
                imgJilo.scale.setTo(0.8, 0.8);
                imgJilo.animations.add('mover');
                imgJilo.animations.play('mover', 1, true);
                gpResultadoFinal.add(imgJilo);
                imgJilo.inputEnabled = true;
                imgJilo.events.onInputOver.add(function () {
                    if (efeitoSom) {
                        efeitoSom.destroy();
                    }
                    efeitoSom = game.add.audio('latido');
                    efeitoSom.play();
                }, this);

            }
            btnAvacar.visible = 1;
        }
    }, proximoNivel: function () {
        btnAvacar.animations.play('avancar', 2, true);
        btnAvacar.visible = 1;
        gpResultadoFinal.destroy();
        if (nivelSelecionado < 2) {
            nivelSelecionado++;
            etapaJogo = 1;
            stageJogoPratos.mostarNumeros();
        } else {
            stageJogoPratos.voltarParaInicioJogo();
        }

    }, novoSorteio: function () {

        if (balao) {
            balao.destroy();
        }
        etapaJogo = 3;
        stageJogoPratos.sorteio();
    }, destruirItem: function (item) {
        item.destroy();
    }, btVoltar: function () {

        if (etapaJogo != 0) {

            stageJogoPratos.modelVoltar();

        } else {
            var stage = new Object();
            stage.nomeEstage = "stageSelecaoJogos";
            mudarState(stage);
        }
    }, voltarParaInicioJogo: function () {
        flgVoltar = 0;
        if (gpModalVoltar) {
            gpModalVoltar.destroy();
        }
        gpBotoes.visible = 1;
        etapaJogo = 0;
        nJogadores = "";
        nomeJogadores = [];
        imp_user1.setText('');
        imp_user2.setText('');
        arrResultado = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        btNivel1.frame = 0;
        btNivel2.frame = 1;
        btNivel3.frame = 2;
        btNivel1.alpha = 1;
        btNivel2.alpha = 1;
        btNivel3.alpha = 1;
        rodadaPrato = 1;
        nivelSelecionado = undefined;
        tempoAnimacao = [500, 2000, 800];
        etapaJogo = 0;
        if (balao) {
            balao.destroy();
        }
        if (imgInicial) {
            imgInicial.destroy();
        }
        if (gpResultadoFinal) {
            gpResultadoFinal.destroy();
        }
        if (gpResultadoParcial) {
            gpResultadoParcial.destroy();
        }
        if (gpHeculesSorteio) {
            gpHeculesSorteio.destroy();
        }
        if (gpSorteado) {
            gpSorteado.destroy();
        }

        if (grid) {
            grid.destroy();
        }
        if (gpMostarNumeros) {
            gpMostarNumeros.destroy();
        }

        if (nomeJogador1) {
            nomeJogador1.destroy();
        }
        if (nomeJogador2) {
            nomeJogador2.destroy();
        }
        btnAvacar.visible = 1;
        gpSelecao.visible = 1;
        gpNivel.visible = 0;
        gpInicial.visible = 1;
        gpInputJogaodor1.visible = 0;
        gpInputJogaodor2.visible = 0;

        cb1.state = false;
        cb2.state = false;
        cb1.show();
        cb2.show();
        stageJogoPratos.sonInicial();


    }, repetirInstrucao: function () {
        if (etapaJogo != 1.1) {
            audio.play();
            if (flgAudio == false) {
                audio.volume = 0;
            }
            //
        }
    }, comoJogar: function () {
        btnComo.frame = 0;
        gpNivel.visible = 0;
        btnVoltar.visible = 0;
        btnImprimir.visible = 0;
        btnSon.visible = 0;
        btnComo.visible = 0;
        btnAvacar.visible = 0;
        if (gpMostarNumeros) {
            gpMostarNumeros.visible = 0;
        }

        cb1.hide();
        cb2.hide();
        if (efeitoSom) {
            efeitoSom.stop();
        }
        if (audio) {
            audio.stop();
        }
        gpComoJogar = game.add.group();
        gpComoJogar.visible = 1;
        var fundo = game.add.sprite(0, 0, 'fundoComoPrat');
        gpComoJogar.add(fundo);


        var btnVoltarComo = game.add.button(10, 675, 'icoVoltar', stageJogoPratos.fecharComo, game, 1, 0, 0);
        btnVoltarComo.nomeEstage = "stageJogoPratos";
        btnVoltarComo.input.useHandCursor = true;
        btnVoltarComo.scale.setTo(.8, .8);
        gpComoJogar.add(btnVoltarComo);


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

        gpComoJogar.destroy();
        gpComoJogar.visible = 0;
        btnVoltar.visible = 1;
        btnImprimir.visible = 1;
        btnSon.visible = 1;
        btnComo.visible = 1;
        btnAvacar.visible = 1;
        if (gpMostarNumeros) {
            gpMostarNumeros.visible = 1;
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
        flgVoltar = 1;
        if (gpMostarNumeros && etapaJogo == 1) {
            gpMostarNumeros.visible = 0;
        }
        btnComo.frame = 0;
        pagina = 1;
        gpNivel.visible = 0;
        gpBotoes.visible = 0;

        gpModalVoltar = game.add.group();
        gpModalVoltar.visible = 1;


        var fundoVoltar = game.add.sprite(0, 0, 'fundoVoltar');
        gpModalVoltar.add(fundoVoltar);

        var btnSim = game.add.button(680, 150, 'btnSim', stageJogoPratos.voltarParaInicioJogo, game, 1, 0, 0);
        btnSim.input.useHandCursor = true;
        btnSim.anchor.x = 0.5;
        gpModalVoltar.add(btnSim);

        var btnNao = game.add.button(1030, 150, 'btnNao', stageJogoPratos.fechaModalVoltar, game, 1, 0, 0);
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
        flgVoltar = 0;
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
        if (gpMostarNumeros && etapaJogo == 1) {
            gpMostarNumeros.visible = 0;
        }
        gpModalVoltar.destroy();
        gpModalVoltar.visible = 0;
        gpBotoes.visible = 1;
        btnVoltar.visible = 1;
        btnImprimir.visible = 1;
        btnSon.visible = 1;
        btnComo.visible = 1;
        btnAvacar.visible = 1;
        if (gpMostarNumeros) {
            gpMostarNumeros.visible = 1;
        }
    }
}