let gameSeq = [];
let userSeq = [];
let gameStarted = false;
let level = 0;
let h3 = document.querySelector("h3");
let btn = ["red", "yellow", "green", "purple"]


document.addEventListener("keypress", function () {
  if (gameStarted == false) {
    console.log("Game started");
    gameStarted = true;
    levelup();
  }
});
function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);

}

function levelup() {
  userSeq = [];
  level++;
  h3.innerText = `Level ${level}`;

  let randomIdx = Math.floor(Math.random() * 3);
  let randomColor = btn[randomIdx];
  let randomBtn = document.querySelector(`.${randomColor}`);
  // console.log(randomBtn);
  // console.log(randomColor);
  // console.log(randomIdx);
  gameSeq.push(randomColor);
  console.log(gameSeq);

  btnFlash(randomBtn);
}
function checkAns(idx) {
  // console.log(`level : ${level}`)
  //let idx = level - 1
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h3.innerText = `Game over start with a new game`;
    reset();

  }

}
function reset() {
  gameStarted = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}

function btnPress() {
  console.log(this);
  let btn = this;
  btnFlash(btn);
  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  console.log(userSeq);
  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".box")
for (boxa of allBtns) {

  boxa.addEventListener("click", btnPress);
}

