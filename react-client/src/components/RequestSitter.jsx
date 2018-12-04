import React from 'react';
import $ from 'jquery';

class RequestSitter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '2018-12-31',
      pet: this.props.initialProps.pets[5]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    $.ajax({
      type: 'PUT',
      url: '/dog/update/status/Molly'
    });
  }

  render() {
    return (
      <form 
        className="pet-sitter-request"
        onSubmit={this.handleSubmit}>
        {/* <label>
          From: 
          <input value={this.state.value} onChange={this.handleChange} />
        </label> */}

       
          <div className="pic">
            <img className="formImg" src={this.state.pet.pic} alt=""/>
          </div>
          <div className="info-sec">
            <div className="petname">
              <span className="desc">Name: </span>
              { this.state.pet.name }
            </div>
            <div className="age">
              <span className="desc">Age: </span>
              { this.state.pet.monthAge > 12 ? Math.ceil(this.state.pet.monthAge/12) + ' years' : this.state.pet.monthAge + ' months' }
            </div>
            <div className="breed">
              <span className="desc">Breed: </span>
              { this.state.pet.breed }
            </div>
          </div>
          <div className="info-sec form"> 
            <label htmlFor="start">From: </label>
            <input 
              type="date" 
              id="start" 
              name="trip-start"
              value={this.state.value}
              onChange={this.handleChange}
              min="2018-12-04" 
              max="2020-12-31"
            />
            <label htmlFor="start">To: </label>
            <input 
              type="date" 
              id="end" 
              name="trip-start"
              value={this.state.value}
              onChange={this.handleChange}
              min="2018-01-01" 
              max="2030-12-31"
            />
            <input onClick={this.props.update()}className="submit-request"type="submit" value="Submit" />
          </div>
      </form>
    );
  }
}

export default RequestSitter;