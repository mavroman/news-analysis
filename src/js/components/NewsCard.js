export class NewsCard {
  constructor(source, publishedAt, title, description, urlToImage, url, parsNewDate) {
    this.source = source;
    this.publishedAt = publishedAt;
    this.title = title;
    this.description = description;
    this.urlToImage = urlToImage;
    this.url = url;
    this.parsNewDate = parsNewDate;
  }
  createCard() {
    const template = ` <div class="news-card">
            <a href="${this.url}" class="news-card__link">
            <div class="news-card__block-image">
              <img
                src="${this.urlToImage}"
                alt="Картинка из новостей"
                class="news-card__image"
              />
              </div>
              <div class="news-card__description">
                <p class="news-card__date"></p>
                <h3 class="news-card__title"></h3>
                <p class="news-card__subtitle"></p>
              </div>
              <p class="news-card__resource"></p>
            </a>
          </div> `;
    const element = document.createElement("div");
    element.insertAdjacentHTML("afterbegin", template.trim());
    const newTask = element.firstElementChild;
    newTask.querySelector(".news-card__title").textContent = this.title;
    newTask.querySelector(".news-card__subtitle").textContent = this.description;
    newTask.querySelector(".news-card__resource").textContent = this.source;
    newTask.querySelector(".news-card__date").textContent =  this.parsNewDate(this.publishedAt);
    this.newTask = newTask;
    return newTask;
  }

 

  
}
