class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className="container">
                {
                    PROJECTS.map((project) => (
                        <div
                            key={project.name} 
                            className="col-sm-4 projectCard"
                            onClick={(e) => this.setProject(e, project)}>
                                <img src={project.tileImage} className="tileImage"/>
                        </div>
                    ))
                }
            </div>
        );
    }

    setProject(e, project) {
        e.preventDefault();

        localStorage.clear();
        localStorage.setItem("name", project.name);
        localStorage.setItem("description", project.description);
        localStorage.setItem("tileImage", project.tileImage);
        localStorage.setItem("contentImage", project.contentImage);

        window.location.href = "../info360-portfolio/project.html";
    }
}

var app = document.getElementById('app');

ReactDOM.render(<App />, app);