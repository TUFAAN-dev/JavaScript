const list = document.querySelector("ul");
const newItem = document.createElement("li");
newItem.textContent = "New Item";
list.appendChild(newItem);
// Insert before
const firstItem = list.querySelector("li");
const anotherItem = document.createElement("li");
anotherItem.textContent = "Inserted";
list.insertBefore(anotherItem, firstItem);
// Remove
anotherItem.remove();



