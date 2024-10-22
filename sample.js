function registerStudent() {
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const registry = document.getElementById("studentList");

  const name = nameInput.value.trim();
  const age = ageInput.value.trim();

  if (validateInput(name, age)) {
    const li = createStudentListItem(name, age);
    registry.appendChild(li);

    // Clear input fields
    nameInput.value = '';
    ageInput.value = '';
  } else {
    handleValidationError(name, age);
  }
}

function validateInput(name, age) {
  return name && age;
}

function handleValidationError(name, age) {
  if (!name && age) {
    alert('Please enter a valid name.');
  } else if (name && !age) {
    alert('Please enter a valid age.');
  } else {
    alert('Invalid credentials. Try again.');
  }
}

function createStudentListItem(name, age) {
  const li = document.createElement('li');
  li.textContent = `${name}, age ${age}`;

  const deleteButton = createDeleteButton(li);
  li.appendChild(deleteButton);

  return li;
}

function createDeleteButton(listItem) {
  const button = document.createElement('button');
  button.textContent = 'DELETE';
  button.className = 'delete-button';

  button.addEventListener('click', () => listItem.remove());
  return button;
}
