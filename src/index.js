import "./style.css";

let tasksArr = [
  {
    description: "Go to swim!",
    completed: true,
    index: 44,
  },
  {
    description: "Yoga class tomorrow",
    completed: false,
    index: 0,
  },
  {
    description: "Finish homework",
    completed: false,
    index: 10,
  },
];

const ul = document.querySelector(".list-container");

const sortArr = () => {
  tasksArr.sort((a, b) => (a.index > b.index ? 1 : a.index < b.index ? -1 : 0));
};

const generateList = () => {
  for (let i = 0; i < tasksArr.length; i++) {
    const li = document.createElement("li");
    const check = document.createElement("input");
    const lbl = document.createElement("label");
    check.type = "checkbox";
    check.name = tasksArr[i].index.toString();
    ul.append(li);
    li.append(lbl);
    lbl.append(check);
    lbl.innerHTML += tasksArr[i].description;
  }
};

window.addEventListener("load", () => {
  if (!ul.innerText) {
    // ul.innerText='The lis is empty...'
    sortArr();
    generateList();
    // console.log(tasksArr);
  }
});

const input = document.getElementById("new-item");
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    // input.style.backgroundColor = "red";
    if (input.value != "") {
      // input.style.backgroundColor = "blue";
      tasksArr.push({
        description: input.value,
        completed: false,
        index: tasksArr[tasksArr.length - 1].index + 1,
      });
      input.value = "";
      console.log(tasksArr);
    }
  }
});
