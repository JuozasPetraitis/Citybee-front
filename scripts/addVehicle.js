// VARIABLES
const submitButton = document.querySelector(".button.is-link");
const selectCarModelElement = document.querySelector("#select-car-model");
const selectOptionCarModelElement = document.querySelector(".modelName");

const FETCH_VEHICLES = "https://whatafa.herokuapp.com/vehicles";
const FETCH_MODELS = "https://whatafa.herokuapp.com/models";

// FUNCTIONS
const updateSelect = async () => {
  const responseData = await fetch(FETCH_MODELS)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      // let model_ID;
      // let modelName;
      // model_ID = data.reduce((acc, item) => [...acc, item._id], []);
      // modelName = data.reduce((acc, item) => [...acc, item.model], []);
      // console.log("MODEL ID", model_ID);
      // console.log("MODEL NAME", modelName);

      data.forEach((key, index) => {
        selectCarModelElement.innerHTML += `
        <option id='carModelSelect' value="${key._id}">${key.model}</option>
        `;
      });
    });
};

const submitData = async (e) => {
  const carModel_ID =
    selectCarModelElement.options[selectCarModelElement.selectedIndex].value;
  const carNumberPlates = document.querySelector("#carNumberPlate").value;
  const carLocation = document.querySelector("#selected-location").value;

  const messageAfterSubmit = document.querySelector("#responseMessage");
  e.preventDefault();

  const carObject = {
    model_id: carModel_ID,
    plates: carNumberPlates,
    location: carLocation,
  };

  // console.log(carObject);

  const HEADERS = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(carObject),
  };

  const response = await fetch(FETCH_VEHICLES, HEADERS)
    .then((response) => response.json())
    .then((data) => {
      messageAfterSubmit.innerHTML = `
      <div id="responseMessage" class="message-body">${data}</div>
      `;
    });
};
// EVENTS
submitButton.addEventListener("click", submitData);
document.addEventListener("DOMContentLoaded", updateSelect);
