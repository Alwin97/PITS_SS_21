// emidiatly executed funtion when js is loaded
(function () {
  // redirect if user is logged in (cookie was found)
  if (getCookie('login_id')) {
    window.location.href = 'index.html'
  }

  // get elements from DOM
  const loginForm = document.getElementById("login-form");
  const loginButton = document.getElementById("login-form-submit");
  // server url
  const url = 'http://localhost:3000/';

  // add click listener to submit button
  loginButton.addEventListener("click", (e) => {
    e.preventDefault();

    // get username and passwort
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    const cookieSetting = document.querySelector('input[name="cookie-security"]:checked').value;

    // create ajax request with jquery
    $.ajax({
      contentType: 'application/json',
      data: JSON.stringify({username: username, password: password, cookieSetting: cookieSetting}),
      dataType: 'json',
      xhrFields: {
        withCredentials: true
      },
      headers: {
        'Access-Control-Allow-Credentials':'true',
        'Access-Control-Allow-Origin':'http://localhost:3000'
      },
      success: function (data) {
        window.location.href = 'booking.html';
      },
      error: function (data) {
        console.log('error');
      },
      processData: false,
      type: 'POST',
      url: url + 'login'
    });
  })
})();

// helper functions from https://plainjs.com/javascript/utilities/set-cookie-get-cookie-and-delete-cookie-5/
function setCookie(name, value, days) {
  let d = new Date;
  d.setTime(d.getTime() + 24*60*60*1000*days);
  document.cookie = name + "=" + value + ";path=/;expires=" + d.toDateString();
}

function getCookie(name) {
  let v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}
