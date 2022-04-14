import React from 'react';
import button from 'bootstrap/js/src/button';
import {Link} from 'react-router-dom';

function Photos(props) {
  const photos = props.photos.map((photo, i) =>
    <img
      src={photo.src} alt={photo.alt}
      className='col-xxl-4 col-xl-4 col-md-4 col-sm-12 mb-3 mt-3'
      style={{objectFit: "contain", maxHeight: '350px'}}
      key={i}
    />

  );
  return (
    <div className="inline-block text-center row">
      {photos}
    </div>

  );
}

function Text(props) {
  const text = props.text.map((paragraph, i) =>
    <p key={i}>{paragraph}<br/><br/></p>
  );
  return (
    <p className='text-start border-bottom'>
      {text}
    </p>
  );
}

function NavigationButtons(props) {
  let next = '';
  let previous = '';
  console.log(props);

  if (props.next != null) {
    next = <Link to={`/page/${props.next}`}><button className="btn btn-primary">{'Next >>'}</button></Link>
  } else {
    next = <button className="btn btn-primary" disabled>{'Next >>'}</button>
  }
  if (props.previous != null) {
    previous = <Link to={`/page/${props.previous}`}><button className="btn btn-primary">{'<< Previous'}</button></Link>
  } else {
    previous = <button className="btn btn-primary" disabled>{'<< Previous'}</button>
  }
  return (
    <div className="w-100 d-flex justify-content-end">
      <span className='m-1'>
        {previous}
      </span>
      <span className='m-1'>
        {next}
      </span>
    </div>
  )
}

export default class Page extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className='d-flex w-auto justify-content-center m-3 shadow-lg border border-1 rounded-3' style={{backgroundColor: '#f2ebf2', minHeight: '765px'}}>
        <div className="d-block text-center w-75 mb-4 p-4">
          <h2>{this.props.title}</h2>
          <Text text={this.props.mainText}/>
          <Photos photos={this.props.photos}/>
          <NavigationButtons next={this.props.next} previous={this.props.previous} />
        </div>
      </div>
    );
  }
}
