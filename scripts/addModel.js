// VARIABLES
const submitButton = document.querySelector(".button.is-link");
const FETCH = "http://localhost:5000/models";
// FUNCTIONS
const submitData = async (e) => {
  const modelValue = document.querySelector("#carModel").value;
  const priceValue = document.querySelector("#carPrice").value;

  const messageAfterSubmit = document.querySelector("#responseMessage");

  const carObject = {
    model: modelValue,
    price: priceValue,
  };

  console.log(carObject);

  const HEADERS = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(carObject),
  };

  const response = await fetch(FETCH, HEADERS)
    .then((response) => response.json())
    .then((data) => {
      messageAfterSubmit.innerHTML = `
      <div id="responseMessage" class="message-body">${data}</div>
      `;
    });
};
// EVENTS
submitButton.addEventListener("click", submitData);
