function registerStudent() {
  
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const registry = document.getElementById("studentList");

  if (name && age) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'DELETE';
    deleteButton.className = 'delete-button';
    deleteButton.onclick = function () {
      li.remove();
    }
    li.textContent=`${name}, age ${age}`;
    
    li.appendChild(deleteButton);
    registry.appendChild(li);

    document.getElementById("name").value= '';
    document.getElementById("age").value= '';
  }
  else if (!name && age)
  {
    alert('Please enter a valid name.');
  }
  else if (name && !age)
  {
    alert('Please enter a valid age.');
  }
  else
  {
    alert('Invalid credentials. Try again.');
    document.getElementById("name").value= '';
    document.getElementById("age").value= '';
  }
}