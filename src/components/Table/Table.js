import React, { Component } from 'react';
import TableRow from './TableRow';

class Table extends Component {
    render() {
        return (
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Thành Viên</th>
                            <th>Quyền</th>
                            <th className="text-center" colSpan={2}>
                                <a className="btn btn-success btn-sm" href="them" role="button"><i className="fa fa-plus" aria-hidden="true" /> Thêm</a>
                                <a className="btn btn-danger btn-sm" href="dong" role="button"><i className="fa fa-close" aria-hidden="true" /> Đóng</a>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow />
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;