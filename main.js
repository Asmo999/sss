const inputContainer = document.querySelector("#input-container");
const container = document.querySelector(".container-y");
let data = JSON.parse(localStorage.getItem("expenses")) || [];
function renderData() {
  container.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const div = document.createElement("div");
    div.innerHTML = `
      <p>Date: ${item.date}</p>
      <p>Category: ${item.category}</p>
      <p>Amount: ${item.amount}</p>
    `;
    container.appendChild(div);
  }
}

function filterData() {
  const dateFilter = inputContainer.querySelector("#date").value;
  const categoryFilter = inputContainer.querySelector("#category").value;
  const minAmountFilter = inputContainer.querySelector("#minAmount").value;
  const maxAmountFilter = inputContainer.querySelector("#maxAmount").value;

  data = JSON.parse(localStorage.getItem("expenses")) || [];

  if (dateFilter) {
    data = data.filter((item) => item.date === dateFilter);
  }
  if (categoryFilter) {
    data = data.filter((item) => item.category === categoryFilter);
  }
  if (minAmountFilter) {
    data = data.filter((item) => item.amount >= minAmountFilter);
  }
  if (maxAmountFilter) {
    data = data.filter((item) => item.amount <= maxAmountFilter);
  }

  renderData();
}
const filterButton = document.getElementById("filterButton");
filterButton.addEventListener("click", filterData);
renderData();