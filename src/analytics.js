import "./pages/analytics.css";
import { parsNewDate } from "./js/utils/parsNewDate";

const resultStatistics = document.querySelector(".statistics__result");
const resultNews = document.querySelector(".statistics__news");
const statisticsNews = document.getElementById("statist");
const objectNumber = document.querySelectorAll(".analytics__new-number");
const percentNews = document.querySelectorAll(".analytics__chart");
const objectCard = document.querySelectorAll(".analytics__date");

const inputResult = localStorage.getItem("search-name");
const showLocal = localStorage.getItem("cards");
const showLocalParse = JSON.parse(showLocal);
const result = showLocalParse.articles;

const newResTitle = result.filter(elem => elem.title.indexOf(inputResult) != -1).length;
const arrayKeywordsTitle = result.filter(elem => elem.title.indexOf(inputResult) != -1); // массив с ключевым словом в title
const arrayKeywordsDescription = result.filter(elem => elem.description.indexOf(inputResult) != -1); //массив с ключевым словом в description 


statisticsNews.textContent = `Упоминаний в заголовках: ${newResTitle}`;
resultStatistics.textContent = `Вы спросили: «${inputResult}»`;
resultNews.textContent = `Новостей за неделю:  ${JSON.stringify(showLocalParse.totalResults)}`;

result.sort(function(a, b){
  const dateA=new Date(a.publishedAt), dateB=new Date(b.publishedAt)
  return dateA - dateB //сортировка по возрастающей дате
  })

let date = new Date();
const newArrayDates= [];
const opt =  ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
 
  for (let i = 0; i < 7; i++, date.setDate(date.getDate() - 1)) {
   newArrayDates.push(date.getDate() + ", " + opt[date.getDay()]); 
  }
newArrayDates.reverse();


objectCard.forEach((item, i) => {
  item.textContent = newArrayDates[i]
})

const arrayDatesTitle = [] 
arrayKeywordsTitle.forEach(e => {
  arrayDatesTitle.push(parsNewDate(e.publishedAt)) // получаем массив с датами (по ключевому слову в title)
});

const arrayDatesDescription = []
arrayKeywordsDescription.forEach(e => {
  arrayDatesDescription.push(parsNewDate(e.publishedAt)) // получаем массив с датами (по ключевому слову в description )
});

const currentDatesTitle = [];
arrayDatesTitle.forEach(e => {
  currentDatesTitle[e] = (currentDatesTitle[e] || 0) + 1;  // считаем количество в каждой из семи дат в title
})

const currentDatesDescription = [];
arrayDatesDescription.forEach(e => {
  currentDatesDescription[e] = (currentDatesDescription[e] || 0) + 1;  // считаем количество каждой из семи дат в description
})

const arrayOne = Object.values(currentDatesTitle); // получаем значения из полученного массива 
const arrayTwo = Object.values(currentDatesDescription);


const newArray = [];
let length;
if(arrayOne.length >= arrayTwo.length){
  length = arrayOne.length 
} else{
  length = arrayTwo.length
}
for(let i = 0; i < length; i++){
  const oneArr = arrayOne[i] === undefined ? 0 : arrayOne[i];
  const twoArr = arrayTwo[i] === undefined ? 0 : arrayTwo[i];
  newArray.push(oneArr + twoArr)
 }

 objectNumber.forEach((item, i) => {
  item.textContent = newArray[i];
 })

percentNews.forEach((item, i) => {
  item.style.width = `${newArray[i]}%`
}) 

