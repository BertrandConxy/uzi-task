import React from "react";
import "../../stylesheets/questionSection.css";
import { BsClockFill } from "react-icons/bs";
import QuestionCard from "./QuestionCard";
import Pictures from "./Pictures";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const QuestionSection = () => (
  <section className="section-bg-2 py-3 px-3">
    <div className="d-flex justify-content-between">
      <div className="d-flex flex-column align-items-center">
        <BsClockFill className="text-warning fs-2" />
        <span className="text-warning fs-2 fw-bold">09:23</span>
      </div>
      <div className="form-check form-switch d-flex flex-column ">
        <label
          className="form-check-label fw-bold my-2 text-white"
          htmlFor="flexSwitchCheckChecked"
        >
          Music
        </label>
        <input
          className="form-check-input m-0"
          type="checkbox"
          id="flexSwitchCheckChecked"
        />
      </div>
      <div className="d-flex flex-column">
        <h3 className="color-1 text-uppercase fw-bold">tip:</h3>
        <p className="text-white fw-bold">
          Click on the triangle once it is pointing on right answer
        </p>
      </div>
    </div>
    <div className="d-flex flex-column flex-md-row flex-lg-row justify-content-around mt-4">
      <QuestionCard />
      <Pictures />
    </div>
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <Link to="/" className="text-white">
          Back Home
        </Link>
      </div>
      <div>
        <Button variant="outline-warning" className="mt-3 rounded-3  mx-2">
          <Link to="/" className="text-white link">
            Back
          </Link>
        </Button>
        <Button variant="warning" className="mt-3 rounded-3 link">
          <Link to="/" className="text-white link">
            Next
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default QuestionSection;
