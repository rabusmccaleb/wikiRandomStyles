let htmlTag = document.querySelector('html');
if (htmlTag) {
  htmlTag.style.backgroundColor = 'black';
}

let bodyTag = document.querySelector('body');
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

let h1Tags = document.querySelectorAll('h1');
if (h1Tags.length) {
  h1Tags.forEach(elem => { elem.style.color = 'white'; });
}

//minerva__tab 

let minerva__tabs = document.querySelectorAll('.minerva__tab');
if (minerva__tabs.length) {
  minerva__tabs.forEach(elem => { elem.style.color = 'white'; });
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

let infoBox = document.querySelectorAll('.infobox');
if (infoBox.length) {
  infoBox.forEach(elem => {
    elem.style.borderRadius = '10px';
    elem.style.boxShadow = '0px 2px 4px rgba(0,0,0,0.25)';
    elem.style.backgroundColor = 'whitesmoke';
  });
}

let thumbcaptions = document.querySelectorAll('.thumbcaption');
if (thumbcaptions.length) {
  thumbcaptions.forEach(elem => {
    elem.style.color = 'white';
  });
}

//section-heading
let sectionHeadings = document.querySelectorAll('.section-heading');
if (sectionHeadings.length) {
  sectionHeadings.forEach(elem => {
    elem.style.color = 'white';
  });
}


let mwHeadlines = document.querySelectorAll('.mw-headline');
if (sectionHeadings.length) {
  sectionHeadings.forEach(elem => {
    elem.style.color = 'white';
  });
}

let liTags = document.querySelectorAll('li');
if (listItems.length) {
  listItems.forEach(elem => {
    elem.style.color = 'white';
  });
}


