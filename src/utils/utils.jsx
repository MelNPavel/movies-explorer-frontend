export const filterSearch = (cards, searchFilmQuery) => {
    return cards.filter(item => item.nameRU.toLowerCase().includes(searchFilmQuery.toLowerCase()));
}

export const shortFiterFilms = (spisokFilmov) =>{
    return spisokFilmov.filter(item => item.duration < 40);
}