// VARIABLES
const showAllModelsButton = document.querySelector("#showCarModels");
const showAllModelsWithCountButton = document.querySelector(
  "#showCarModelsWithCount"
);

const displayingAllModels = document.querySelector("#model-box");
const displayingAllModelsWithCount = document.querySelector(
  "#model-box-with-count"
);

const FETCH_MODELS = "https://whatafa.herokuapp.com/models";
const FETCH_MODELS_WITH_COUNT = "https://whatafa.herokuapp.com/modelscount";

// FUNCTIONS
const displayCarModels = (e) => {
  return fetch(FETCH_MODELS)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
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

      data.reduce((item, total) => {
        displayingAllModelsWithCount.innerHTML += `
        <div class="model-card">
           <p><strong>Model:</strong> ${item.model}</p>
           <p><strong>Price:</strong> ${item.price}</p>
           <p><strong>Count:</strong> ${item.count}</p>
        </div>
        `;
        return total;
      }, "");
    })
    .catch((error) => console.log(error));
};
// EVENTS
showAllModelsButton.addEventListener("click", displayCarModels);
showAllModelsWithCountButton.addEventListener("click", displayCarModelsCount);
