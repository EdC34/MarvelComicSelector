const appDiv = document.querySelector('.app');
const appHeader = document.querySelector('.header');
const publicKey = "020fa7dbd3dcaff71a1a678e2899dc21";
const hash = "299881e8381d53687c732bc629e3eee1";
let comicBtn;

const navElement = function(){
    appHeader.innerHTML= nav();
    comicBtn = document.querySelector('.nav__section__comic');
    comicBtn.addEventListener('click', function(){
        getComic()
        loadComic()
    })
}

const nav = function(){
    return `
    <div class="nav__section">
    
    <h3 class="nav__section__items nav__section__comic">Pick a new comic!</h3>
    <a class="nav__section_api-link" href="http://marvel.com" target="_blank"><h3 class="nav__section__items nav__section__api-link"> Marvel API</h3></a>
    </div>
    `
}

 function getRandomComic (min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
 }

const getComic = function(){
    fetch(`https://gateway.marvel.com/v1/public/comics?ts=2&apikey=${publicKey}&hash=${hash}`)
    .then(res => res.json())
    .then(comic => {
        const randomComic = Math.floor(Math.random()*20);
        console.log(comic);
        console.log(randomComic);
        const comicTitle = comic.data.results[randomComic].title;
        const comicIssue = comic.data.results[randomComic].issueNumber;
        const comicImgPath = comic.data.results[randomComic].thumbnail.path;
        const comicImgExtension = comic.data.results[randomComic].thumbnail.extension;
        const comicImageURL = comicImgPath + "/portrait_uncanny." + comicImgExtension;
        const comicURL = comic.data.results[randomComic].urls[0].url;
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
            <div class="comic__display">
            <h3 class="app__comic-title">Title: ${comicTitle}</h3>
            <h3 class="app__comic-issue">Issue #: ${comicIssue}</h3>
            <a class="app__comic-url" href='${comicURL}' target='_blank'><img class="app__comic-image-url" src='${comicImageURL}'></a>
            </div>
            `
        }

navElement();  