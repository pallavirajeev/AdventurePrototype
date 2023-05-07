class Demo1 extends AdventureScene {
    constructor() {
        super("demo1", "The Enchanted Forest");
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('landscape', 'landscape.png');
        this.load.image('arrow', 'pointer.webp');
    }
    onEnter() {
        let image = this.add.image(
            700,//x
            490,//y
            'landscape',//imagename
        )
        image.setScale(2)

        let arrow = this.add.image(
            1300,//x
            900,//y
            'arrow',//imagename
        )
        arrow.setScale(.1)
        arrow.setInteractive()
        arrow.on('pointerover', () => this.showMessage("Go right"))
        arrow.on('pointerdown', () => {
            this.gotoScene('demo3');
        })
        
        let arrow2 = this.add.image(
            90,//x
            850,//y
            'arrow',//imagename
        )
        arrow2.angle = 90
        arrow2.setScale(.1)
        arrow2.setInteractive()
        arrow2.on('pointerover', () => this.showMessage("Go down"))
        arrow2.on('pointerdown', () => {
            this.gotoScene('demo2');
        })

        let player = this.add.text(this.w * 0.1, this.w * 0.2, "🧚🏽‍♀️")
            .setFontSize(this.s * 20)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Oh noo, how do I find my way out of this enchanted forest?"))

        let book = this.add.text(this.w * 0.5, this.w * 0.3, "📖")
            .setFontSize(this.s * 5)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Oooh, a spell book!"))
            .on('pointerdown', () => {
                this.showMessage("You pick up the spell book.");
                this.gainItem('spell book');
                this.tweens.add({
                    targets: book,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => book.destroy()
                });
            });

        // let arrow = this.add.text(this.w * 0.5, this.w * 0.1, "")
        //     .setFontSize(this.s * 2)
        //     .setInteractive()
        //     .on('pointerover', () => {
        //         this.showMessage("It's a nice key.")
        //     })
        //     .on('pointerdown', () => {
        //         this.showMessage("You pick up the key.");
        //         this.gainItem('key');
        //         this.tweens.add({
        //             targets: key,
        //             y: `-=${2 * this.s}`,
        //             alpha: { from: 1, to: 0 },
        //             duration: 500,
        //             onComplete: () => key.destroy()
        //         });
        //     })

        // let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 locked door")
        //     .setFontSize(this.s * 2)
        //     .setInteractive()
        //     .on('pointerover', () => {
        //         if (this.hasItem("key")) {
        //             this.showMessage("You've got the key for this door.");
        //         } else {
        //             this.showMessage("It's locked. Can you find a key?");
        //         }
        //     })
        //     .on('pointerdown', () => {
        //         if (this.hasItem("key")) {
        //             this.loseItem("key");
        //             this.showMessage("*squeak*");
        //             door.setText("🚪 unlocked door");
        //             this.gotoScene('demo2');
        //         }
        //     })

    }
}

class Demo2 extends AdventureScene {
    constructor() {
        super("demo2", "The Pond");
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('pond', 'pond.png');
        this.load.image('arrow', 'pointer.webp');
    }
    onEnter() {
        let image = this.add.image(
            630,//x
            490,//y
            'pond',//imagename
        )
        image.setScale(2)

        // let arrow = this.add.image(
        //     1300,//x
        //     900,//y
        //     'arrow',//imagename
        // )
        // arrow.setScale(.1)
        // arrow.setInteractive()
        // arrow.on('pointerover', () => this.showMessage("Go right"))
        // arrow.on('pointerdown', () => {
        //     this.gotoScene('demo3');
        // })
        
        let arrow2 = this.add.image(
            90,//x
            850,//y
            'arrow',//imagename
        )
        arrow2.angle = 90
        arrow2.setScale(.1)
        arrow2.setInteractive()
        arrow2.on('pointerover', () => this.showMessage("Go back"))
        arrow2.on('pointerdown', () => {
            this.gotoScene('demo1');
        })

        let player = this.add.text(this.w * 0.01, this.w * 0.17, "🧚🏽‍♀️")
            .setFontSize(this.s * 20)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Hey look a wand on the other side of the pond, maybe that could be helpful!"))

        let wand = this.add.text(this.w * 0.68, this.w * 0.28, "🪄")
            .setFontSize(this.s * 5)
            .setInteractive()
            .on('pointerover', () => this.showMessage("A mysterious wand!"))
            .on('pointerdown', () => {
                this.showMessage("You pick up the wand.");
                this.gainItem('wand');
                this.tweens.add({
                    targets: wand,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => wand.destroy()
                });
            }); 
        }
}

class Demo3 extends AdventureScene {
    constructor() {
        super("demo3", "The Path");
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('path', 'path.png');
        this.load.image('arrow', 'pointer.webp');
    }
    onEnter() {
        let image = this.add.image(
            700,//x
            490,//y
            'path',//imagename
        )
        image.setScale(1)

        let arrow = this.add.image(
            1300,//x
            900,//y
            'arrow',//imagename
        )
        arrow.setScale(.1)
        arrow.setInteractive()
        arrow.on('pointerover', () => this.showMessage("Go right"))
        arrow.on('pointerdown', () => {
            this.gotoScene('demo5');
        })
        
        let arrow2 = this.add.image(
            90,//x
            850,//y
            'arrow',//imagename
        )
        arrow2.angle = 90
        arrow2.setScale(.1)
        arrow2.setInteractive()
        arrow2.on('pointerover', () => this.showMessage("Go down"))
        arrow2.on('pointerdown', () => {
            this.gotoScene('demo4');
        })

        let player = this.add.text(this.w * 0.1, this.w * 0.2, "🧚🏽‍♀️")
            .setFontSize(this.s * 20)
            .setInteractive()
            .on('pointerover', () => this.showMessage("I don't see much here, just some pretty water lilies."))

        let flower = this.add.text(this.w * 0.4, this.w * 0.45, "🪷")
            .setFontSize(this.s * 5)
            .setInteractive()
            .on('pointerover', () => this.showMessage("A pretty water lily!"))
            .on('pointerdown', () => {
                this.showMessage("You pick up the water lily.");
                this.gainItem('water lily');
                this.tweens.add({
                    targets: flower,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => flower.destroy()
                });
            });
    }
}
class Demo4 extends AdventureScene {
    constructor() {
        super("demo4", "The Mushroom Farm");
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('farm', 'farm.png');
        this.load.image('arrow', 'pointer.webp');
    }
    onEnter() {
        let image = this.add.image(
            700,//x
            490,//y
            'farm',//imagename
        )
        image.setScale(1)

        let arrow = this.add.image(
            1300,//x
            900,//y
            'arrow',//imagename
        )
        arrow.setScale(.1)
        arrow.setInteractive()
        arrow.on('pointerover', () => this.showMessage("Go right"))
        arrow.on('pointerdown', () => {
            this.gotoScene('demo5');
        })
        
        let arrow2 = this.add.image(
            90,//x
            850,//y
            'arrow',//imagename
        )
        arrow2.angle = 90
        arrow2.setScale(.1)
        arrow2.setInteractive()
        arrow2.on('pointerover', () => this.showMessage("Go back"))
        arrow2.on('pointerdown', () => {
            this.gotoScene('demo4');
        })

        let player = this.add.text(this.w * 0.1, this.w * 0.2, "🧚🏽‍♀️")
            .setFontSize(this.s * 20)
            .setInteractive()
            .on('pointerover', () => this.showMessage("I'm just getting more lost, there's nothing helpful here either."))

        let mushroom = this.add.text(this.w * 0.4, this.w * 0.45, "🍄")
            .setFontSize(this.s * 5)
            .setInteractive()
            .on('pointerover', () => this.showMessage("A mushroom!"))
            .on('pointerdown', () => {
                this.showMessage("You pick up the mushroom.");
                this.gainItem('mushroom');
                this.tweens.add({
                    targets: mushroom,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => mushroom.destroy()
                });
            });
    }
}
class Demo5 extends AdventureScene {
    constructor() {
        super("demo5", "The Cabin");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo1');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}
class Demo6 extends AdventureScene {
    constructor() {
        super("demo6", "The Portal");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo1');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(50,50, "Adventure awaits!").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('demo1'));
        });
    }
}

class Outro1 extends Phaser.Scene {
    constructor() {
        super('outro1');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}
class Outro2 extends Phaser.Scene {
    constructor() {
        super('outro2');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 980
    },
    scene: [Intro, Demo1, Demo2, Demo3, Demo4, Demo5, Demo6, Outro1, Outro2],
    title: "Adventure Game",
});

