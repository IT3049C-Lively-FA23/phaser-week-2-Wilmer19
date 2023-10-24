class mainScene {

    preload() {
        this.load.image('dog', 'assets/dog.png');
        this.load.image('ball', 'assets/ball.png');
    }

    create() {
        this.dog = this.physics.add.sprite(100, 100, 'dog');
        this.ball = this.physics.add.sprite(300, 300, 'ball');

        this.score = 0;

        let style = { font: '20px Arial', fill: '#fff' };

        this.scoreText = this.add.text(20, 20, 'score: ' + this.score, style);

        this.arrow = this.input.keyboard.createCursorKeys();
    }

    update() {
        if (this.physics.overlap(this.dog, this.ball)) {
            this.hit();
        }

        if (this.arrow.right.isDown) {
            this.dog.x += 3;
        } else if (this.arrow.left.isDown) {
            this.dog.x -= 3;
        }

        if (this.arrow.down.isDown) {
            this.dog.y += 3;
        } else if (this.arrow.up.isDown) {
            this.dog.y -= 3;
        }
    }


    hit() {
        this.ball.x = Phaser.Math.Between(100, 600);
        this.ball.y = Phaser.Math.Between(100, 300);

        this.score += 10;

        this.scoreText.setText('score: ' + this.score);

        this.tweens.add({
            targets: this.dog,
            duration: 200,
            scaleX: 1.2,
            scaleY: 1.2,
            yoyo: true,
        });
    }
}

new Phaser.Game({
    width: 700,
    height: 400,
    backgroundColor: '#50C878',
    scene: mainScene,
    physics: { default: 'arcade' },
    parent: 'game',
});