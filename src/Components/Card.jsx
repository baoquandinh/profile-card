import { Row, Col } from "react-bootstrap";
import React from "react";
import CardDetail from "./CardDetail";
import CardUserInfo from "./CardUserInfo";
import CardImage from "./CardImage";
import UserImage from "../Images/image-victor.jpg";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Card() {
  const cardStyle = {
    height: "400px",
    maxWidth: "400px",
    marginLeft: "10%",
    marginRight: "10%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: "thin",
    borderRadius: "15px",
    backgroundColor: "white"
  };

  return (
    <Col style={cardStyle}>
      <Row>
        <CardImage userImage={UserImage} />
      </Row>
      <Row>
        <Col>
          <CardUserInfo name="Victor Crest" age="26" location="London" />
        </Col>
      </Row>
      <hr />
      <Row style={{ paddingBottom: "30px", paddingTop: "10px" }}>
        <Col xs={4}>
          <CardDetail title="80K" subtitle="Followers" />
        </Col>
        <Col xs={4}>
          <CardDetail title="803K" subtitle="Likes" />
        </Col>
        <Col xs={4}>
          <CardDetail title="1.4K" subtitle="Photos" />
        </Col>
      </Row>
    </Col>
  );
}
