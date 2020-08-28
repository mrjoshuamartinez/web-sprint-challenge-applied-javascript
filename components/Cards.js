// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article obj and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles

axios
    .get(`https://lambda-times-api.herokuapp.com/articles`)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })

    // creating Card Maker Function
    function cardMaker(obj) {
        const cardDiv = document.createElement('div');
        const headlineDiv = document.createElement('div');
        const authorDiv = document.createElement('div');
        const imgDiv = document.createElement('div');
        const img = document.createElement('img');
        const span = document.createElement('span');
   
        cardDiv.classList.add('card');
        headlineDiv.classList.add('headline');
        authorDiv.classList.add('author');
        imgDiv.classList.add('img-container');
   
        headlineDiv.textContent = obj.headline;
        img.src = obj.authorPhoto;
        span.textContent = `By ${obj.authorName}`;
        cardDiv.appendChild(headlineDiv);
        cardDiv.appendChild(authorDiv);
        authorDiv.appendChild(imgDiv);
        imgDiv.appendChild(img);
        authorDiv.appendChild(span);
   
        cardDiv.addEventListener('click', (event) => {
           console.log(headlineDiv.textContent = obj.headline);
        });
        return cardDiv;
    };