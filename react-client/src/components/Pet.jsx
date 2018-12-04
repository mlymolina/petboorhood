import React from 'react';

const Pet = (props) => (
  <div className="pet-container">
    <div className="info-sec">
      <div className="petname">
        <span className="desc">Name: </span>
        { props.pet.name }
      </div>
      <div className="age">
        <span className="desc">Age: </span>
        { props.pet.monthAge > 12 ? Math.ceil(props.pet.monthAge/12) + ' years' : props.pet.monthAge + ' months' }
      </div>
      <div className="breed">
        <span className="desc">Breed: </span>
        { props.pet.breed }
      </div>
    </div>
    <div className="pic">
      <img src={props.pet.pic} alt=""/>
    </div>
    <div className="summary">
      <span className="desc summary">Summary: </span>
      <p>{ props.pet.description }</p>
    </div>
      { 
        props.view === 'petSitting' ? 
        <button className="takecare"> + </button> : 
        <button className="takecare"> see </button>
      }
  </div>
)

export default Pet;