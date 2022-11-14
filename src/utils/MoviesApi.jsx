import {configApiMovies} from "./constants.jsx"

class Api{
    constructor ({url, headers}) {
        this.url = url;
        this.headers = headers
};

getMoviesCards() {
    return fetch (`${this.url}beatfilm-movies`, {
        headers: this.headers
    })
    .then(this._checkResponse)
};



_checkResponse(res) {
    if (res.ok) {
        return res.json();
     }
     return Promise.reject(`Ошибка: ${res.status}`);
}
};

const moviesApi = new Api ({
    url: configApiMovies.baseUrl,
    headers: configApiMovies.headers
  }
);

export default moviesApi;