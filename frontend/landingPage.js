const searchParams = new URLSearchParams(window.location.search);
const reasonParam = searchParams.get('reason');

if (reasonParam) {
    const toastDiv = document.querySelector('#deleted_profile_toast');

    toastDiv.innerHTML = `
    <div class="toast bg-dark" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
            <strong class="mr-auto">Skylord Alert!</strong>
            <small>1 mins ago</small>
            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close" onClick="closeToast()">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="toast-body">
            Your profile has been deleted successfully. If you wish to access content again, please create a new profile. Thank you. <br /><br/ >- Skylord Perry.
        </div>
    </div>
  `
}

closeToast = () => {
    const toast = document.querySelector('.toast');
    toast.style.opacity = 0;
}