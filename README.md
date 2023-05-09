A simple adventure game by Pallavi Rajeev based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**: Demo1, Demo2, Demo3, ... Demo 6
- **2+ scenes *not* based on `AdventureScene`**: Intro, Outro1, Outro2
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - Enhancement 1: makeEmoji() - this method is used to simplify the creation of my assets which are text with emojis
    - Enhancement 2: enhance() - this method is used to animate by objects by making them bounce up and down and adding a shadow 

Experience requirements:
- **4+ locations in the game world**: The Enchanted Forest, The Pond, The Path, The Mushroom Farm, The Cabin, The Portal 
- **2+ interactive objects in most scenes**: objects that the player can hover over to see a msg and grab, arrow(s) that players click on to move to a different scene 
- **Many objects have `pointerover` messages**: objects have descriptions when players hover over, arrows show which way you're going when players hover over 
- **Many objects have `pointerdown` effects**: when clicking on objects you can add them to your inventory, arrows lead you to the next scene when clicked on 
- **Some objects are themselves animated**: some objects are bouncing up and down so players know you can click on them, objects also disappear when clicked on 

Asset sources:
- All assets were created by myself, hand-drawn on my iPad's Notes app
- Objects were text objects using Apple's emojis.

Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.