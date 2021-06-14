(function () {
  if (!getCookie('login-token')) {
    window.location.href = 'login.html'
  }

  const bookingForm = document.getElementById("booking-form");
  const bookingButton = document.getElementById("booking-form-submit");

  bookingButton.addEventListener("click", (e) => {
    e.preventDefault();

    const salutation = bookingForm.salutation.value;
    const firstName = bookingForm.firstName.value;
    const name = bookingForm.name.value;
    const adress = bookingForm.adress.value;
    const street = bookingForm.street.value;
    const houseNumber = bookingForm.houseNumber.value;
    const postalCode = bookingForm.postalCode.value;
    const city = bookingForm.city.value;
    const email = bookingForm.email.value;
    const telephone = bookingForm.telephone.value;
    const amount = bookingForm.amount.value;
  })
})();

function getCookie(name) {
  let v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}
