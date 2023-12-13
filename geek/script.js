const list = document.getElementById("item-list");
const input = document.getElementById("input");

function addItems() {
  if (input.value === "") {
    alert("Add at least one item");
  } else {
    let li = document.createElement("li");
    li.textContent = input.value;
    list.append(li);
  }
  input.value=== "";
}
