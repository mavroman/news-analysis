export class NewsApi {
  constructor(url, dates, lang, key) {
    this.url = url;
    this.dates = dates;
    this.lang = lang;
    this.key = key;
   
    this.input = document.querySelector(".search__input");
    
  }

  getNews() {
    return fetch(
      this.url + `q=${this.input.value}&` + this.dates + 'sortBy=popularity&' + this.lang + 'pageSize=100&' + this.key
    ).then((res) => {    
      if (!res.ok) {     //если запрос выполнился неудачно возвращаем отклоненный промис
        return Promise.reject(`Ошибка: ${res.status}`); 
      }
      return res.json(); //если res.ok===true возвращаем результат запроса
    })
  }
}
