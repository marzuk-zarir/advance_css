window.addEventListener('load', function () {
    const navIcon = document.getElementById('nav-icon');
    const navMenu = document.getElementById('nav-menu');
    const navSearch = document.getElementById('nav-search');
    let primaryNavIconImg = navIcon.src;
    const menuList = document.getElementsByClassName('menu-area__menu-list')[0];
    let menuListChilds = [...menuList.children];

    // toggle navIcon for small layout
    navIcon.addEventListener('click', function (e) {
        if (primaryNavIconImg === './assets/navbar.svg') {
            primaryNavIconImg = './assets/nav-close.svg';
            e.target.src = primaryNavIconImg;
            navMenu.classList.remove('d-block');
            navSearch.classList.remove('d-block');
        } else {
            primaryNavIconImg = './assets/navbar.svg';
            e.target.src = primaryNavIconImg;
            navMenu.classList.add('d-block');
            navSearch.classList.add('d-block');
        }
    });

    // show active menu in navbar
    for (let i = 0; i <= menuListChilds.length - 1; i++) {
        menuListChilds[i].addEventListener('click', function (e) {
            let activeMenu = document.getElementsByClassName('active')[0];
            if (e.target.classList.value === '') {
                activeMenu.classList.value = '';
                e.target.classList.value = 'active';
            }
        });
    }
});
