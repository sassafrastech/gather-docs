function toggleMenu(toggle, event) {
  event.preventDefault();
  var showLink = document.querySelector('.menu-toggle-show');
  var hideLink = document.querySelector('.menu-toggle-hide');
  var menu = document.querySelector('.menu');
  console.log(hideLink)
  console.log(menu)
  showLink.style.display = toggle ? 'none' : 'block';
  hideLink.style.display = toggle ? 'block' : 'none';
  menu.style.display = toggle ? 'block' : 'none';
}
