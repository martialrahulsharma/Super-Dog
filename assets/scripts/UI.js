export class UI {
    constructor(game) {
        this.game = game;
        this.fontSize = 30;
        this.fontFamily = 'Helvetica';
        this.liveImage = document.getElementById('lives');
    }
    draw(context) {
        context.save();
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        context.shadowColor = 'white';
        context.shadowBlur = 0;
        context.font = this.fontSize + 'px ' + this.fontFamily;
        context.textAlign = 'left';
        context.fillStyle = this.game.fontColor;
        context.fillText('Score: ' + this.game.score, 20, 50);
        //timer
        context.font = this.fontSize * 0.8 + 'px ' + this.fontFamily;
        context.fillText('Time: ' + (this.game.time * 0.001).toFixed(1), 20, 80);
        //lives
        for (let i=0; i < this.game.lives; i++) {
            context.drawImage(this.liveImage, 20 * i + 20, 95, 25, 25);

        }
        //game over message
        if (this.game.gameOver) {
            context.textAlign = 'center';
            context.font = this.fontSize * 0.2 + 'px ' + this.fontFamily;
            if (this.game.score > this.game.winningScore){
                context.fillText('Boo-yah: ', this.game.width * 0.5, this.game.height * 0.5 - 20);
                context.font = this.fontSize * 0.7 + 'px ' + this.fontFamily;
                context.fillText('What are creature of the night afraid of? YOU!!!', this.game.width * 0.5, this.game.height * 0.5 + 20);
            } else {
                context.fillText('Love at first bite?', this.game.width * 0.5, this.game.height * 0.5 - 20);
                context.font = this.fontSize * 0.7 + 'px ' + this.fontFamily;
                context.fillText('Game Over! Better Luck Next Time!', this.game.width * 0.5, this.game.height * 0.5 - 20);
            }
            context.restore();
        }
    }
}