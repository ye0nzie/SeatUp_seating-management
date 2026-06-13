//module pattern

const OrderModule = (() => {
    // Private
    function getFormData() {
        return {
            nama: document.getElementById("name").value,
            gender: document.querySelector('input[name="passenger-title"]:checked')?.value,
            identitas: document.querySelector('input[name="id-type"]:checked')?.value,
            nomor: document.getElementById("passenger-id").value,
        };
    }

    function validate(data) {
        if (!data.gender) return "Pilih jenis kelamin";
        if (!data.nama.trim()) return "Nama harus diisi";
        if (!data.identitas) return "Pilih jenis identitas";
        if (!data.nomor.trim()) return "Nomor identitas harus diisi";
        return null;
    }

    function saveAndRedirect(data) {
        localStorage.setItem("gender", data.gender);
        window.location.href = "seat.html";
    }

    // Public
    function init() {
        document.getElementById("orderForm").addEventListener("submit", function(e) {
            e.preventDefault();
            const data = getFormData();
            const error = validate(data);
            if (error) { alert(error); return; }
            saveAndRedirect(data);
        });
    }

    return { init };
})();

OrderModule.init();