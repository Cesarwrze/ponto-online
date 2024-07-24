const okButton = document.getElementById('okButton');
const loadingButton = document.getElementById('loadingButton');

function showOkButton() {
    okButton.classList.remove('d-none');
    loadingButton.classList.add('d-none');
}
    
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
      showOkButton();
    }
});