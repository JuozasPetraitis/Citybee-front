// VARIABLES
const showAllModelsButton = document.querySelector("#showCarModels");
const showAllModelsWithCountButton = document.querySelector(
  "#showCarModelsWithCount"
);

const displayingAllModels = document.querySelector("#model-box");
const FETCH_MODELS = "http://localhost:5000/models";
const FETCH_MODELS_WITH_COUNT = "http://localhost:5000/modelscount";

// FUNCTIONS
const displayCarModels = (e) => {
  return fetch(FETCH_MODELS)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      data.reduce((item, total) => {
        displayingAllModels.innerHTML += `
        <div class="model-card">
           <p><strong>Model:</strong> ${item.model}</p>
           <p><strong>Price:</strong> ${item.price}</p>
        </div>
        `;
        return total;
      }, {});
    })
    .catch((error) => console.log(error));
};

const displayCarModelsCount = (e) => {
  return fetch(FETCH_MODELS_WITH_COUNT)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
};
// EVENTS
showAllModelsButton.addEventListener("click", displayCarModels);
showAllModelsWithCountButton.addEventListener("click", displayCarModelsCount);
