// YOUR CODE HERE
const btn1 = document.querySelector("#btn1");
const output1 = document.querySelector("#output1");
btn1.addEventListener("click", () => {
  output1.style.color = "red";
});

const btn2 = document.querySelector("#btn2");
const output2 = document.querySelector("#output2");
btn2.addEventListener("click", () => {
  const newText = document.createElement("span");
  newText.textContent = "Hello word";
  output2.append(newText);
});

const btn3 = document.querySelector("#btn3");
const output3 = document.querySelector("#output3 p");
btn3.addEventListener("click", () => {
  output3.classList.remove("small-text");
});
