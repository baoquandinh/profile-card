import React from "react";
import { Row, Col } from "react-bootstrap";

export default function CardUserInfo(props) {
  const { name, age, location } = props;
  return (
    <React.Fragment>
      <Row className="justify-content-center">
        <Col className="text-center">
          <p style={{ marginBottom: "3px" }}>
            <strong>{name}</strong>{" "}
            <span style={{ color: "#a5a5a6" }}>{age}</span>
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center" style={{ paddingBottom: "1px" }}>
        <Col className="text-center" style={{ color: "#a5a5a6" }}>
          {location}
        </Col>
      </Row>
    </React.Fragment>
  );
}
