
let toggleBtn = document.querySelector('#toggleBtn');
let menuList = document.querySelector('.menuItems2');

toggleBtn.addEventListener('click', clickFn);

function clickFn()
{
    menuList.classList.toggle('active');
}
