import React, {Component} from "react";
import ReactDOM from "react-dom";
import Slider from "./slider";
import Header from "./header"


export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Slider/>
            </div>
        )
    }
}