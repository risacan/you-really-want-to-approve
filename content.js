function addCustomBehaviorToApproveButton() {
    document.querySelector('#pull_request_review\\[event\\]_approve').addEventListener('change', function () {
        if (this.checked) {
            alert("You really want to approve?")
        }
    });
}

// ページが読み込まれたときに関数を実行
window.addEventListener('load', addCustomBehaviorToApproveButton);
