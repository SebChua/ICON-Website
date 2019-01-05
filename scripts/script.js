var team = {
    "Executive": [
        {
            "firstName": "Sebastian",
            "lastName": "Chua",
            "division": "Executive",
            "role": "Project Manager",
            "key": "sebastianchua"
        },
        {
            "firstName": "Ivan",
            "lastName": "Darmawan",
            "division": "Executive",
            "role": "Project Manager",
            "key": "ivandarmawan"
        },
        {
            "firstName": "Adrian",
            "lastName": "Santoso",
            "division": "Executive",
            "role": "Secretary",
            "key": "adrianbagus"
        },
        {
            "firstName": "Audrey",
            "lastName": "Patricia",
            "division": "Executive",
            "role": "Secretary",
            "key": "audreypatricia"
        }
    ],
    "Events": [
        {
            "firstName": "Verren",
            "lastName": "Jesilia",
            "division": "Events",
            "role": "Events Director",
            "key": "verrenjesilia"
        },
        {
            "firstName": "Selina",
            "lastName": "Nicole",
            "division": "Events",
            "role": "Committee",
            "key": "selinanicole"
        },
        {
            "firstName": "Felia",
            "lastName": "Clarissa",
            "division": "Events",
            "role": "Committee",
            "key": "feliaclarissa"
        },
        {
            "firstName": "Ivana",
            "lastName": "Widjaja",
            "division": "Events",
            "role": "Committee",
            "key": "ivanawidjaja"
        }
    ],
    "Marketing": [
        {
            "firstName": "Glen",
            "lastName": "Odang",
            "division": "Marketing",
            "role": "Marketing Director",
            "key": "glenodang"
        },
        {
            "firstName": "Michelle",
            "lastName": "Gracia",
            "division": "Marketing",
            "role": "Committee",
            "key": "michellegracia"
        },
        {
            "firstName": "Williyanti",
            "lastName": "Tjoa",
            "division": "Marketing",
            "role": "Committee",
            "key": "williyantitjoa"
        },
        {
            "firstName": "Glenn",
            "lastName": "Kadarusman",
            "division": "Marketing",
            "role": "Committee",
            "key": "glennkadarusman"
        }
    ],
    "Design": [
        {
            "firstName": "Shannen",
            "lastName": "Patricia",
            "division": "Design",
            "role": "Design Director",
            "key": "shannenpatricia"
        },
        {
            "firstName": "Devi",
            "lastName": "Arifianti",
            "division": "Design",
            "role": "Committee",
            "key": "deviarifianti"
        },
        {
            "firstName": "Elena",
            "lastName": "Hadinata",
            "division": "Design",
            "role": "Committee",
            "key": "elenahadinata"
        },
        {
            "firstName": "Nicole",
            "lastName": "Samudera",
            "division": "Design",
            "role": "Committee",
            "key": "nicolesamudera"
        }
    ],
    "Liaison Officers": [
        {
            "firstName": "Calista",
            "lastName": "Amarati",
            "division": "Liaison Officer",
            "role": "Liaison Officer Director",
            "key": "calistaamarati"
        },
        {
            "firstName": "Adrian",
            "lastName": "Santoso",
            "division": "Liaison Officer",
            "role": "Liaison Officer",
            "key": "adrianbagus"
        },
        {
            "firstName": "Josella",
            "lastName": "Rachmat",
            "division": "Liaison Officer",
            "role": "Liaison Officer",
            "key": "josellarachmat"
        },
        {
            "firstName": "Elsa",
            "lastName": "Tjendana",
            "division": "Liaison Officer",
            "role": "Liaison Officer",
            "key": "elsatjendana"
        },
        {
            "firstName": "Shafira",
            "lastName": "Kurniadewi",
            "division": "Liaison Officer",
            "role": "Liaison Officer",
            "key": "shafirakurniadewi"
        }
    ],
    "Sponsorship": [
        {
            "firstName": "Cornelia",
            "lastName": "Michelle",
            "division": "Sponsorship",
            "role": "Sponsorship Director",
            "key": "corneliamichelle"
        },
        {
            "firstName": "Ezra",
            "lastName": "Bagaskara",
            "division": "Sponsorship",
            "role": "Committee",
            "key": "ezrabagaskara"
        },
        {
            "firstName": "Melinda",
            "lastName": "Saputera",
            "division": "Sponsorship",
            "role": "Committee",
            "key": "melindasaputera"
        },
        {
            "firstName": "Karen",
            "lastName": "Devanie",
            "division": "Sponsorship",
            "role": "Committee",
            "key": "karendevanie"
        }
    ],
    "Logistics": [
        {
            "firstName": "Marchia",
            "lastName": "Devana",
            "division": "Logistics",
            "role": "Logistics Director",
            "key": "marchiadevana"
        },
        {
            "firstName": "Meta",
            "lastName": "Agustina",
            "division": "Logistics",
            "role": "Committee",
            "key": "metaagustina"
        },
        {
            "firstName": "Sharon",
            "lastName": "Giovanni",
            "division": "Logistics",
            "role": "Committee",
            "key": "sharongiovani"
        },
        {
            "firstName": "Vincent",
            "lastName": "Julio",
            "division": "Logistics",
            "role": "Committee",
            "key": "vincentjulio"
        },
        {
            "firstName": "Anastasia",
            "lastName": "Kristabella",
            "division": "Logistics",
            "role": "Committee",
            "key": "anastasiakristabella"
        }
    ]
};
$(document).ready(function () {
    $('#theme-section img').css('max-height', $(window).height());
    applyScrollEffects($('#theme-section').height() - 600);
    buildTeamPhotos('Executive');
    $('#teams-row a').on('click', function () {
        // $('#team-photo-section').removeClass('fadeInRight');
        // $('#team-photo-section').addClass('fadeOutLeft');
        $('#team-photo-section').html('');
        var division = $('#teams-row').find('a:focus').text();
        // console.log($('#teams-row').find('a:focus').text());
        buildTeamPhotos(division);
    });
    // $('#teams-row a').on('click', (event) => {
    //     console.log(event.target.textContent);
    //     // $('#team-photo-section').addClass('animated fadeOutLeft');
    //     // Refer to PhotoList.js for implementation
    //     const container = document.getElementById('team-photo-section');
    //     // team is object containing all team information found in Members.js
    //     // ReactDOM.render(e(PhotoRow, { team: team, division: event.target.textContent }, null), container);
    //     ReactDOM.render(e(MeetTheTeam, {}, null), container);
    //     console.log('hello');
    //     // $('#team-photo-section').removeClass('animated fadeOutLeft');
    //     // $('#team-photo-section').addClass('animated fadeInRight');
    // });
});
// Scroll Effects on Navbar and Footer
function applyScrollEffects(distanceFromTop) {
    var _this = this;
    $(window).scroll(function () {
        if ($(_this).scrollTop() > distanceFromTop - $('#main-nav').height()) {
            $('#main-nav').css('background-color', 'rgba(0, 0, 0, 0.8)');
            // $('#main-nav').removeClass('animated slideInDown');
            // $('#main-nav').addClass('animated slideOutUp');
            // $('#main-footer').removeClass('animated slideOutDown');
            // $('#main-footer').addClass('animated slideInUp');
        }
        else {
            $('#main-nav').css('background-color', 'rgba(0, 0, 0, 0.10)');
            //     $('#main-nav').removeClass('animated slideOutUp');
            //     $('#main-nav').addClass('animated slideInDown');
            //     $('#main-footer').removeClass('animated slideInUp');
            //     $('#main-footer').addClass('animated slideOutDown');
        }
    });
}
function buildTeamPhotos(division) {
    var photoContainer = $('<div>').addClass('d-flex flex-wrap justify-content-center');
    console.log(division);
    console.log(team[division]);
    for (var _i = 0, _a = team[division]; _i < _a.length; _i++) {
        var member = _a[_i];
        var profile = $('<div class="profile">');
        $('<img>').prop('src', buildImageURL(member)).appendTo(profile);
        $('<h4>').text(member.firstName + ' ' + member.lastName).appendTo(profile);
        $('<h6>').text(member.role).appendTo(profile);
        // Randomises the fade in animation time to create a twinkle star fade in effect
        var delay = Math.random() * 0.5;
        console.log(delay);
        profile.css('animation-delay', delay + 's');
        profile.addClass('animated fadeIn');
        profile.appendTo(photoContainer);
    }
    photoContainer.appendTo($('#team-photo-section'));
    // photoContainer.addClass('animated fadeIn');
}
function buildImageURL(member) {
    return '../assets/team-photos/' +
        normalise(member.division) +
        '/' + member.firstName + '-' + member.lastName + '.jpg';
}
function normalise(str) {
    return str.replace(/\s/g, '').toLowerCase();
}
