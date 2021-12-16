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
  const allListItems = document.querySelectorAll('li');
  
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

  
  const listItem = document.createElement('li');
  listItem.textContent = `${title} ${author} ${category}`;

  const list = document.querySelector('#reading-list');
  list.appendChild(listItem);
  
  this.reset();

}