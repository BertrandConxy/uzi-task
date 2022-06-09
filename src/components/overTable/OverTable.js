import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import OverRow from './OverRow';

const OverTable = () => {
  const links = [
    'level option', 'secondary', 's3', 'geography', 'Term 1',
  ];

  const lessons = [
    {
      id: 1,
      color: 'color-2',
      course: 'phyics',
      start: '2022-02-01',
      title: 'Step 1',
      duration: '10 Min',
      question: 10,
      mark: 30,
    },
    {
      id: 2,
      color: 'color-3',
      course: 'geography',
      start: '2022-02-01',
      title: 'Step 1',
      duration: '10 Min',
      question: 10,
      mark: 0,
    },
    {
      id: 3,
      color: 'color-4',
      course: 'kinyarwanda',
      start: '2022-02-01',
      title: 'Step 1',
      duration: '10 Min',
      question: 10,
      mark: 50,
    },
    {
      id: 4,
      color: 'bg-primary',
      course: 'english',
      start: '2022-02-01',
      title: 'Step 1',
      duration: '10 Min',
      question: 10,
      mark: 90,
    },
    {
      id: 4,
      color: 'color-2',
      course: 'phyics',
      start: '2022-02-01',
      title: 'Step 1',
      duration: '10 Min',
      question: 10,
      mark: 30,
    },
    {
      id: 1,
      color: 'color-3',
      course: 'phyics',
      start: '2022-02-01',
      title: 'Step 1',
      duration: '10 Min',
      question: 10,
      mark: 30,
    },
  ];

  return (
    <section className="border border-1 p-3 px-4 rounded-3 border-warning">
      <div className="d-flex ">
        {links.map((link) => (
          <span className="fs-3 mx-3" key={link}>
            {link === 'Term 1' ? (
              <Link to="/overview" className="text-warning">
                {link}
              </Link>
            ) : (
              <Link to="/overview" className="text-white">
                {link}
              </Link>
            )}
            |
            {' '}
          </span>
        ))}
      </div>
      <div className="position-relative h-25">
        <Table responsive className="text-white course-table position-relative">
          <thead>
            <tr>
              <th>Course</th>
              <th>Start Date</th>
              <th>Title</th>
              <th>Duration</th>
              <th>Question(s)</th>
              <th className="text-warning">Mark(s)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="overflow-auto course-body">
            {lessons.map((lesson) => (
              <OverRow
                key={lesson.id}
                color={lesson.color}
                course={lesson.course}
                start={lesson.start}
                title={lesson.title}
                duration={lesson.duration}
                question={lesson.question}
                mark={lesson.mark}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
};

export default OverTable;
