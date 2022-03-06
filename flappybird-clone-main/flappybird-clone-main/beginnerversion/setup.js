 //game variables
const gameOverSound = new Audio("../assets/sounds/gameover.mp3");
const music = new Audio("../assets/sounds/music.mp3");
      music.loop = true;
      music.volume = 0.5;
const debugModeIsOn = false;
const startKey = "s";
const restartKey = "r";
const hitboxColor = "#00FF02";
const destructionXPosition = -1000;
const spawnXPosition = canvas.width * 1.2
let gameState = "menu"; // menu, action or gameover

// bird variables
const birdImage = new Image(90, 90);
      birdImage.src = "../assets/images/bird.png";
const birdStartYPosition = 250;
const birdStartYSpeed = 0;
const birdStartYAccelleration = 0;
const birdBeginningYAccelleration = 0.7;
const birdXPosition = 250;
const birdHitboxRadius = 30;
const birdFlapSound = new Audio("../assets/sounds/flap.wav");
const birdFlapForce = -12;
const birdFlapKey = " ";
let birdYSpeed = birdStartYSpeed;
let birdYAccelleration = birdStartYAccelleration;
let birdYPosition = birdStartYPosition;
let birdCanFlap = false;


// score variables
const scoreImage = new Image(60, 60);
      scoreImage.src = "../assets/images/coin.png";
const scoreImageXPosition = 70;
const scoreImageYPosition = 70;
const scoreTextXPosition = 100;
const scoreTextYPosition = 90;
const scoreTextSize = 50;
const scoreTextColor = "yellow";
let scoreValue = 0;

// cloud variables
const cloudImage = new Image(200, 200);
      cloudImage.src = "../assets/images/cloud.png";
const cloudSpawnInterval = 10000; // milliseconds
const cloudXSpeed = randomBetween(-7, -1);
let cloudTimeSinceLastSpawn = 0; // milliseconds
let clouds = [
    {
        xPosition: canvas.width,
        yPosition: randomBetween(0, canvas.height/2), 
    },
    {
        xPosition: canvas.width -500,
        yPosition: randomBetween(0, canvas.height/2), 
    },
    {
        xPosition: canvas.width-1000,
        yPosition: randomBetween(0, canvas.height/2), 
    },
];

// star variables
const starImage = new Image(50, 50);
      starImage.src = "../assets/images/heart.png";
const starSpawnInterval = 10000; // milliseconds
const starXSpeed = -.7;
let starTimeSinceLastSpawn = 0; // milliseconds
let stars = [
    {
        xPosition: canvas.width,
        yPosition: randomBetween(0, canvas.height/2), 
    },
    {
        xPosition: canvas.width -500,
        yPosition: randomBetween(0, canvas.height/2), 
    },
    {
        xPosition: canvas.width-1000,
        yPosition: randomBetween(0, canvas.height/2), 
    },
];

// fireball variables
const fireballImage = new Image(350, 350);
      fireballImage.src = "../assets/images/fireball.png";
let fireballXSpeed = -5.5;
const fireballHitboxRadius = 100;
const fireballSpawnInterval = 1500;
let fireballTimeSinceLastSpawn = fireballSpawnInterval;
let fireballs = [];

// coin variables
const coinSound = new Audio("../assets/sounds/coin.wav");
const coinImage = scoreImage;
const coinHitboxRadius = 30;
const coinXSpeed = -5;
let coinSpawnInterval = 1000;
const coinValue = 1;
let coinTimeSinceLastSpawn = coinSpawnInterval
let coins = [];

// diamond variables
const diamondSound = coinSound;
const diamondImage = new Image(80, 60);
      diamondImage.src = "../assets/images/dick.png";
const diamondHitboxRadius = 30;
const diamondXSpeed = -9;
const diamondSpawnInterval = 2000;
const diamondValue = 5;
let diamondTimeSinceLastSpawn = diamondSpawnInterval
let diamonds = [];

// menu text variables
const menuFirstText = "Press " + startKey + " to start";
const menuTextXPosition = 300;
const menuTextYPosition = 400; 
const menuSecondText = "Press space to flap wings";
const menuTextSize = 60;
const menuTextColor = "yellow";
const gameOverText = "Press " + restartKey + " to restart";


//background
const backgroundImage = new Image(1920, 1080)
    backgroundImage.src = "../assets/images/background.png";
const backgroundImageyPosition = canvas.height/2;
const backgroundImagexPosition = canvas.width/2;