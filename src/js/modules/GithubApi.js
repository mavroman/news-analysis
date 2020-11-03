export class GithubApi {
  constructor(swiperInit) {
      this.swiperInit = swiperInit;
  }

  getCommits() {
    return fetch('https://api.github.com/repos/mavroman/news-analysis/commits', 

    ).then((res) => {
        
        if (!res.ok) {     //если запрос выполнился неудачно возвращаем отклоненный промис
          return Promise.reject(`Ошибка: ${res.status}`); 
          
        }
        return res.json() //если res.ok===true возвращаем результат запроса
       
      
      })
  }

 
}
