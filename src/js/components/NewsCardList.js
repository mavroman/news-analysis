export class NewsCardList {
    constructor(container, createCardcallback) {
        this.container = container;
        this.createCardcallback = createCardcallback;
    }

    addCard(source, publishedAt, title, description, urlToImage, url) {
        const card = this.createCardcallback(source, publishedAt, title, description, urlToImage, url);
        this.container.append(card);
    }

    render(array) {
        array.forEach((elem) => {
            this.addCard(elem.source.name, elem.publishedAt, elem.title, elem.description, elem.urlToImage, elem.url);
           
        });
    }


}