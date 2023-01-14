let htmlTag = document.querySelectorAll('html');
if (ptags) {
  htmlTag.style.backgroundColor = 'black';
}

let bodyTag = document.querySelectorAll('body');
if (bodyTag) {
  bodyTag.style.backgroundColor = 'black';
}

let ptags = document.querySelectorAll('p');
if (ptags) {
  ptags.forEach(elem => {elem.style.color = 'white';});
}

let bodyContent = document.querySelector('.overlay-enabled, .mw-body');
if (bodyContent) {
  bodyContent.style.backgroundColor = 'black';
}

let title = document.querySelector('.mw-page-title-main');
if (title) {
  title.style.color = 'white';
}

let header = document.querySelector('.header-container');
if (header) {
  header.style.backgroundColor = 'lightslategray';
}

let relatedContent = document.querySelector('.ext-related-articles-card-list.ext-related-articles-card');
if (relatedContent) {
  relatedContent.backgroundColor = 'lightslategray';
}

let footer = document.querySelector(".minerva-footer");
if (footer) {
  footer.style.background = 'lightslategray';
}
