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
const gameBtn2 = {
  x: 200, // x position (centre of the button)
  y: 550, // y position (centre of the button)
  w: 300, // width
  h: 90, // height
  label: "250x Imperial Forces", // text shown on the button
};

const gameBtnlose2 = {
  x: 550, // x position (centre of the button)
  y: 550, // y position (centre of the button)
  w: 300, // width
  h: 90, // height
  label: "9x Terminators", // text shown on the button
};

// ------------------------------
// Main draw function for this screen
// ------------------------------
// drawGame() is called from main.js *only*
// when currentScreen === "game"
function drawWin() {
  // Set background colour for the game screen
  background(38, 49, 76);

  fill("#FFFFFF");
  textAlign(CENTER, CENTER);

  // Main success message
  textSize(40);
  text("FOR THE EMPEROR", width / 2, 160);

  textSize(18);
  text(
    'You chose to fight the Tyranids ahead. "FOR THE EMPEROR" you shout. \n Even with the genetic enhancements that you and your team \n has been blessed upon you, the fight was no easy feat. The horde kept \n their non-stop assault, almost drowning your team in the swarm. \n You nearly lose a member of your squad but you all pull out together \n with the bloodshed dripping down your armor.',
    width / 2,
    280,
  );

  textSize(18);
  text(
    "You move ahead, nearing the hivemind, you are given a radio call on \n the reinforces available around you, who will you bring into the fires of battle?",
    width / 2,
    400,
  );

  fill("#1de649");
  textSize(20);
  text("+ 20 Pts", width / 2, 120);
  // ---- Draw the button ----
  // We pass the button object to a helper function
  winGameButton(gameBtn2);
  winGameButton(gameBtnlose2);

  // ---- Cursor feedback ----
  // If the mouse is over the button, show a hand cursor
  // Otherwise, show the normal arrow cursor
  cursor(isHover(gameBtn2) || isHover(gameBtnlose2) ? HAND : ARROW);
}

// ------------------------------
// Button drawing helper
// ------------------------------
// This function is responsible *only* for drawing the button.
// It does NOT handle clicks or game logic.
function winGameButton({ x, y, w, h, label }) {
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
  textSize(22);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}

// ------------------------------
// Mouse input for this screen
// ------------------------------
// This function is called from main.js
// only when currentScreen === "game"
function winMousePressed() {
  // Only trigger the outcome if the button is clicked
  if (isHover(gameBtn2)) {
    currentScreen = "win2";
  }
  if (isHover(gameBtnlose2)) {
    currentScreen = "win2-1";
  }
}

// ------------------------------
// Keyboard input for this screen
// ------------------------------
// Allows keyboard-only interaction (accessibility + design)
function winKeyPressed() {
  // ENTER key triggers the same behaviour as clicking the button
  if (keyCode === ENTER) {
    wintriggerRandomOutcome();
  }
}

// ------------------------------
// Game logic: win or lose
// ------------------------------
// This function decides what happens next in the game.
// It does NOT draw anything.
function wintriggerRandomOutcome() {
  // random() returns a value between 0 and 1
  // Here we use a 50/50 chance:
  // - less than 0.5 → win
  // - 0.5 or greater → lose
  //
  // You can bias this later, for example:
  // random() < 0.7 → 70% chance to win
  if (random() < 0.5) {
    currentScreen = "win2";
  } else {
    currentScreen = "win2-1";
  }
}
