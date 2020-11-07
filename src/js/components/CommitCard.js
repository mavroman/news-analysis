export class CommitCard {
  constructor(name, email, date, message, url,parsNewDate) {
    this.name = name;
    this.email = email;
    this.date = date;
    this.message = message;
    this.url = url;
    this.parsNewDate = parsNewDate;
  }

  creatCommitCard() {
    const templateCommit = `<div class="swiper-slide">
    <div class="commits__card">
      <a href="https://github.com/mavroman/news-analysis" class="commits__link">
        <p class="commits__date"></p>
        <div class="commits__info">
          <div class="commits__avatar"></div>
          <div class="commits__data">
            <p class="commits__name"></p>
            <p class="commits__email"></p>
          </div>
        </div>
        <h4 class="commits__text">
        
        </h4>
      </a>
    </div>
  </div> `;

    const elementCommit = document.createElement("div");
    elementCommit.insertAdjacentHTML("afterbegin", templateCommit.trim());
    const newTaskCommit = elementCommit.firstElementChild;

    newTaskCommit.querySelector(".commits__name").textContent = this.name;
    newTaskCommit.querySelector(".commits__email").textContent = this.email;
    newTaskCommit.querySelector(".commits__date").textContent = this.parsNewDate(this.date);
    newTaskCommit.querySelector(".commits__text").textContent = this.message;
    newTaskCommit.querySelector(".commits__avatar").style.backgroundImage =
    "url(" + this.url + ")";

    this.newTaskCommit = newTaskCommit;
    return newTaskCommit;
  }
}
