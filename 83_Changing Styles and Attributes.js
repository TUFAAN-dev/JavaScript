const box = document.querySelector(".box");
box.style.backgroundColor = "blue";
box.style.padding = "20px";
box.setAttribute("data-id", "123");
console.log(box.getAttribute("data-id"));
box.classList.add("active");
box.classList.remove("inactive");
box.classList.toggle("highlight"):

