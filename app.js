let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let h1 = document.querySelector("h1");
  let divv = document.querySelector(".color-box");
  let getColor = getRandom();

  h1.innerText = getColor;
  divv.style.backgroundColor = getColor;
  
});


let getRandom = () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let color = `rgb(${red}, ${green}, ${blue})`;
  return color;
};
