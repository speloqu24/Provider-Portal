const clientName = document.querySelector(".allClient");

clientName.addEventListener("click", (event) => {
  console.log("clicked");
  if (event.target.matches("h5")) {
    let id = event.target.getAttribute("data-id");
    fetch(`/api/singleClient/${id}`)
      .then((res) => {
        window.location.replace(`/api/singleClient/${id}`);
      })
      .catch((err) => console.log(err));
  }
});

const providerName = document.querySelector(".allProvider");

providerName.addEventListener("click", (event) => {
  if (event.target.matches("h5")) {
    let id = event.target.getAttribute("data-id");
    fetch(`/api/singleProvider/${id}`).catch((err) => console.log(err));
  }
});
