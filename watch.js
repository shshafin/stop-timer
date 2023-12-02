let timer;
let changeNum = 0;

// btn-1
const btn1 = () => {
  timer = setInterval(() => {
    changeNum++;
    update();
  }, 700);
};

// btn-2
const btn2 = () => {
  clearInterval(timer);
};

// btn-3
const btn3 = () => {
  clearInterval(timer);
  changeNum = 0;
  update();
};

const update = () => {
  const main = document.getElementById("number");
  main.textContent = `${changeNum}`;
};
