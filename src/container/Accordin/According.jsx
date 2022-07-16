import React, {useRef, useState } from "react";
import "./AccordinStyle.scss";
import CheckBox from "../checkBox/checkBox";
import RatingsCheckBox from "../ratingsCheckBox/ratingsCheckBox";

function Accordion(props) {
    const [active, setActive] = useState(false);
    const content = useRef(null);
    const [height, setHeight] = useState("0px");

    const arrayUniqueByBrand = [...new Map(props.ecom.map((item) => [item["brand"], item])).values()];
      
    const arrayUniqueByPrice= [...new Map(props.ecom.map((item) => [item["price"], item])).values()];

    const arrayUniqueByRatings= [...new Map(props.ecom.map((item) => [item["ratings"], item])).values()];
      
    function toggleAccordion() {
        setActive(!active);
        setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
    }

    return (
       <>
       {props.title === 'BRAND' &&  <div className="accordion__section">
            <div
                className={`accordion ${active ? "active" : ""}`}
                onClick={toggleAccordion}
            >
                <p className="accordion__title">{props.title}</p>
                <span style={{ marginLeft: "20px" }}>{active ? "-" : "+"}</span>
            </div>
            <div
                ref={content}
                style={{ maxHeight: `${height}` }}
                className="accordion__content"
            >
                {
                    arrayUniqueByBrand.map((x ,i)=> <CheckBox key={i} brand={x.brand}/>)
                }
            </div>
        </div>}
        {props.title === 'PRICE RANGE' &&  <div className="accordion__section">
            <div
                className={`accordion ${active ? "active" : ""}`}
                onClick={toggleAccordion}
            >
                <p className="accordion__title">{props.title}</p>
                <span style={{ marginLeft: "20px" }}>{active ? "-" : "+"}</span>
            </div>
            <div
                ref={content}
                style={{ maxHeight: `${height}` }}
                className="accordion__content"
            >
                {
                    props.ecom.map((x ,i)=> <CheckBox key={i} brand={x.price}/>)
                }
            </div>
        </div>}
        {props.title === 'RATINGS' &&  <div className="accordion__section">
            <div
                className={`accordion ${active ? "active" : ""}`}
                onClick={toggleAccordion}
            >
                <p className="accordion__title">{props.title}</p>
                <span style={{ marginLeft: "20px" }}>{active ? "-" : "+"}</span>
            </div>
            <div
                ref={content}
                style={{ maxHeight: `${height}` }}
                className="accordion__content"
            >
                {
                    arrayUniqueByRatings.map((x ,i)=> <RatingsCheckBox key={i} brand={x.ratings}/>)
                }
            </div>
        </div>}
       </>
    );
}

export default Accordion;
