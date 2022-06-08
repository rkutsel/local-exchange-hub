const newOfferHandler = async (event) => {
  event.preventDefault();

  const itemName = document.querySelector("#item-name").value.trim();
  const description = document.querySelector("#description").value.trim();
  const streetAddress = document.querySelector("#street-address").value.trim();
  const cityName = document.querySelector("#city-name").value.trim();
  const zipCode = document.querySelector("#zip-code").value.trim();
  const itemNew = document.querySelector("#item-new").value;
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
        return "GOOD";
      }
    }
  }

  if (itemName && description && streetAddress && cityName && zipCode && file) {
    const response = await fetch("/api/offers", {
      method: "POST",
      body: JSON.stringify({
        offer_name: itemName,
        offer_description: description,
        street_address: streetAddress,
        city_name: cityName,
        zipcode: zipCode,
        file: await fetchUrl(),
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to post.");
    }
  }
};

document
  .querySelector("#submit-offer")
  .addEventListener("click", newOfferHandler);
