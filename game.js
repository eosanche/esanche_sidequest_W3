// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawGame() → what the game screen looks like
// 2) input handlers → what happens when the player clicks or presses keys
// 3) helper functions specific to this screen

// ------------------------------
// Button data
// ------------------------------
// This object stores all the information needed to draw
// and interact with the button on the game screen.
// Keeping this in one object makes it easier to move,
// resize, or restyle the button later.
const gameBtn = {
  x: 200, // x position (centre of the button)
  y: 550, // y position (centre of the button)
  w: 300, // width
  h: 90, // height
  label: "Fight The Swarm", // text shown on the button
};

const gameBtnlose = {
  x: 550, // x position (centre of the button)
  y: 550, // y position (centre of the button)
  w: 300, // width
  h: 90, // height
  label: "Enter The Tunnel", // text shown on the button
};

// ------------------------------
// Main draw function for this screen
// ------------------------------
// drawGame() is called from main.js *only*
// when currentScreen === "game"
function drawGame() {
  // Set background colour for the game screen
  background(38, 49, 76);

  fill("#FFFFFF");

  // ---- Title and instructions text ----
  textSize(32);
  textAlign(CENTER, CENTER);
  text(
    "In The Grim Darkness of the Far Future, \n There Is Only War.",
    width / 2,
    160,
  );

  textSize(18);
  text(
    "Overrun with a large invasion of Tyranid forces in one of the cities of ultramar, \n a squad of ultramarines quickly drop into the heart of the battle bringing \n down the number of these horrific monstrosities. Your team needs to \n take out the hivemind to open a way for the rest of the company to \n push thorugh. There are two paths, an open filed filled with tyranic forces, or \n a dark tunnel with horrors unknown. What is your next line of command?",
    width / 2,
    280,
  );

  // ---- Draw the button ----
  // We pass the button object to a helper function
  drawGameButton(gameBtn);
  drawGameButton(gameBtnlose);

  // ---- Cursor feedback ----
  // If the mouse is over the button, show a hand cursor
  // Otherwise, show the normal arrow cursor
  cursor(isHover(gameBtn) || isHover(gameBtnlose) ? HAND : ARROW);
}

// ------------------------------
// Button drawing helper
// ------------------------------
// This function is responsible *only* for drawing the button.
// It does NOT handle clicks or game logic.
function drawGameButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  // Check if the mouse is hovering over the button
  // isHover() is defined in main.js so it can be shared
  const hover = isHover({ x, y, w, h });

  noStroke();

  // Change button colour when hovered
  // This gives visual feedback to the player
  fill(
    hover
      ? color(180, 220, 255, 220) // lighter blue on hover
      : color(200, 220, 255, 190), // normal state
  );

  // Draw the button rectangle
  rect(x, y, w, h, 14); // last value = rounded corners

  // Draw the button text
  fill(0);
  textSize(28);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}

// ------------------------------
// Mouse input for this screen
// ------------------------------
// This function is called from main.js
// only when currentScreen === "game"
function gameMousePressed() {
  // Only trigger the outcome if the button is clicked
  if (isHover(gameBtn)) {
    currentScreen = "win";
  }
  if (isHover(gameBtnlose)) {
    currentScreen = "lose";
  }
}

// ------------------------------
// Keyboard input for this screen
// ------------------------------
// Allows keyboard-only interaction (accessibility + design)
function gameKeyPressed() {
  // ENTER key triggers the same behaviour as clicking the button
  if (keyCode === ENTER) {
    triggerRandomOutcome();
  }
}

// ------------------------------
// Game logic: win or lose
// ------------------------------
// This function decides what happens next in the game.
// It does NOT draw anything.
function triggerRandomOutcome() {
  // random() returns a value between 0 and 1
  // Here we use a 50/50 chance:
  // - less than 0.5 → win
  // - 0.5 or greater → lose
  //
  // You can bias this later, for example:
  // random() < 0.7 → 70% chance to win
  if (random() < 0.5) {
    currentScreen = "win";
  } else {
    currentScreen = "lose";
  }
}
