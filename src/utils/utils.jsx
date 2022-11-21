import { useEffect, useState, useCallback } from "react";

export const filterSearch = (cards, searchFilmQuery) => {
    return cards.filter(item => item.nameRU.toLowerCase().includes(searchFilmQuery.toLowerCase()));
};

export const shortFiterFilms = (spisokFilmov) =>{
    return spisokFilmov.filter(item => item.duration < 40);
};

export const filterMovieCardsUser = (massiveSaveMovie, id) => {
    return massiveSaveMovie.filter(item => item.owner === id);
};

export const useGetWidthWindow = () => {
    const getWidthWindow = useCallback(()=> window.innerWidth, [])
    const [widthWindow, setWidthWindow] = useState(getWidthWindow);
    useEffect(() => {
        let sizeTimeout;
        const handleSize = () => {
          if (!sizeTimeout) {
            sizeTimeout = setTimeout(() => {
              setWidthWindow(getWidthWindow());
              sizeTimeout = null;
            }, 1000);
          }
    }
    window.addEventListener('resize', handleSize);
    return () => window.removeEventListener('resize', handleSize);
  }, [getWidthWindow]);
  return widthWindow;
}

export const getErrorMessage = (errCode) => {
  if (errCode === 401) {
    return ("Отказ в доступе")
  };

  if (errCode === 409) {
    return ("Пользователь с такими данными уже существует")
  };

  if (errCode === 401) {
    return ("Отказ в доступе")
  };

  if (errCode === 401) {
    return ("Отказ в доступе")
  };

  if (errCode === 401) {
    return ("Отказ в доступе")
  };

}