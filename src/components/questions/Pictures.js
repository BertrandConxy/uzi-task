import React from 'react';
import { OverlayTrigger, Tooltip, Figure } from 'react-bootstrap';
import { MDBRipple } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import Kigali from '../../assets/Kigali.png';
import '../../stylesheets/picture.css';

const Pictures = () => (
  <section className="row row-cols-3 align-items-center justify-content-center flex-grow-2 q-pic">
    <div className="col-12 d-flex justify-content-center position-relative">
      <OverlayTrigger
        key="top"
        placement="top"
        overlay={(
          <Tooltip id="tooltip-top">
            <strong className="tool-text">Click here</strong>
            <span className="position-absolute caption fw-bold fs-4">
              Kigali
            </span>
          </Tooltip>
        )}
      >
        <MDBRipple
          className="hover-overlay shadow-1-strong rounded"
          style={{ maxWidth: '60px' }}
          rippleTag="div"
          rippleColor="light"
        >
          <Link to="/">
            <Figure>
              <Figure.Image width={60} height={70} alt="" src={Kigali} />
            </Figure>
            <div
              className="mask"
              style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
            />
          </Link>
        </MDBRipple>
      </OverlayTrigger>
    </div>

    <div className="col d-flex justify-content-center">
      <OverlayTrigger
        key="top"
        placement="top"
        overlay={(
          <Tooltip id="tooltip-top">
            <strong className="tool-text">Click here</strong>
            <span className="position-absolute caption fw-bold fs-3">
              Kigali
            </span>
          </Tooltip>
        )}
      >
        <MDBRipple
          className="hover-overlay shadow-1-strong rounded"
          style={{ maxWidth: '60px' }}
          rippleTag="div"
          rippleColor="light"
        >
          <Link to="/">
            <Figure>
              <Figure.Image width={60} height={70} alt="" src={Kigali} />
            </Figure>
            <div
              className="mask"
              style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
            />
          </Link>
        </MDBRipple>
      </OverlayTrigger>
    </div>
    <div className="col d-flex justify-content-center">
      <OverlayTrigger
        key="top"
        placement="top"
        overlay={(
          <Tooltip id="tooltip-top">
            <strong className="tool-text">Click here</strong>
            <span className="position-absolute caption fw-bold fs-3">
              Kigali
            </span>
          </Tooltip>
        )}
      >
        <MDBRipple
          className="hover-overlay shadow-1-strong rounded"
          style={{ maxWidth: '60px' }}
          rippleTag="div"
          rippleColor="light"
        >
          <Link to="/">
            <Figure>
              <Figure.Image width={60} height={70} alt="" src={Kigali} />
            </Figure>
            <div
              className="mask"
              style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
            />
          </Link>
        </MDBRipple>
      </OverlayTrigger>
    </div>
    <div className="col-12 d-flex justify-content-center">
      <OverlayTrigger
        key="top"
        placement="top"
        overlay={(
          <Tooltip id="tooltip-top">
            <strong className="tool-text">Click here</strong>
            <span className="position-absolute caption fw-bold fs-3">
              Kigali
            </span>
          </Tooltip>
        )}
      >
        <MDBRipple
          className="hover-overlay shadow-1-strong rounded"
          style={{ maxWidth: '60px' }}
          rippleTag="div"
          rippleColor="light"
        >
          <Link to="/">
            <Figure>
              <Figure.Image width={60} height={70} alt="" src={Kigali} />
            </Figure>
            <div
              className="mask"
              style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
            />
          </Link>
        </MDBRipple>
      </OverlayTrigger>
    </div>
  </section>
);

export default Pictures;
