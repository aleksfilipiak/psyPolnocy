import React from "react";

export default class Header extends React.Component{
    render(){
        return (
           <nav className="navbar navbar-expand-lg navbar-light bg-dark">
               <a className="navbar-brand" href="#">
                   <img src="../../image/logo3.png" alt="small-logo"/>
               </a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNavbar">
                   <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="mainNavbar">
                   <ul className="navbar-nav mr-auto">
                       <li className="nav-item active">
                           <a className="nav-link" href="#">O nas<span className="sr-only">(current)</span></a>
                       </li>
                       <li className="nav-item active">
                           <a className="nav-link" href="#">Psy do adopcji<span className="sr-only"></span></a>
                       </li>
                       <li className="nav-item active">
                           <a className="nav-link" href="#">Dokumenty do pobrania<span className="sr-only"></span></a>
                       </li>
                       <li className="nav-item active">
                           <a className="nav-link" href="#">Szczęśliwe zakończenia<span className="sr-only"></span></a>
                       </li>
                       <li className="nav-item active">
                           <a className="nav-link" href="#">Za Tęczowym Mostem<span className="sr-only"></span></a>
                       </li>
                       <li className="nav-item active">
                           <a className="nav-link" href="#">Kontakt<span className="sr-only"></span></a>
                       </li>
                   </ul>
               </div>
           </nav>
        )
    }
}