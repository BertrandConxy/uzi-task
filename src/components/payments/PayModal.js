import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const PayModal = (props) => (
  <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    className="rounded-3 p-3"
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter" className="text-center" />
    </Modal.Header>
    <Modal.Body>
      <div className="d-flex flex-column justify-content-center align-items-center ">
        <h4 className="text-center text-primary">Your Payment Details</h4>
        <hr className="w-50 bold-line" />
      </div>
      <div className="mx-4">
        <div className="d-flex justify-content-between">
          <span>Subscription Type</span>
          <span>Monthly</span>
        </div>
        <div className="d-flex justify-content-between ">
          <span>Bill id </span>
          <span>2333444</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Purchhase data</span>
          <span>Monthly</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Subscription Type</span>
          <span>Monthly</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Subscription Type</span>
          <span>Monthly</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Subscription Type</span>
          <span>Monthly</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Subscription Type</span>
          <span>Monthly</span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="text-danger fw-bold">Total cost</span>
          <span className="text-danger fw-bold">100$</span>
        </div>
      </div>
    </Modal.Body>
    <Modal.Footer className="d-flex justify-content-center">
      <Button className="btn btn-success w-100 shadow rounded-3" type="submit">Complete Payment</Button>
    </Modal.Footer>
  </Modal>
);

export default PayModal;
