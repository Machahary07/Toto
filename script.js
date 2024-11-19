const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropdown = document.querySelector('.dropdown');

toggleBtn.onclick = function () {
    dropdown.classList.toggle('open'); // Toggle the 'open' class for visibility
    const isOpen = dropdown.classList.contains('open');

    // Change the icon based on the dropdown state
    toggleBtnIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}