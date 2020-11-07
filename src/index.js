import { FormValidator } from "./js/utils/FormValidator";
import { NewsApi } from "./js/modules/NewsApi";
import { NewsCard } from "./js/components/NewsCard";
import { NewsCardList } from "./js/components/NewsCardList";
import { parsNewDate } from "./js/utils/parsNewDate";
import {newArrayDate, list, preloader, buttonShow, blockSearch, notFound, errorServer, searchInput, dataInput, buttonNew, clear, errorMessage } from "./js/constants/constants";
import "./pages/style.css";

(function() {

let date = new Date();
const parsedDateTo = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
const parsedDateFrom = returnLastItem(newArrayDate); 

const url = "https://nomoreparties.co/news/v2/everything?";
const dates = `from=${parsedDateFrom}&to=${parsedDateTo}&`;
const lang = "language=ru&";
const key = "apiKey=c4cb18a55ba6456d9d21c21558409a17";

function returnLastItem(arr) {
  return arr[arr.length - 1];
}

const newsCardList = new NewsCardList(list, createCardCallback);
const addValid = new FormValidator(form, errorMessage, clear);
const api = new NewsApi(url, dates, lang, key);


function createCardCallback(source, publishedAt, title, description, urlToImage, url) {
  return new NewsCard(source, publishedAt, title, description, urlToImage, url, parsNewDate).createCard();
}

function addNews(e) {
  e.preventDefault();
  blockSearch.style.display = "none";

  if (addValid.isValidate(dataInput)) {
    preloader.style.display = "block";
    notFound.style.display = "none";
    localStorage.clear();
    buttonNew.setAttribute("disabled", "disabled");

    api
      .getNews()
      .then((res) => {
        buttonNew.removeAttribute("disabled");
        localStorage.setItem("cards", JSON.stringify(res));
        localStorage.setItem("search-name", searchInput.value);

        if (res.articles.length === 0) {
          preloader.style.display = "none";
          notFound.style.display = "block";
          blockSearch.style.display = "none";
          localStorage.clear();
        } else {
          newsCardList.render(res.articles);
          notFound.style.display = "none";
          preloader.style.display = "none";
          blockSearch.style.display = "block";
          location.reload();
        }
      })
      .catch((err) => {
        errorServer.style.display = "block",
          preloader.style.display = "none",
          (notFound.style.display = "none"),
          (blockSearch.style.display = "none");

        console.log(err);
      });
  } else {
    addValid.setSubmitButtonState(buttonNew, false);
    addValid.validFieldInput(dataInput);
  }
  addValid.setListeners();
}

buttonNew.addEventListener("click", addNews);


let currentCard = 3;

function buttonShowMore() {
  currentCard = currentCard + 3;
  return currentCard;
}

const showLocal = localStorage.getItem("cards");
const showLocalParse = JSON.parse(showLocal);

buttonShow.addEventListener("click", () => {
  newsCardList.render(
    showLocalParse.articles.slice(currentCard, currentCard + 3)
  );
  buttonShowMore();
  if (currentCard >= showLocalParse.totalResults || currentCard >= 100) {
    buttonShow.style.display = "none";
  } 
});

function showCards() {
  document.querySelector("input").value = localStorage.getItem("search-name");
  newsCardList.render(showLocalParse.articles.slice(0, 3));
  blockSearch.style.display = "block";
}

if (localStorage.length > 1) {
  showCards();
} 

if (localStorage.length > 1 && showLocalParse.totalResults <= 3 ) {
  buttonShow.style.display = "none";
}

})();