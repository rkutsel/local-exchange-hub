const delButtonHandler = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    console.log(id);

    const response = await fetch(`/api/offers/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete offer");
      console.log(err.error);
    }
  }
};

document.querySelectorAll(".dltbtn").forEach((item) => {
  item.addEventListener("click", delButtonHandler);
});
