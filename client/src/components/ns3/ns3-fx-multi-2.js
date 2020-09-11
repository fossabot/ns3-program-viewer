import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ns3.css";

export default class Ns3FxMulti2 extends Component {
    render() {
        const fx = this.props.data;
        const visible = fx.enabled && fx.source === this.props.source;

        return (
            <React.Fragment>
                <div className={visible ? "row nord-on" : "d-none"}>
                    <div className={this.props.className}>
                        <div className="col text-center">
                            <h6 className="font-weight-bold">EFFECT 2</h6>

                            <div className="nord-option-on">
                                <small>TYPE {fx.type}</small>
                            </div>

                            <div className="nord-option-on">
                                <small>RATE {fx.rate.label}</small>
                            </div>

                            <div className="nord-option-on">
                                <small>AMOUNT {fx.amount.label}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
