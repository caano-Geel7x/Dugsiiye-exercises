async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }
    const users = await response.json();
    console.log("Fetched Users:", users);

  } catch (error) {
    console.error("Error fetching users:", error.message);
  }
}
fetchUsers();