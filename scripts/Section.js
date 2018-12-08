class Section extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>This is a Section</h1>
            </div>
        );
    }
}

ReactDOM.render(<Section />, document.getElementsByTagName('body'));