document.addEventListener("DOMContentLoaded", fetchNewQuote);
let textToCopy = "";
const oldQuote = [];
const quoteElement = document.getElementById("quote-text");
const authorElement = document.getElementById("quote-author");
let currentQuoteIndex = -1;
let previous, after; 

// Function to display a quote
function displayQuote(index) {
    if (index >= 0 && index < oldQuote.length) {
        const quoteObj = oldQuote[index];
        quoteElement.textContent = quoteObj.text;
        authorElement.textContent = quoteObj.author;
        textToCopy = `${quoteObj.text} - ${quoteObj.author}`;
    }
    updateButtonVisibility(); // Ensure buttons update after displaying quote
}

// Navigation buttons setup (only runs once)
function setupNavButtons() {
    if (oldQuote.length > 0 && !document.querySelector(".navContainer")) {
        const navContainer = document.createElement("div");
        navContainer.classList.add("navContainer");

        const labelElement = document.querySelector(".toggle-dark");
        labelElement.parentNode.insertBefore(navContainer, labelElement);

        previous = document.createElement("button"); 
        after = document.createElement("button");

        previous.textContent = "<";
        after.textContent = ">";
        previous.classList.add("previous");
        after.classList.add("after");

        navContainer.appendChild(previous);
        navContainer.appendChild(after);

        navContainer.style.display = "flex";
        navContainer.style.flexDirection = "row";
        navContainer.style.alignItems = "center";
        navContainer.style.justifyContent = "center";

        //  Add event listeners
        previous.addEventListener("click", () => {
            if (currentQuoteIndex > 0) {
                currentQuoteIndex--;
                displayQuote(currentQuoteIndex);
            }
        });

        after.addEventListener("click", () => {
            if (currentQuoteIndex < oldQuote.length - 1) {
                currentQuoteIndex++;
                displayQuote(currentQuoteIndex);
            }
        });

        updateButtonVisibility(); // Ensure buttons are correctly visible on creation
    }
}

// Function to dynamically update button visibility
function updateButtonVisibility() {
    if (previous && after) { // Ensure buttons exist before modifying their styles
        previous.style.display = oldQuote.length >= 2 ? "inline-flex" : "none";
        after.style.display = currentQuoteIndex < oldQuote.length - 1 ? "inline-flex" : "none";
    }
}


// Fetch and store new quotes
function fetchNewQuote() {
   
        fetch("https://stoic-quotes.com/api/quote")
        .then(response => response.json())
        .then(data => {
            const quoteObject = {
                text: data.text,
                author: data.author
            };

            oldQuote.push(quoteObject);
            if (oldQuote.length > 5) oldQuote.shift(); //  Keep only last 5 quotes

            currentQuoteIndex = oldQuote.length - 1;
            displayQuote(currentQuoteIndex); //  Ensure quote is displayed
            setupNavButtons(); //  Create buttons when needed
        })
        .catch(error => {
            console.error("Error:", error);
            quoteElement.textContent = "Failed to load quote. Try again!";
        });
    }


    


//  Event listeners
document.getElementById("new-quote").addEventListener("click", fetchNewQuote);
document.getElementById("copy-quote").addEventListener("click", () => {
    if (textToCopy) {
        navigator.clipboard.writeText(textToCopy)
            .then(() => alert("Quote copied! 📋"))
            .catch(() => alert("Copy failed. Try again!"));
    } else {
        alert("Generate a quote first!");
    }
});
document.getElementById("dark-mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
