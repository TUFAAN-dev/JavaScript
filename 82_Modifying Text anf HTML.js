const element = document.querySelector("#content");
element.textContent = "New text content";
element.innerHTML = "<strong>Bold text</strong>";
// Use textContent when inserting plain text to avoid XSS
