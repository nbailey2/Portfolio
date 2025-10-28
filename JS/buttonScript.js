function displayMessage(){
    alert('Hello')
}



function addParagraph(){
    const newElement = document.createElement('p');
    newElement.textContent='New Paragraph';
    document.body.appendChild(newElement);
}

function removeParagraph(){
    const paragraphs = document.querySelector('.container');
    paragraphs.children[paragraphs.children.length-1].remove();
}

btn.addEventListener('click', addParagraph);
btn.onclick=addParagraph;
