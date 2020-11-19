import React from "react";
import { Row, Col } from "react-bootstrap";
import CardBackground from "../Images/bg-pattern-card.svg";

export default function CardImage(props) {
  const { userImage } = props;
  const backgroundImageStyle = {
    width: "100%",
    borderRadius: "15px 15px 0 0",
    backgroundPosition: "center",
    backgroundSize: "contain",
  };
  const userImageStyle = {
    position: 'absolute',
    borderRadius: "50%",
    marginTop: "27%",
    marginLeft: "36%",
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: "thick",
  };

  const imageContainerStyle = {
    width: "100%",
    padding: "0 0 0 0",
  };

  return (
    <React.Fragment>
      <Row
        className="justify-content-center"
        style={{ paddingBottom: "70px", margin: "0", width: "100%" }}
      >
        <Col style={imageContainerStyle}>
          <img src={userImage} alt="user portrait" style={userImageStyle}></img>
          <img
            src={CardBackground}
            alt="background"
            style={backgroundImageStyle}
          ></img>
        </Col>
      </Row>
    </React.Fragment>
  );
}
