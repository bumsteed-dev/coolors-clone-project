const btnRandom = document.querySelector(".btn-random");
const colorColumn = document.querySelectorAll(".color");
const btnCopy = document.querySelectorAll(".color-copy");
const badgeCopy = document.querySelector(".copy-clipboard-ready");

const generateColor = () => {
  const digits = "0123456789ABCDEF";
  let hex = "";

  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * digits.length);
    hex += digits[index];
  }
  return `${hex}`;
};

const getContrast = (hex) => { 
  const red = parseInt(hex.slice(1, 3), 16);
  const green = parseInt(hex.slice(3, 5), 16);
  const blue = parseInt(hex.slice(5, 7), 16);

  const luminancia = (0.299 * red) + (0.587 * green) + (0.114 * blue);
  return luminancia >= 128 ? "#000000" : "#FFFFFF";
}

const initColor = () => {
  colorColumn.forEach((color) => {
    const colorHex = generateColor();
    color.style.backgroundColor = `#${colorHex}`;
    const colorCode = color.querySelector('.color_code');
    colorCode.textContent = colorHex;
    colorCode.style.color = getContrast(colorHex);

    const colorCodeIcon = color.querySelector(".color-icons");
    colorCodeIcon.style.color = `${getContrast(colorHex)}CC`;
  });
};

initColor();

btnRandom.addEventListener("click", initColor);

window.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    initColor();
  }
});

colorColumn.forEach((color) => { 
  const btnCopyColor = color.querySelector(".color-copy");

  btnCopyColor.addEventListener('click', (e) => {
    const colorCode = color.querySelector('.color_code');
    navigator.clipboard.writeText(`#${colorCode.textContent}`);
    badgeCopy.classList.add("is-visible");

    setTimeout(() => {
      badgeCopy.classList.remove("is-visible");
    }, 2000);
  });
});