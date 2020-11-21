const appDiv = document.querySelector('.app');
const appHeader = document.querySelector('.header');
let comicBtn;

const navElement = function(){
    appHeader.innerHTML= nav();
    comicBtn = document.querySelector('.nav__section__comic');
    comicBtn.addEventListener('click', function(){
        alert('here is a new comic')
    })
}

const nav = function(){
    return `
    <div class="nav__section">
    
    <h4 class="nav__section__items nav__section__comic">Pick a new comic!</h4>
    <h4 class="nav__section__items nav__section__api">Marvel API</h4>
    </div>
    `
}


const getComic = function(){
    fetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=020fa7dbd3dcaff71a1a678e2899dc21&hash=0252bc04dbc340a4b45643a15f89063f title:*&sort=random&size=1')
    .then(res => res.json())
    .then(comic => console.log(comic))
    .catch(err => console.log(err))
}

navElement();

// function nav(){
//     return `
//     <div class="nav__section">
//         <h4 class="nav__section__items nav__section__comic">Pick a new comic!</h4>
//         <h4 class="nav__section__items nav__section__api">Marvel API</h4>
//     </div>
//     `
// }

// function navElement(){
//     appHeader.innerHTML= nav();
// }
    