let textToCopy = ""; // Declare globally

const getQuote = () => {
  fetch("https://stoic-quotes.com/api/quote")
    .then(response => response.json())
    .then(data => {
      const quote = document.getElementById("quote-text");
      const author = document.getElementById("quote-author");

      quote.textContent = data.text;
      author.textContent = data.author;
      
      textToCopy = `${data.text} - ${data.author}`; 
    })
    .catch(error => console.error("Error:", error));
};

const newQuote = document.getElementById("new-quote");
newQuote.addEventListener("click", () => getQuote());

const copyQuote = document.getElementById("copy-quote");
copyQuote.addEventListener("click", () => {
  if (textToCopy) {
    navigator.clipboard.writeText(textToCopy)
      .then(() => alert("Quote copied! 📋"))
      .catch(err => {
        console.error("Failed to copy:", err);
        alert("Copy failed. Try again!");
      });
  } else {
    alert("No quote available to copy yet!");
  }
});
