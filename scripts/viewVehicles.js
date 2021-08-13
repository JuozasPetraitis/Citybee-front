// VARIABLES
const displayingAllVehicles = document.querySelector("#all-vehicles-box");
const showallVehiclesButton = document.querySelector(
  "#show-all-vehicles-button"
);

const FETCH_VEHICLES = "http://localhost:5000/vehicles";
const FETCH_MODELS = "http://localhost:5000/models";

// FUNCTIONS
const showAllVehicles = async (e) => {
  const response = fetch(FETCH_VEHICLES)
    .then((response) => response.json())
    .then((data) => {
      console.log("DATA", data);

      data.reduce((total, item) => {
        displayingAllVehicles.innerHTML += `
        <div class="vehicle-card">
           <p><strong>Model:</strong> ${item.model}</p>
           <p><strong>Plate numbers:</strong> ${item.plates}</p>
           <p><strong>Location:</strong> ${item.location}</p>
        </div>
        `;
      }, "");
    })
    .catch((error) => console.log(error));
};

// EVENTS
showallVehiclesButton.addEventListener("click", showAllVehicles);
