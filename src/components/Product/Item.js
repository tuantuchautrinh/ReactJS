import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <div className="item  col-xs-4 col-lg-4">
                <div className="thumbnail">
                    <img className="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
                    <div className="caption">
                        <h4 className="group inner list-group-item-heading">
                            { this.props.children }
                        </h4>
                        <p className="group inner list-group-item-text">
                        Khóa học lập trình Website bằng PHP &amp; MySQL chỉ cung cấp cho bạn các kiến thức là chính.Kết thúc khóa học lập trình website PHP &amp; MySQL cơ bản chúng tôi sẽ KHÔNG cung cấp chứng chỉ cho bạn như tham gia các khóa học lập trình website bằng PHP &amp; MySQL cơ bản ở trung tâm.
                        </p>
                        <div className="row">
                            <div className="col-xs-12 col-md-8">
                                <p className="lead">
                                1.800.000 VNĐ
                                </p>
                            </div>
                            <div className="col-xs-12 col-md-4">
                                <a className="btn btn-success" href="http://www.jquery2dotnet.com">Chi tiết</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;