let index = 0;

function changeVisitPlace() {
    // Two arrays one with images and the other with the titles
    const url = ['/img/places/newYork.jpeg','/img/places/paris.jpg','/img/places/tokyo.jpg'];
    const title = ['New York','Paris','Tokyo'];

    // Add it to the page
    const cardImage = document.getElementById('card-img');
    const cardTitle = document.getElementById('card-title');
    cardImage.src = url[index];
    cardTitle.innerText = title[index];
    
    if(index >= url.length - 1) {
        index = 0;
    } else {
        index += 1;
    }
}