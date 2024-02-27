const form1 = document.getElementById("new-todo-form1");
const input1 = document.getElementById("new-todo-input1");
const list1 = document.getElementById("todo-list1");

const form2 = document.getElementById("new-todo-form2");
const input2 = document.getElementById("new-todo-input2");
const list2 = document.getElementById("todo-list2");

const form3 = document.getElementById("new-todo-form3");
const input3 = document.getElementById("new-todo-input3");
const list3 = document.getElementById("todo-list3");

// Add an event listener to each form to handle the submission of new todo items
form1.addEventListener("submit", (event) => {
  event.preventDefault();

  if (input1.value.trim() === "") return;

  const newItem = document.createElement("li");
  newItem.classList.add("todo-item");
  newItem.textContent = input1.value.trim();
  newItem.draggable = true;

  input1.value = "";

  list1.appendChild(newItem);

  // Add event listeners to the new item
  newItem.addEventListener("dragstart", handleDragStart);
  newItem.addEventListener("dragenter", handleDragEnter);
  newItem.addEventListener("dragover", handleDragOver);
  newItem.addEventListener("dragleave", handleDragLeave);
  newItem.addEventListener("drop", handleDragDrop);
  newItem.addEventListener("dragend", handleDragEnd);
});

form2.addEventListener("submit", (event) => {
  event.preventDefault();

  if (input2.value.trim() === "") return;

  const newItem = document.createElement("li");
  newItem.classList.add("todo-item");
  newItem.textContent = input2.value.trim();
  newItem.draggable = true;

  input2.value = "";

  list2.appendChild(newItem);

  // Add event listeners to the new item
  newItem.addEventListener("dragstart", handleDragStart);
  newItem.addEventListener("dragenter", handleDragEnter);
  newItem.addEventListener("dragover", handleDragOver);
  newItem.addEventListener("dragleave", handleDragLeave);
  newItem.addEventListener("drop", handleDragDrop);
  newItem.addEventListener("dragend", handleDragEnd);
});

form3.addEventListener("submit", (event) => {
  event.preventDefault();

  if (input3.value.trim() === "") return;

  const newItem = document.createElement("li");
  newItem.classList.add("todo-item");
  newItem.textContent = input3.value.trim();
  newItem.draggable = true;

  input3.value = "";

  list3.appendChild(newItem);

  // Add event listeners to the new item
  newItem.addEventListener("dragstart", handleDragStart);
  newItem.addEventListener("dragenter", handleDragEnter);
  newItem.addEventListener("dragover", handleDragOver);
  newItem.addEventListener("dragleave", handleDragLeave);
  newItem.addEventListener("drop", handleDragDrop);
  newItem.addEventListener("dragend", handleDragEnd);
});

// Drag and drop functionality
let draggingItem = null;

const handleDragStart = (event) => {
  draggingItem = event.target;
  event.target.classList.add("dragging");
};

const handleDragOver = (event) => {
  event.preventDefault();
};

const handleDragEnter = (event) => {
  if (event.target.tagName === "LI") {
    const currentItem = event.target;
    const draggingItemIndex = Array.from(list1.children).indexOf(draggingItem);
    const currentItemIndex = Array.from(list1.children).indexOf(currentItem);

    if (draggingItemIndex < currentItemIndex) {
      list1.insertBefore(draggingItem, currentItem.nextSibling);
    } else {
      list1.insertBefore(draggingItem, currentItem);
    }
  }
};

function handleDragLeave() {}

function handleDragDrop() {
  if (event.target.tagName === "LI" && event.target.parentNode !== list1) {
    const draggingItemIndex = Array.from(list1.children).indexOf(draggingItem);
    const currentItemIndex = Array.from(list1.children).indexOf(event.target);

    const currentList = event.target.parentNode;
    const draggingItemList = draggingItem.parentNode;

    if (draggingItemIndex < currentItemIndex) {
      currentList.insertBefore(draggingItem, event.target.nextSibling);
    } else {
      currentList.insertBefore(draggingItem, event.target);
    }

    draggingItemList.removeChild(draggingItem);
  }
}

function handleDragEnd() {
  draggingItem.classList.remove("dragging");
  draggingItem = null;
}

const todoItems1 = Array.from(document.getElementsByClassName("todo-item"));
for (const item of todoItems1) {
  item.addEventListener("dragstart", handleDragStart);
  item.addEventListener("dragenter", handleDragEnter);
  item.addEventListener("dragover", handleDragOver);
  item.addEventListener("dragleave", handleDragLeave);
  item.addEventListener("drop", handleDragDrop);
  item.addEventListener("dragend", handleDragEnd);
}

const todoItems2 = Array.from(document.getElementsByClassName("todo-item"));
for (const item of todoItems2) {
  item.addEventListener("dragstart", handleDragStart);
  item.addEventListener("dragenter", handleDragEnter);
  item.addEventListener("dragover", handleDragOver);
  item.addEventListener("dragleave", handleDragLeave);
  item.addEventListener("drop", handleDragDrop);
  item.addEventListener("dragend", handleDragEnd);
}

const todoItems3 = Array.from(document.getElementsByClassName("todo-item"));
for (const item of todoItems3) {
  item.addEventListener("dragstart", handleDragStart);
  item.addEventListener("dragenter", handleDragEnter);
  item.addEventListener("dragover", handleDragOver);
  item.addEventListener("dragleave", handleDragLeave);
  item.addEventListener("drop", handleDragDrop);
  item.addEventListener("dragend", handleDragEnd);
}
