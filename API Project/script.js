const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1";

const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const resultDisplay = document.querySelector(".msg");

for (let select of dropdown) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
    convertCurrency();
  });
}

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

const convertCurrency = async () => {

  const fromCurrency = fromCurr.value.toLowerCase();
  const toCurrency = toCurr.value.toLowerCase();

  const URL = `${BASE_URL}/currencies/${fromCurrency}.json`;

  try {
    let response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch exchange rate: ${response.status}`);
    }
    let json = await response.json();
    
    if (!json[fromCurrency] || !json[fromCurrency][toCurrency]) {
      throw new Error("Exchange rate not available for selected currencies");
    }
    
    let rate = json[fromCurrency][toCurrency];
    let amount = parseFloat(document.querySelector(".amount input").value);
    let convertedAmount = amount * rate;
    resultDisplay.textContent = `${amount} ${fromCurrency.toUpperCase()} = ${convertedAmount.toFixed(2)} ${toCurrency.toUpperCase()}`;
  } catch (error) {
    console.error('Error fetching exchange rate:', error);
  }
};

btn.addEventListener("click", (evt)=>{
  evt.preventDefault();
  convertCurrency();
});

window.addEventListener("load", () => {
  convertCurrency();
});
