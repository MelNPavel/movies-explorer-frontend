import {configApiMain} from "../constants/constants.jsx"

class Api{
    constructor ({url, headers}) {
        this.url = url;
        this.headers = headers
};

_checkResponse(res) {
  if (res.ok) {
      return res.json();
  }else{
      return Promise.reject(res)};
}

getUserInfo() {
    return fetch (`${this.url}/users/me`, {
        credentials: 'include',
        headers: this.headers
    })
    .then(this._checkResponse)
};
// getContent() {
//   return fetch (`${this.url}/users/me`, {
//     credentials: 'include',
//     method: 'GET',
//     headers: this.headers
//   })
//   .then(this._checkResponse)
// };

editProfile(data) {
    return fetch (`${this.url}/users/me`, {
        credentials: 'include',
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify(data)
        })
        .then(this._checkResponse)
};

registration(name, email, password) {
  return fetch(`${this.url}/signup`, {
    credentials: 'include',
    method: 'POST',
    headers: this.headers,
    body: JSON.stringify({name, email, password})
  })
  .then(this._checkResponse)
};

authorize(email, password) {
  return fetch(`${this.url}/signin`, {
    credentials: 'include',
    method: 'POST',
    headers: this.headers,
    body: JSON.stringify({email, password})
  })
  .then(this._checkResponse)
};


logout() {
  return fetch(`${this.url}/signout`, {
    credentials: 'include',
      method: 'POST',
      headers: this.headers
  })
  .then(this._checkResponse);
};

getSaveCards() {
  return fetch (`${this.url}/movies`, {
      credentials: 'include',
      headers: this.headers
  })
  .then(this._checkResponse)
};

addCard(data) {
  console.log(data)
  return fetch (`${this.url}/movies`, {
      credentials: 'include',
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data)
      }
  )
  .then(this._checkResponse)
};

deleteCard(cardId) {
  return fetch (`${this.url}/movies/${cardId}`,{
      credentials: 'include',
      method: 'DELETE',
      headers: this.headers,
  })
  .then(this._checkResponse)
};
};

const api = new Api ({
    url: configApiMain.baseUrl,
    headers: configApiMain.headers
  }
);

export default api;