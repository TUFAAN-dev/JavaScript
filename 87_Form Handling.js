const frm = document.querySelector("form");
frm.addEventListener("Submit", (e) => {
      e.preventDefault();     // Prevent Page reload
      const formData = new FormData(form);
      const name = formData.get("name");
      console.log("Submitted name:", name);
      // Or use serialize
      const data = Object.fromEntries(formData.entries());
      console.log(data);
});




