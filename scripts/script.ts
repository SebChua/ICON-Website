$(document).ready(() => {
    DOMBuilder.buildDOM();
    applyScrollEffects($('#theme-section').height());
});

class DOMBuilder {
    static buildDOM() {
        let contact_section = $('body').find('#contact-section');
        // contact_section.html("HELLO");
    }
}

// Scroll Effects on Navbar and Footer
function applyScrollEffects(distanceFromTop: number){
    $(window).scroll(() => {
        if ($(this).scrollTop() > distanceFromTop) {
            $('#main-nav').css('background-color', 'rgba(0, 0, 0, 0.8)');
            $('#main-footer').removeClass('animated slideOutDown');
            $('#main-footer').addClass('animated slideInUp');
        } else {
            $('#main-nav').css('background-color', 'rgba(0, 0, 0, 0.15)');
            $('#main-footer').removeClass('animated slideInUp');
            $('#main-footer').addClass('animated slideOutDown');
        }
    });
}