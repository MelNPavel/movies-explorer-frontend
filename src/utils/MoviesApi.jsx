import {configApiMovies} from "./constants.jsx"

class Api{
    constructor ({url, headers}) {
        this.url = url;
        this.headers = headers
};

getTasksCards() {
    return fetch (`${this.url}/cards`, {
        credentials: 'include',    
        headers: this.headers
    })
    .then(this._checkResponse)
};

addUser(inputsUserHandle) {
    const body = {about: inputsUserHandle.about, name: inputsUserHandle.name}
    return fetch (`${this.url}/users/me`, {
        credentials: 'include',    
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify(body)
            }
    )
    .then(this._checkResponse)
};

addCard(inputsValue) {
    const body = {name: inputsValue.name, link: inputsValue.link}
    return fetch (`${this.url}/cards`, {
        credentials: 'include',
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(body)
        }
    )
    .then(this._checkResponse)
};

deleteCard(cardId) {
    return fetch (`${this.url}/cards/${cardId}`,{
        credentials: 'include',
        method: 'DELETE',
        headers: this.headers,
    })
    .then(this._checkResponse)
};

likePut(cardId) {
    return fetch (`${this.url}/cards/${cardId}/likes`,{
        credentials: 'include',
        method: 'PUT',
        headers: this.headers,
    })
    .then(this._checkResponse)
};

likeUnPut(cardId) {
    return fetch (`${this.url}/cards/${cardId}/likes`,{
        credentials: 'include',
        method: 'DELETE',
        headers: this.headers,
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