💬 Quote Generator
A sleek and simple web-based quote generator that fetches inspirational quotes from an API, keeps track of recent ones, and allows users to navigate through previously displayed quotes.

✨ Features
🔄 Fetches a new quote from an API each time the button is clicked

🧠 Remembers the last five quotes for quick access

⬅️➡️ Lets users navigate through previous quotes

📋 Includes a Copy Quote button

🌙 Supports Dark Mode for accessibility and user comfort

🚀 Installation & Usage
1️⃣ Setup
Clone this repository or download the project files manually

Make sure index.html, style.css, and script.js are in the same directory

Ensure your device is connected to the internet to fetch quotes from the API

2️⃣ Run the App
Open index.html in any modern web browser

Click "New Quote" to fetch a fresh quote

Use the < and > buttons to navigate through stored quotes

Click "Copy Quote" to copy the current quote to your clipboard

Use the Dark Mode toggle for a theme switch

📁 Project Structure
bash
Copy
Edit
/phase-1-project-quote-generator
├── index.html       # Main HTML file
├── style.css        # Styles for layout and themes
└── script.js        # JavaScript logic for quote handling
🧠 Core JavaScript Logic
fetchNewQuote() – Fetches a new quote from the API and updates the view

displayQuote(index) – Displays a quote from the history stack

setupNavButtons() – Creates previous/next buttons as needed

updateButtonVisibility() – Manages visibility of navigation buttons

🔗 API Used
Stoic Quotes API – Delivers motivational and philosophical quotes

🌱 Future Enhancements
Add a loading animation while fetching new quotes

Implement smooth transitions for quote changes

Allow users to favorite and save quotes locally

Built with ❤️ to inspire and motivate.