import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
} from "reactstrap"; 

const EventBooking = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bookingDate: "",
    peopleCount: "",
  });

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container className="mb-5">
      {" "}
   
      <Row>
        <Col lg="8" md="10" sm="12" className="mx-auto">
          <div className="event-booking-form">
            <h3 className="text-center">Book Your Event</h3>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="name">Full Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="email">Email Address</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="phone">Phone Number</Label>
                <Input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="bookingDate">Event Date</Label>
                <Input
                  type="date"
                  name="bookingDate"
                  id="bookingDate"
                  value={formData.bookingDate}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="peopleCount">Number of People</Label>
                <Input
                  type="number"
                  name="peopleCount"
                  id="peopleCount"
                  placeholder="Enter the number of people"
                  value={formData.peopleCount}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>

              <Button type="submit" className="w-100">
                Book Event
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default EventBooking;
