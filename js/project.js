class Project extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className="container project">
                <h2 className="projectTitle">{localStorage.name}</h2>
                <p className="projectDescription">{localStorage.description}</p>
                <img src={localStorage.contentImage} className="projectContent" />
            </div>
        );
    }
}

var project = document.getElementById('project');

ReactDOM.render(<Project />, project);