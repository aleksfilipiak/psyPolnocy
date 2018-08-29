import React from "react";
import "../main.css"

export default class Slider extends React.Component{


    render(){
        return (
            <div id="header-carousel" className="carousel slide" data-ride="carousel" data-interval="3000" >
                <ol className="carousel-indicators">
                    <li data-target="#header-carousel" data-slide-to="0" className="active"></li>
                    <li data-target="#header-carousel" data-slide-to="1"></li>
                    <li data-target="#header-carousel" data-slide-to="2"></li>
                    <li data-target="#header-carousel" data-slide-to="3"></li>
                    <li data-target="#header-carousel" data-slide-to="4"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active" style={sliderHeight}>
                        <div className="d-block w-100">
                            <img src="../../image/logo-big.jpg" alt="logo" style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className="carousel-item" style={sliderHeight}>
                        <div className="d-block w-100">
                            <img src="../../image/adorable-animal-breed-434090.jpg" alt="dog1" style={imgStyle}/>
                        </div>
                    </div>
                    <div className="carousel-item" style={sliderHeight}>
                        <div className="d-block w-100">
                            <img src="../../image/adorable-animal-blur-750645.jpg" alt="dog2" style={imgStyle} />
                        </div>
                    </div>
                    <div className="carousel-item" style={sliderHeight}>
                        <div className="d-block w-100">
                            <img src="../../image/animal-dog-husky-69433.jpg" alt="dog3" style={imgStyle}/>
                        </div>
                    </div>
                    <div className="carousel-item" style={sliderHeight}>
                        <div className="d-block w-100">
                            <img src="../../image/animal-canine-climate-531533.jpg" alt="dog4" style={imgStyle}/>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#header-carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#header-carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

/*jebać - tutaj damy style w constach, potem to przewalimy na css i zbierzemy w kupę: css style na końcu komponentu*/

const imgStyle = {
    width: "100%",
    height: "auto"
};

const sliderHeight = {
    height: 500
}


// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementsByClassName("carousel")[0].carousel({
//         interval: 2000
//     })
//
// });