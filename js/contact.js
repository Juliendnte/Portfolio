document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if(name === "" || email === "" || message === ""){
        document.getElementById("formMessage").textContent = "Veuillez remplir tous les champs.";
        document.getElementById("formMessage").style.color = "red";
        return;
    }

    const formData = {
        name: name,
        email: email,
        message: message
    };

    fetch(`https://formspree.io/f/xvgpqzpy`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    }).then(function(response) {
        if (response.ok) {
            document.getElementById("formMessage").textContent = "Merci pour votre message, " + name + " ! Je vous répondrai bientôt.";
            document.getElementById("formMessage").style.color = "green";
            document.getElementById("contactForm").reset();
        } else {
            document.getElementById("formMessage").textContent = "Une erreur est survenue. Veuillez réessayer plus tard.";
            document.getElementById("formMessage").style.color = "red";
        }
    }).catch(function(error) {
        document.getElementById("formMessage").textContent = "Une erreur est survenue. Veuillez réessayer plus tard.";
        document.getElementById("formMessage").style.color = "red";
    });
});
