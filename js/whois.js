'use strict'

async function whoisJson(requestURL) {
  const request = new Request(requestURL);
  const response = await fetch(request);
  const jsonIndex = await response.text();

  const index = JSON.parse(jsonIndex);
  whois(index);
  lifeof(index);
}

function whois(obj) {
  const yourname = document.querySelector('meta[name="author"]').getAttribute("content")
  const email = document.querySelector('meta[name="reply-to"]').getAttribute("content")

  const author = document.querySelector('#author')
  author.textContent = yourname;
  author.addEventListener('click', function () {
    author.className = author.className === "name" ? "email" : "name";
    author.textContent = author.textContent === yourname ? email : yourname;
  });

  const date_of_birth = obj.date_of_birth;
  const datetime = obj.datetime;
  
  let thisYear = new Date().getFullYear();
  let thisAge = ((new Date() - new Date(datetime)) / 31557600000).toFixed(0);

  const birth = document.querySelector("#data time");
  const age = document.querySelector("#age");
  birth.textContent = date_of_birth;

  function counter() {
    age.textContent = ((new Date() - new Date(datetime)) / 31557600000).toFixed(9);
  }

  function start() {
    setTimeout(() => { counter(); requestAnimationFrame(start); }, 1000 / 30);
  }

  start()

  const lifeof = document.querySelector('#lifeOf');
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
}

function lifeof(obj) {
  const contentAll = obj.contents;

  for (const content of contentAll) {
    const yearOf = document.querySelector(`li[data-year="${content.year}"]`);
    const thisLife = document.createElement('p');
    thisLife.innerHTML = content.html;
    yearOf.appendChild(thisLife);
  }
}