function changeImage() {
  const image = document.querySelector('#image');

  // Gather user input via prompts
  const url = prompt("Please enter your image URL:");
  const borderColor = prompt("Please enter your desired border color:");
  const width = prompt("Please enter the width of the image (in pixels):");
  const height = prompt("Please enter the height of the image (in pixels):");
  const borderRadius = prompt("Please enter the border radius (in pixels):");

  // Apply updates dynamically
  if (url) image.setAttribute('src', url);
  if (borderColor) image.style.border = `2px solid ${borderColor}`;
  if (width) image.style.width = `${width}px`;
  if (height) image.style.height = `${height}px`;
  if (borderRadius) image.style.borderRadius = `${borderRadius}px`;
}