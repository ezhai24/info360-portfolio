class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className="container">
                <div className="col-sm-8">
                    <h2>About Me</h2>
                    <p>lorem ipsum</p>
                </div>

                <div className="col-sm-4">
                    <h2>Skills</h2>
                    <ul>
                        <li>Python</li>
                        <li>Java</li>
                        <li>SQL</li>
                        <li>Shell Scripting</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>HTML/CSS</li>
                        <li>Git</li>
                    </ul>
                </div>
            </div>
        );
    }
}

var about = document.getElementById('about');

ReactDOM.render(<About />, about);