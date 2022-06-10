import React from 'react';
import { Link } from 'react-router-dom';

const OverRow = ({
  id, color, course, start, title, duration, question, mark,
}) => (
  <tr className={`${color} p-2 rounded shadow-lg border-bottom-0 border-dark `} key={id}>
    <td>
      <span className="display-6 text-capitalize">{course}</span>
      <p>Lessons on plan health</p>
    </td>
    <td className="align-center">{start}</td>
    <td>{title}</td>
    <td>{duration}</td>
    <td>{question}</td>
    <td>
      {mark !== 0 ? (
        <span className="bg-light p-2 rounded">
          {mark < 50 ? (
            <span className="text-danger">
              {mark}
              %
            </span>
          ) : (
            <span className="text-success">
              {mark}
              %
            </span>
          )}
        </span>
      ) : (
        <span className="text-white bg-danger p-2 rounded">None</span>
      )}
    </td>
    {mark ? (
      <td>
        <Link to={`/overview/${id}`} className="link color-4 color-1 p-2 rounded shadow mx-2">
          View
        </Link>
        <Link to={`/overview/${id}`} className="link color-3 color-1 p-2 rounded shadow">Redo</Link>
      </td>
    ) : (
      <td>
        <Link to={`/overview/${id}`} className="link bg-light text-success rounded shadow mx-2 p-2">start</Link>
      </td>
    )}

  </tr>
);

export default OverRow;
