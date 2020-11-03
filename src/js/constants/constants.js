const newArrayDate = [];
let date = new Date();
for (let i = 0; i < 7; i++, date.setDate(date.getDate() - 1)) {
  newArrayDate.push(
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  );
}
const list = document.querySelector(".news-list");
const preloader = document.querySelector(".preloader");
const buttonShow = document.querySelector(".button-show");
const blockSearch = document.querySelector(".group-news");
const notFound = document.querySelector(".not-found");
const errorServer = document.querySelector(".error-server");
const searchInput = document.querySelector(".search__input");
const forms = document.forms.form;
const dataInput = forms.elements.data;
const buttonNew = document.querySelector(".button");
const clear = document.querySelector(".error");
const errorMessage = { blank: "Нужно ввести ключевое слово" };

export {
  newArrayDate,
  list,
  preloader,
  buttonShow,
  blockSearch,
  notFound,
  errorServer,
  searchInput,
  forms,
  dataInput,
  buttonNew,
  clear,
  errorMessage
};
