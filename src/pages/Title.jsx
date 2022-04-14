import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export default function Title() {
  const [titleColor, setTitleColor] = useState('text-primary');
  return (
    <div
      className='d-block w-auto text-center shadow-lg border border-1 rounded-3 align-items-center m-3'
      style={{backgroundColor: '#f2ebf2', minHeight: '200px'}}
    >
      <div className='h-100'>
        <h1
          className={`w-100 m-3 ${titleColor}`}
          onMouseEnter={()=> {setTitleColor('text-dark')}}
          onMouseLeave={()=> {setTitleColor('text-primary')}}
        >Природно-заповідні об'єкти черкащини</h1>
      </div>
      <div className='d-flex justify-content-end align-items-end' style={{width: '95%'}}>
        <p>
          Виконав Руденко Віктор
        </p>
      </div>
      <div className="w-100 d-flex justify-content-end">
      <span className='m-1'>
        <button className='btn btn-primary' disabled >{'<< Previous'}</button>
      </span>
        <span className='m-1'>
        <Link to='/page/1' ><button className='btn btn-primary' >{'Next >>'}</button></Link>
      </span>
      </div>
    </div>
  );
}