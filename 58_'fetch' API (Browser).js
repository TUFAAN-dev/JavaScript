// Example using JSONPlaceholder API
async function fetchUser() {
      try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
            if (!response.ok) throw new Error('Network response was not ok');
            const user = await response.json();
            console.log(user);
      } catch (error){
            console.log('Fetch error: ', error);
      }
}
fetchUser();


