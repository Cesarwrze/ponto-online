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