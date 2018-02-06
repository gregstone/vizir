
// Règles de calcul 
// * < 1000 emails: 0,2€ par email
// * entre 1000 et 10 000 emails: 0,1€ par email
// * plus de 10 000 email: 0,05€ par email

$(document).ready(function () {
   
    // Formulaire
    var priceSimulator = $('.priceSimulator');

    // slider
    var sliderNumber = priceSimulator.find('.sliderNumber');

    // Valeur total  
    var totalPrice = priceSimulator.find('.totalPrice');

    // valeur Nombre d'eamils
    var emailNumber = priceSimulator.find('.emailNumber');


    sliderNumber.on('change', function () {

        // Nombre d'emails
        emailNumber.text(sliderNumber.val());

        // Prix total 
        if (sliderNumber.val() < 1000) {
            totalPrice.text( (sliderNumber.val() * 0.2) + " €" )
        } else if (sliderNumber.val() > 1000 && sliderNumber.val() < 10000) {
            totalPrice.text( (sliderNumber.val() * 0.1) + " €" )
        } else if (sliderNumber.val() > 10000) {
            totalPrice.text( (sliderNumber.val() * 0.05) + " €" )
        }
     
    });

});
