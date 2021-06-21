// Function get Quotes by Random
function Quotes() {
    let RandomQuote = Math.floor(Math.random() * (QuotesByAuthors.length));

    // Random by Quote and Author and Result certain Quote and Author
    ByQuote = QuotesByAuthors[RandomQuote].quote;
    ByAuthor = QuotesByAuthors[RandomQuote].author;


    // Display acquired Quoute and Author on HTML file (screen)
    document.getElementById("Quote").innerHTML = ByQuote;
    document.getElementById("Author").innerHTML = ByAuthor;
}



// // Reload Button Second Solution
// let Reload = document.getElementById("ReLoadButton");
// Reload.addEventListener("click", Quotes);



// A list of 16 motivation Quotes along with there authors
var QuotesByAuthors = [
    {
        quote: "You'll see it when you believe it. ",
        author: "Wayne Dyer",
    },

    {
        quote: "Be the chief but never the lord.",
        author: "Lao Tzu",
    },

    {
        quote: "Nobody will believe in you unless you believe in yourself.",
        author: "Liberace",

    },
    {
        quote: "Yesterday I dared to struggle. Today I dare to win.",
        author: "Bernadette Devlin",

    },
    {
        quote: "What worries you masters you.",
        author: "Haddon Robinson",

    },
    {
        quote: "Trouble is only opportunity in work clothes.",
        author: "Henry J. kaiser",

    },
    {
        quote: "You can observe a lot just by watching.",
        author: "Yogi Berra",

    },
    {
        quote: "Learn as if you will live forever, live like you will die tomorrow.",
        author: "Mahatma Gandhi",

    },
    {
        quote: "When you change your thoughts, remember to also change your world.",
        author: "Norman Vincent Peale",

    },
    {
        quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
        author: "Winston S. Churchill",

    },
    {
        quote: "It is better to fail in originality than to succeed in imitation.",
        author: "Herman Melville",

    },
    {
        quote: "Success usually comes to those who are too busy looking for it.",
        author: "Henry David Thoreau",

    },
    {
        quote: "I never dreamed about success. I worked for it.",
        author: "Estée Lauder",

    },
    {
        quote: "Don’t let yesterday take up too much of today.",
        author: "Will Rogers",

    },
    {
        quote: "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.",
        author: "Steve Jobs",

    },
    {
        quote: "To know how much there is to know is the beginning of learning to live.",
        author: "Dorothy West",

    },
]