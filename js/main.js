(function () {
  // show logout button if user is logged in
  if (getCookie('login_id')) {
    let logoutButton = window.document.querySelector('#logout');
    logoutButton.classList.add('show');
    logoutButton.addEventListener('click', () => {
      localStorage.removeItem('login_id');
      deleteCookie('login_id');
      window.location.reload();
    })
  }
})();


// cookie helper funtions from https://plainjs.com/javascript/utilities/set-cookie-get-cookie-and-delete-cookie-5/
function getCookie(name) {
  let v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}

function deleteCookie(name) {
  document.cookie = name + "=" + '' + ";path=/;expires=" + 'Thu, 01 Jan 1970 00:00:01 GMT';
}

function setCookie(name, value, days) {
  let d = new Date;
  d.setTime(d.getTime() + 24*60*60*1000*days);
  document.cookie = name + "=" + value + ";path=/;expires=" + d.toDateString();
}
