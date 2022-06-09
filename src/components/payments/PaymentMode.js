import React from "react";
import { NavLink } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "../../stylesheets/payment.css";
import MTN from "../../assets/MTN.png";
import Airtel from "../../assets/Airtel.png";
import Card from "../../assets/Card.png";

const PaymentMode = () => (
  <section>
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h2 className="text-warning text-center">Plans and Pricing</h2>
      <p className="text-white">Get complete unlimited access to UZI lessons</p>
      <div className="d-flex align-items-center">
        <NavLink
          to="/payment/2"
          className=" time active-link text-white link mx-2  bg-secondary text-uppercase rounded-start"
        >
          monthly
        </NavLink>
        <NavLink
          to="/payment/1"
          className="time text-white link  bg-secondary  text-uppercase"
        >
          semester
        </NavLink>
        <NavLink
          to="/payment/1"
          className="time text-white text-uppercase link mx-2  bg-secondary rounded-end"
        >
          annual
        </NavLink>
      </div>
    </div>

    <div className="row row-cols-2  row-cols-sm-2 row-cols-md-2 row-cols-lg-4 gap-3 align-items-center justify-content-center my-3">
      <Form>
        <div className="col border rounded-3 border-white py-4 px-2">
          <h4 className="text-white">Bill Address</h4>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-muted">Enter your Email</Form.Label>
            <Form.Control type="email" placeholder="Email Address" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress">
            <div className="d-flex justify-content-between text-muted">
              <Form.Label>Address</Form.Label>
              <em>Ex: Gikondo/Kigali</em>
            </div>
            <Form.Control type="text" placeholder="Enter your location" />
          </Form.Group>
        </div>
        <div className="col-lg-4 border rounded-3 border-warning py-4 px-2 text-white">
          <h4 className="text-white">Payment Methods</h4>
          <em>Select your payment method</em>

          <div className="d-flex gap-3">
            <Form.Group className="mb-3" controlId="formBasicRadiobox">
              <Form.Check type="radio" label="Mobile Money" />
              <img src={Card} alt="card" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRadiobox">
              <Form.Check type="radio" label="Airtel Money" />
              <img src={Airtel} alt="airtel" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRadiobox">
              <Form.Check type="radio" label="Cards" />
              <img src={MTN} alt="mtn" />
            </Form.Group>
          </div>

          <Form.Group className="mb-3" controlId="formBasicTel">
            <Form.Label>Telephone Number</Form.Label>
            <Form.Control type="tel" placeholder="078xxxx" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember this number" checked />
          </Form.Group>
        </div>
        <div className="col border rounded-3 border-white py-2 px-2">
          <h4 className="text-white">Summary</h4>
          <div className="my-3">
            <div className="d-flex justify-content-between">
              <span className="text-white">Original Price</span>
              <span className="text-warning">150.0$</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="text-white">Discount</span>
              <span className="text-warning">50.0$</span>
            </div>
            <hr className="text-white" />
            <div className="d-flex justify-content-between">
              <span className="fw-bold text-white">Total</span>
              <span className="fw-bold text-warning">200.0$</span>
            </div>
          </div>
          <div>
            <Form>
              <Form.Group
                className="mb-3 border border-warning"
                controlId="formBasicNumber"
              >
                <Form.Control
                  type="number"
                  placeholder="Enter your discount code"
                />
                <Button variant="warning" type="submit">
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
        <Button className="payment-btn rounded-3 py-2 px-3" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  </section>
);

export default PaymentMode;
