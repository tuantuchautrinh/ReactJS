import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Prompt } from "react-router-dom";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isBlocking : false
        };
    }

    isInputChange = (event) => {
        this.setState({
            isBlocking : event.target.value.length > 0
        });
    }

    render() {
        return (
            <div>
                <Prompt
                    when = {this.state.isBlocking}
                    message = {location => `Are you sure you want to go to ${location.pathname}` } />
                <div className="well well-sm">
                    <h3><strong>Liên Hệ</strong></h3>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <iframe title="This is a unique title" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.394558614363!2d106.67738851480082!3d10.781062492318384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f28f4044ddd%3A0x48b88917406c3156!2zUXXhu5FjIFR14bqlbiAtIMSQw6BvIFThuqFvIEzhuq1wIFRyw6xuaA!5e0!3m2!1svi!2s!4v1457887522959" width="100%" height={315} frameBorder={0} style={{border: 0}} allowFullScreen />
                    </div>
                    <div className="col-md-5">
                        <h4><strong>Get in Touch</strong></h4>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Name" onChange = { (event) => this.isInputChange(event) } />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="E-mail" onChange = { (event) => this.isInputChange(event) } />
                            </div>
                            <div className="form-group">
                                <input type="tel" className="form-control" placeholder="Phone" onChange = { (event) => this.isInputChange(event) } />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows={3} placeholder="Message" defaultValue={""} onChange = { (event) => this.isInputChange(event) } />
                            </div>
                            <button className="btn btn-default" type="submit" name="button">
                                <i className="fa fa-paper-plane-o" aria-hidden="true" /> Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;