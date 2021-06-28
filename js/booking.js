// emidiatly executed funtion when js is loaded
(function () {
  // redirect if user is not logged in (cookie was not found)
  if (!localStorage.getItem('login_id')) {
    window.location.href = 'login.html'
  }

  // get elements from DOM
  const bookingForm = document.getElementById("booking-form");
  const bookingButton = document.getElementById("booking-form-submit");
  // server url
  const url = 'https://pits-projekt.herokuapp.com/';

  // add click listener to submit button
  bookingButton.addEventListener("click", (e) => {
    e.preventDefault();

    // get url query parameter of event
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    // get form data
    const salutation = bookingForm.salutation.value;
    const firstName = bookingForm.firstName.value;
    const name = bookingForm.name.value;
    const street = bookingForm.street.value;
    const houseNumber = bookingForm.houseNumber.value;
    const postalCode = bookingForm.postalCode.value;
    const city = bookingForm.city.value;
    const email = bookingForm.email.value;
    const telephone = bookingForm.telephone.value;
    const amount = bookingForm.amount.value;
    const event_id = urlParams.get('event_id');

    // create ajax request with jquery
    $.ajax({
      contentType: 'application/json',
      data: JSON.stringify({
        salutation: salutation,
        firstName: firstName,
        street: street,
        houseNumber: houseNumber,
        postalCode: postalCode,
        city: city,
        email: email,
        telephone: telephone,
        amount: amount,
        event_id: event_id
      }),
      dataType: 'json',
      xhrFields: {
        withCredentials: true
      },
      success: function (data) {
        console.log('success');
      },
      error: function (data) {
        console.log('error');
      },
      processData: false,
      type: 'POST',
      url: url + 'booking'
    });
  })
})();

// helper function from https://plainjs.com/javascript/utilities/set-cookie-get-cookie-and-delete-cookie-5/
function getCookie(name) {
  let v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}
