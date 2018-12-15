$(document).ready(() => {
    DOMBuilder.buildDOM();
    applyScrollEffects($('#theme-section').height());

    $('#teams-row a').on('click', (event) => {
        console.log(event.target.textContent);

        $('#team-photo-section').addClass('animated fadeOutLeft');

        // Refer to PhotoList.js for implementation
        const container = document.getElementById('team-photo-section');
        // team is object containing all team information found in Members.js
        ReactDOM.render(e(PhotoRow, { team: team, division: event.target.textContent }, null), container);

        $('#team-photo-section').removeClass('animated fadeOutLeft');
        $('#team-photo-section').addClass('animated fadeInRight');
    });
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
            $('#main-nav').removeClass('animated slideInDown');
            $('#main-nav').addClass('animated slideOutUp');
            $('#main-footer').removeClass('animated slideOutDown');
            $('#main-footer').addClass('animated slideInUp');
        } else {
            $('#main-nav').css('background-color', 'rgba(0, 0, 0, 0.15)');
            $('#main-nav').removeClass('animated slideOutUp');
            $('#main-nav').addClass('animated slideInDown');
            $('#main-footer').removeClass('animated slideInUp');
            $('#main-footer').addClass('animated slideOutDown');
        }
    });
}