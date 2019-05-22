function toggleMenu(toggle, event) {
  event.preventDefault();
  var showLink = document.querySelector('.menu-toggle-show');
  var hideLink = document.querySelector('.menu-toggle-hide');
  var menu = document.querySelector('.menu');

  showLink.classList[toggle ? 'add' : 'remove']('menu-hidden');
  hideLink.classList[toggle ? 'remove' : 'add']('menu-hidden');
  menu.classList[toggle ? 'remove' : 'add']('menu-hidden');
}
