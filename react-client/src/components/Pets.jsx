import React from 'react';
import Pet from './Pet.jsx';

const Pets = (props) => (
  <div className="pet-list">
    { props.pets.map((pet, index)=> <Pet view={props.view} key={index} pet={pet}/>)}
  </div>
)

export default Pets;