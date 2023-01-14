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

let header = document.querySelector('.header-container');
if (header) {
  header.style.backgroundColor = 'gray';
}

let relatedContent = document.querySelector('.ext-related-articles-card-list .ext-related-articles-card');
if (relatedContent) {
  relatedContent.backgroundColor = 'gray';
  let relatedContentTitle = document.querySelector('.ext-related-articles-card-list h3');
  if (relatedContentTitle) {
    relatedContentTitle.backgroundImage ='linear-gradient(to right,rgba(255,255,255,0),gray 50%)'
  }
}
