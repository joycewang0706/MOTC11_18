import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./queryOrPush.css";

class queryOrPush extends React.Component {
  render() {
    //window.location.reload();

    //function someMethod() {
      //this.forceUpdate();
      //this.render();
    //}
    function myfresh(){
      window.location.reload();
      this.myfresh(); 
    }
       
    return (
        
      <div className="container-2">
        <div className="panel-2">
          <div className="contentsearch-2">
            <div className="search-button-2">
              <Link to="/queryOrPush">
              <input type="button" id="money" value="查詢補貼金額"></input>
              </Link>
              <Link to="/push">
              <input type="button" id="pushblock" value="資料寫入區塊鏈"></input>
              </Link>
              
             
            </div>
            <div className="search-box">
            <a href="#" className="search-btn"></a>
                    <i id="search-btn" className="fas fa-search" fill=" #002b58"></i>
                    <a href="#" className="cross"></a>
                    <i id="cross" className="fas fa-times-circle"></i>
                    <input type="text" className="search-input" id="search_input" placeholder="   輸入公車路線編號/地區名稱或營運單位"></input>
            </div>
            <div className="search">
              <table>
                        <tr>
                            <th>地點</th>
                            <th>路線名稱</th>
                            <th>營運單位</th>
                        </tr>
                        <tr>
                            <td>雲林縣古坑鄉</td>
                            <td>701</td>
                            <td>臺西客運</td>
                        </tr>

              </table>
            </div>
            <div className="search-result">
                  <span id="bar"></span>
                  <span id="res">查詢結果</span>
                  <table>
                  <tr>
                            <th id="top-left">地點</th>
                            <td id="top-right">雲林縣古坑鄉</td>
                        </tr>
                        <tr>
                            <th>路線名稱</th>
                            <td>701</td>
                        </tr>
                        <tr>
                            <th>營運單位</th>
                            <td>臺西客運</td>
                        </tr>
                        <tr>
                            <th>預約行駛率</th>
                            <td>30%</td>
                        </tr>
                        <tr>
                            <th id="bottom-left">可補貼金額</th>
                            <td id="bottom-right"><div id="num">146,004</div> <div id="cou">元</div> </td>
                        </tr>
                      
                  </table>
            </div>

            
          </div>
        </div>
      </div>
      


      

      
    );
  }
}

export default queryOrPush;
/*<div class="qOp">
        <div class="query">
          <Link to="/query">
            <Button renderAs="button">
              <span>補助金額查詢</span>
            </Button>
          </Link>
        </div>

        <div class="push">
          <Link to="/push">
            <Button renderAs="button">
              <span>Push</span>
            </Button>
          </Link>
        </div>
      </div>*/
      /*<div className="half">
                
                    <p>{description} </p>
                    {remaining === 0 ? (
                      <span className="product-sold-out">Sold Out</span>
                        ) : (
                          <span className="product-remaining">{remaining} remaining</span>
                            )}
            </div>*/