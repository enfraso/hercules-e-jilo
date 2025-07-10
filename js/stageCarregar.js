var text;
var barra;
var linha;
var stageCarregar = {

    preload: function () {


        game.load.spritesheet('herculesJilo', 'assets/geral/hercules_jilo.png', 467, 460);
        game.load.image('fundoLoad', 'assets/inicial/fundo_load.png');

        game.load.image('circle', 'assets/grey_circle.png');
        game.load.image('boxTick', 'assets/grey_boxTick.png');
    },

    create: function () {
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        var t = game.add.text(0, 0, "1", {font: "1px Secular One", fill: "#ccc"});
        t.visible = 0;
        t = game.add.text(0, 0, "1", {font: "1px Exotc350 DmBd BT", fill: "#ccc"});
        t = game.add.text(0, 0, "1", {font: "1px Exotc350 Bd BT", fill: "#ccc"});
        t = game.add.text(0, 0, "1", {font: "1px Myriad Pro", fill: "#ccc"});
        t = game.add.text(0, 0, "1", {font: "1px DS-Digital", fill: "#ccc"});
        t = game.add.text(0, 0, "1", {font: "1px Myriad Pro Bold", fill: "#ccc"});

        var fundo = game.add.sprite(0, 0, 'fundoLoad');


        var logo = game.add.sprite((game.width / 2), (game.height / 2) - 70, 'herculesJilo');
        logo.anchor.x = 0.5;
        logo.anchor.y = 0.5;
        logo.animations.add('parabens');
        logo.animations.play('parabens', 3, true);

        barra = game.add.graphics((game.width / 2) - 150, 600);

        barra.beginFill(0xE5BB21, 1);
        barra.moveTo(0, 0);
        barra.lineTo(300, 0);
        barra.lineTo(300, 30);
        barra.lineTo(0, 30);

        linha = game.add.graphics((game.width / 2) - 150, 600);
        linha.lineStyle(1, 0x603813, 1);
        linha.moveTo(0, 0);
        linha.lineTo(300, 0);
        linha.lineTo(300, 30);
        linha.lineTo(0, 30);
        linha.lineTo(0, 0);

        text = game.add.text(game.width / 2, 600, '', {fill: '#C1272D'});
        text.anchor.x = 0.5;

        // this.load.onLoadStart.add(stageCarregar.loadStart, this);
        this.load.onFileComplete.add(stageCarregar.fileComplete, this);
        this.load.onLoadComplete.add(stageCarregar.loadComplete, this);

        stageCarregar.start();

        // }, loadStart: function () {
        //     text.setText("Carreando ...");
    }, start: function () {
        //inicial
        game.load.image('bola', 'assets/selecao/bola.png');
        game.load.image('ceu', 'assets/inicial/ceu.png');
        game.load.image('sol', 'assets/inicial/sol.png');
        game.load.spritesheet('jsMonta', 'assets/inicial/jsMonta.png', 224, 221);
        game.load.spritesheet('jsPassa', 'assets/inicial/jsPassa.png', 224, 147);
        game.load.spritesheet('jsPorquinho', 'assets/inicial/jsPorquinho.png', 200, 215);
        game.load.spritesheet('jsPratinho', 'assets/inicial/jsPratinho.png', 260, 165);
        game.load.spritesheet('jsResta', 'assets/inicial/jsResta.png', 220, 170);
        game.load.spritesheet('fundoInicial', 'assets/inicial/fundo_inicial.png', 1200, 800);
        game.load.spritesheet('herculesInicial', 'assets/inicial/hercules_inicial.png', 270, 440);

        game.load.spritesheet('btnBingo', 'assets/inicial/btn_bingo.png', 236, 212);
        game.load.spritesheet('btnBoliche', 'assets/inicial/btn_boliche.png', 266, 248);
        game.load.spritesheet('btnDomino', 'assets/inicial/btn_domino.png', 218, 211);
        game.load.spritesheet('btnVendinha', 'assets/inicial/btn_vendinha.png', 253, 212);
        game.load.spritesheet('btnMemoria', 'assets/inicial/btn_memoria.png', 259, 197);
        game.load.spritesheet('btnHercules', 'assets/inicial/btn_hercules.png', 250, 410);
        game.load.spritesheet('btnJilo', 'assets/inicial/btn_jilo.png', 220, 253);
        game.load.spritesheet('btnProfessores', 'assets/inicial/btn_professores.png', 336, 586);
        game.load.spritesheet('btnCorneta', 'assets/geral/btn_corneta.png', 200, 138);
        game.load.spritesheet('credito', 'assets/geral/credito.png', 1200, 800);

        game.load.spritesheet('btnSim', 'assets/geral/btn_sim.png', 273, 216);
        game.load.spritesheet('btnNao', 'assets/geral/btn_nao.png', 261, 209);
        game.load.image('fundoVoltar', 'assets/geral/fundo_voltar.png');

        game.load.image('fundoProfessor', 'assets/inicial/fundo_professor.png');


        game.load.audio('bemVindo', ['son/inicial/bemvindo_jogos.mp3']);
       // game.load.audio('jJunta', ['son/inicial/jogo_junta_cem.mp3']);
        game.load.audio('jMonta', ['son/inicial/jogo_monta_buque.mp3']);
        game.load.audio('jPratos', ['son/inicial/jogo_pratinhos.mp3']);
        game.load.audio('jPassa', ['son/inicial/jogo_passa_passa.mp3']);
        game.load.audio('jResta', ['son/inicial/jogo_resta_mais.mp3']);
        game.load.audio('jHercules', ['son/inicial/jogos_hercules.mp3']);
        game.load.audio('trilhaHercules', ['son/trilha/trilha_menu_hercules.mp3']);
        game.load.audio('trilhaJilo', ['son/trilha/trilha_menu_jilo.mp3']);
        game.load.audio('trilhaProfessor', ['son/trilha/trilha_menu_professor.mp3']);
        game.load.audio('trilhaPrincipal', ['son/trilha/trilha_menu_principal.mp3']);
        game.load.audio('trilhaAbertura', ['son/trilha/trilha_abertura.mp3']);

        game.load.audio('menuInicial', ['son/inicial/clique_menu.mp3']);
        //game.load.audio('menuPrincipal', ['son/inicial/incluir_menu_principal.mp3']);
        game.load.audio('jPorquinho', ['son/inicial/jogo_dos_porquinhos.mp3']);
        game.load.audio('jJilo', ['son/inicial/jogos_do_jilo.mp3']);
        game.load.audio('menuPrefessor', ['son/inicial/menu_do_professor.mp3']);

        game.load.audio('olaInicial', ['son/inicial/ola_primeira_tela.mp3']);



        //geral
        game.load.spritesheet('icoAjuda', 'assets/geral/ajuda.png', 139, 166);
        game.load.spritesheet('icoVoltar', 'assets/geral/voltar.png', 128, 166);
        game.load.spritesheet('iconivel', 'assets/geral/nivel.png', 115.4, 150);
        game.load.spritesheet('icoSon', 'assets/geral/son.png', 145, 166);
        game.load.spritesheet('icoSonComo', 'assets/geral/son_como.png', 145, 166);
        game.load.spritesheet('icoAvancar', 'assets/geral/avancar.png', 192, 162);
        game.load.spritesheet('icoImprimir', 'assets/geral/imprimir.png', 190, 166);
        game.load.image('fundoModal', 'assets/geral/fundoModal.png');
        game.load.spritesheet('icoMusica', 'assets/geral/musica.png', 157, 140);
        game.load.spritesheet('herculesContagem', 'assets/geral/hercu_contagem.png', 401.65, 587.5);
        game.load.spritesheet('balao', 'assets/geral/balao.png', 161.50, 126.70);
        game.load.spritesheet('balaoVermelho', 'assets/geral/balao_vermelho.png', 161.50, 126.70);
        game.load.spritesheet('balaoAzul', 'assets/geral/balao_azul.png', 161.50, 126.70);
        game.load.spritesheet('balaoVermelho2', 'assets/geral/balao_vermelho2.png', 161.50, 126.70);
        game.load.spritesheet('balaoAzul2', 'assets/geral/balao_azul2.png', 161.50, 126.70);

        game.load.image('tijela', 'assets/jogoPratos/tijela.png');


        game.load.spritesheet('jilo', 'assets/geral/jilo.png', 241, 344);
        game.load.spritesheet('jiloCabeca', 'assets/geral/jilo_cabeca.png', 217.4, 358.5);
        game.load.spritesheet('jiloAnim', 'assets/geral/jilo_anim.png', 350, 403);
        game.load.spritesheet('jiloAnim2', 'assets/geral/jilo_anim_2.png', 350, 403);
        game.load.spritesheet('hecolisParabens', 'assets/geral/hecolis_parabens.png', 328.1, 533.2);
        game.load.spritesheet('jiloResta', 'assets/restaMais/jiloResta.png', 340, 280);
        game.load.spritesheet('jiloResta2', 'assets/restaMais/jiloResta2.png', 340, 280);

        // autdio Alerta
        game.load.audio('alertaNomeJogador', ['son/alerta/coloque_nome_jogador.mp3']);
        game.load.audio('alertaQtdJogador', ['son/alerta/escolha_qtd_jogadores.mp3']);
        game.load.audio('aletaNivel', ['son/alerta/nivel_obrigatorio.mp3']);


        //audio Baotos
        game.load.audio('escrevaNome', ['son/geral/escreva_nome.mp3']);
        game.load.audio('sair', ['son/geral/sair_do_jogo.mp3']);
        game.load.audio('sonBtnAvacao', ['son/efeitos/avancar.mp3']);
        game.load.audio('sonBtnComo', ['son/efeitos/comoJogar.mp3']);
        game.load.audio('sonBtnVoltar', ['son/efeitos/voltar.mp3']);

        game.load.audio('sonBtnimprimir', ['son/efeitos/imprimir.mp3']);
        game.load.audio('sonBtnInstrucao', ['son/efeitos/son.mp3']);
        game.load.audio('aplausos', ['son/efeitos/aplausos.mp3']);
        game.load.audio('risada', ['son/efeitos/risada.mp3']);
        game.load.audio('nivel1', ['son/efeitos/nivel_1.mp3']);
        game.load.audio('nivel2', ['son/efeitos/nivel_2.mp3']);
        game.load.audio('nivel3', ['son/efeitos/nivel_3.mp3']);
        game.load.audio('arfando', ['son/efeitos/arfando.mp3']);
        //game.load.audio('son3', ['son/efeitos/son3.mp3']);
        game.load.audio('son15', ['son/efeitos/son15.mp3']);
        game.load.audio('latido', ['son/efeitos/latido.mp3']);
        game.load.audio('escolhaNivel', ['son/pratos/escolha_nivel.mp3']);

        game.load.audio('selecionaPalito', ['son/efeitos/selecionaPalito.mp3']);

        game.load.audio('numero0', ['son/geral/numero_0.mp3']);
        game.load.audio('numero1', ['son/geral/numero_1.mp3']);
        game.load.audio('numero2', ['son/geral/numero_2.mp3']);
        game.load.audio('numero3', ['son/geral/numero_3.mp3']);
        game.load.audio('numero4', ['son/geral/numero_4.mp3']);
        game.load.audio('numero5', ['son/geral/numero_5.mp3']);
        game.load.audio('numero6', ['son/geral/numero_6.mp3']);
        game.load.audio('numero7', ['son/geral/numero_7.mp3']);
        game.load.audio('numero8', ['son/geral/numero_8.mp3']);
        game.load.audio('numero9', ['son/geral/numero_9.mp3']);
        game.load.audio('numero10', ['son/geral/numero_10.mp3']);
        game.load.audio('numero11', ['son/geral/numero_11.mp3']);
        game.load.audio('numero12', ['son/geral/numero_12.mp3']);
        game.load.audio('numero13', ['son/geral/numero_13.mp3']);
        game.load.audio('numero14', ['son/geral/numero_14.mp3']);
        game.load.audio('numero15', ['son/geral/numero_15.mp3']);
        game.load.audio('numero16', ['son/geral/numero_16.mp3']);
        game.load.audio('numero17', ['son/geral/numero_17.mp3']);
        game.load.audio('numero18', ['son/geral/numero_18.mp3']);
        game.load.audio('numero19', ['son/geral/numero_19.mp3']);
        game.load.audio('numero20', ['son/geral/numero_20.mp3']);
        game.load.audio('numero21', ['son/geral/numero_21.mp3']);
        game.load.audio('numero22', ['son/geral/numero_22.mp3']);
        game.load.audio('numero23', ['son/geral/numero_23.mp3']);
        game.load.audio('numero24', ['son/geral/numero_24.mp3']);
        game.load.audio('numero25', ['son/geral/numero_25.mp3']);
        game.load.audio('maca2', ['son/geral/contagem_duas.mp3']);
        game.load.audio('maca1', ['son/geral/contagem_uma.mp3']);
        game.load.audio('novamente', ['son/negativo/tente_novamente.mp3']);
        game.load.audio('linguinhaAcertou', ['son/efeitos/restamais/liguinha_acerto.mp3']);
        game.load.audio('moedaVirando', ['son/efeitos/porquinho/moeda_virando_dinheiro.mp3']);

        game.load.audio('roletaGirando', ['son/geral/roleta_girando.mp3']);

        // audio parabéns
        game.load.audio('acertou', ['son/positivo/acertou.mp3']);
        // game.load.audio('continue', ['son/positivo/continue_assim.mp3']);
        game.load.audio('exelente', ['son/positivo/excelente.mp3']);
        game.load.audio('isso', ['son/positivo/isso_mesmo.mp3']);
        game.load.audio('muito_bem', ['son/positivo/muito_bem.mp3']);
        game.load.audio('sonParabens', ['son/positivo/parabens.mp3']);
        // game.load.audio('caminho', ['son/positivo/voce_esta_caminho_certo.mp3']);
        game.load.audio('otimoTrabalho', ['son/positivo/voce_fez_um_otimo_trabalho.mp3']);

        // audio negativo
        game.load.audio('xii', ['son/negativo/xiii.mp3']);
        game.load.audio('errou', ['son/negativo/errou.mp3']);
        game.load.audio('tente', ['son/negativo/melhor_tentar_novo_hein.mp3']);
        game.load.audio('sairEfeito', ['son/efeitos/sair_sim_nao.mp3']);
        // game.load.audio('desta_vez', ['son/negativo/nao_foi_desta_vez.mp3']);
        // game.load.audio('na_proxima', ['son/negativo/quem_sabe_proxima_nao_acerta.mp3']);

        game.load.audio('escolhaJogadores', ['son/pratos/escolha_jogadores.mp3']);

        stageCarregar.load.start();


    }, fileComplete: function (progress, cacheKey, success, totalLoaded, totalFiles) {
        var urlParams = new URLSearchParams(window.location.search);
        myParam = urlParams.get('jogo');
        barra.scale.setTo(progress / 100, 1);
        text.setText(progress + "%");

    }, loadComplete: function (e) {
        game.load.removeAll();
        if (musica) {
            musica.destroy()
        }
        if (audio) {
            audio.destroy();
        }

        if (game.state.current == "stageCarregar") {
            stageCarregar.comecoJogo();
        } else if (game.state.current == "stageJogoMonta") {
            stageJogoMonta.comecoJogo();
        } else if (game.state.current == "stageJogoPassa") {
            stageJogoPassa.comecoJogo();
        } else if (game.state.current == "stageJogoPorquinhos") {
            stageJogoPorquinhos.comecoJogo();
        } else if (game.state.current == "stageJogoPratos") {
            stageJogoPratos.comecoJogo();
        } else if (game.state.current == "stageJogoRestaMais") {
            stageJogoRestaMais.comecoJogo();
        }
        // stageCarregar.comecoJogo();

    }, comecoJogo: function () {
        var stage = new Object();
        // stage.nomeEstage = "stageJogoPassa";
        stage.nomeEstage = "stageInicialJogo";
        // stage.nomeEstage = "stagePratosComo";
        // stage.nomeEstage = "jogoPratos";
        // stage.nomeEstage = "stageJogoPorquinhos";
        // stage.nomeEstage = "stageJogoPassa";
        mudarState(stage);
    }
}


