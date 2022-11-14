import {configApiMain} from "./constants.jsx"
import { baseUrl } from "./constants.jsx";

class Api{
    constructor ({url, headers}) {
        this.url = url;
        this.headers = headers
};

getUserInfo() {
    return fetch (`${this.url}/users/me`, {
        credentials: 'include',
        headers: this.headers
    })
    .then(this._checkResponse)
};

editProfile(data) {
    return fetch (`${this.url}/users/me`, {
        credentials: 'include',
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify(data)
        })
        .then(this._checkResponse)
};

registration (name, email, password) {
  return fetch(`${this.url}/signup`, {
    credentials: 'include',
    method: 'POST',
    headers: this.headers,
    body: JSON.stringify({name, email, password})
  })
  .then(res => this._checkResponse(res))
};

authorize(email, password) {
  return fetch(`${this.url}/signin`, {
    credentials: 'include',
    method: 'POST',
    headers: this.headers,
    body: JSON.stringify({email, password})
  })
  .then(res => this._checkResponse(res))
};

getContent() {
  return fetch(`${this.url}/users/me`, {
    credentials: 'include',
    method: 'GET',
    headers: this.headers
  })
  .then(res => this._checkResponse(res))
};

logout() {
  return fetch(`${this.url}/signout`, {
    credentials: 'include',
      method: 'POST',
      headers: this.headers
  })
  .then(res => this._checkResponse(res));
};













_checkResponse(res) {
    if (res.ok) {
        return res.json();
     }
     return Promise.reject(`Ошибка: ${res.status}`);
}
};

const api = new Api ({
    url: configApiMain.baseUrl,
    headers: configApiMain.headers
  }
);

export default api;