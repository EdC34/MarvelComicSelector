const appDiv = document.querySelector('.app');
const appHeader = document.querySelector('.header');
let comicBtn;

const navElement = function(){
    appHeader.innerHTML= nav();
    comicBtn = document.querySelector('.nav__section__comic');
    comicBtn.addEventListener('click', function(){
        alert('new comic here')
        getComic()
        loadComic()
    })
}

const nav = function(){
    return `
    <div class="nav__section">
    
    <h3 class="nav__section__items nav__section__comic">Pick a new comic!</h3>
    <a class="nav__section_api-link" href="https://developer.marvel.com/documentation/getting_started" target="_blank"></a><h3 class="nav__section__items nav__section__api">Marvel API</h3>
    </div>
    `
}


const getComic = function(){
    fetch(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=020fa7dbd3dcaff71a1a678e2899dc21&hash=4b613b8ecf29c7f2cc38c226e6fa0aea title:*&sort=random&size=1`)
    .then(res => res.json())
    .then(comic => {
        const comicTitle = comic.records[0].title;
        const comicIssue = comic.records[0].issueNumber;
        const comicImageURL = comic.records[0].thumbnail;
        const comicURL = comic.records[0].url;
        console.log(comicTitle);
        console.log(comicIssue);
        console.log(comicImageURL);
        console.log(comicURL);
        appDiv.innerHTML = loadComic(comicTitle, comicIssue, comicImageURL, comicURL);
    })
    .catch(err => console.log(err))
}

const loadComic = function(comicTitle, comicIssue, comicImageURL, comicURL){
            return `
            <h3 class="app__comic-title">${comicTitle}</h3>
            <h3 class="app__comic-issue">${comicIssue}</h3>
            <a class="app__comic-url" href='${comicURL}' target='_blank'><img class="app__comic-image-url" src='${comicImageURL}'></a>
            `
        }

navElement();  