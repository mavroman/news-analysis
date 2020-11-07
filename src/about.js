import "./pages/about.css";
import { GithubApi } from "./js/modules/GithubApi";
import { CommitCard } from "./js/components/CommitCard";
import { CommitCardList } from "./js/components/CommitCardList";
import {swiper} from "./js/constants/Swiper";
import {parsNewDate} from "./js/utils/parsNewDate";


const listCommit = document.querySelector(".swiper-wrapper");
const commitCardList = new CommitCardList(listCommit, creatCommitCallback);
const githubApi = new GithubApi();

function creatCommitCallback(name,email,date,message,url) {
    return new CommitCard(name,email,date,message,url,parsNewDate).creatCommitCard();
}

githubApi.getCommits().then((res) => {
  commitCardList.renderCommitCard(res);
 })
.catch((err) => console.log(err));

