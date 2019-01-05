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
        console.log(this.props.team);
        console.log(this.props.division);
        console.log(this.props);
        const members = division_members.map((member) => {
            return e(ProfilePhoto, member, null)
        });
        console.log(members);

        return e('div', { className: 'd-flex flex-wrap justify-content-center', id: 'team-photo-section' }, members);
    }
}

class TeamFilterRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const divisions = Object.keys(team);
        console.log(divisions);
        const division_list = e('ul', { className: 'nav justify-content-center' }, divisions.map( (division) => {
            const division_link = e('a', { className: 'nav-link team-link', href: 'javascript:;', onClick: this.props.onDivisionChange }, division);
            return e('li', { className: 'nav-item', key: division }, division_link);
        }));

        return e('div', { id: 'teams-row' }, division_list);
    }
}

class MeetTheTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {division: 'Executive'};
        this.handleDivisionChange = this.handleDivisionChange.bind(this);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    handleDivisionChange(event) {
        console.log('New Division selected');
        console.log(event.target.text);
        console.log(event.target.value);
        event.preventDefault();
        this.setState({ division: event.target.text });
    }

    render() {
        const section_title = e('h1', {}, 'Meet the Team');
        const teams_nav = e(TeamFilterRow, { onDivisionChange: this.handleDivisionChange }, null);
        const team_photos = e(PhotoRow, { team: team, division: this.state.division }, null);

        return e('div', { className: 'container-fluid text-center', id: 'teams-row' }, section_title, teams_nav, team_photos);
    }
}

const container = document.getElementById('meet-the-team');
ReactDOM.render(e(MeetTheTeam, {}, null), container);
// ReactDOM.render(e(PhotoRow, { team: team, division: 'Executive' }, null), container);