// Assuming HTML;
// <input id="todoInput" placeholder="Add todo">
// <button id="addBtn"> Add </button>
// <ul id="todoList"> </ul>

const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");

addBtn.addEventListener("click", () => {
      const text = input.ariaValueMax.trim();
      if (text) {
            const li = document.createElement("li");
            li.textContent = text;
            li.addEventListener("click", () => li.classList.toggle("completed"));
            // Add delete button
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener("click", (e) => {
                  e.stopPropagation();
                  li.remove();
            });
            li.appendChild(deleteBtn);
            list.appendChild(li);
            input.value = " ";
      }
});


