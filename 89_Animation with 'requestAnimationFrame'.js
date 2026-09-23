const box = document.querySelector(".box");
let start;
function step(timeStamp) {
      if (start === undefined) start = timeStamp;
      const elapsed = timeStamp - start;
      box.style.transform = `translateX(${Math.min(elapsed/10,200)}px)`;
      if (elapsed < 2000) {
            requestAnimationFrame(step);
      }
}
requestAnimationFrame(step);



