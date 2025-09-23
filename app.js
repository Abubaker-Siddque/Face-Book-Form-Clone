
const hamburger = document.querySelector('.hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {

    navLinks.classList.toggle('active');
});

const genderRadios = document.querySelectorAll('input[name="gender"]');
const customFields = document.getElementById('custom-fields');
genderRadios.forEach(radio => {

    radio.addEventListener('change', () => {
        customFields.style.display = (radio.value === "custom") ? "block" : "none";
    });
});
function validateForm(event) {
    event.preventDefault(); // stop page refresh

    const firstname = document.getElementById("firstname").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const day = document.getElementById("birthdate").value;
    const month = document.getElementById("birthmonth").value;
    const year = document.getElementById("birthyear").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const pronoun = document.getElementById("pronoun").value;
    const optionalGender = document.getElementById("optional").value.trim();

    if (
        firstname === "" ||
        lastname === "" ||
        email === "" ||
        password === "" ||
        day === "" ||
        month === "" ||
        year === "" ||
        !gender
    ) {
        alert("Please fill in all required fields.");
        return;
    }

    // log all values in console
    console.log("Form submitted:");
    console.log("First Name:", firstname);
    console.log("Last Name:", lastname);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Birthday:", `${day}-${month}-${year}`);
    console.log("Gender:", gender.value);

    if (gender.value === "custom") {
        console.log("Pronoun:", pronoun);
        console.log("Optional Gender:", optionalGender);
    }

    alert("Form submitted successfully!");
    document.getElementById("signupForm").reset();
    customFields.style.display = "none"; // hide custom fields after reset
}
