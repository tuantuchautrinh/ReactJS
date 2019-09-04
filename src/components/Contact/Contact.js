import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Prompt, Redirect } from "react-router-dom";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isBlocking : false,
            isRedirect : false,
            txtName : '',
            txtEmail : '',
            txtPhone : '',
            txtMessage : '',
            sltCity : 'hn',
            rdoGioiTinh : 1
        };
    }

    isInputChange = (event) => {
        const target = event.target;

        const name = target.name;
        const value = target.value;

        this.setState({
            isBlocking : target.value.length > 0,
            [name] : value
        });
    }

    submitForm = (event) => {
        event.preventDefault();
        event.target.reset();
        this.setState({
            isBlocking : false,
            isRedirect : false
        });

        var content = '';
        content += 'Họ tên : ' + this.state.txtName;
        content += ' - Email : ' + this.state.txtEmail;
        content += ' - Phone : ' + this.state.txtPhone;
        content += ' - Message : ' + this.state.txtMessage;
        content += ' - City : ' + this.state.sltCity;
        content += ' - Sex : ' + this.state.rdoGioiTinh;

        console.log(content);
    }

    render() {
        if(this.state.isRedirect) {
            return (
                <Redirect to="/trang-chu" />
            )
        }
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
                        <form onSubmit = { (event) => this.submitForm(event) }>
                            <div className="form-group">
                                <input type="text" name="txtName" value={this.state.txtName} className="form-control" placeholder="Name" onChange = { (event) => this.isInputChange(event) } />
                            </div>
                            <div className="form-group">
                                <input type="email" name="txtEmail" value={this.state.txtEmail} className="form-control" placeholder="E-mail" onChange = { (event) => this.isInputChange(event) } />
                            </div>
                            <div className="form-group">
                                <input type="tel" name="txtPhone" value={this.state.txtPhone} className="form-control" placeholder="Phone" onChange = { (event) => this.isInputChange(event) } />
                            </div>
                            <div className="form-group">
                                <textarea name="txtMessage" defaultValue={this.state.txtMessage} rows={3} className="form-control" placeholder="Message" defaultValue={""} onChange = { (event) => this.isInputChange(event) } />
                            </div>
                            <div className="form-group">
                                <select name="sltCity" value={this.state.sltCity} className="form-control" onChange = { (event) => this.isInputChange(event) } >
                                    <option value="">Vui lòng chọn thành phố</option>
                                    <option value="hn">Hà Nội</option>
                                    <option value="dn">Đà Nẵng</option>
                                    <option value="hcm">Hồ Chí Minh</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="checkbox-inline"><input name="chkSubject" type="checkbox" value="php" /> PHP </label>
                                <label className="checkbox-inline"><input name="chkSubject" type="checkbox" value="android" /> Android </label>
                                <label className="checkbox-inline"><input name="chkSubject" type="checkbox" value="ios" /> iOS - Swift </label>
                                <label className="checkbox-inline"><input name="chkSubject" type="checkbox" value="asp" /> ASP </label>
                            </div>
                            <div className="form-group">
                                <label className="radio-inline"><input type="radio" name="rdoGioiTinh" value="1" onChange = { (event) => this.isInputChange(event) } checked = { this.state.checked === 1 } />Nam</label>
                                <label className="radio-inline"><input type="radio" name="rdoGioiTinh" value="2" onChange = { (event) => this.isInputChange(event) } checked = { this.state.checked === 2 } />Nữ</label>
                            </div>
                            <div className="form-group">
                                <label className="custom-file">
                                    <input type="file" id="file" className="custom-file-input" />
                                    <span className="custom-file-control"></span>
                                </label>
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