let ptags = document.querySelectorAll('p');
if (ptags) {
  ptags.forEach(elem => {elem.style.color = 'white';});
}

let bodyTag = document.querySelector('.overlay-enabled, .mw-body');
if (bodyTag) {
  bodyTag.style.backgroundColor = 'black';
}

let title = document.querySelector('.mw-page-title-main');
if (title) {
  title.style.color = 'white';
}
