import Header from "./components/Header";
import Quote from "./components/Quote";

export default () => {
    header();
    navQuote();
}

const appElement = document.querySelector('.app')

function header() {
    const headerElement = document.querySelector('.header')
    headerElement.innerHTML = Header();
}


function navQuote() {
    const navQuote = document.querySelector('.nav__quote')
    navQuote.addEventListener('click', function(){
        appElement.innerHTML= Quote();
        getQuoteButton();
    })
}

function getQuoteButton() {
    const quoteButton = document.querySelector('.quote-button')
    quoteButton.addEventListener('click', function(){
        getQuote();
    })
}

function getQuote() {
    fetch('https://api.kanye.rest')
    .then(response => response.json())
    .then(quote => {
        const kanyeQuote = document.querySelector('.kanye-quote');
            kanyeQuote.innerText = quote.quote; 
    })
    
}