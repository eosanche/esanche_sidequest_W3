// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawLose() → what the lose screen looks like
// 2) input handlers → how the player returns to the start screen

// ------------------------------
// Main draw function for lose screen
// ------------------------------
// drawLose() is called from main.js
// only when currentScreen === "lose"
function drawLose() {
  // Red-tinted background to communicate failure
  background(38, 49, 76);

  fill("#ce2d2d");
  textAlign(CENTER, CENTER);

  // Main success message
  textSize(40);
  text("Only In Death does Duty End... \n (LOSE)", width / 2, 160);

  textSize(18);
  text(
    "You and your team decide to enter the dark tunnel. Your vox coms jams \n and with no map of the area, your team becomes quickly seperated. \n one by one you are slowly picked off by Tyranid forces. \n As you bleed out, the Tyranid forces quickly consume the planet.",
    width / 2,
    280,
  );

  textSize(26);
  text("Press R to go back to the main screen", width / 2, 400);
}

// ------------------------------
// Mouse input for lose screen
// ------------------------------
// Any mouse click returns the player to the start screen
// (no buttons needed for this simple end state)
function loseMousePressed() {
  currentScreen = "start";
}

// ------------------------------
// Keyboard input for lose screen
// ------------------------------
// R is commonly used for “restart” in games
function loseKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
