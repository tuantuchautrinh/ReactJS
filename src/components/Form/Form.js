import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="alert alert-danger" role="alert">
                    <strong>Lỗi </strong> Vui lòng nhập
                </div>
                <div className="alert alert-success" role="alert">
                    <strong>Thông báo </strong> Thành công
                </div>
                <div className="card">
                    <div className="card-header">
                        Thêm
                        <button type="button" className="close" aria-label="Close" onClick={ (event) => this.props.formToogle(event) } >
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="card-block">
                        <form method="POST">
                            <div className="form-group">
                                <label htmlFor="txtUser">Thành Viên</label>
                                <input type="text" className="form-control" placeholder="Nhập Thành Viên" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtPass">Mật Khẩu</label>
                                <input type="password" className="form-control" placeholder="Nhập Mật Khẩu" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="sltLevel">Quyền</label>
                                <select className="form-control">
                                    <option value={1}>Quản Trị Viên</option>
                                    <option value={2}>Thành Viên</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary">Thêm</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;