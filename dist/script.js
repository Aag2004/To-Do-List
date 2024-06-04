// Get a reference to the form, input field, and task list
const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

// Add a submit event listener to the form
todoForm.addEventListener("submit", (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the value of the input field
  const todoValue = todoInput.value;

  // Check if the input field is empty
  if (todoValue.trim()) {
    // Create a new list item
    const newTodo = document.createElement("li");
    const newdiv = document.createElement("div");
    newTodo.classList.add("todo-item");
    // newTodo.className = 'bg-pink-200 rounded-xl todo-item w-32';
    newTodo.textContent = todoValue;

    // Create a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    // deleteBtn.innerHTML = "Delete";
    deleteBtn.addEventListener("click", () => {
      // Remove the list item when the delete button is clicked
      newTodo.remove();
    });

    // Create an edit button
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.innerHTML = '<i class="fas fa-pen"></i>';
    // editBtn.innerHTML = "Edit";
    editBtn.addEventListener("click", () => {
      // Create an input field and replace the list item text with it
      const editInput = document.createElement("input");
      editInput.classList.add("edit-input");
      editInput.type = "text";
      editInput.value = newTodo.textContent;
      newTodo.textContent = "";
      newTodo.appendChild(editInput);
      // Add a blur event listener to the input field
      document.addEventListener("keydown", (e) => {
        // Check if the pressed key corresponds to a button on the calculator
        const button = document.querySelector(`button[data-key="${e.key}"]`);
        if (e.key === "Enter") {
          const updatedValue = editInput.value.trim();

          // If the input field is not empty, update the list item text
          if (updatedValue) {
            newTodo.textContent = updatedValue;
          } else {
            // If the input field is empty, remove the list item
            newTodo.remove();
          }
  
          // Remove the input field
          editInput.remove();
          newdiv.appendChild(deleteBtn);
          newdiv.appendChild(editBtn);
          newTodo.appendChild(newdiv);
        }
      });
      editInput.addEventListener("blur", () => {
        // Get the updated value of the input field
        const updatedValue = editInput.value.trim();

        // If the input field is not empty, update the list item text
        if (updatedValue) {
          newTodo.textContent = updatedValue;
        } else {
          // If the input field is empty, remove the list item
          newTodo.remove();
        }

        // Remove the input field
        editInput.remove();
        newdiv.appendChild(deleteBtn);
        newdiv.appendChild(editBtn);
        newTodo.appendChild(newdiv);
      });
    });

    // Add the delete and edit buttons to the list item
    newdiv.appendChild(deleteBtn);
    newdiv.appendChild(editBtn);
    newTodo.appendChild(newdiv);

    // Add the new list item to the task list
    todoList.appendChild(newTodo);
    // newTodo.classList.add("w-32","rounded-xl","bg-pink-200","todo-item");
    // Clear the input field
    todoInput.value = "";
  }
});