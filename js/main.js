let hum = document.querySelector('.hum');
let menu = document.querySelector('.in-mobile');
let menuLink = document.querySelectorAll('.menu__link')
let body = document.querySelector('body');
let header = document.querySelector('.header');

hum.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
        menu.classList.add('active');
        hum.classList.add('active');
        body.style.overflow = 'hidden';
    } else {
        menu.classList.remove('active');
        hum.classList.remove('active');
        body.style.overflow = 'visible';
    }
})

for (let i = 0; i < menuLink.length; i++) {
    let thisLink = menuLink[i];
    thisLink.addEventListener('click', () => {
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            hum.classList.remove('active');
            body.style.overflow = 'visible';
        }
    });
}

let = document.getElementById('error'),
    userName = document.getElementById('userName'),
    userSurname = document.getElementById('userSurname'),
    userEmail = document.getElementById('userEmail'),
    userPhone = document.getElementById('userPhone'),
    form = document.getElementById('form');



form.addEventListener('submit', (e) => {

    let messages = []
    if (userName.value === '' || userName.value == null) {
        messages.push('Name is required');
    }
    else if (!/^[a-zA-Z]*$/g.test(userName.value)) {
        messages.push('Name can only be letters');
        userName.focus();
    }


    if (userSurname.value === '' || userSurname.value == null) {
        messages.push('Surname is required');
    }
    else if (!/^[a-zA-Z]*$/g.test(userSurname.value)) {
        messages.push('Surname can only be letters');
        userSurname.focus();
    }


    if (userEmail.value === '' || userEmail.value == null) {
        messages.push('Email is required');
    }
    else if (!userEmail.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        messages.push('Email (' + userEmail.value + ') is invalid')
    }

    if (userPhone.value === '' || userPhone.value == null) {
        messages.push('Phone number is required');
    }
    else if (!userPhone.value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) {
        messages.push('Phone (' + userPhone.value + ') is invalid \n Please enter a number in the format xxx xxx xxxx')
    }

    if (messages.length > 0) {
        e.preventDefault()
        error.innerText = messages.join('\n')
    } else {
        alert('Name: ' + userName.value + '\nSurname: ' + userSurname.value + '\nEmail: ' + userEmail.value + '\nPhone: ' + userPhone.value)
    }
})


let switchColorBtn = document.querySelectorAll('.card');


for (let i = 0; i < switchColorBtn.length; i++) {
    switchColorBtn[i].addEventListener('click', () => {
        header.style.backgroundColor = "hsla(" + Math.floor(Math.random() * (360)) + ", 75%, 58%, 1)";
    });
}

let preloaderWrapper = document.querySelector('.preloader-wrapper');
let preloaderText = document.getElementById('preload-mess');
let preloaderEnterBtn = document.querySelector('.enter-site');
let sound = document.querySelector('.sound');
let turnVolum = document.querySelector('.volum-ok');
let volumWrapper = document.querySelector('.volum-wrapper');

turnVolum.addEventListener('click', () => {
    sound.play();
    volumWrapper.style.display = 'none';
})

window.addEventListener('load', () => {
    preloaderText.innerText = "The site has already loaded";
    preloaderEnterBtn.style.display = 'block';


});

preloaderEnterBtn.addEventListener('click', () => {
    preloaderWrapper.style.opacity = "0";
    preloaderWrapper.style.visibility = "hidden";
    sound.pause();
})


let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = () => {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + '%';

    if (window.pageYOffset > 0) {
        header.style.position = "fixed";
    } else {
        header.style.position = 'static';
    }
}


let darkModeBtn = document.querySelector('.toggle');
let firstSecBg = document.querySelector('.workshop');
let secondSecBg = document.querySelector('.success');

darkModeBtn.addEventListener('click', function () {
    if (this.checked) {
        body.classList.add('darkMode');
        firstSecBg.style.backgroundImage = 'url(../img/bg2.jpg)';
        secondSecBg.style.backgroundImage = 'url(../img/bg2.jpg)';
    }
    else {
        body.classList.remove('darkMode');
        firstSecBg.style.backgroundImage = 'url(../img/bg1.jpg)';
        secondSecBg.style.backgroundImage = 'url(../img/bg1.jpg)';
    }
})