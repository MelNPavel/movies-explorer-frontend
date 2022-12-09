const myJwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmY0MTUyMTYzOTBhNDAwMTQ2OTYxMDkiLCJpYXQiOjE2NjAxNjM1MDN9.nMr1EsDiPO1LmmC1oksqDJ3elyXwpbkbU7NEKQBeuH4";

const configApiMain = {
  // baseUrl: '//localhost:4000',
  baseUrl: 'https://api.movies-explorer-mpn.nomoredomains.icu',
  headers: {    
    'Content-Type': 'application/json',
    'cache-control': 'no-cache'
  },
};

const configApiMovies = {
  baseUrl: 'https://api.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json'    
  },
};

const WIDTH_SMALL = 767;
const WIDTH_BIG = 1279;
const QUANTITY_CARDS_SMALL = 5;
const QUANTITY_CARDS_AVERAGE = 8;
const QUANTITY_CARDS_MANY = 12;
const QUANTITY_CARDS_MORE_SMALL = 2;
const QUANTITY_CARDS_MORE_MANY = 3;
const FILM_DURATION = 40;


export {
    myJwt,
    configApiMovies,
    configApiMain,
    WIDTH_BIG,
    WIDTH_SMALL,
    QUANTITY_CARDS_SMALL,
    QUANTITY_CARDS_AVERAGE,
    QUANTITY_CARDS_MANY,
    QUANTITY_CARDS_MORE_SMALL,
    QUANTITY_CARDS_MORE_MANY,
    FILM_DURATION
}