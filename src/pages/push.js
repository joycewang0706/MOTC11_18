import React, { Component } from "react";
// import SimpleStorageContract from "./contracts/SimpleStorage.json";
import Subsidy from "../contracts/Subsidy.json";
import getWeb3 from "../getWeb3";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

import TWzipcode from "react-twzipcode";
import alert from "alert";

import "../App.css";
import "./push.css";

class push extends Component {
  
  state = {
    storageValue: 0,
    temp: 0,
    result: 0,
    web3: null,
    accounts: null,
    contract: null,
  };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = Subsidy.networks[networkId];
      const instance = new web3.eth.Contract(
        Subsidy.abi,
        deployedNetwork && deployedNetwork.address
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;
    

    // Stores a given value, 5 by default.
    // await contract.methods.set(5).send({ from: accounts[0] });
    // await contract.methods.TrafficVolumePerformanceReward(3000, 1000).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    // const response = await contract.methods.get().call();

    // Update state with the result.
    // this.setState({ storageValue: response });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="container-3">
        <div className="panel-3">
          <div className="contentsearch-3">
            <div className="search-button-3">
              <Link to="/queryOrPush">
                <input type="button" id="money" value="查詢補貼金額"></input>
              </Link>
              <Link to="/push">
                <input
                  type="button"
                  id="pushblock"
                  value="資料寫入區塊鏈"
                ></input>
              </Link>
            </div>
            <div className="push-table">
              <table>
                <tr>
                  <td>路線地點</td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div id="twzipcode">
                      <TWzipcode css={["county ", "district ", "zipcode"]} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">營運單位</td>
                </tr>
                <tr>
                  <td colspan="2">
                    <input
                      type="text"
                      id="unit"
                      placeholder="輸入營運單位"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">路線名稱</td>
                </tr>
                <tr>
                  <td colspan="2">
                    <input
                      type="text"
                      id="route_name"
                      ref="_routeName"
                      placeholder="輸入路線名稱"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">每車公里合理營運成本(x1,000)</td>
                </tr>
                <tr>
                  <td colspan="2">
                    <input
                      type="text"
                      id="cost"
                      ref="_cost"
                      placeholder="輸入數值"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">每車公里收入(x1,000)</td>
                </tr>
                <tr>
                  <td colspan="2">
                    <input
                      type="text"
                      ref="_incomePerCar"
                      id="income"
                      placeholder="輸入數值"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">日駛班次</td>
                </tr>
                <tr>
                  <td colspan="2">
                    <input
                      type="text"
                      ref="_timesPerCar"
                      id="shifts"
                      placeholder="輸入數值"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">行駛日數</td>
                </tr>
                <tr>
                  <td colspan="2">
                    <input
                      type="text"
                      ref="_numberOfDate"
                      id="shifts_day"
                      placeholder="輸入數值"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">路線里程</td>
                </tr>
                <tr>
                  <td colspan="2">
                    <input
                      type="text"
                      id="route_km"
                      ref="_mileage"
                      placeholder="輸入數值"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">路線成績因子</td>
                </tr>
                <tr>
                  <td colspan="2">
                    <input
                      type="text"
                      id="route_cau"
                      ref=" _ratio"
                      placeholder="輸入數值"
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">公司總成績因子</td>
                </tr>
                <tr>
                  <td colspan="2">
                    <input
                      type="text"
                      id="company_cau"
                      ref="_companyScore"
                      placeholder="輸入數值"
                    ></input>
                  </td>
                </tr>
              </table>
              <div className="placeB">
                <button
                  id="pushBtn"
                  onClick={async () => {
                    try {
                      var _routeName = this.refs._routeName.value;
                      var _routeNum = parseInt(this.refs._routeNum.value);
                      var _routeTime = this.refs._routeTime.value;
                      var _cost = parseInt(this.refs._cost.value);
                      var _incomePerCar = parseInt(
                        this.refs._incomePerCar.value
                      );
                      var _timesPerCar = parseInt(this.refs._timesPerCar.value);
                      var _numberOfDate = parseInt(
                        this.refs._numberOfDate.value
                      );
                      var _mileage = parseInt(this.refs._mileage.value);
                      var _ratio = parseInt(this.refs._ratio.value);
                      var _companyScore = parseInt(
                        this.refs._companyScore.value
                      );
                      const { accounts, contract } = this.state;
                      await contract.methods
                        .pushData(
                          _routeName,
                          _routeNum,
                          _routeTime,
                          _cost,
                          _incomePerCar,
                          _timesPerCar,
                          _numberOfDate,
                          _mileage,
                          _ratio,
                          _companyScore
                        )
                        .send({ from: accounts[0] });
                    } catch (e) {
                      console.log(e);
                    }
                  }}
                >
                  寫入區塊鏈
                </button>{" "}
                &nbsp;
                <Link to="/queryOrPush">
                  <Button id="queryBtn" renderAs="button">
                    查詢
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default push;
/*
<div class="placeB">
        <button
          onClick={async () => {
            try {
              var _routeName = this.refs._routeName.value;
              var _routeNum = parseInt(this.refs._routeNum.value);
              var _routeTime = this.refs._routeTime.value;
              var _cost = parseInt(this.refs._cost.value);
              var _incomePerCar = parseInt(this.refs._incomePerCar.value);
              var _timesPerCar = parseInt(this.refs._timesPerCar.value);
              var _numberOfDate = parseInt(this.refs._numberOfDate.value);
              var _mileage = parseInt(this.refs._mileage.value);
              var _ratio = parseInt(this.refs._ratio.value);
              var _companyScore = parseInt(this.refs._companyScore.value);
              const { accounts, contract } = this.state;
              await contract.methods
                .pushData(
                  _routeName,
                  _routeNum,
                  _routeTime,
                  _cost,
                  _incomePerCar,
                  _timesPerCar,
                  _numberOfDate,
                  _mileage,
                  _ratio,
                  _companyScore
                )
                .send({ from: accounts[0] });
            } catch (e) {
              console.log(e);
            }
          }}
        >
          Push
        </button> &nbsp;

        <Link to="/query">
          <Button renderAs="button">
            <span>query</span>
          </Button>
        </Link>
        </div>
*/
/*<div className="Apppush">
        <h1>Blockchain Subsidy System</h1>

        <div class="tablepush">
          <table>
            <tr>
            <td width="160px">
                <h4>幸福巴士路線名稱: </h4>
              </td>
              <td>
                <input type="_routeName" ref="_routeName"></input>
              </td>
              
            </tr>

            <tr>
              <td>
                <h4>幸福巴士路線編號: </h4>
              </td>
              <td>
                <input type="_routeNum" ref="_routeNum"></input>
              </td>
            </tr>

            <tr>
              <td>
                <h4>班次時間: </h4>
              </td>
              <td>
                <input type="time" ref="_routeTime"></input>
              </td>
            </tr>

            <tr>
              <td>
                <h4>每車公里合理營運成本: </h4>
              </td>
              <td>
                <input type="_cost" ref="_cost" value="38570" ></input>
              </td>
            </tr>

            <tr>
              <td>
                <h4>每車公里收入: </h4>
              </td>
              <td>
                <input type="_incomePerCar" ref="_incomePerCar"></input>
              </td>
            </tr>

            <tr>
              <td>
                <h4>日駛班次: </h4>
              </td>
              <td>
                <input type="_timesPerCar" ref="_timesPerCar"></input>
              </td>
            </tr>

            <tr>
              <td>
                <h4>行駛日數: </h4>
              </td>
              <td>
                <input type="_numberOfDate" ref="_numberOfDate"></input>
              </td>
            </tr>

            <tr>
              <td>
                <h4>補貼里程:</h4>
              </td>
              <td>
                <input type="_mileage" ref="_mileage"></input>
              </td>
            </tr>

            <tr>
              <td>
                <h4>路線成績因子:</h4>
              </td>
              <td>
                <input type="_ratio" ref="_ratio" value="100" ></input>
              </td>
            </tr>
            <tr>
              <td>
                <h4>公司總成績因子:</h4>
              </td>
              <td>
                <input type="_companyScore" ref="_companyScore" value="100" ></input>
              </td>
            </tr>
          </table>
        </div>
         </div>*/
