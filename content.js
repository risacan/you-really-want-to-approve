function addCustomBehaviorToApproveButton() {
    document.querySelector('#pull_request_review\\[event\\]_approve').addEventListener('change', function () {
        if (this.checked) {
            alert("You really want to approve?")
        }
    });
}

window.addEventListener('load', addCustomBehaviorToApproveButton);
