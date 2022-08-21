const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "/my_first_js_site/img/icons/nav-close.svg";
    } else {
    navBtnImg.src = "/my_first_js_site/img/icons/nav-open.svg";
    }
}

AOS.init({
    // запускаем анимацию только один раз
    once: true
    // Отключаем для мобайла
    // disable: 'mobile'
     // Отключаем для телефона, но не планшета
    // disable: 'phone'
}
);
