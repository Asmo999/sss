const form = document.getElementById("myForm");
const rollInput = document.querySelector("#roll");
const select = document.getElementById("income");
const dateInp = document.getElementById("date");
const fullpay = document.getElementById("fullPay");
let arr = [];

function disableCategory() {
  select.disabled = true;
}

function enableCategory() {
  select.disabled = false;
}

function addOptions(options) {
  select.innerHTML = "";
  options.forEach((option) => {
    const newOption = document.createElement("option");
    newOption.value = option;
    newOption.text = option;
    select.appendChild(newOption);
  });
  enableCategory();
}

disableCategory();

rollInput.addEventListener("change", function () {
  if (rollInput.value === "expanse") {
    addOptions(["შოპინგი", "საკვები", "სერვისები"]);
  } else {
    addOptions(["ამონაწერი", "ხელფასი"]);
  }
});

if (rollInput.value === "") {
  disableCategory();
}

const expanseUpdate = (expense, storageKey = "expenses") => {
  let expenses = [];

  const existing_expenses = localStorage.getItem(storageKey);
  if (existing_expenses) {
    expenses = JSON.parse(existing_expenses);
  }

  expenses.push(expense);

  localStorage.setItem(storageKey, JSON.stringify(expenses));
};

function addNewObjectToMyArray() {
  let newObj = { 
    date: dateInp.value, 
    category: select.value, 
    amount: fullpay.value, 
    type: rollInput.value
  };
  arr.push(newObj);

  expanseUpdate(newObj);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  addNewObjectToMyArray();
});