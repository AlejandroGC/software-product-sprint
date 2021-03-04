// Function that receives the facts as a JSON from the servlet and display them at the webpage.
async function getFacts() {
    const getResponse = await fetch('/facts');
    const facts = await getResponse.json();

    const factsContainer = document.getElementById('facts-container');
    factsContainer.innerHTML = '';

    factsContainer.appendChild(createListElement('Fact #1: ' + facts[0]));
    factsContainer.appendChild(createListElement('Fact #2: ' + facts[1]));
    factsContainer.appendChild(createListElement('Fact #3: ' + facts[2]));

}

// Function that creates a list from a received text.
function createListElement(text) {
    const liElement = document.createElement('li');
    liElement.innerText = text;
    return liElement;
}