class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className="container footer">
                <a href="https://www.facebook.com/emily.zhai.9" target="_blank">
                    <img src="../info360-portfolio/img/facebook-logo.png" className="socialMediaLink" />
                </a>
                <a href="https://www.linkedin.com/in/emily-zhai-b7b32a103" target="_blank">
                    <img src="../info360-portfolio/img/linkedin-logo.png" className="socialMediaLink" />
                </a>
                <a href="#" onClick={(e) => this.sendEmail(e)}>
                    <img src="../info360-portfolio/img/email-envelope-outline.png" className="socialMediaLink" />
                </a>
                <p>Icons made by SimpleIcon from <a href="www.flaticon.com">www.flaticon.com</a></p>
            </div>
        );
    }

    sendEmail(e) {
        e.preventDefault();

        window.open('mailto:ezhai24@gmail.com');
    }
}

var footer = document.getElementById('footer');

ReactDOM.render(<Footer />, footer);