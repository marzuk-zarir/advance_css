window.addEventListener('load', function () {
    const menuIconImg = document.getElementById('menu-icon-img');
    const menuArea = document.getElementById('menu-area');
    let primaryIcon = menuIconImg.classList[1];

    menuIconImg.addEventListener('click', function (e) {
        if (primaryIcon === 'fa-bars') {
            primaryIcon = 'fa-times';
            e.target.classList.replace('fa-bars', 'fa-times');
            menuArea.classList.replace('d-none', 'd-block');
        } else {
            primaryIcon = 'fa-bars';
            e.target.classList.replace('fa-times', 'fa-bars');
            menuArea.classList.replace('d-block', 'd-none');
        }
    });
});
