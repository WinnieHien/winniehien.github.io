// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,

    //x-position, y-position
    this.x = x;
    this.y = y;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    const rightwall = 500;
    if (this.x > rightwall) {
        this.x = -100;
    }
    //moves ladybug horizontally across screen
    this.x += 50 * dt;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player class
function Player() {
  this.x = 202;
  this.y = 405;
  this.hero = 'images/char-boy.png';
}
//Draw the player on the screen, required method
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.hero), this.x, this.y);
};

Player.prototype.update = function(dt) {
};

//Allow player to move based on keyed inputs.
Player.prototype.handleInput = function(key_input) {
    //x, y movement increments
    const x_increment = 100;
    const y_increment = 82.75;

    //varibles for game borders
    const left_wall = 2;
    const right_wall = 402;
    const top_wall = -8.75;
    const bottom_wall = 405;

    // move player around based on key inputs
    // player cannot exceed boundaries of the board

        if (key_input === 'left' && this.x > left_wall ) {
            this.x -= x_increment;
        }
        if (key_input === 'right' && this.x < right_wall) {
            this.x += x_increment;
        }
        if (key_input ===  'up' && this.y > top_wall) {
            this.y -= y_increment;
        }
        if (key_input ===  'down' && this.y < bottom_wall) {
            this.y += y_increment;
        }
};

//check for collisions and reset game if collision occurs
checkCollisions = function() {

    for (var enemy of allEnemies) {
        //using the distance formula
        let dx = enemy.x - player.x;
        let dy = enemy.y - player.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance <  70) { //collision occurs
            //reset start positions of enemies
            ladybug1.x = 0;
            ladybug2.x = -400;
            ladybug3.x = -220;
            ladybug4.x = -150;
            //reset start position of player
            player.x = 202;
            player.y = 405;
            console.log('A collision occured!');
        }
    }

};

//check Victory condition. If player reaches the water, they have won.
checkVictory = function() {
    if (player.y === -8.75) {
        console.log('you won');
        window.alert("Congrats. You won!");
    }
};

// Instantiate object and player variables
// Place 4 enemy objects in an array called allEnemies

var ladybug1 = new Enemy(0, 65);
var ladybug2 = new Enemy(-400, 150);
var ladybug3 = new Enemy(-220, 235);
var ladybug4 = new Enemy(-150, 320);
let allEnemies = [];
allEnemies.push(ladybug1, ladybug2, ladybug3, ladybug4);

// Place the player object in a variable called player
let player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
