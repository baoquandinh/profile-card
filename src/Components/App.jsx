import Card from "./Card";
import { Container, Row } from "react-bootstrap";
import { Component } from "react";
import backgroundBottom from "../Images/bg-pattern-bottom.svg";
import backgroundTop from "../Images/bg-pattern-top.svg";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    const containerStyle = {
      height: "100vh",
      backgroundColor: "#19a1ad",
    };
    const backgroundBottomStyle = {
      position: "fixed",
      top: "50%",
      left: "47%",
    };

    const backgroundTopStyle = {
      position: "fixed",
      bottom: "40%",
      right: "50%",
    };
    return (
      <Container fluid style={containerStyle}>
        <img src={backgroundTop} style={backgroundTopStyle}></img>
        <img src={backgroundBottom} style={backgroundBottomStyle}></img>
        {/* <Row style={{height: '500px', width: '500px', paddingTop: "135px" }}> */}
        <Row className="justify-content-center" style={{paddingTop: "180px"}}>
          <Card />
        </Row>
      </Container>
    );
  }
}

export default App;
