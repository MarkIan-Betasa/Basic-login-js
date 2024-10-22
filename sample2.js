const nameFocus = document.getElementById("name");
const ageFocus = document.getElementById("age");

window.onload = function() 
{
  nameFocus.addEventListener('keydown', (event) => 
  {
    if(event.key === 'Enter') {document.getElementById("age").focus();}
  });
  ageFocus.addEventListener('keydown', (event) => 
  {
    if(event.key === 'Enter') {registerStudent();}
  });
};

function registerStudent() 
{
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const registry = document.getElementById("studentList");

  if (name && age) 
  {
    const li = createStudentListItem(name, age);
    const deleteButton = createDeleteButton(li);
    li.appendChild(deleteButton);
    registry.appendChild(li); 
    
    document.getElementById("name").value='';
    document.getElementById("age").value='';
    ageFocus.blur(); 
  }
  else {handleExceptionError(name, age);}
}

function createStudentListItem(name, age) 
{
  const li = document.createElement('li');
  li.textContent = `${name}, age ${age}`;
  return li;
}

function createDeleteButton(li) 
{
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'DELETE';
  deleteButton.className = 'delete-button';

  deleteButton.addEventListener('click', () => li.remove());
  return deleteButton;
}

function handleExceptionError(name, age)
{
  if (!name && age) 
  {
    alert('Please input a valid name.');
  }
  else if (name && !age)
  {
    alert('Please input a valid age.');
  }
  else
  {
    alert('Please input valid credentials.');
  }
    document.getElementById("name").value='';
    document.getElementById("age").value='';
    document.getElementById("name").focus();
}