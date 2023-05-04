import React from "react";
import 'react-slideshow-image/dist/styles.css'
import {Fade} from "react-slideshow-image"
import "./App.css";

const slideImages = [
    {
        img:"https://www.questionpro.com/blog/wp-content/uploads/2018/08/data-collection.jpg",
        caption: "data collection",
        learn: "Learn More"
    },
    {
        img:"https://wun.ac.uk/wp-content/uploads/image_for_web_2.jpg",
        caption: "language research",
        learn: "Learn More"
    },
    {
        img:"https://youthtoday.org/wp-content/uploads/sites/13/2014/10/Articles-and-Research-take-4-771x352.png",
        caption: "Be our Informant",
        learn: "Learn More"
    },
];

function Slideshow(){
    return(
        <div className="slide-container">
            <Fade>
                {
                slideImages.map((image, index)=>(
                    <div key={index}>
                        <div className="style" style={{backgroundImage:`url(${image.img})`}}>
                            <div className="lay">
                            <span className="spanstyle">{image.caption}</span>
                            <div>

                            <a href="/">{image.learn}</a>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Fade>
            <div>
                ola
            </div>
        </div>
    )
}
export default Slideshow;