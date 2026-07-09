import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";



import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products.js";

import foodCategoryImg01 from "../assets/images/category-01.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../assets/images/location.png";



const featureData = [
  {
    title: "30-min Delivery",
    imgUrl: featureImg01,
    desc: "Fresh, hot, and at your doorstep in just 30 minutes! Fast, reliable, and hassle-free delivery every time.",
  },

  {
    title: "Comfortable Dine In",
    imgUrl: featureImg02,
    desc: "Relax and enjoy a cozy dining experience with delicious meals served in a comfortable setting.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Quick and hassle-free pick-up service for your favorite meals on the go.",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "Paratha") {
      const filteredProducts = products.filter(
        (item) => item.category === "Paratha"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "Breakfast") {
      const filteredProducts = products.filter(
        (item) => item.category === "Breakfast"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "Main Course") {
      const filteredProducts = products.filter(
        (item) => item.category === "Main Course"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> Order Now <br /> With
                  <span> Us</span>
                </h1>

                <p>Taste the Tradition, Savor the Flavor!</p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                
                  
                    <Link to="/foods" className="order__btn-wrapper">
                      <button className="order__btn d-flex align-items-center justify-content-between">
                        Order now <i className="ri-arrow-right-s-line"></i>
                      </button>
                    </Link>
                  

                  <button className="all__foods-btn">
                    <Link to="/event-booking" >Book With Us</Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    No shipping charge
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">We serve</h5>
              <h2 className="feature__title">Sit there at home</h2>
              <h2 className="feature__title">
                we are here <span>serve</span>
              </h2>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Paratha" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Paratha")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Parathe
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Breakfast" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Breakfast")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Breakfast
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Main Course" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Main Course")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Main Course
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section
        className="why__choose-us"
        style={{ backgroundColor: "#bcc2d8", padding: "60px 0" }}
      >
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img
                src={whyImg}
                alt="why-tasty-treat"
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  backgroundColor: "#bcc2d8",
                  padding: "10px",
                }}
              />
            </Col>

            <Col lg="6" md="6">
              <div
                className="why__tasty-treat"
                style={{
                  backgroundColor: "#bcc2d8",
                  padding: "20px",
                  borderRadius: "10px",
                }}
              >
                <h2
                  className="tasty__treat-title mb-4"
                  style={{ color: "#333", fontWeight: "bold" }}
                >
                  Why{" "}
                  <span style={{ color: "#003366" }}>
                    Paranthey House?
                  </span>
                </h2>
                <p
                  className="tasty__treat-desc"
                  style={{
                    color: "#4a4a4a",
                    marginBottom: "20px",
                    backgroundColor: "#bcc2d8",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                >
                  At Paranthey House, we serve you mouthwatering parathas
                  with a unique twist that you won't find anywhere else. Our
                  commitment to fresh ingredients and traditional recipes
                  ensures that every bite is a delight!
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem
                    className="border-0 ps-0"
                    style={{
                      marginBottom: "15px",
                      backgroundColor: "#bcc2d8",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <p
                      className="choose__us-title d-flex align-items-center gap-2"
                      style={{ color: "#333", fontWeight: "bold" }}
                    >
                      <i
                        className="ri-checkbox-circle-line"
                        style={{ color: "#003366" }}
                      ></i>{" "}
                      Fresh and tasty foods
                    </p>
                    <p
                      className="choose__us-desc"
                      style={{ color: "#555", marginBottom: "10px" }}
                    >
                      We pride ourselves on using the freshest ingredients to
                      create parathas that are not just tasty but also healthy
                      and satisfying.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem
                    className="border-0 ps-0"
                    style={{
                      marginBottom: "15px",
                      backgroundColor: "#bcc2d8",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <p
                      className="choose__us-title d-flex align-items-center gap-2"
                      style={{ color: "#333", fontWeight: "bold" }}
                    >
                      <i
                        className="ri-checkbox-circle-line"
                        style={{ color: "#003366" }}
                      ></i>{" "}
                      Quality support
                    </p>
                    <p
                      className="choose__us-desc"
                      style={{ color: "#555", marginBottom: "10px" }}
                    >
                      Our team is always ready to ensure that your dining
                      experience is nothing less than exceptional. We strive to
                      provide top-notch service to all our customers.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem
                    className="border-0 ps-0"
                    style={{
                      backgroundColor: "#bcc2d8",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <p
                      className="choose__us-title d-flex align-items-center gap-2"
                      style={{ color: "#333", fontWeight: "bold" }}
                    >
                      <i
                        className="ri-checkbox-circle-line"
                        style={{ color: "#003366" }}
                      ></i>{" "}
                      Order from any location
                    </p>
                    <p
                      className="choose__us-desc"
                      style={{ color: "#555", marginBottom: "10px" }}
                    >
                      Whether you're at home, in the office, or on the go, you
                      can order your favorite parathas from Paranthey House and
                      enjoy them wherever you are!
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
