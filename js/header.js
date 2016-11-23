class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className="container">
                <h1 id="pageTitle">Emily Zhai</h1>
                <ul id="menu">
                    <li className="menuItem">
                        <a href="../info360-portfolio/index.html">Projects</a>
                    </li>
                    <li className="menuItem">
                        <a href="../info360-portfolio/about.html">About</a>
                    </li>
                    <li className="menuItem">
                        <a href="../info360-portfolio/contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        );
    }
}

var header = document.getElementById('header');

ReactDOM.render(<Header />, header);