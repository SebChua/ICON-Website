'use strict'

const e = React.createElement;

class ProfilePhoto extends React.Component {
    constructor(props) {
        super(props);
    }

    getProfilePicURL(division, firstName, lastName){
        let name = firstName + '-' + lastName;
        let division_url = division.replace(/\s/g, '');
        
        return '../assets/team-photos/' + division_url + '/' + name + '.jpg';
    }

    makeProfilePhoto(member){
        let imgSrc = this.getProfilePicURL(member.division, member.firstName, member.lastName);
        let name = member.firstName + " " + member.lastName;
        let role = member.role;

        if (member.role.includes('Committee')){
            role = member.division + ' Committee';
        }

        const profPic = e('img', { src: imgSrc }, null);
        const profName = e('h4', null, name);
        const profRole = e('h6', null, role);

        return e('div', { className: 'profile' }, profPic, profName, profRole);
    }

    render() {
        return this.makeProfilePhoto(this.props);
    }
}

class PhotoRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const division_members = this.props.team[this.props.division];
        const members = division_members.map((member) => {
            return e(ProfilePhoto, member, null)
        });
        console.log(members);

        return e('div', { className: 'd-flex flex-wrap justify-content-center' }, members);
    }
}

const container = document.getElementById('team-photo-section');
ReactDOM.render(e(PhotoRow, { team: team, division: 'Executive' }, null), container);