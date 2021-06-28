(function () {
  // show logout button if user is logged in
  if (localStorage.getItem('login_id')) {
    let logoutButton = window.document.querySelector('#logout');
    logoutButton.classList.add('show');
    logoutButton.addEventListener('click', () => {
      localStorage.removeItem('login_id');
      window.location.reload();
    })
  }
})();
