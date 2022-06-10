import React from 'react';
import '../../stylesheets/questionSection.css';
import { BsClockFill } from 'react-icons/bs';
import QuestionCard from './QuestionCard';
import Pictures from './Pictures';

const QuestionSection = () => (
  <section className="section-bg-2 py-3">
    <div className="d-flex justify-content-between">
      <div className="d-flex flex-column align-items-center">
        <BsClockFill className="text-warning fs-2" />
        <span className="text-warning fs-2 fw-bold">09:23</span>
      </div>
      <div className="form-check form-switch d-flex flex-column ">
        <label className="form-check-label fw-bold my-2 text-white" htmlFor="flexSwitchCheckChecked">Music</label>
        <input className="form-check-input m-0" type="checkbox" id="flexSwitchCheckChecked" />
      </div>
      <div className="d-flex flex-column">
        <h3 className="color-1 text-uppercase fw-bold">tip:</h3>
        <p className="text-white fw-bold">Click on the triangle once it is pointing on right answer</p>
      </div>
    </div>
    <QuestionCard />
    <Pictures />
  </section>
);

export default QuestionSection;
