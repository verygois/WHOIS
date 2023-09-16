'use strict'

async function indexJson(requestURL) {
  const request = new Request(requestURL);
  const response = await fetch(request);
  const jsonIndex = await response.text();

  const index = JSON.parse(jsonIndex);
  indexLife(index);
}

function indexLife(obj) {
  const contentAll = obj.contents;

  for (const content of contentAll) {
    const yearOf = document.querySelector(`li[data-year="${content.year}"]`);
    const thisLife = document.createElement('p');
    thisLife.innerHTML = content.html;
    yearOf.appendChild(thisLife);
  }
}

const lifeof = document.querySelector('#lifeOf');

let thisAge = ((new Date() - new Date(document.querySelector('#data time').getAttribute("datetime"))) / 31557600000).toFixed(0);
let thisYear = new Date().getFullYear();

for (let i = 0; i <= thisAge; i++) {
  const eachAge = document.createElement('li');
  eachAge.setAttribute('data-year', thisYear - i);
  lifeof.appendChild(eachAge);
  if (i == thisAge) {
    eachAge.innerHTML = `
    <p>
    <i>0</i>
    <u>${thisYear - i}</u>
    </p>
    `;

  } else {
    eachAge.innerHTML = `
    <p>
    <i>${thisAge - i - 1} ~ ${thisAge - i}</i>
    <u>${thisYear - i}</u>
    </p>
    `;
  }
}