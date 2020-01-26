const output = document.querySelector(".output");
const text = "Hello world,\nIt's time to create...";

function typeEffect(text, maxDelay) {
  let symbolPosition = 0;
  let out = "";

  function typeSymbol() {
    setTimeout(() => {
      out += text[symbolPosition];
      if (symbolPosition % 2 === 0) {
        output.innerText = out;
      } else {
        output.innerText = out + "|";
      }
        symbolPosition++;
        if (symbolPosition === text.length) {
          output.innerText = out;
          return true;
        }
      typeSymbol();
    }, randomDelay(maxDelay));
  }
  typeSymbol();
}

const randomDelay = max => Math.floor(Math.random() * Math.floor(max));

typeEffect(text, 300);
