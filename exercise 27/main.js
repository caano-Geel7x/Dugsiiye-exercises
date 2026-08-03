
function delaySuccessMessage() {
  return new Promise((resolve, reject) => {
  
    setTimeout(() => {
      const success = false;

      if (success) {
        resolve("Operation succeeded after 2 seconds!");
      } else {
        reject("Something went wrong!");
      }
    }, 2000);
  });
}
delaySuccessMessage()
  .then((message) => {
    console.log(message); 
  })
  .catch((error) => {
    console.error(error); 
  });