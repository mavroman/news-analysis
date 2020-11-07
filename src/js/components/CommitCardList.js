export class CommitCardList {
  constructor(container, creatCommitCallback) {
    this.container = container;
    this.creatCommitCallback = creatCommitCallback;
   
  }

  addCommitCard(name, email, date, message, url) {
    const cardCommit = this.creatCommitCallback(
      name,
      email,
      date,
      message,
      url
    );
    this.container.append(cardCommit);
  }

  renderCommitCard(array) {
    array.forEach((elem) => {
      this.addCommitCard(
        elem.commit.committer.name,
        elem.commit.committer.email,
        elem.commit.committer.date,
        elem.commit.message,
        elem.author.avatar_url
      );
      
    });
  }
}
