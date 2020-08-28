// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    // creating elements
    const divTag = document.createElement ('div');
    const date = document.createElement ('span');
    const h1Tag = document.createElement ('h1');
    const temp = document.createElement ('span');

    // appending elements
    divTag.appendChild (date);
    divTag.appendChild (h1Tag);
    divTag.appendChild (temp);

    // adding elements to classList
    divTag.classList.add ('header');
    date.classList.add ('date');
    temp.classList.add ('temp');

    // adding content to elements
    date.textContent = "MARCH 28, 2020";
    h1Tag.textContent = 'Lambda Times';
    temp.textContent = '98°';

}

Header ();