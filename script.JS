let apiQuotes =[];

// show new quote
function newQuote() {
    //pick a random quote from apiQuotes array 
    const quote = apiQuotes[Math.floor(math.random() * apiQuotes.length)];
    console.log(quote);
}
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes'
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
       //catch the error  
    }
}


// on load
getQuotes();
