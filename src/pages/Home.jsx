import {Link} from 'react-router-dom';
import React from 'react';

export default function Home(props) {
  return (
    <div className='d-block text-center w-100'>
    <Link to='/page/0'>
      <button
        className={props.navbarState}
      >
        <h2>
          Природно-заповідні об'єкти Черкащини.
        </h2>
      </button>
    </Link>

      <div className='d-flex justify-content-center'>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link active" to="/page/1">{props.first}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/page/2">{props.second}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/page/3">{props.third}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};