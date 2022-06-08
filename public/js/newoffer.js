const newOfferHandler = async (event) => {
  event.preventDefault();

  const itemName = document.querySelector("#item-name").value.trim();
  const description = document.querySelector("#description").value.trim();
  const streetAddress = document.querySelector("#street-address").value.trim();
  const cityName = document.querySelector("#city-name").value.trim();
  const zipCode = document.querySelector("#zip-code");
  if (itemName && offerFree && description && streetAddress && zipCode) {
    const response = await fetch("/api/offer_items", {
      method: "POST",
      body: JSON.stringify({
        offer_name: itemName,
        free_offer: offerFree,
        offer_description: description,
        street_address: streetAddress,
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
  .querySelector(".button-offer")
  .addEventListener("click", newOfferHandler);
