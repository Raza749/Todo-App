// Getting the elements
const form = document.querySelector("form");
const input = document.querySelector(".input");
const addBtn = document.querySelector(".add");
const taskList = document.querySelector("ul");
const error = document.querySelector(".error");

// addTaskFunc
const addTaskFunc = () => {
  const list = document.createElement("li");
  taskList.appendChild(list); 

  list.innerHTML = `
    <p>${input.value}</p>
    <div class="btns">
      <button class="btn done">Done</button>
      <button class="btn delete">Delete</button>
    </div>
  `;

  // Get the specific delete and done buttons for this list item
  const delBtn = list.querySelector(".delete");
  const doneBtn = list.querySelector(".done");
  const taskText = list.querySelector("p"); 

  delBtn.addEventListener("click", () => {
    list.remove();
  });

  doneBtn.addEventListener("click", () => {
    taskText.classList.add("done"); // Apply the "done" class to the <p> element
  });
};

// Functions
const submitFunc = (e) => {
  e.preventDefault();
  if (!input.value) {
    error.classList.add("show-error");
  } else {
    error.classList.remove("show-error");
    addTaskFunc();
    input.value = ''; 
  }
};

// Events Handlers
form.addEventListener("submit", submitFunc);