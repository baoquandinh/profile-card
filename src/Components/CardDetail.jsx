import React from "react";
import { Row, Col } from "react-bootstrap";

export default function CardDetail(props) {
  const { title, subtitle } = props;
  return (
    <React.Fragment>
      <Row className="justify-content-center" style={{ fontWeight: "bold" }}>
        {title}
      </Row>
      <Row className="justify-content-center" style={{ color: "#a5a5a6" }}>
        {subtitle}
      </Row>
    </React.Fragment>
  );
}
