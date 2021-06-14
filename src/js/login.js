(function () {
  if (getCookie('login-token')) {
    window.location.href = 'index.html'
  }

  const loginForm = document.getElementById("login-form");
  const loginButton = document.getElementById("login-form-submit");

  loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Alwin" && password === "test") {
      setCookie('login-token', '1357908642ABZ')
      window.location.href = 'booking.html'
    } else {
      alert("Die eingegebenen Daten sind nicht korrekt");
    }
  })
})();

function setCookie(name, value, days) {
  let d = new Date;
  d.setTime(d.getTime() + 24*60*60*1000*days);
  document.cookie = name + "=" + value + ";path=/;expires=" + d.toDateString();
}

function getCookie(name) {
  let v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}
