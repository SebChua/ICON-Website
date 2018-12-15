$(document).ready(function () {
    DOMBuilder.buildDOM();
    applyScrollEffects($('#theme-section').height());
    $('#teams-row a').on('click', function (event) {
        console.log(event.target.textContent);
        $('#team-photo-section').addClass('animated fadeOutLeft');
        // Refer to PhotoList.js for implementation
        var container = document.getElementById('team-photo-section');
        ReactDOM.render(e(PhotoRow, { team: team, division: event.target.textContent }, null), container);
        $('#team-photo-section').removeClass('animated fadeOutLeft');
        $('#team-photo-section').addClass('animated fadeInRight');
    });
});
var DOMBuilder = /** @class */ (function () {
    function DOMBuilder() {
    }
    DOMBuilder.buildDOM = function () {
        var contact_section = $('body').find('#contact-section');
        // contact_section.html("HELLO");
    };
    return DOMBuilder;
}());
// Scroll Effects on Navbar and Footer
function applyScrollEffects(distanceFromTop) {
    var _this = this;
    $(window).scroll(function () {
        if ($(_this).scrollTop() > distanceFromTop) {
            $('#main-nav').css('background-color', 'rgba(0, 0, 0, 0.8)');
            $('#main-footer').removeClass('animated slideOutDown');
            $('#main-footer').addClass('animated slideInUp');
        }
        else {
            $('#main-nav').css('background-color', 'rgba(0, 0, 0, 0.15)');
            $('#main-footer').removeClass('animated slideInUp');
            $('#main-footer').addClass('animated slideOutDown');
        }
    });
}
