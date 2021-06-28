(function () {
  // show logout button if user is logged in
  if (localStorage.getItem('login_id')) {
    let logoutButton = window.document.querySelector('#logout');
    logoutButton.classList.add('show');
    logoutButton.addEventListener('click', () => {
      localStorage.removeItem('login_id');
      window.location.reload();

      const url = 'https://pits-projekt.herokuapp.com/';

      $.ajax({
        contentType: 'application/json',
        dataType: 'json',
        xhrFields: {
          withCredentials: true
        },
        headers: {
          'Access-Control-Allow-Credentials':'true',
          // 'Access-Control-Allow-Origin':'https://pits-projekt.herokuapp.com/'
        },
        success: function (data) {
          console.log('success');
        },
        error: function (data) {
          console.log('error');
        },
        processData: false,
        type: 'POST',
        url: url + 'logout'
      });
    })
  }
})();
