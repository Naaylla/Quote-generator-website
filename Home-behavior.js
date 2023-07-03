// Getting into the button "click here"
const button = document.getElementById("btn");
// Adding an action upon clicking on the button
button.addEventListener("click", displayQuote);
// Putting my quotes on a list of objects
const quotes = [
    {
    content: "Despite everything, it's still you.",
    author: "Toby Fox"
    },
    {
    content: "I survived because the fire inside burned brighter than the fire around me..",
    author: "Joshua Graham"
    },
    {
    content: "I have no enemies.",
    author: "Thorfinn - Vinland Saga"
    },
    {
    content: "What is better? To be born good or to overcome your evil nature through great effort?",
    author: "Paarthunax - Skyrim"
    },
    {
        content: "We all make choices in life, but in the end, our choices make us." ,
        author: "Andrew Ryan - BioShock"
    },
    {
        content: "The world is beautiful, but it's also filled with sadness. Take that sadness and turn it into strength.",
        author: "Sword Art Online"
    },
    {
        content: "You don't need a reason to help people.", 
        author: "The Rising of the Shield Hero"
    },
    {
        content: "The color of fate is still red. Even if I'm swept away by the wind, I will never lose my redness.",
        author: "Akagami no shirayuki hime"
    }
];

// Function to generate random quotes
function generateRandomQuote() {
// Using math.floor to generate a random index of the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayQuote() {
    // Acces to the default quote div
    const quoteParagraph = document.getElementById("quoteParagraph");
    // Generate a random quote
    const quote = generateRandomQuote();
    // Display it inside the default div
    quoteParagraph.innerHTML = `${quote.content} - ${quote.author}`;
    // Set some css propreties for the quote text
    quoteParagraph.style.color = "white";
    quoteParagraph.style.textShadow = "-1px -1px 0 lightpink, 1px -1px 0 lightpink, -1px 1px 0 lightpink, 1px 1px 0 lightpink";
    quoteParagraph.style.fontSize = "16px";
    quoteParagraph.style.fontWeight = "400";
    quoteParagraph.style.fontFamily = "Fira Sans";
    quoteParagraph.style.fontSize = "20px";
}

// Acces to the "add-to favorite" button (the heart)
const addToFavorite = document.getElementById("Favorite-Quote-button");
// Adding a event to listener to add the quote to an array when clicking on the button
addToFavorite.addEventListener("click", addToFavorites);

function addToFavorites() {
    // Getting the quote
    const quoteParagraph = document.getElementById("quoteParagraph");
    const quote = quoteParagraph.textContent;
  
    // Store it in the local storage to display it on the other html file
    let favoriteQuotes = localStorage.getItem("favoriteQuotes");
    if (!favoriteQuotes) {
      favoriteQuotes = [];
    } else {
      favoriteQuotes = JSON.parse(favoriteQuotes);
    }
  
    // Check if the quote already exists in favorites
    if (favoriteQuotes.some((favorite) => favorite.quote === quote)) {
      alert("Quote already in favorites!");
      return;
    } else {
      // Add the quote to favorites and update local storage
      favoriteQuotes.push({ quote });
      localStorage.setItem("favoriteQuotes", JSON.stringify(favoriteQuotes));
      alert("Quote successfully added to favorites!");
    }
  }
  
