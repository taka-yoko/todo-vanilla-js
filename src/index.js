import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteTodo(inputText);
};

const createIncompleteTodo = (inputText) => {
  // html element生成
  const li = document.createElement("li");
  li.className = "list-row";

  const div = document.createElement("div");
  div.innerText = inputText;

  const buttonComplete = document.createElement("button");
  buttonComplete.innerText = "完了";
  buttonComplete.addEventListener("click", () => {
    const parentElement = buttonDelete.parentElement;
    const text = parentElement.firstElementChild.innerText;

    const li = document.createElement("li");
    li.className = "list-row";

    const div = document.createElement("div");
    div.innerText = text;

    const button = document.createElement("button");
    button.innerText = "戻す";
    button.addEventListener("click", () => {
      const parentElement = button.parentElement;
      document.getElementById("complete-list").removeChild(parentElement);
      createIncompleteTodo(text);
    });

    li.appendChild(div);
    li.appendChild(button);

    const completeList = document.getElementById("complete-list");
    completeList.appendChild(li);

    removeTargetElement(buttonDelete.parentElement);
  });

  const buttonDelete = document.createElement("button");
  buttonDelete.innerText = "削除";
  buttonDelete.addEventListener("click", () => {
    const parentElement = buttonDelete.parentElement;
    removeTargetElement(parentElement);
  });

  li.appendChild(div);
  li.appendChild(buttonComplete);
  li.appendChild(buttonDelete);

  const incompleteList = document.getElementById("incomplete-list");
  incompleteList.appendChild(li);
};

const removeTargetElement = (elm) => {
  document.getElementById("incomplete-list").removeChild(elm);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
