import React from "react";

export default class Header extends React.Component {
    render() {
        return (
                <nav className="navbar navbar-expand-lg navbar-light" id="psynav" style={{opacity: "50%"}}>
                    <a className="navbar-brand" href="#">
                        <img src="../../image/logo3.png" alt="small-logo"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mainNavbar">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#about">O nas<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#toAddopt">Psy do adopcji<span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#docs">Dokumenty do pobrania<span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#happyEnds">Szczęśliwe zakończenia<span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#rainbowBridge">Za Tęczowym Mostem<span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#contact">Kontakt<span className="sr-only"></span></a>
                            </li>
                        </ul>
                    </div>
                </nav>
        )
    }
}