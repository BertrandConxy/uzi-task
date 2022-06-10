import React from 'react'
import { Figure } from 'react-bootstrap';
import "../../stylesheets/board.css";
import Award from '../../assets/award.png';
import Medal from '../../assets/medal.png';

const Board = () => {
  return (
    <section className="container d-flex flex-column justify-content-center align-items-center text-white">
      <h3 className="text-uppercase text-center">winner</h3>
      <div className="d-flex container my-4 mx-2 align-items-end gap-1">
        <div className="place-2 place d-flex flex-column justify-content-start align-items-center bg-success">
          <h3 className="mt-4">70%</h3>
          <Figure>
            <Figure.Image width={140} height={120} alt="" src={Medal} />
          </Figure>
          <h5 className="m-0">Alice kayirebwa</h5>
          <p className="tag mt-5">Nice work</p>
        </div>
        <div className="place-1 place d-flex flex-column justify-content-start align-items-center">
          <h3 className="mt-4">90%</h3>
          <Figure>
            <Figure.Image width={140} height={120} alt="" src={Award} />
          </Figure>
          <h5 className="m-0">Bertrand</h5>
          <div className="tag mt-5">
            <p className="m-0">Keep it</p>
            <p className="m-0 fs-3">UP</p>
          </div>
        </div>
        <div className="place-2 place d-flex flex-column justify-content-start align-items-center bg-success ">
          <h3 className="mt-4">70%</h3>
          <Figure>
            <Figure.Image width={140} height={120} alt="" src={Medal} />
          </Figure>
          <h5 className="m-0">Bernard</h5>
          <p className="tag mt-5">Nice work</p>
        </div>
      </div>
    </section>
  );
}

export default Board