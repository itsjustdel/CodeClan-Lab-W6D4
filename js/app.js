document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete All!';

  const body = document.querySelector('body');
  body.appendChild(deleteButton);
  deleteButton.addEventListener('click', handleDeleteAll);
})

const handleDeleteAll = function(event){
  const allListItems = document.querySelectorAll('ul ul');
  
  allListItems.forEach((listItem) => {
    listItem.remove();
  })
}


const handleFormSubmit = function(event){
  event.preventDefault();
  const title = event.target.title.value;
  const author = event.target.author.value;
  const category = event.target.category.value;

  console.log(title);
  console.log(author);
  console.log(category);

  
  const listItem = document.createElement('ul');

  const titleParagraph = document.createElement('li')
  titleParagraph.textContent = title;
  listItem.appendChild(titleParagraph);

  const authorParagraph = document.createElement('li');
  authorParagraph.textContent = author;
  listItem.appendChild(authorParagraph);

  const categoryParagraph = document.createElement('li');
  categoryParagraph.textContent = category;
  listItem.appendChild(categoryParagraph)


  const list = document.querySelector('#reading-list');
  list.appendChild(listItem);
  
  this.reset();

}