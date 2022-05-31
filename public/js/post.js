const postNewArticle = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-title").value.trim();
  const article = document.querySelector("#post-article").value.trim();

  if (title && article) {
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ title, article }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to post.");
    }
  }
};

document
  .querySelector(".post-article-form")
  .addEventListener("click", postNewArticle);
