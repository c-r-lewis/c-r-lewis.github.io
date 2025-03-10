function copyEmail() {
    const email = "charlotte.lewis.dev@proton.me";
    navigator.clipboard.writeText(email).then(function() {
        const popup = document.getElementById('popup');
        popup.style.display = 'block';
        setTimeout(function() {
            popup.style.display = 'none';
        }, 2000);
    }, function(err) {
        console.error('Erreur lors de la copie de l\'email: ', err);
    });
}