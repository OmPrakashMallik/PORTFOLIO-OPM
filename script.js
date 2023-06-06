
document.querySelector('.navbar-toggle').addEventListener('click', function() {
  document.querySelector('.navbar-menu').classList.toggle('show');
});

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})