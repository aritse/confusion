import React, { useState } from "react";
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Col, Input } from "reactstrap";
import { Link } from "react-router-dom";

export default function Contact() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    telnum: "",
    email: "",
    agree: false,
    contactType: "telephone",
    message: "",
  });

  const handleInputChange = (event) => {
    let { name, value } = event.target;
    if (event.target.type === "checkbox") value = event.target.checked;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Contact us</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h3>Location Information</h3>
        </div>
        <div className="col-12 col-sm-4 offset-sm-1">
          <h5>Our Address</h5>
          <address>
            121, Clear Water Bay Road
            <br />
            Clear Water Bay, Kowloon
            <br />
            HONG KONG
            <br />
            <i className="fa fa-phone"></i>: +852 1234 5678
            <br />
            <i className="fa fa-fax"></i>: +852 8765 4321
            <br />
            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
          </address>
        </div>
        <div className="col-12 col-sm-6 offset-sm-1">
          <h5>Map of our Location</h5>
        </div>
        <div className="col-12 col-sm-11 offset-sm-1">
          <div className="btn-group" role="group">
            <a role="button" className="btn btn-primary" href="tel:+85212345678">
              <i className="fa fa-phone"></i> Call
            </a>
            <a href="confusion" role="button" className="btn btn-info">
              <i className="fa fa-skype"></i> Skype
            </a>
            <a role="button" className="btn btn-success" href="mailto:confusion@food.net">
              <i className="fa fa-envelope-o"></i> Email
            </a>
          </div>
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h3>Send Us Your Feedback</h3>
        </div>
        <div className="col-12 col-md-9">
          <Form onSubmit={handleSubmit}>
            <FormGroup row>
              <Label htmlFor="firstname" md={2}>
                First Name
              </Label>
              <Col md={10}>
                <Input type="text" id="firstname" value={form.firstname} placeholder="First Name" name="firstname" onChange={handleInputChange}></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="lastname" md={2}>
                Last Name
              </Label>
              <Col md={10}>
                <Input type="text" id="lastname" value={form.lastname} placeholder="Last Name" name="lastname" onChange={handleInputChange}></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="telnum" md={2}>
                Telephone Number
              </Label>
              <Col md={10}>
                <Input type="tel" id="telnum" value={form.telnum} placeholder="Telephone Number" name="telnum" onChange={handleInputChange}></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="email" md={2}>
                Email
              </Label>
              <Col md={10}>
                <Input type="email" id="email" value={form.email} placeholder="Email Address" name="email" onChange={handleInputChange}></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={{ size: 6, offset: 2 }}>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" name="agree" checked={form.agree} onChange={handleInputChange} /> <strong>May we contact you?</strong>
                  </Label>
                </FormGroup>
              </Col>
              <Col md={{ size: 3, offset: 1 }}>
                <Input type="select" name="contactType" value={form.contactType} onChange={handleInputChange}>
                  <option>Telephone</option>
                  <option>Email</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="message" md={2}>
                Your Feedback
              </Label>
              <Col md={10}>
                <Input type="textarea" id="message" name="message" rows="12" value={form.message} onChange={handleInputChange}></Input>
              </Col>
            </FormGroup>{" "}
            <FormGroup row>
              <Col md={{ size: 10, offset: 2 }}>
                <Button type="submit" color="primary">
                  Send Feedback
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
}
