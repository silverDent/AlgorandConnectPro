import { Component } from "react";
import * as Backend from "../../build/index.main.mjs";
import * as Reach from "@reach-sh/stdlib/ALGO";


import { Context } from "../../Context";
import userViews from "./userViews";




class user extends Component {
    static contextType = Context;

    constructor(props) {
        super(props);

        this.state = {
            appState: "",
            args: [],
            resGetPayment: null,
            resGetuserBalanceBeforePayment: null,
            paymentCount : 0,
            resGetUserRequest: null,
            resGetuserBalanceAfterPayment: null,
            resGetuserLastBalance: null, 
            
        };

        this.getPaymentExt = this.getPaymentExt.bind(this);
        this.getuserBalanceBeforePaymentExt = this.getuserBalanceBeforePaymentExt.bind(this);
        this.getUserRequestExt = this.getUserRequestExt.bind(this);
        this.getuserBalanceAfterPaymentExt = this.getuserBalanceAfterPaymentExt.bind(this);
        this.getuserLastBalanceExt = this.getuserLastBalanceExt.bind(this);
    }

    componentDidMount() {
        const [, , , , , , ctc, , , , , ] = this.context;
        this.interval = setInterval(async () => this.updateBalance(), 20000);

        Backend.user(ctc[0], this);
    }

    async updateBalance() {
        const [account, , , setBalance, , , , , , , , , , ,regularPaymentCount ,setRegularPaymentCount] = this.context;

        const balance = Reach.formatCurrency(await Reach.balanceOf(account), 4);
        setBalance(balance);
       // setRegularPaymentCount(regularPaymentCount + 1);
    }

    random() { return Reach.hasRandom.random(); }

  /*   async acceptWager(wager) {
        const fmtWager = Reach.formatCurrency(wager, 4);
        return await new Promise(res => {
            console.log("acceptWager is called");
            this.setState({
                appState: "acceptWager",
                args: [fmtWager,],
                resAcceptWager: res,
            });
        });
    }
    acceptWagerExt() {
        console.log("acceptWager is called");
        this.state.resAcceptWager();
    }
 */

    async getPayment() {
       
        const paymentAmount = await new Promise(res => {
            this.setState({
                appState: "getPayment",
                resGetPayment: res,
            });
        });
        this.setState({
            appState: "",
        });
        return Reach.parseCurrency(paymentAmount);
    }

    getPaymentExt(payment) {
        this.state.resGetPayment(payment);
    }

    async getBalance(who) {
        return await Reach.balanceOf(who);
    }

    async getuserBalanceBeforePayment() {
        
        const beforePaymentAmount = await new Promise(res => {
            this.setState({
                appState: "getuserBalanceBeforePayment",
                resGetuserBalanceBeforePayment: res,
            });
        });
        this.setState({
            appState: "",
        });
        return beforePaymentAmount;
    }

    getuserBalanceBeforePaymentExt(userBalanceBeforePayment) {
        this.state.resGetuserBalanceBeforePayment(userBalanceBeforePayment);
    }

    async getuserBalanceAfterPayment() {
        
        const afterPaymentAmount = await new Promise(res => {
            this.setState({
                appState: "getuserBalanceAfterPayment",
                resGetuserBalanceAfterPayment: res,
            });
        });
        this.setState({
            appState: "",
        });
        return afterPaymentAmount;
    }

    getuserBalanceAfterPaymentExt(userBalanceAfterPayment) {
        this.state.resGetuserBalanceAfterPayment(userBalanceAfterPayment);
    }

    async getuserLastBalance() {
        
        const lastBalanceOfuser = await new Promise(res => {
            this.setState({
                appState: "getuserLastBalance",
                resGetuserLastBalance: res,
            });
        });
        this.setState({
            appState: "finishedState",
        });
        return lastBalanceOfuser;
    }

    getuserLastBalanceExt(userLastBalance) {
        this.state.resGetuserLastBalance(userLastBalance);
    }
    



    async informTimeout() {
        this.setState({
            appState: "informTimeout",
        });
    }

    async seeOutcome(outcome) {
        const outcomeNumber = Reach.bigNumberToNumber(outcome);
        this.setState({
            appState: "seeOutcome",
            args: [outcomeNumber],
        });
    }

    async showPaymentCount(paymentCountFromBacked) {
        const paymentCountFromBacked0 = Reach.bigNumberToNumber(paymentCountFromBacked);
        this.setState({
            appState: "showPaymentCount",
            paymentCount: paymentCountFromBacked0,
        });
        const [account, , , setBalance, , , , , , , , , , ,regularPaymentCount ,setRegularPaymentCount] = this.context;
        setRegularPaymentCount(paymentCountFromBacked0);
    }

    async getUserRequest() {
        
        const userRequestObj = await new Promise(res => {
            this.setState({
                appState: "getUserRequest",
                resGetUserRequest: res,
            });
        });
        this.setState({
            appState: "",
        });
        return userRequestObj;
    }

    getUserRequestExt(userRequestObj) {
        this.state.resGetUserRequest(userRequestObj);
    }


    


    render() {
        return (<userViews
            appState={this.state.appState}
            args={this.state.args}
            acceptWagerReady={this.state.resAcceptWager !== null}
            acceptWager={this.acceptWagerExt} 
            getPaymentReady={this.state.resGetPayment !== null}
            getPayment={this.getPaymentExt} 
            getuserBalanceBeforePaymentReady={this.state.resGetuserBalanceBeforePayment !== null}
            getuserBalanceBeforePayment={this.getuserBalanceBeforePaymentExt}
            paymentCount = {this.state.paymentCount}
            getUserRequestReady={this.state.resGetUserRequest !== null}
            getUserRequest={this.getUserRequestExt} 
            getuserBalanceAfterPaymentReady={this.state.resGetuserBalanceAfterPayment !== null}
            getuserBalanceAfterPayment={this.getuserBalanceAfterPaymentExt}
            getuserLastBalanceReady={this.state.resGetuserLastBalance !== null}
            getuserLastBalance={this.getuserLastBalanceExt}
          
            
            />);
    }
}

export default user;