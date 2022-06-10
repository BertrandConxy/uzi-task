import React from 'react';
import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';
import { Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Kigali from '../../assets/Kigali.png';

const QuestionCard = () => (
  <section className="section-bg-3 px-3 rounded-3 q-card my-3">
    <div className="d-flex flex-column text-white">
      <span>Questions</span>
      <MDBProgress height="1">
        <MDBProgressBar
          bgColor="warning"
          width={25}
          valuemin={0}
          valuemax={100}
        />
      </MDBProgress>
    </div>
    <div className="d-flex flex-column">
      <h3 className="text-white">Capital city of Rwanda is?</h3>
      <Figure className="align-self-center">
        <Figure.Image width={130} height={140} alt="" src={Kigali} />
      </Figure>
      <div className="text-white">
        <div className="d-flex justify-content-around mb-2 align-items-center">
          <Link to="/" className="link text-white">
            <div className="d-flex justify-content-between align-items-center gap-1">
              <div className="border rounded-circle bg-light text-dark d-flex justify-content-center align-items-center px-2">
                <strong>A</strong>
              </div>
              <h4>Muhanga</h4>
            </div>
          </Link>
          <Link to="/" className="link text-white">
            <div className="d-flex justify-content-between align-items-center gap-1">
              <div className="border rounded-circle bg-light text-dark d-flex justify-content-center align-items-center px-2">
                <strong>C</strong>
              </div>
              <h4>Kigali</h4>
            </div>
          </Link>
        </div>
        <div className="d-flex justify-content-around mt-4">
          <Link to="/" className="link text-white">
            <div className="d-flex justify-content-between align-items-center gap-1">
              <div className="border rounded-circle bg-light text-dark d-flex justify-content-center align-items-center px-2">
                <strong>B</strong>
              </div>
              <h4>Gasabo</h4>
            </div>
          </Link>
          <Link to="/" className="link text-white">
            <div className="d-flex justify-content-between align-items-center gap-1">
              <div className="border rounded-circle bg-light text-dark d-flex justify-content-center align-items-center px-2">
                <strong>D</strong>
              </div>
              <h4>Gisenyi</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default QuestionCard;
