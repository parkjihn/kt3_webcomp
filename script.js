
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('new-card-form');
  const cardContainer = document.querySelector('.card-container');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const headerText = document.getElementById('new-header').value;
    const contentText = document.getElementById('new-content').value;
    const imageUrl = document.getElementById('new-image').value;
  
    const newCard = document.createElement('card-component');
  
    const header = document.createElement('h2');
    header.slot = 'header';
    header.textContent = headerText;
    newCard.appendChild(header);
  
    const content = document.createElement('div');
    content.slot = 'content';
    const paragraph = document.createElement('p');
    paragraph.textContent = contentText;
    content.appendChild(paragraph);
  
    if (imageUrl) {
      const image = document.createElement('img');
      image.src = imageUrl;
      image.alt = 'Пользовательское изображение';
      content.appendChild(image);
    }
  
    newCard.appendChild(content);
  
    cardContainer.appendChild(newCard);
    form.reset();
  });
});
