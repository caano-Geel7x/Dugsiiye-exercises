const list = document.getElementById('list');
const addItemButton = document.getElementById('btn');
const removeItemButton = document.getElementById('btn');

function additem() {
    const newItem = document.createElement('li');
    newItem.textContent = 'added item';
    list.appendChild(newItem);
}

function removeitem() {
    const lastItem = list.lastChild;
    if (lastItem) {
        list.removeChild(lastItem);
    }
}