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
        arrow.on('pointerover', () => {
            if (this.hasItem("spell book")){
                this.showMessage("Go right")
            } else{
                this.showMessage("Maybe the spell book would be helpful to grab before leaving.")
            }
        })
        arrow.on('pointerdown', () => {
            if (this.hasItem("spell book")) {
                this.gotoScene('demo3');
            }
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

        // let player = this.add.text(this.w * 0.1, this.w * 0.2, "🧚🏽‍♀️")
        //     .setFontSize(this.s * 20)
        //     .setInteractive()
        //     .on('pointerover', () => this.showMessage("Oh noo, how do I find my way out of this enchanted forest?"))


        let player = this.makeEmoji(0.2,0.2,"🧚🏽‍♀️","Oh noo, how do I find my way out of this enchanted forest?")
            .setFontSize(this.s * 20)
            //.on('pointerover', () => this.showMessage("Oh noo, how do I find my way out of this enchanted forest?"))
    
        // let book = this.add.text(this.w * 0.5, this.w * 0.3, "📖")
        //     .setFontSize(this.s * 5)
        //     .setInteractive()
        //     .on('pointerover', () => this.showMessage("Oooh, a spell book!"))
        //     .on('pointerdown', () => {
        //         this.showMessage("You pick up the spell book.");
        //         this.gainItem('spell book');
        //         this.tweens.add({
        //             targets: book,
        //             y: `-=${2 * this.s}`,
        //             alpha: { from: 1, to: 0 },
        //             duration: 500,
        //             onComplete: () => book.destroy()
        //         });
        //     });
        
        let book = this.makeEmoji(0.5,0.3,"📖","Oooh, a spell book!")
            //.on('pointerover', () => this.showMessage("Oooh, a spell book!"))
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
        
        this.enhance(book);

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
        
        let arrow2 = this.add.image(
            120,//x
            870,//y
            'arrow',//imagename
        )
        arrow2.angle = 180
        arrow2.setScale(.1)
        arrow2.setInteractive()
        arrow2.on('pointerover', () => this.showMessage("Go back"))
        arrow2.on('pointerdown', () => {
            this.gotoScene('demo1');
        })

        // let player = this.add.text(this.w * 0.01, this.w * 0.17, "🧚🏽‍♀️")
        //     .setFontSize(this.s * 20)
        //     .setInteractive()
        //     .on('pointerover', () => this.showMessage("Hey look a wand on the other side of the pond, maybe that could be helpful!"))

        let player = this.makeEmoji(0.01,0.17,"🧚🏽‍♀️","Hey look a wand on the other side of the pond, maybe that could be helpful!")
            .setFontSize(this.s * 20)
        
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
        this.enhance(wand);
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

        // let player = this.add.text(this.w * 0.1, this.w * 0.2, "🧚🏽‍♀️")
        //     .setFontSize(this.s * 20)
        //     .setInteractive()
        //     .on('pointerover', () => this.showMessage("I don't see much here, just some pretty water lilies."))

        let player = this.makeEmoji(0.1,0.2,"🧚🏽‍♀️","I don't see much here, just some pretty water lilies.")
            .setFontSize(this.s * 20)
        //this.enhance(player);


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
        this.enhance(flower);
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
            650,//x
            490,//y
            'farm',//imagename
        )
        image.setScale(2)
        
        let arrow2 = this.add.image(
            120,//x
            870,//y
            'arrow',//imagename
        )
        arrow2.angle = 180
        arrow2.setScale(.1)
        arrow2.setInteractive()
        arrow2.on('pointerover', () => this.showMessage("Go back"))
        arrow2.on('pointerdown', () => {
            this.gotoScene('demo3');
        })

        // let player = this.add.text(this.w * 0.2, this.w * 0.2, "🧚🏽‍♀️")
        //     .setFontSize(this.s * 20)
        //     .setInteractive()
        //     .on('pointerover', () => this.showMessage("I'm just getting more lost, there's nothing helpful here either."))

        let player = this.makeEmoji(0.2,0.2,"🧚🏽‍♀️","I'm just getting more lost, there's nothing helpful here either.")
            .setFontSize(this.s * 20)

        let mushroom = this.add.text(this.w * 0.4, this.w * 0.3, "🍄")
            .setFontSize(this.s * 8)
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
        this.enhance(mushroom);
    }
}
class Demo5 extends AdventureScene {
    constructor() {
        super("demo5", "The Cabin");
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('cabin', 'cabin.png');
        this.load.image('arrow', 'pointer.webp');
    }
    onEnter() {
        let image = this.add.image(
            650,//x
            490,//y
            'cabin',//imagename
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
            this.gotoScene('demo6');
        })

        let player = this.add.text(this.w * 0.5, this.w * 0.2, "🧚🏽‍♀️")
            .setFontSize(this.s * 20)
            .setInteractive()
            .on('pointerover', () => this.showMessage("This looks more promising."))

        let ball = this.add.text(this.w * 0.35, this.w * 0.25, "🔮")
            .setFontSize(this.s * 4)
            .setInteractive()
            .on('pointerover', () => this.showMessage("You will soon find a way out, and it'll be right under your nose. Take it and you will leave the Enchanted Forest."))
            .on('pointerdown', () => {
                this.showMessage("You pick up the crystal ball.");
                this.gainItem('crystal ball');
                this.tweens.add({
                    targets: ball,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => ball.destroy()
                });
            });
        this.enhance(ball);
    }
}
class Demo6 extends AdventureScene {
    constructor() {
        super("demo6", "The Portal");
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('portal', 'portal.png');
        this.load.image('arrow', 'pointer.webp');
    }
    onEnter() {
        let image = this.add.image(
            650,//x
            490,//y
            'portal',//imagename
        )
        image.setScale(2)


        let player = this.add.text(this.w * 0.1, this.w * 0.2, "🧚🏽‍♀️")
            .setFontSize(this.s * 20)
            .setInteractive()
            .on('pointerover', () => this.showMessage("I don't know whether to believe the crystall ball or not...but this weird potion is right under my nose."))

        let potion = this.add.text(this.w * 0.24, this.w * 0.35, "🧪")
            .setFontSize(this.s * 4)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Weird potion!"))
            .on('pointerdown', () => {
                this.showMessage("You pick up the potion.");
                this.gainItem('potion');
                this.tweens.add({
                    targets: potion,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => potion.destroy()
                });
            });

        this.enhance(potion);
        
        let line = this.add.text(this.w * 0.47, this.w * 0.346, "〰")
        .setFontSize(this.s * 19.5)
        .setInteractive()
        .rotation = 80


        let e1 = this.add.text(this.w * 0.48, this.w * 0.23, "⚫️")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("potion")) {
                    this.showMessage("You can drink the potion to enter through this side.");
                } else {
                    this.showMessage("You need to drink a potion to enter through this side. Can you find a potion?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("potion")) {
                    this.loseItem("potion");
                    this.showMessage("*whoosh*");
                    this.gotoScene('outro1');
                }
            })

        let e2 = this.add.text(this.w * 0.56, this.w * 0.23, "⚫️")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("spell book")) {
                    this.showMessage("You can cast a spell to enter through this side.");
                } else {
                    this.showMessage("You need a spell to enter through this side. Can you find a spell book?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("spell book")) {
                    this.loseItem("spell book");
                    this.showMessage("*whoosh*");
                    this.gotoScene('outro2');
                }
            })

    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('intro', 'intro.png');
    }
    create() {
        let image = this.add.image(
            960,//x
            580,//y
            'intro',//imagename
        )
        image.setScale(1.68)
        this.add.text(820,100, "Click anywhere to begin.").setFontSize(20);
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
    preload(){
        this.load.path = './assets/';
        this.load.image('outro1', 'outro1.png');
    }
    create() {
        let image = this.add.image(
            965,//x
            490,//y
            'outro1',//imagename
        )
        image.setScale(2)
    }
}
class Outro2 extends Phaser.Scene {
    constructor() {
        super('outro2');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('outro2', 'outro2.png');
    }
    create() {
        let image = this.add.image(
            965,//x
            490,//y
            'outro2',//imagename
        )
        image.setScale(2)
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

