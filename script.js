const name = document.getElementById("card_name");
const number = document.getElementById("card_number");
const month = document.getElementById("card_month");
const year = document.getElementById("card_year");
const cvc = document.getElementById("card_cvc");

const cardNum = document.getElementById("number");
const cardName = document.getElementById("name");
const cardMonth = document.getElementById("month");
const cardYear = document.getElementById("year");
const cardCvc = document.getElementById("cvc");

const form = document.querySelector("form");

name.addEventListener("input", function () {
  cardName.textContent = this.value || "Jane Appleseed";
});

number.addEventListener("input", function () {
  let formattedNumber = this.value
    .replace(/\s?/g, "")
    .replace(/(\d{4})/g, "$1 ")
    .trim();
  cardNum.textContent = formattedNumber || "0000 0000 0000 0000";
});

month.addEventListener("input", function () {
  cardMonth.textContent = this.value.padStart(2, "0") || "00";
});

year.addEventListener("input", function () {
  cardYear.textContent = this.value.padStart(2, "0") || "00";
});

cvc.addEventListener("input", function () {
  cardCvc.textContent = this.value.padStart(3, "0") || "000";
});

function validateForm() {
  let isValid = true;

  // Clear previous errors
  document.getElementById("name_error").textContent = "";
  document.getElementById("number_error").textContent = "";
  document.getElementById("month_error").textContent = "";
  document.getElementById("year_error").textContent = "";
  document.getElementById("cvc_error").textContent = "";

  // Validate name
  if (name.value.trim() === "") {
    document.getElementById("name_error").textContent =
      "Cardholder name is required";
    name.classList.add("error_input");
    isValid = false;
  } else {
    name.classList.remove("error_input");
  }

  // Validate card number
  const numberPattern = /^\d{16}$/;
  if (!numberPattern.test(number.value.replace(/\s/g, ""))) {
    document.getElementById("number_error").textContent =
      "Card number must be exactly 16 digits";
    number.classList.add("error_input");
    isValid = false;
  } else {
    number.classList.remove("error_input");
  }

  // Validate expiration month
  const monthPattern = /^(0[1-9]|1[0-2])$/;
  if (!monthPattern.test(month.value)) {
    document.getElementById("month_error").textContent = "Invalid month";
    month.classList.add("error_input");
    isValid = false;
  } else {
    month.classList.remove("error_input");
  }

  // Validate expiration year
  const yearPattern = /^\d{2}$/;
  if (!yearPattern.test(year.value)) {
    document.getElementById("year_error").textContent = "Invalid year";
    year.classList.add("error_input");
    isValid = false;
  } else {
    year.classList.remove("error_input");
  }

  // Validate CVC
  const cvcPattern = /^\d{3}$/;
  if (!cvcPattern.test(cvc.value)) {
    document.getElementById("cvc_error").textContent = "CVC must be 3 digits";
    cvc.classList.add("error_input");
    isValid = false;
  } else {
    cvc.classList.remove("error_input");
  }

  return isValid;
}
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validateForm()) {
    document.querySelector(".thank").classList.remove("hidden");
    form.classList.add("hidden");
  }
});
