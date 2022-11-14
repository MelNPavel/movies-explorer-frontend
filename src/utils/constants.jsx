const myJwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmY0MTUyMTYzOTBhNDAwMTQ2OTYxMDkiLCJpYXQiOjE2NjAxNjM1MDN9.nMr1EsDiPO1LmmC1oksqDJ3elyXwpbkbU7NEKQBeuH4";

const configApiMain = {
  baseUrl: '//localhost:4000',
  headers: {    
    'Content-Type': 'application/json'
  },
};

const configApiMovies = {
  baseUrl: 'https://api.nomoreparties.co/',
  headers: {    
    'Content-Type': 'application/json'
  },
};

const userAvatar = '.profile__avatar'
const userName ='.profile__info-name';
const userAbout ='.profile__info-about';
const userData = {
  name: userName,
  about: userAbout,
  avatar: userAvatar
};

export {
    userAvatar,
    userName,
    userAbout,
    userData,
    myJwt,
    configApiMovies,
    configApiMain
}