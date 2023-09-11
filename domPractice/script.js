// Example that ODIN used to show me how to do this
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

// a <p> with red text that says "Hey, Im red!"
const p = document.createElement('p');
p.classList.add('p');
p.textContent = "Hey, I'm red!";
p.style.color = 'red';
container.appendChild(p);

const h3 = document.createElement('h3');
h3.classList.add('h3');
h3.textContent = "Hey, I'm blue!";
h3.style.color = 'blue';
container.appendChild(h3);

// adding elements into a div
// creating the div
const box = document.createElement('div');
box.classList.add('div')
box.style.cssText = 'background-color: pink; border: solid black 2px;';

// creating the h1 element that goes inside the div
const h1 = document.createElement('h1');
h1.classList.add('h1');
h1.textContent = "I'm in a div!";

// creating the p element that goes inside the div
const anotherP = document.createElement('p');
anotherP.classList.add('p');
anotherP.textContent = "So am I";

// appending the elelments to the div BEFORE appending the div to the container
box.appendChild(h1);
box.appendChild(anotherP);
container.appendChild(box);