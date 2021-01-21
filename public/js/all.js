const clientName = document.querySelector(".allClient");

clientName.addEventListener("click", (event) => {
  if (event.target.matches("h5")) {
    let cliId = event.target.getAttribute("data-id");
    fetch(`/api/singleClient/${cliId}`)
      .then((res) => {
        window.location.replace(`/api/singleClient/${cliId}`);
      })
      .catch((err) => console.log(err));
  }
});

//----------------------------------------------------------
//reserved for next round of development

// const providerName = document.querySelector(".allProvider");

// providerName.addEventListener("click", (event) => {
//   if (event.target.matches("h5")) {
//     let proId = event.target.getAttribute("data-id");
//     fetch(`/api/singleProvider/${proId}`)
//       .then((res) => {
//         window.location.replace(`/api/singleProvider/${proId}`);
//       })
//       .catch((err) => console.log(err));
//   }
// });
//------------------------------------------------------------
