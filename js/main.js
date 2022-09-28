
// here we used getElementById method to get text
let h1_html = document.getElementById('h1').innerText;
console.log(h1_html);

// here we used getElementByClassName to get text
let h2_html = document.getElementsByClassName('name');
console.log(h2_html[0].innerText);

// here we used getElementByTagName
let pera = document.getElementsByTagName('p');
console.log(pera[0].innerText);
