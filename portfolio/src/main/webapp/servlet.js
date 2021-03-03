// Fetches the h1 Hello message in the helloWorldServlet.java
async function showHelloWorld() {
    const responseFromServer = await fetch('/helloWorld');
    const textFromResponse = await responseFromServer.text();

    const helloWorldContainer = document.getElementById('helloWorld-container');
    helloWorldContainer.innerText = textFromResponse;
}