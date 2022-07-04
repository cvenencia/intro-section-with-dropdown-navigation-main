const dropdownDivs = document.getElementsByClassName('dropdown');
const desktopElements = document.getElementsByClassName('desktop');
const mobileMenu = document.querySelector('#mobile-menu');
const coverBackground = document.querySelector('#cover-background');

checkDeviceWidth();

function showDropdown(div) {
    div.getElementsByClassName('dropdown-menu')[0].classList.remove('hide');
}

function hideDropdown(div) {
    div.getElementsByClassName('dropdown-menu')[0].classList.add('hide');
}

function toggleDropdownMobile(div) {
    const element = div.getElementsByClassName('dropdown-menu-mobile')[0];
    const classList = element.classList;
    if (classList.contains('hide')) {
        classList.remove('hide');
    } else {
        classList.add('hide');
    }
    element.classList = classList;
}

function checkDeviceWidth() {
    if (window.innerWidth < 900) {
        for (const element of desktopElements) {
            element.classList.add('hide');
        }
    } else {
        for (const element of desktopElements) {
            element.classList.remove('hide');
        }
    }
}

function openMenuMobile() {
    disableScroll();
    mobileMenu.classList.remove('hide');
    coverBackground.classList.remove('hide');
    coverBackground.classList.add('cover-background');
}

function closeMenuMobile() {
    enableScroll();
    mobileMenu.classList.add('hide');
    coverBackground.classList.add('hide');
    coverBackground.classList.remove('cover-background');
}

function disableScroll() {
    document.body.classList.add('stop-scrolling');
}

function enableScroll() {
    document.body.classList.remove('stop-scrolling');
}

window.onresize = checkDeviceWidth;
