const okButton = document.getElementById('okButton');
const loadingButton = document.getElementById('loadingButton');
    
okButton.addEventListener('click', function(event) {
    event.preventDefault();

    okButton.classList.add('d-none');
    loadingButton.classList.remove('d-none');

    setTimeout(function() {
        window.location.href = linkButton.href;
      }, 1000);
});

window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
      if (loadingButton.classList.contains('d-none')) {
        okButton.classList.remove('d-none');
      }
      
      if (!loadingButton.classList.contains('d-none')) {
        loadingButton.classList.add('d-none');
      }
    }
});