const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;

    if (nama.trim() === "") {
        alert("Nama harus di isi");
    } 
    else if (email.trim() === "") {
        alert("Email harus di isi");
    } 
    else if (!email.endsWith("@gmail.com")) {
        alert("Email di akhiri dengan @gmail.com");
    } 
    else if (pass.trim() === "") {
        alert("Password harus di isi");
    } 
    else {
        alert("Berhasil Registrasi!");
        localStorage.setItem("isLoggedIn", "true"); //untuk proxy
        window.location.href="homepage.html";
    }
});