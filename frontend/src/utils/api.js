
  
  class Api {
    constructor(baseUrl, headers) {
      this._baseUrl = baseUrl;
      this._headers = headers;
      this.fetchCall = this.fetchCall.bind(this);
    }

    fetchCall(url, headers) {
      return fetch(url, headers)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
    
          Promise.reject(`ERROR: ${res.statusText}`);
        })
    };
  
    //Get user info from server:
    getUserInfo() {
      return this.fetchCall(`${this._baseUrl}/users/me`, {
        headers: this._headers,
      });
    }
  
    //Update user avatar:
    setUserAvatar(data) {
      return this.fetchCall(`${this._baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          //New avatar link:
          avatar: data.avatar,
        })
      });
    }

    //Get initial cards from server:
    getInitialCards() {
      return this.fetchCall(`${this._baseUrl}/cards`, {
        method:"GET",
        headers: this._headers,
      });
    }
  
    //Send new profile data to server:
    setUserInfo(obj) {
      return this.fetchCall(`${this._baseUrl}/users/me`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          //New profile data:
          name: obj.name,
          about: obj.about,
        }),
      });
    }
  
    //Add new card:
    createNewCard(obj) {
      return this.fetchCall(`${this._baseUrl}/cards`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({
          //New card data:
          name: obj.name,
          link: obj.link,
        }),
      });
    }
  
    //Delete card:
    deleteCard(cardId) {
      return this.fetchCall(`${this._baseUrl}/cards/${cardId}`, {
        method: "DELETE",
        headers: this._headers,
      });
    }
  
    //Add like to card:
    _addLike(cardId) {
      return this.fetchCall(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: "PUT",
        headers: this._headers,
      });
    }
  
    //Remove like from card:
    _dislike(cardId) {
      return this.fetchCall(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: "DELETE",
        headers: this._headers,
      });
    }

    //toggle likes:
    changeLikeCardStatus(cardID, isLiked){
      if (isLiked){
        return this._dislike(cardID);
      } else {
        return this._addLike(cardID);
      }
    }
  }
  
  const api = new Api("http://localhost:3000", {
    authorization: `Bearer ${localStorage.jwt}`,
    "Content-Type": "application/json",
  });
  
  export default api;