function adoptPet(petName) {
    let userName = prompt("Enter your name to adopt " + petName + ":");
    
    if (userName) {
        alert(
            "Thank you, " + userName + "!\n\n" +
            "Your request to adopt " + petName + " has been received.\n" +
            "Our team will contact you soon."
        );
    } else {
        alert("Adoption cancelled.");
    }
}
