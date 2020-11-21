const appDiv = document.querySelector('.app');
const appHeader = document.querySelector('.header');

(() => {
    navElement();
})();

function nav(){
    return `
    <div class="nav__section">
        <h4 class="nav__section__items nav__section__comic">Pick a new comic!</h4>
        <h4 class="nav__section__items nav__section__api">Marvel API</h4>
    </div>
    `
}

function navElement(){
    appHeader.innerHTML= nav();
}
    