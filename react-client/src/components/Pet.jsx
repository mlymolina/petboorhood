import React from 'react';

class Pet extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      pressedBTN: 'see',
    }
  }

  render () {
    return (
      <div className="pet-container">
        <div className="info-sec">
          <div className="petname">
            <span className="desc">Name: </span>
            { this.props.pet.name }
          </div>
          <div className="age">
            <span className="desc">Age: </span>
            { this.props.pet.monthAge > 12 ? Math.ceil(this.props.pet.monthAge/12) + ' years' : this.props.pet.monthAge + ' months' }
          </div>
          <div className="breed">
            <span className="desc">Breed: </span>
            { this.props.pet.breed }
          </div>
        </div>
        <div className="pic">
          <img src={this.props.pet.pic} alt=""/>
         </div>
        <div className="summary">
          <span className="desc summary">Summary: </span>
          <p>{ this.props.pet.description }</p>
        </div>
          { 
            this.props.view === 'petSitting' ? 
            <button className="takecare" value="+"> + </button> : 
            <button className="takecare" value="see"> see </button>
          }
      </div>
    );
  }
}

export default Pet;

