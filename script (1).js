// ========================================
// CLEAN OCEAN X - WEBSITE JAVASCRIPT
// ========================================


// ========================================
// SOLUTIONS CALENDAR TABS
// ========================================

document.querySelectorAll(".cal-tab").forEach((button) => {

    button.addEventListener("click", () => {

        // Remove active state from all calendar tabs
        document.querySelectorAll(".cal-tab").forEach((tab) => {
            tab.classList.remove("active");
        });

        // Hide all calendar panels
        document.querySelectorAll(".calendar-panel").forEach((panel) => {
            panel.classList.remove("active");
        });

        // Activate clicked tab
        button.classList.add("active");

        // Show matching calendar
        const panel = document.getElementById(button.dataset.calendar);

        if (panel) {
            panel.classList.add("active");
        }

    });

});


// ========================================
// MAIN TABS
// ========================================

document.querySelectorAll(".main-tab").forEach((button) => {

    button.addEventListener("click", () => {

        // Remove active state from all main tabs
        document.querySelectorAll(".main-tab").forEach((tab) => {
            tab.classList.remove("active");
        });

        // Hide all tab panels
        document.querySelectorAll(".tab-panel").forEach((panel) => {
            panel.classList.remove("active");
        });

        // Activate clicked tab
        button.classList.add("active");

        // Show matching panel
        const panel = document.getElementById(button.dataset.tab);

        if (panel) {
            panel.classList.add("active");
        }

    });

});


// ========================================
// DONATION OPTIONS
// ========================================

document.querySelectorAll(".donation-options button").forEach((button) => {

    button.addEventListener("click", () => {

        // Remove selected state
        document
            .querySelectorAll(".donation-options button")
            .forEach((item) => {
                item.classList.remove("selected");
            });

        // Select clicked amount
        button.classList.add("selected");

    });

});


// ========================================
// DONATE BUTTON
// ========================================

document.querySelector("#donateBtn")?.addEventListener("click", () => {

    const selected =
        document.querySelector(".donation-options button.selected");

    if (selected) {

        alert(
            "Thank you for supporting Clean Ocean X! 🌊💙\n\n" +
            "Selected donation: " +
            selected.textContent
        );

    } else {

        alert(
            "Please select a donation amount first. 🌊"
        );

    }

});


// ========================================
// VOLUNTEER FORM
// ========================================

document.querySelector("#volunteerForm")?.addEventListener("submit", (event) => {

    event.preventDefault();

    alert(
        "Thank you for volunteering with Clean Ocean X! 🌊💚\n\n" +
        "We appreciate your support in protecting our oceans."
    );

    event.target.reset();

});