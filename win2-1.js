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

// ------------------------------
// Main draw function for this screen
// ------------------------------
// drawGame() is called from main.js *only*
// when currentScreen === "game"
function drawWin21() {
  // Set background colour for the game screen
  background("#25a12d");

  fill("#FFFFFF");
  textAlign(CENTER, CENTER);

  // Main success message
  textSize(40);
  text("For Ultramar (WIN)", width / 2, 160);

  textSize(18);
  text(
    "A squad of terminators arrive at your position. With their plated armor \n and heavy armory, they swiftly mow down the  ravenous beasts before they \n could react. With chains of bolter fire, you run towards the hivemind \n with your chainsword mercilessly denying its final thought. \n Courage and Honour.",
    width / 2,
    280,
  );

  textSize(26);
  text("Press R to go back to the main screen", width / 2, 400);

  fill("#ffffff");
  textSize(20);
  text("+ 180 Pts", width / 2, 120);

  fill("#ffffff");
  textSize(26);
  text("Total Score: 200 PTS", width / 2, 550);
}

// ------------------------------
// Mouse input for this screen
// ------------------------------
// This function is called from main.js
// only when currentScreen === "game"
function win21MousePressed() {
  // Only trigger the outcome if the button is clicked
  currentScreen = "start";
}

// ------------------------------
// Keyboard input for this screen
// ------------------------------
// Allows keyboard-only interaction (accessibility + design)
function win21KeyPressed() {
  // ENTER key triggers the same behaviour as clicking the button
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
