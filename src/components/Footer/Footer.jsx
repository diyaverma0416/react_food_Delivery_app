import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";

import swiggyIcon from '../../assets/images/swiggy.png';
import zomatoIcon from '../../assets/images/zomata.png';

import "../../styles/footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="3" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Paranthey House</h5>
              <p>Taste the Tradition, Savor the Flavor!</p>
            </div>
          </Col>

          <Col lg="4" md="3" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Monday - Sunday</span>
                <p>08:00pm - 04:00am</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone: +91-XXXXXXXXXX</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: contact@example.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="4" md="3" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>
                  Location: Food Street, New Delhi, India
                </p>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>

        <Row className="mt-10">
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Also can order through: </p>
              <span>
                <img
                  src={swiggyIcon}
                  alt="Swiggy"
                  style={{ width: "24px", height: "24px", margin: "0 10px" }}
                />
              </span>

            
              <span>
                <img
                  src={zomatoIcon}
                  alt="Zomato"
                  style={{ width: "24px", height: "24px", margin: "0 10px" }}
                />
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
