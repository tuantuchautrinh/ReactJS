import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Header />
        <div id="menu">
          <ul>
            <li><a href="#" title>Trang Chủ</a></li>
            <li><a href="#" title>Giới Thiệu</a></li>
            <li><a href="#" title>Sản Phẩm</a></li>
            <li><a href="#" title>Tin Tức</a></li>
            <li><a href="#" title>Liên Hệ</a></li>
          </ul>
        </div>
        <div id="pane">
          <div className="panitem" id="left" />
          <div className="panitem" id="content">
            <fieldset>
              <legend>Form Đăng Ký</legend>
              <form action method>
                <table>
                  <tbody>
                    <tr>
                      <td width="100px">Username</td>
                      <td><input type="text" name="txtUser" /></td>
                    </tr>
                    <tr>
                      <td>Pasword</td>
                      <td><input type="password" name="txtPass" /></td>
                    </tr>
                    <tr>
                      <td>Size</td>
                      <td><input type="number" name="txtSize" min={0} max={10} defaultValue={5} /></td>
                    </tr>
                    <tr>
                      <td>Range</td>
                      <td><input type="range" name="txtRange" min={0} max={100} defaultValue={50} /></td>
                    </tr>
                    <tr>
                      <td>Color</td>
                      <td><input type="color" name="txtColor" /></td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td><input type="email" name="txtEmail" /></td>
                    </tr>
                    <tr>
                      <td>Gender</td>
                      <td>
                        <input type="radio" name="rdoGender" defaultValue={1} defaultChecked /> Nam
                        <input type="radio" name="rdoGender" defaultValue={0} /> Nữ
                      </td>
                    </tr>
                    <tr>
                      <td>Subject</td>
                      <td>
                        <input type="checkbox" name="chkSubject" defaultValue="php" /> PHP
                        <input type="checkbox" name="chkSubject" defaultValue="asp" /> ASP
                        <input type="checkbox" name="chkSubject" defaultValue="java" /> Java
                        <input type="checkbox" name="chkSubject" defaultValue="android" /> Android
                      </td>
                    </tr>
                    <tr>
                      <td>File</td>
                      <td>
                        <input type="file" name="fFile" />
                      </td>
                    </tr>
                    <tr>
                      <td>City</td>
                      <td>
                        <select name="sltThanhPho">
                          <option value="hn">Hà Nội</option>
                          <option value="dn">Đà Nẵng</option>
                          <option value="hcm" selected>Hồ Chí Minh</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>Note</td>
                      <td>
                        <textarea name="txtNote" cols={20} rows={3} defaultValue={""} />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} align="center">
                        <input type="submit" name="btnSubmit" defaultValue="Gửi dữ liệu" />
                        <input type="reset" name="btnReset" defaultValue="Xóa" />
                        <input type="button" name="btnReset" defaultValue="Nút" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </fieldset>
          </div>
          <div className="panitem" id="right" />
        </div>
        <div className="clear" />
        <div id="lower">
          <div id="left" className="font">ReactJS</div>
          <div id="right" className="font">NodeJS</div>
        </div>
        <div className="clear" />
        <div id="footer" className="font">Copyright By QuocTuan.Info</div>
      </div>
    );
  }
}

export default App;
