import React from "react";
import { Link } from "react-router-dom";

import { Button } from "reactstrap";
import "./login.css";

class login extends React.Component {
  render() {
    function myfresh(){
      window.location.reload();
    }
    setTimeout('myfresh()',1);
    /*const logstyle={
            color:"white",
            backgroundColor:"rgba(100, 130, 200, 0.5)",
            padding: "10px",
            fontfamily: "微軟正黑體",
        };*/
    return (
      <div className="container">
        <div className="paneleft">
          <div className="panel">
            <div className="content login">
              <div className="type_in">
                <span id="login">登入</span>
                <span id="desc">輸入帳號及密碼以繼續</span>

                <div className="form">
                  <span>帳號</span>
                  <input
                    className="input"
                   
                    type="text"
                  ></input>
                  <p >    &nbsp; </p>
                  <span>密碼</span>
                  <input
                    className="input"
                    
                    type="password"
                  ></input>
                  <Link to="/queryOrPush">
                    <input
                      className="Blogin"
                      type="button"
                      value="登入"
                    ></input>
                     
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default login;
//<Link to="/queryOrPush">
//<Button renderAs="button" placeholder="登入" id="Blogin"></Button>
//</Link>
