const newOfferHandler = async (event) => {
  event.preventDefault();

  const itemName = document.querySelector("#item-name").value.trim();
  const description = document.querySelector("#description").value.trim();
  const streetAddress = document.querySelector("#street-address").value.trim();
  const cityName = document.querySelector("#city-name").value.trim();
  const zipCode = document.querySelector("#zip-code");
  const itemNew = document.querySelector("#item-new").value;

  if (itemName && description && streetAddress && cityName && zipCode) {
    const response = await fetch("/api/offers", {
      method: "POST",
      body: JSON.stringify({
        offer_name: itemName,
        offer_description: description,
        street_address: streetAddress,
        city_name: cityName,
        zipCode,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to post.");
    }
  }
  const file = document.querySelector("#file-name");
  let formData = new FormData();
  formData.append("file", file.files[0]);

  if (formData) {
    const response = await fetch("/api/files/upload", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      // document.location.replace(`/`);
    } else {
      alert("Error: Failed to upload a file. Please try again.");
    }
  }
};

document
  .querySelector("#submit-offer")
  .addEventListener("click", newOfferHandler);
