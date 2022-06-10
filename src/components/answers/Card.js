import React from 'react'
import '../../stylesheets/card.css'
import {BsCheck} from 'react-icons/bs'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

import Mount from '../../assets/mount.png'

const Card = () => {
  return (
    <MDBCard style={{ maxWidth: "15rem" }} className="p-2 color-6 round shadow-lg">
      <MDBRipple
        rippleColor="light"
        rippleTag="div"
        className="bg-image hover-overlay align-self-center"
      >
        <MDBCardImage src={Mount} fluid alt="..." />
        <div
          className="mask"
          style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
        ></div>
      </MDBRipple>
      <MDBCardBody className="d-flex flex-column justify-content-center align-items-center">
        <MDBCardText className="text-success small-text my-0">
          How many teeth does a dog have?
        </MDBCardText>
        <hr className="bg-dark m-0" />
        <span className="py-1 px-4 color-5 text-dark text-center w-100 rounded-3 my-2">
          32
        </span>
        <span className="py-1 px-4 bg-success text-dark text-center w-100 rounded-3 d-flex justify-content-center position-relative">
          <span>20</span>
          <span className='align-self-end position-absolute icon-check'>
            <BsCheck className="text-white" />
          </span>
        </span>
        <span className="py-1 px-4 color-5 text-dark text-center w-100 rounded-3 my-2">
          32
        </span>
      </MDBCardBody>
    </MDBCard>
  );
}

export default Card