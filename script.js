document.querySelector('.form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page reload

  const input = document.querySelector('.form__input');
  const inputValue = input.value.trim();

  if (inputValue !== '') {
    const li = document.createElement('li');
    li.textContent = inputValue;

    // Optional: Toggle 'done' class on click
    li.addEventListener('click', () => {
      li.classList.toggle('done');
    });

    // Optional: Add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✖';
    deleteBtn.className = 'delete';
    deleteBtn.onclick = () => li.remove();

    li.appendChild(deleteBtn);
    document.querySelector('.toDoList').appendChild(li);
    input.value = ''; // Clear input
  }
});
