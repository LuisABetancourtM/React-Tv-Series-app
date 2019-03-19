import React from 'react';
import loaderSrc from '../../assets/Mandala.gif';

const Loader = props => (
  <div>
    <img alt="Loader icon" src={loaderSrc} style={{width:75}}/>
  </div>
);

export default Loader;
