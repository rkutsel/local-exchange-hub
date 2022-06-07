const newOfferHandler = async (event) => {
  event.preventDefault();

  const itemName = document.querySelector("#item-name").value.trim();
  const offerFree = document.querySelector("#offer-is-free").value.trim();
  const description = document.querySelector("#description").value.trim();
  const streetAddress = document.querySelector("#street-address").value.trim();
  const zipcode = document.querySelector("#zipcode");
  if (itemName && offerFree && description && streetAddress && zipcode) {
    const response = await fetch("/api/offer_items", {
      method: "POST",
      body: JSON.stringify({
        itemName,
        offerFree,
        description,
        streetAddress,
        zipcode,
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
  .querySelector(".button-offer")
  .addEventListener("click", newOfferHandler);
