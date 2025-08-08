const display = document.getElementById("display");
const sound = document.getElementById("click-sound");

function playSound() {
  sound.currentTime = 0;
  sound.play();
}

function appendValue(value) {
  playSound();
  if (display.value === "0") {
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  playSound();
  display.value = "0";
}

function deleteChar() {
  playSound();
  display.value = display.value.slice(0, -1) || "0";
}

function calculate() {
  playSound();
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
