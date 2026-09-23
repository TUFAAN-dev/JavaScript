document.querySelector("#parent").addEventListener("click", (e) => {
      console.log("Parent clicked");
});

document.querySelector("#click").addEventListener("click", (e) => {
      e.stopPropagation();
      console.log("Child clicked");
});
// Event delegation: Listen on parent for Children
document.querySelector("#list").addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
            console.log("List item Clicked: ", e.target.textContent);
      }
});
