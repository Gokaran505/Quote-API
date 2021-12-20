//The fetch() requires only one parameter which is the URL of the resource that you want to fetch:
//The fetch() method returns a Promise so you can use the then() and catch() methods to handle it:
const button = document.getElementById('btn');
const quote = document.getElementById('qoute');
const author = document.getElementById('author');

button.addEventListener('click', Quote);

async function Quote(){
    let response = await fetch('https://api.quotable.io/random');
    const Q = await response.json();
    quote.textContent = `"${Q.content}"`;
    author.textContent = Q.author;

    // let url = 'https://api.quotable.io/random';
    // fetch(url).then(res => res.json())
    // .then(data => {})
}


