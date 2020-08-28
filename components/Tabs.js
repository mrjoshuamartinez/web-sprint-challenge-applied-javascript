// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

// axios GET request
axios
.get(`https://lambda-times-api.herokuapp.com/topics`)
.then((res) => {
    console.log(res);
    // console.log(res.data.topics);
    let tabs = res.data.topics
    // console.log(tabs);        
    })
.catch((err) => {
    console.log(err);
});

// function to create:
// <div class="tab">topic here</div>
function tabAssigner(topic) {
    const divTab = document.createElement('div');
    divTab.classList.add('tab');
    divTab.textContent = topic;
    return divTab;
 };