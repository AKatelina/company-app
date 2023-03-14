if (document.readyState !== "loading") {
    setTimeout(onReady, 0); // Или setTimeout(onReady, 0); если вы хотите, чтобы он был последовательно асинхронным
} else {
    document.addEventListener("DOMContentLoaded", onReady);
}

function onReady() {
    function togglePassword() {
        let eyeOpen = document.getElementById("eye-open");
        let eyeClose = document.getElementById("eye-close");

        eyeClose.classList.toggle('hide');
        eyeOpen.classList.toggle('hide');

        if (pwShown === true) {
            let p = document.getElementById('password');
            p.setAttribute('type', 'text');
        } else {
            let p = document.getElementById('password');
            p.setAttribute('type', 'password');
        }
        pwShown = !pwShown;
    }

    let pwShown = false;
    document.getElementById("eye-open").addEventListener("click", togglePassword);
    document.getElementById("eye-close").addEventListener("click", togglePassword);
}
