import quote from "./quote";

let quoteText = document.querySelector(".quote");
let generateBtn = document.querySelector(".generate-btn");

generateBtn.addEventListener("click", () => {
  generateQuote();
  console.log("hello from generate btn");
});

function generateQuote() {
  let generateQuote = quote[generateRandom()];
  quoteText.innerHTML = generateQuote;
}
function generateRandom() {
  return Math.floor(Math.random() * quote.length);
}
