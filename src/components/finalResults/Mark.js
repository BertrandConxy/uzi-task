import React from 'react';
import { Button } from 'react-bootstrap';

const Mark = () => (
  <section className="d-flex flex-column justify-content-around py-2 px-4 align-items-center bg-success text-white q-card">
    <div className="text-center align-self-center">
      <h3 className="fw-bold fs-2">Marks</h3>
      <h4 className="fw-bold fs-2">95%</h4>
      <div className="color-2 text-center shadow text-white">
        <p className="fs-4">You are in the first place in this space</p>
      </div>
      <h3 className="fw-bold">Conglaturations!</h3>
    </div>
    <div className="align-self-center mb-3">
      <Button variant="primary" className="mt-3 rounded-3 shadow">
        Feedback&Results
      </Button>
    </div>
  </section>
);

export default Mark;
