const button = document.querySelector("button");
button.addEventListener("click", function(event) {
      console.log("Button clicked", event);
});

// Multiple Listeners
button.addEventListener("click", () => console.log("Second Listener"));
// Remove Listener
function handleClick() {console.log("Once");}
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);



