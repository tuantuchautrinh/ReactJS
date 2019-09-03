import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="row row-offcanvas row-offcanvas-right">
                <div className="col-xs-12 col-sm-9">
                    <p className="pull-right visible-xs">
                        <button type="button" className="btn btn-primary btn-xs" data-toggle="offcanvas">Toggle nav</button>
                    </p>
                    <div className="jumbotron">
                        <h1>QuocTuan.Info</h1>
                        <p>Khóa học lập trình ReactJS tại QuocTuan.Info.</p>
                    </div>
                    <div className="row">
                        <div className="col-xs-6 col-lg-4">
                            <h2>Lập Trình ReactJS</h2>
                            <p>Khóa học lập trình Website bằng PHP &amp; MySQL chỉ cung cấp cho bạn các kiến thức là chính.Kết thúc khóa học lập trình website PHP &amp; MySQL cơ bản chúng tôi sẽ KHÔNG cung cấp chứng chỉ cho bạn như tham gia các khóa học lập trình website bằng PHP &amp; MySQL cơ bản ở trung tâm.</p>
                            <p><a className="btn btn-default" href="" role="button">Chi tiết »</a></p>
                        </div>
                        {/*/.col-xs-6.col-lg-4*/}
                        <div className="col-xs-6 col-lg-4">
                            <h2>Lập Trình NodeJS</h2>
                            <p>Khóa học lập trình Website bằng PHP &amp; MySQL chỉ cung cấp cho bạn các kiến thức là chính.Kết thúc khóa học lập trình website PHP &amp; MySQL cơ bản chúng tôi sẽ KHÔNG cung cấp chứng chỉ cho bạn như tham gia các khóa học lập trình website bằng PHP &amp; MySQL cơ bản ở trung tâm.</p>
                            <p><a className="btn btn-default" href="" role="button">Chi tiết »</a></p>
                        </div>
                        {/*/.col-xs-6.col-lg-4*/}
                        <div className="col-xs-6 col-lg-4">
                            <h2>Lập Trình Angular</h2>
                            <p>Khóa học lập trình Website bằng PHP &amp; MySQL chỉ cung cấp cho bạn các kiến thức là chính.Kết thúc khóa học lập trình website PHP &amp; MySQL cơ bản chúng tôi sẽ KHÔNG cung cấp chứng chỉ cho bạn như tham gia các khóa học lập trình website bằng PHP &amp; MySQL cơ bản ở trung tâm.</p>
                            <p><a className="btn btn-default" href="" role="button">Chi tiết »</a></p>
                        </div>
                        {/*/.col-xs-6.col-lg-4*/}
                        <div className="col-xs-6 col-lg-4">
                            <h2>Lập Trình PHP</h2>
                            <p>Khóa học lập trình Website bằng PHP &amp; MySQL chỉ cung cấp cho bạn các kiến thức là chính.Kết thúc khóa học lập trình website PHP &amp; MySQL cơ bản chúng tôi sẽ KHÔNG cung cấp chứng chỉ cho bạn như tham gia các khóa học lập trình website bằng PHP &amp; MySQL cơ bản ở trung tâm.</p>
                            <p><a className="btn btn-default" href="" role="button">Chi tiết »</a></p>
                        </div>
                        {/*/.col-xs-6.col-lg-4*/}
                        <div className="col-xs-6 col-lg-4">
                            <h2>Lập Trình Python</h2>
                            <p>Khóa học lập trình Website bằng PHP &amp; MySQL chỉ cung cấp cho bạn các kiến thức là chính.Kết thúc khóa học lập trình website PHP &amp; MySQL cơ bản chúng tôi sẽ KHÔNG cung cấp chứng chỉ cho bạn như tham gia các khóa học lập trình website bằng PHP &amp; MySQL cơ bản ở trung tâm.</p>
                            <p><a className="btn btn-default" href="" role="button">Chi tiết »</a></p>
                        </div>
                        {/*/.col-xs-6.col-lg-4*/}
                        <div className="col-xs-6 col-lg-4">
                            <h2>Lập Trình Android</h2>
                            <p>Khóa học lập trình Website bằng PHP &amp; MySQL chỉ cung cấp cho bạn các kiến thức là chính.Kết thúc khóa học lập trình website PHP &amp; MySQL cơ bản chúng tôi sẽ KHÔNG cung cấp chứng chỉ cho bạn như tham gia các khóa học lập trình website bằng PHP &amp; MySQL cơ bản ở trung tâm.</p>
                            <p><a className="btn btn-default" href="" role="button">Chi tiết »</a></p>
                        </div>
                        {/*/.col-xs-6.col-lg-4*/}
                    </div>
                    {/*/row*/}
                </div>
                {/*/.col-xs-12.col-sm-9*/}
                <div className="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
                    <div className="list-group">
                    <a href="" className="list-group-item active">Link</a>
                    <a href="" className="list-group-item">Link</a>
                    <a href="" className="list-group-item">Link</a>
                    <a href="" className="list-group-item">Link</a>
                    <a href="" className="list-group-item">Link</a>
                    <a href="" className="list-group-item">Link</a>
                    <a href="" className="list-group-item">Link</a>
                    <a href="" className="list-group-item">Link</a>
                    <a href="" className="list-group-item">Link</a>
                    <a href="" className="list-group-item">Link</a>
                    </div>
                </div>
                {/*/.sidebar-offcanvas*/}
            </div>
        );
    }
}

export default Home;