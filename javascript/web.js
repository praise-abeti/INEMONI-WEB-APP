const toggleBar = document.querySelector('.toggle_bar');
const navActive = document.querySelector('.mobile_nav .active');
const mobileNav = document.querySelector('.mobile_nav');
const dropdownTitle = document.querySelectorAll('.dropdown_title');

toggleBar.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});
navActive.addEventListener('click', () => {
    mobileNav.classList.remove('active');
});
