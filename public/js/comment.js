const commentFormHandler = async (event) => {
  event.preventDefault();
  const id =
    window.location.href.split("/")[window.location.href.split("/").length - 1];
  // Collect values from the comment form
  const comment = document.querySelector("#new-comment").value.trim();
  const commentId = event.target.getAttribute("data-cid");

  if (comment) {
    let response;
    if (commentId) {
      response = await fetch(`/api/comments/${id}`, {
        method: "PUT",
        body: JSON.stringify({ comment }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        // If successful, redirect the browser to the details page
        const offerId =
          window.location.href.split("/")[
            window.location.href.split("/").length - 2
          ];
        document.location.replace(`/details/${offerId}`);
      } else {
        alert(response.statusText);
      }
    } else {
      // Send a POST request to the API endpoint
      // console.log("comment:" , user_comment);
      response = await fetch(`/api/comments/${id}`, {
        method: "POST",
        body: JSON.stringify({ comment }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        // If successful, redirect the browser to the details page
        const offerId =
          window.location.href.split("/")[
            window.location.href.split("/").length - 1
          ];
        document.location.replace(`/details/${offerId}`);
      } else {
        alert(response.statusText);
      }
    }
  }
};

const delButtonHandler = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute("data-id")) {
    const commentId = event.target.getAttribute("data-id");
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      if (
        isNaN(
          parseInt(
            window.location.href.split("/")[
              window.location.href.split("/").length - 2
            ]
          )
        )
      ) {
        const offerId =
          window.location.href.split("/")[
            window.location.href.split("/").length - 1
          ];
        document.location.replace(`/details/${offerId}`);
      } else {
        const offerId =
          window.location.href.split("/")[
            window.location.href.split("/").length - 2
          ];
        document.location.replace(`/details/${offerId}`);
      }
    } else {
      alert("Cannot delete someone else's comment!");
    }
  }
};

const editButtonHandler = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute("data-eid")) {
    const commentId = event.target.getAttribute("data-eid");
    if (
      isNaN(
        parseInt(
          window.location.href.split("/")[
            window.location.href.split("/").length - 2
          ]
        )
      )
    ) {
      const offerId =
        window.location.href.split("/")[
          window.location.href.split("/").length - 1
        ];
      document.location.replace(`/oldcomment/${offerId}/${commentId}`);
    } else {
      const offerId =
        window.location.href.split("/")[
          window.location.href.split("/").length - 2
        ];
      document.location.replace(`/oldcomment/${offerId}/${commentId}`);
    }
  }
};

document
  .querySelector(".new-comment-form")
  .addEventListener("click", commentFormHandler);

const commentList = document.querySelector(".comment-list");
if (commentList) {
  document
    .querySelector("#delete-comment-btn")
    .addEventListener("click", delButtonHandler);

  document
    .querySelector("#edit-comment-btn")
    .addEventListener("click", editButtonHandler);
}
