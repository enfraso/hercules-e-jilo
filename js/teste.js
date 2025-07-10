var weapon;
var bola;
var teste = {

    preload: function () {
        game.load.image('bullet', 'assets/bullet.png');
        game.load.image('bola', 'assets/porquinos/bola.png');
    },
    update: function () {

    },
    create: function () {
        // console.log('inicio')
        this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        weapon = game.add.weapon(5, 'bullet');
        // angula que a bala vai andar
        weapon.bulletAngleOffset = 90;

        // weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
        weapon.bulletKillType = Phaser.Weapon.KILL_LIFESPAN;
        weapon.bulletLifespan = 2000;
        //  velocidade
        weapon.bulletSpeed = 400;
        bola = this.add.button(320, 500, 'bola', teste.tiro);
        bola.anchor.set(0.5);
        weapon.trackSprite(bola, 14, 0);

    }, tiro : function () {
        weapon.fire()
    }
}
var game = new Phaser.Game(1200, 800, Phaser.AUTO, '');
game.state.add('teste', teste);
game.state.start('teste');