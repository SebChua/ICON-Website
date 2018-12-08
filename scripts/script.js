$(document).ready(function () {
    DOMBuilder.buildDOM();
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
