// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");

const navMenu = document.getElementById("navMenu");


menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// =========================
// CLOSE MENU AFTER CLICK
// =========================

const navLinks = document.querySelectorAll(".nav-links a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const submitButton = contactForm.querySelector("button[type='submit']");

        submitButton.textContent = "Sending...";
        submitButton.disabled = true;

        try {

            const response = await fetch(contactForm.action, {
                method: "POST",
                body: new FormData(contactForm),
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {

                alert("Thank you! Your message has been sent successfully.");

                contactForm.reset();

            } else {

                alert("Sorry! Something went wrong. Please try again.");

            }

        } catch (error) {

            alert("Unable to send your message. Please try again.");

        }

        submitButton.textContent = "Send Message";
        submitButton.disabled = false;

    });

}