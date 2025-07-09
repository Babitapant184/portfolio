
function showMoreInfo() {
    alert("I am a BCA final student of batch 2022-25, i am keeping on learning new technologies , after completing my 12th, i was qualified in NDA entrance exam in my 1st attempt. i am also a national badminton player, and a good communicator. i started my journey in computer application field in 2022 and will continue this. i am very exited to leverage my academic knowledge to become a successful software engineer.");
}

document.getElementById("more-info-button").addEventListener("click", showMoreInfo);






function validateContactForm(contactForm) {
    const name = contactForm["username"].value;
    const email = contactForm["email"].value;
    const mobile = contactForm["mobile"].value;
    const message = contactForm["message"].value;

    
    if (!name || !email || !message) {
        alert("Please fill in all required fields.");
        return false;
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

   
    const mobileRegex = /^\d{10}$/;
    if (mobile && !mobileRegex.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return false;
    }

    return true;
}


function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const contactForm = event.target; // Get the form element

    
    if (validateContactForm(contactForm)) {
                alert("Form submitted successfully!");
        
                contactForm.reset();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", handleSubmit);
});