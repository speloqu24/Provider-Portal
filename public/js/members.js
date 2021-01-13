$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email);
  });

  const clientFirst = $("input#firstNameCli");
  const clientLast = $("input#lastNameCli");
  const clientEmail = $("input#emailCli");
  const clientPhone = $("input#phoneCli");
  const clientIns = $("input#insuranceCli");

  $(".addClientBtn").on("click", function (event) {
    event.preventDefault();
    const clientData = {
      firstName: clientFirst.val().trim(),
      lastName: clientLast.val().trim(),
      email: clientEmail.val().trim(),
      phone: clientPhone.val().trim(),
      insurance: clientIns.val().trim(),
    };
    console.log(clientData);
    newClient(
      clientData.firstName,
      clientData.lastName,
      clientData.email,
      clientData.phone,
      clientData.insurance
    );
    clientFirst.val("");
    clientLast.val("");
    clientEmail.val("");
    clientPhone.val("");
    clientIns.val("");
  });

  function newClient(firstName, lastName, email, phone, insurance) {
    $.post("/api/clients", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      insurance: insurance,
    })
      // .then(function (data) {
      //   window.location.replace("/members");
      //   // If there's an error, handle it by throwing up a bootstrap alert
      // })
      .catch(handleLoginErr);
  }

  $(".addProBtn").on("click", function () {
    console.log("it worked!");
  });
});
