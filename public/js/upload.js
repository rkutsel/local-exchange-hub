async function uploadFile(event) {
  event.preventDefault();

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
}

document.querySelector("#upload").addEventListener("click", uploadFile);
