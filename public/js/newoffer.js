let selectedCity = [];
let selectedCategory = Number;

async function newOfferHandler(event) {
  event.preventDefault();

  const itemName = document.querySelector("#item-name").value.trim();
  const description = document.querySelector("#description").value.trim();
  const streetAddress = document.querySelector("#street-address").value.trim();
  const zipCode = document.querySelector("#zip-code").value.trim();
  const file = document.querySelector("#file-name");

  let formData = new FormData();
  formData.append("file", file.files[0]);

  async function fetchUrl() {
    if (formData) {
      const response = await fetch("/api/files/upload", {
        method: "POST",
        body: formData,
        headers: {
          Connection: "keep-alive",
          Accept: "*/*",
        },
      });
      if (response.ok) {
        return response.text().then((el) => el);
      } else {
        alert("Error: Failed to upload a file. Please try again.");
      }
    }
  }

  if (
    itemName &&
    description &&
    streetAddress &&
    selectedCity[0] &&
    selectedCity[1] &&
    selectedCategory &&
    zipCode &&
    file
  ) {
    const response = await fetch("/api/offers", {
      method: "POST",
      body: JSON.stringify({
        offer_name: itemName,
        offer_description: description,
        street_address: streetAddress,
        city_id: selectedCity[0],
        city_name: selectedCity[1],
        zipcode: zipCode,
        category_id: selectedCategory,
        url_path: await fetchUrl(),
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to post. Please try again.");
    }
  }
}

document.querySelector("#category").addEventListener(
  "change",
  (event) => {
    const [item] = event.target.selectedOptions;
    selectedCategory = item.dataset.categoryid;
  },
  false
);

document.querySelector("#city").addEventListener(
  "change",
  (event) => {
    const [item] = event.target.selectedOptions;
    selectedCity[0] = item.dataset.cityid;
    selectedCity[1] = item.dataset.cityname;
  },
  false
);

document
  .querySelector("#submit-offer")
  .addEventListener("click", newOfferHandler);
