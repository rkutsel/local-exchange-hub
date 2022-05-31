async function postCommentArticle(event) {
  event.preventDefault();
  const postId = window.location.pathname.split("/")[2];
  const comment = document.querySelector("#article-post-comment").value.trim();
  console.log(postId, comment);

  if (postId && comment) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ postId, comment }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace(`/posts/${postId}`);
    } else {
      alert("Failed to post.");
    }
  }
}

document
  .querySelector(".post-comment-form")
  .addEventListener("click", postCommentArticle);
