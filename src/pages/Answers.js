import React from 'react';
import { Button } from 'react-bootstrap';
import { AiOutlineRedo } from 'react-icons/ai';
import TopBar from '../components/answers/TopBar';
import Card from '../components/answers/Card';

const Answers = () => {
  const cardCount = [...Array(10)];

  return (
    <section className="section-bg p-3 px-2">
      <div className="bg-white rounded-3">
        <TopBar />
        <h2 className="text-center text-warning text-capitalize">
          Questions and their answers
        </h2>
        <div className="border border-2 round border-secondary p-3 d-flex flex-column m-1">
          <div className="d-flex justify-content-around">
            <span className="text-dark fw-bold ">
              Used Time:
              {' '}
              <span className="text-danger">9 Min</span>
            </span>
            <span className="text-dark fw-bold ">
              Obtained Marks:
              {' '}
              <span className="text-danger">30 Min</span>
            </span>
          </div>
          <div className="row row-cols-lg-5 row-cols-2  row-cols-md-5 justify-content-around align-items-center">
            {
                cardCount.map((item) => (
                  <div className="col my-1" key={item}>

                    <Card key={item} />
                  </div>
                ))
            }
          </div>

          <div className="align-self-end m-3">
            <Button variant="outline-warning" className="py-1 px-3 text-center mx-2">
              Back Home
            </Button>
            <Button variant="success" className="fw-bold py-1 px-3 text-center">
              Redo
              {' '}
              <AiOutlineRedo className="text-white fw-bold" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Answers;
