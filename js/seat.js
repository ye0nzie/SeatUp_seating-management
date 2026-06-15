// State Pattern
const SeatState = (() => {
    const gender = localStorage.getItem("gender");
    let selectedSeat = null;

    function isOccupied(seat) {
        return seat.classList.contains("male") ||
               seat.classList.contains("female") ||
               seat.classList.contains("disabled-seat");
    }

    function clearExistingLabel() {
        document.querySelectorAll(".seat.male").forEach(seat => {
            seat.textContent = "";
        });
    }

    function disableFemaleSeats() {
        if (gender === "Tn") {
            document.querySelectorAll(".seat.female").forEach(seat => {
                seat.classList.add("disabled-seat");
            });
        }
    }

    function deselectPrevious() {
        document.querySelectorAll(".seat.selected-by-user").forEach(s => {
            s.classList.remove("selected-by-user", "male", "female");
            s.classList.add("available");
            s.textContent = "";
        });
    }

    function selectSeat(seat) {
        if (isOccupied(seat)) return;

        deselectPrevious();

        seat.classList.remove("available");
        seat.classList.add("selected-by-user");

        if (gender === "Ny") {
            seat.classList.add("female");
            seat.textContent = "P";       
        } else if (gender === "Tn") {
            seat.classList.add("male");
            seat.textContent = "";        
        }

        selectedSeat = seat;
    }

    function init() {
        clearExistingLabel();
        disableFemaleSeats();

        document.querySelectorAll(".seat").forEach(seat => {
            seat.addEventListener("click", () => selectSeat(seat));
        });

        document.getElementById("btn-next").addEventListener("click", () => {
            if (!selectedSeat) {
                alert("Silahkan pilih kursi Anda terlebih dahulu!");
                return;
            }
            window.location.href = "pay.html";
        });
    }

    return { init };
})();

SeatState.init();