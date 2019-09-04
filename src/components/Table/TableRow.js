import React, { Component } from 'react';

class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>1</td>
                <td>Vũ Quốc Tuấn</td>
                <td>Quản lý</td>
                <td className="text-center" width="50px"><a className="btn btn-warning btn-sm" href="sua" role="button"><i className="fa fa-pencil-square-o" aria-hidden="true" /> Sửa</a></td>
                <td className="text-center" width="50px"><a className="btn btn-danger btn-sm" href="xoa" role="button"><i className="fa fa-trash-o" aria-hidden="true" /> Xóa</a></td>
            </tr>
        );
    }
}

export default TableRow;