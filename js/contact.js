document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validation simple
    if(name === "" || email === "" || message === "") {
        document.getElementById("formMessage").textContent = "Veuillez remplir tous les champs.";
        document.getElementById("formMessage").style.color = "red";
        return;
    }

    // Afficher un message de succès
    document.getElementById("formMessage").textContent = "Merci pour votre message, " + name + " ! Je vous répondrai bientôt.";
    document.getElementById("formMessage").style.color = "green";

    // Réinitialiser le formulaire
    document.getElementById("contactForm").reset();
});
