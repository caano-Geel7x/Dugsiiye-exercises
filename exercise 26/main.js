


function fetchUserDataAsync(callback) {
  setTimeout(() => {
    callback("Data fetched");
  }, 2000);
}

fetchUserDataAsync(data => console.log(data));
console.log("Runs IMMEDIATELY");

function fetchUserDataSync() {
  const start = Date.now();
  while (Date.now() - start < 2000) {} 
  return "Data fetched";
}

console.log(fetchUserDataSync());
console.log("Runs AFTER 2 seconds");