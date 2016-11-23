class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className="container contactBody">
                <h2 className="contactTitle">Shoot me an email.</h2>
                <form className="contactForm">
                    <div className="form-group row">
                        <label htmlFor="senderName" className="col-form-label">Your Name</label>
                        <input
                            type="text"
                            id="senderName"
                            className="form-control"
                            required
                        />
                    </div>

                    <div className="form-group row">
                        <label htmlFor="senderEmail" className="col-form-label">Your Email</label>
                        <input
                            type="email"
                            id="senderEmail"
                            className="form-control"
                            required
                        />
                    </div>

                    <div className="form-group row">
                        <label htmlFor="emailSubject" className="col-form-label">Subject</label>
                        <input
                            type="text"
                            id="emailSubject"
                            className="form-control"
                            required
                        />
                    </div>

                    <div className="form-group row">
                        <label htmlFor="emailMessage" className="col-form-label">Message</label>
                        <textarea id="emailMessage" className="form-control" rows="8"></textarea>
                    </div>

                    <div className="form-group row">
                        <button 
                            id="sendEmailBtn"
                            type="submit"
                            className="btn btn-primary"
                            onClick={(e) => this.sendEmail(e)}>Send</button>
                    </div>
                </form>
            </div>
        );
    }

    sendEmail(e) {
        e.preventDefault();

        // console.log($.get("../php/sendEmail.php"));
    }
}

var contact = document.getElementById('contact');

ReactDOM.render(<Contact />, contact);