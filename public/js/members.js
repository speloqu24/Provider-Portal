$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email);
  });

  //--------------------Add Client------------------------------
  const submitClientBtn = document.getElementById("addClientBtn");
  submitClientBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const newClient = {
      first_name: document.getElementById("clientFirst").value.trim(),
      last_name: document.getElementById("clientLast").value.trim(),
      email: document.getElementById("clientEmail").value.trim(),
      phone: document.getElementById("clientPhone").value.trim(),
      insurance: document.getElementById("clientIns").value.trim(),
      ProviderId: parseInt(document.getElementById("clientPro").value),
    };
    fetch("/api/client", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newClient),
    })
      .then((data) => data.json())
      .then((res) => {
        document.getElementById("clientFirst").value = "";
        //add rest of elements
      });
  });

  //-------------------Add Provider-----------------------------------
  const submitProBtn = document.getElementById("addProBtn");
  submitProBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const newProvider = {
      first_name: document.getElementById("proFirst").value.trim(),
      last_name: document.getElementById("proLast").value.trim(),
      email: document.getElementById("proEmail").value.trim(),
      phone: document.getElementById("proPhone").value.trim(),
      company: document.getElementById("proCompany").value.trim(),
      practice: document.getElementById("proPractice").value.trim(),
    };
    fetch("/api/provider", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProvider),
    }).then((data) => data.json()); //add.then to clear fields
  });

  //getting provider first and last name and id
  fetch("/api/providers", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => data.json())
    .then((data) => {
      data.forEach((provider) => {
        const element = $(`<option>`)
          .text(`${provider.first_name} ${provider.last_name}`)
          .attr("value", provider.id);
        $("#clientPro").append(element);
      });
    });
});
