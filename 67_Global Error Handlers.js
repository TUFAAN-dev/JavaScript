window.onerror = function(message, source, lineno, colno, error) {
      console.error("Global error: ", message, "at", source, lineno, colno);
      return true;
}

// Unhandled promise rejections
window.addEventListener("unhandledrejection", event => {
      console.error("unhandled rejection:", event.reason);
});

// Trigger an error
setTimeout(() => {throw new Error("Test error"); }, 1000);


