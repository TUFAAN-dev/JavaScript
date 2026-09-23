const element = document.querySelector(".element");
// Add class
element.classList.add("active");
// Toggle class based on condition
if (someCondition) {
      element.classList.add("hidden");
} else {
      element.classList.remove("hidden");
}
// Check class
console.log(element.classList.contains("active"));



