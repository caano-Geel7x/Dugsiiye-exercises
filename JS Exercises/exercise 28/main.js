
function delaySuccessMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Operation succeeded after 2 seconds!");
      } else {
        reject("Something went wrong!");
      }
    }, 2000);
  });
}


async function handleMessage() {
  try {
    const message = await delaySuccessMessage(); 
    console.log(message); 
  } catch (error) {
    console.error(error); 
  }
}
handleMessage();