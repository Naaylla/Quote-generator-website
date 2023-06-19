// Event listener for when the DOM is fully loaded
window.addEventListener("DOMContentLoaded", displayFavoriteQuotes);

// Function to display favorite quotes
function displayFavoriteQuotes() {
  const quoteBox = document.getElementById("FavQuotesBox");
  const favoriteQuotes = JSON.parse(localStorage.getItem("favoriteQuotes"));

  // Check if favorite quotes exist and there is at least one quote
  if (favoriteQuotes && favoriteQuotes.length > 0) {
    // Iterate through each favorite quote
    favoriteQuotes.forEach((quoteObject) => {
      const favoriteQuoteBox = document.createElement("div");
      favoriteQuoteBox.classList.add("favorite-quote-box");

      const quoteParagraph = document.createElement("p");
      quoteParagraph.textContent = quoteObject.quote;
      quoteParagraph.classList.add("quote-text");

      // Add event listener to the quote box
      favoriteQuoteBox.addEventListener("click", () => {
        const confirmation = confirm("Do you want to delete this quote?");
        if (confirmation) {
          // Delete the quote from local storage
          const index = favoriteQuotes.findIndex((q) => q.quote === quoteObject.quote);
          if (index > -1) {
            favoriteQuotes.splice(index, 1);
            localStorage.setItem("favoriteQuotes", JSON.stringify(favoriteQuotes));
          }

          // Remove the quote box from the UI
          favoriteQuoteBox.remove();

          // Check if all quotes have been deleted
          if (favoriteQuotes.length === 0) {
            displayNoQuotesMessage();
          }
        }
      });

      favoriteQuoteBox.appendChild(quoteParagraph);
      quoteBox.appendChild(favoriteQuoteBox);
    });

  } else {
    displayNoQuotesMessage();
  }
}

// Function to display "No favorite quotes found" message
function displayNoQuotesMessage() {
  const quoteBox = document.getElementById("FavQuotesBox");

  // Clear any existing content
  quoteBox.innerHTML = "";

  // Display the message
  const noQuotesMessage = document.createElement("p");
  noQuotesMessage.textContent = "No favorite quotes found.";
  noQuotesMessage.classList.add("no-quotes-message");
  quoteBox.appendChild(noQuotesMessage);
}
