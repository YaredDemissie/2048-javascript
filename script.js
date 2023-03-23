const NUM = 0;
let sum = 0;
ROW_ONE = NUM;
ROW_TWO = NUM + 4;
ROW_THREE = NUM + 8;
ROW_FOUR = NUM + 12;
let rowArr = [ROW_ONE, ROW_TWO, ROW_THREE, ROW_FOUR];
const delay = ms => new Promise(res => setTimeout(res, ms));

allValues = [
  document.getElementsByClassName("rowOneColOne")[0],
  document.getElementsByClassName("rowOneColTwo")[0],
  document.getElementsByClassName("rowOneColThree")[0],
  document.getElementsByClassName("rowOneColFour")[0],

  document.getElementsByClassName("rowTwoColOne")[0],
  document.getElementsByClassName("rowTwoColTwo")[0],
  document.getElementsByClassName("rowTwoColThree")[0],
  document.getElementsByClassName("rowTwoColFour")[0],

  document.getElementsByClassName("rowThreeColOne")[0],
  document.getElementsByClassName("rowThreeColTwo")[0],
  document.getElementsByClassName("rowThreeColThree")[0],
  document.getElementsByClassName("rowThreeColFour")[0],

  document.getElementsByClassName("rowFourColOne")[0],
  document.getElementsByClassName("rowFourColTwo")[0],
  document.getElementsByClassName("rowFourColThree")[0],
  document.getElementsByClassName("rowFourColFour")[0]
];

function generateNewVal() {
  emptyCellsArray = getEmptyCellsArray();
  emptyCellsArrayLen = emptyCellsArray.length;
  randValue = Math.floor(Math.random() * emptyCellsArrayLen);
  if (randValue < emptyCellsArrayLen - 2) {
    emptyCellsArray[randValue].innerHTML = "2";
    emptyCellsArray[randValue].style.background = "#5678";
    emptyCellsArray[randValue].style.fontSize = "400%";
  } else {
    emptyCellsArray[randValue].innerHTML = "4";
    emptyCellsArray[randValue].style.background = "#5678";
    emptyCellsArray[randValue].style.fontSize = "400%";
  }
  if (allEmptyCells.length == 1) {
    gameover();
  }
}

function getEmptyCellsArray() {
  allEmptyCells = allValues.filter((cell) => cell.innerHTML == "");
  return allEmptyCells;
}

function moveLeft() { 
  for (let i = 0; i < 4; i++) {
    for (let i2 = 0; i2 < 3; i2++) {
      for (let i3 = 0; i3 < 3; i3++) {
        if (allValues[rowArr[i] + i3 + 1].innerHTML && allValues[rowArr[i] + i3].innerHTML == "") {
          allValues[rowArr[i] + i3].innerHTML = allValues[rowArr[i] + i3 + 1].innerHTML;
          allValues[rowArr[i] + i3].style.background = "#5678";
          allValues[rowArr[i] + i3].style.fontSize = "400%";
          allValues[rowArr[i] + i3 + 1].innerHTML = "";
          allValues[rowArr[i] + i3 + 1].style.background = "";
          allValues[rowArr[i] + i3 + 1].style.fontSize = "";
        } else if (allValues[rowArr[i] + i3 + 1].innerHTML && allValues[rowArr[i] + i3].innerHTML) {
          num1 = Number(allValues[rowArr[i] + i3 + 1].innerHTML);
          num2 = Number(allValues[rowArr[i] + i3].innerHTML);
          sum = num1 + num2;
          if (num1 == num2) {
            allValues[rowArr[i] + i3].innerHTML = String(sum);
            allValues[rowArr[i] + i3 + 1].innerHTML = "";
            allValues[rowArr[i] + i3 + 1].style.background = "";
            allValues[rowArr[i] + i3 + 1].style.fontSize = "";
          }
        }
      }
    }
  }
  setTimeout(generateNewVal, 300);
}

function moveRight() {
  for (let i = 0; i < 4; i++) {
    for (let i2 = 3; i2 > 0; i2--) {
      for (let i3 = 3; i3 > 0; i3--) {
        if (allValues[rowArr[i] + i3 - 1].innerHTML && allValues[rowArr[i] + i3].innerHTML == "") {
          allValues[rowArr[i] + i3].innerHTML = allValues[rowArr[i] + i3 - 1].innerHTML;
          allValues[rowArr[i] + i3].style.background = "#5678";
          allValues[rowArr[i] + i3].style.fontSize = "400%";
          allValues[rowArr[i] + i3 - 1].innerHTML = "";
          allValues[rowArr[i] + i3 - 1].style.background = "";
          allValues[rowArr[i] + i3 - 1].style.fontSize = "";
        } else if (allValues[rowArr[i] + i3 - 1].innerHTML && allValues[rowArr[i] + i3].innerHTML) {
          num1 = Number(allValues[rowArr[i] + i3 - 1].innerHTML);
          num2 = Number(allValues[rowArr[i] + i3].innerHTML);
          sum = num1 + num2;
          if (num1 == num2) {
            allValues[rowArr[i] + i3].innerHTML = String(sum);
            allValues[rowArr[i] + i3 - 1].innerHTML = "";
            allValues[rowArr[i] + i3 - 1].style.background = "";
            allValues[rowArr[i] + i3 - 1].style.fontSize = "";
          }
        }
      }
    }
  }
  setTimeout(generateNewVal, 300);
}

function moveUp() {
  for (let i = 0; i < 4; i++) {
    for (let i2 = 0; i2 < 4; i2++) {
      for (let i3 = 0; i3 < 12; i3+=4) {
        if (allValues[i + i3 + 4].innerHTML && allValues[i + i3].innerHTML == "") {
          allValues[i + i3].innerHTML = allValues[i + i3 + 4].innerHTML;
          allValues[i + i3].style.background = "#5678";
          allValues[i + i3].style.fontSize = "400%";
          allValues[i + i3 + 4].innerHTML = "";
          allValues[i + i3 + 4].style.background = "";
          allValues[i + i3 + 4].style.fontSize = "";
        } else if (allValues[i + i3].innerHTML && allValues[i + i3 + 4].innerHTML) {
          num1 = Number(allValues[i + i3].innerHTML);
          num2 = Number(allValues[i + i3 + 4].innerHTML);
          sum = num1 + num2;
          if (num1 == num2) {
            allValues[i + i3].innerHTML = String(sum);
            allValues[i + i3 + 4].innerHTML = "";
            allValues[i + i3 + 4].style.background = "";
            allValues[i + i3 + 4].style.fontSize = "";
          }
        }
      }
    }
  }
  
  setTimeout(generateNewVal, 300);
}

generateNewVal()

function moveDown() {
  for (let i = 0; i < 4; i++) {
    for (let i2 = 0; i2 < 4; i2++) {
      for (let i3 = 0; i3 < 12; i3+=4) {
        if (allValues[i + i3].innerHTML && allValues[i + i3 + 4].innerHTML == "") {
          allValues[i + i3 + 4].innerHTML = allValues[i + i3].innerHTML;
          allValues[i + i3 + 4].style.background = "#5678";
          allValues[i + i3 + 4].style.fontSize = "400%";
          allValues[i + i3].innerHTML = "";
          allValues[i + i3].style.background = "";
          allValues[i + i3].style.fontSize = "";
        } else if (allValues[i + i3 + 4].innerHTML && allValues[i + i3].innerHTML) {
          num1 = Number(allValues[i + i3].innerHTML);
          num2 = Number(allValues[i + i3 + 4].innerHTML);
          sum = num1 + num2;
          if (num1 == num2) {
            allValues[i + i3 + 4].innerHTML = String(sum);
            allValues[i + i3].innerHTML = "";
            allValues[i + i3].style.background = "";
            allValues[i + i3].style.fontSize = "";
          }
        }
      }
    }
  }
  setTimeout(generateNewVal, 300);
}

function gameover() {
  console.log("Game Over");
}

condition = 0;
document.addEventListener("keydown", (e) => {
  if (e.key == "ArrowLeft") {
    moveLeft();
  } else if (e.key == "ArrowRight") {
    moveRight();
  } else if (e.key == "ArrowUp") {
    moveUp();
  } else if (e.key == "ArrowDown") {
    moveDown();
  }
});
