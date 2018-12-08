import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

const facebookBtn = (prop) => {
    return (
        <SocialIcon url="http://twitter.com/jaketrent"/>
    );
};


class ContactSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return null;
    }
}

ReactDOM.render(facebookBtn, document.getElementById('contact-section'));