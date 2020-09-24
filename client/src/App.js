import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import FileUploaderButton from "./components/file-uploader-button";
import axios from "axios";
import programIcon from "./nprog.icns.svg";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Figure from "react-bootstrap/Figure";
import JSONTree from "react-json-tree";
import Ns3 from "./components/ns3/ns3";
import "./components/ns3-panel-component-jqx.css";
import { ns3Model } from "./components/ns3/model/ns3-model";

class App extends Component {
    constructor(props) {
        super(props);

        this.production = process.env.NODE_ENV === "production";

        if (this.production) {
            ns3Model.panelA.enabled = false;
            ns3Model.panelB.enabled = false;
        }
        this.state = {
            data: ns3Model,
            error: null,
        };
    }

    onSuccess = (data) => {
        //console.log("success: ", data);
        if (data.success) {
            this.setState({ data: data.data, error: null });
        } else {
            this.setState({ error: data.error });
        }
    };

    onError = (err) => {
        this.setState({ error: err.error });
        toast.error(this.state.error);
    };

    handleFile = async (filename) => {
        const formData = new FormData();
        formData.append("nordFile", filename);
        await axios
            .post("api/upload", formData, {})
            .then((res) => {
                this.onSuccess(res.data);
            })
            .catch((err) => {
                this.onError(err.response.data);
            });
    };

    render() {
        return (
            <>
                <div className=" d-flex flex-column min-vh-100">
                    <div className=" flex-grow-1">
                        <div className="jumbotron jumbotron-fluid bg-dark text-white">
                            <Container>
                                <h1 className="display-5">
                                    <span className="nord-font">
                                        Nord<span className="nord-font-copyright">®</span> Stage 3
                                    </span>{" "}
                                    Program File Viewer
                                </h1>
                                <p className="lead">Simple online tool to review Nord Stage 3 program file settings.</p>

                                <blockquote className="blockquote">
                                    <footer className="blockquote-footer">
                                        Handmade by Nord User Forum{" "}
                                        <a href="https://www.norduserforum.com/nord-stage-3-programs-ns3p-ns3pb-files-f32/ns3-program-viewer-t19939.html">
                                            Members
                                        </a>
                                        {/*<br />*/}
                                        {/*We are not affiliated, associated, endorsed by, or in any way officially connected with Nord*/}
                                        {/*Keyboards / Clavia DMI AB, or any of its subsidiaries or its affiliates. The official Nord*/}
                                        {/*Keyboards website can be found at{" "}*/}
                                        {/*<a title="Nord Keyboards" href="https://www.nordkeyboards.com">*/}
                                        {/*    https://www.nordkeyboards.com*/}
                                        {/*</a>*/}
                                        {/*<br />*/}
                                        {/*The names Nord and Clavia as well as related names, marks, emblems and images are registered*/}
                                        {/*trademarks of their respective owners.*/}
                                    </footer>
                                </blockquote>

                                {/*<hr className="my-4"/>*/}

                                {/*<blockquote className="blockquote">*/}
                                {/*    If you want something done, do it yourself... As this feature is not implemented in the official Nord Sound Manager, I decided to*/}
                                {/*    implement it myself.*/}
                                {/*    <footer className="blockquote-footer">*/}
                                {/*        This site is not affiliated with Clavia / Nord.*/}
                                {/*        Information is provided "as is" without warranty of any kind. All written content on*/}
                                {/*        this site is for information purposes only.*/}
                                {/*    </footer>*/}
                                {/*</blockquote>*/}
                                {/*<p><a href="https://www.brainyquote.com/quotes/napoleon_bonaparte_108864" className="font-italic stretched-link">If you want something done, do it yourself</a>*/}
                                {/*</p>*/}
                            </Container>
                        </div>

                        <Container>
                            <div className="row ">
                                <div className="col-2-auto align-self-center">
                                    <FileUploaderButton
                                        className=""
                                        title="Select"
                                        accept=".ns3f"
                                        handleFile={this.handleFile}
                                    />
                                </div>

                                <div className="col-auto align-self-center">Nord Program File (*.ns3f)</div>

                                <div className="col-auto align-self-center">
                                    <Figure.Image width={64} height={64} alt="171x180" src={programIcon} />
                                </div>
                            </div>
                        </Container>

                        <div className={this.production ? "mt-2" : "d-none"}>
                            <Ns3 data={this.state.data} />
                        </div>

                        <div className={this.production ? "d-none" : "mt-2"}>
                            <Tabs id="uncontrolled-tab-example">
                                {/*style={{backgroundColor: 'grey'}}*/}
                                <Tab eventKey="panel" title="Panel" disabled={false}>
                                    <Ns3 data={this.state.data} />
                                </Tab>

                                <Tab eventKey="debug" title="File Properties" disabled={false} className="nord-tree">
                                    <JSONTree
                                        data={this.state.data}
                                        hideRoot={true}
                                        getItemString={(type, data, itemType, itemString) => <span></span>}
                                        shouldExpandNode={(keyPath, data, level) => true}
                                        theme={{
                                            scheme: "custom",
                                            author: "wimer hazenberg (http://www.monokai.nl)",
                                            base00: "#343a40",
                                            base01: "#383830",
                                            base02: "#49483e",
                                            base03: "#75715e",
                                            base04: "#a59f85",
                                            base05: "#f8f8f2",
                                            base06: "#f5f4f1",
                                            base07: "#f9f8f5",
                                            base08: "#f92672",
                                            base09: "#fd971f",
                                            base0A: "#f4bf75",
                                            base0B: "#a6e22e",
                                            base0C: "#a1efe4",
                                            base0D: "#66d9ef",
                                            base0E: "#ae81ff",
                                            base0F: "#cc6633",
                                        }}
                                        invertTheme={false}
                                    />
                                </Tab>
                            </Tabs>
                        </div>
                    </div>

                    <div className="nord-footer">
                        <small>
                            Disclaimer: We are not affiliated, associated, endorsed by, or in any way officially
                            connected with <a href="https://www.nordkeyboards.com">Nord Keyboards / Clavia DMI AB</a>,
                            or any of its subsidiaries or its affiliates.
                            <br />
                            The names Nord and Clavia as well as related names, marks, emblems and images are registered
                            trademarks of their respective owners.
                        </small>
                    </div>

                    <ToastContainer />
                </div>
            </>
        );
    }
}

export default App;
