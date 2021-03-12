function loadForms(){
    fetch('/load-form').then(response => response.json()).then((forms) => {
        const formsListElements = document.getElementById('forms-log');
        forms.forEach((element) => {
            formsListElements.appendChild(createFormsElement(element));
        })
    });
}

function createFormsElement(forms) {
  const formsElement = document.createElement('li');

  const nameElement = document.createElement('span');
  nameElement.innerText = forms.name;

  const emailElement = document.createElement('span');
  emailElement.innerText = forms.email;

  const messageElement = document.createElement('span');
  messageElement.innerText = forms.message;

  formsElement.appendChild(nameElement);
  formsElement.appendChild(emailElement);
  formsElement.appendChild(messageElement);
  return formsElement;
}
