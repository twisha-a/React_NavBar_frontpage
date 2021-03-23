import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Sec1.css";

function Sec1({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
  return (
    <>
      <div className={lightBg ? "home__sec1" : "home__sec1 darkBg"}>
        <div className="container">
          <div
            className="row home__sec1-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row"
            }}
          >
            <div className="col">
              <div className="home__sec1-text-wrapper">
                <div className=".top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__sec1-subtitle"
                      : "home__sec1-subtitle dark"
                  }
                >
                  {description}
                </p>
                <Link to="/sign-up">
                  <Button buttonSize="btn--wide" buttonColor="#fff">
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="home__sec1-img-wrapper">
                <img src={img} alt={alt} className="home__sec1-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sec1;
