// auth.js — Protection Proxy
const AuthProxy = (() => {

    const protectedPages = ["order.html", "seat.html", "pay.html", "done.html"];

    function isLoggedIn() {
        return localStorage.getItem("isLoggedIn") === "true";
    }

    function getCurrentPage() {
        return window.location.pathname.split("/").pop();
    }

    function guard() {
        const page = getCurrentPage();
        if (protectedPages.includes(page) && !isLoggedIn()) {
            alert("Silakan login terlebih dahulu untuk memesan tiket.");
            window.location.href = "login.html";
        }
    }

    return { guard };
})();

AuthProxy.guard();