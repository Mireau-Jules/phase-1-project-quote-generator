

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

