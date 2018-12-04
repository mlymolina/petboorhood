import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Pets from './components/Pets.jsx';
import RequestSitter from './components/RequestSitter.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentUser: {},
      pets: [],
      currentView: 'petSitting'
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/dogs', 
      success: (data) => {
        this.setState({
          pets: data.pets,
          currentUser: data.user
        });
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  chooseView(event) {
    this.setState({
    	currentView: event.target.value,
    });
  }

  updatePets() {
    $.ajax({
      url: '/dogs', 
      success: (data) => {
        this.setState({
          pets: data.pets,
          currentUser: data.user
        });
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  addToMyList() {

  }

  render () {
    return (
      <div className = 'petApp'> 
        <div className="options">
          <button 
            className="button-secondary pure-button"
            value="petSitting"
            onClick={this.chooseView.bind(this)}>
            Pets Needing Care
          </button>
          <button 
            className="button-secondary pure-button"
            value="myPetList"
            onClick={this.chooseView.bind(this)}>
            My Previous and Actual Cares 
          </button>
          <button 
            className="button-secondary pure-button"
            value="requestSitter"
            onClick={this.chooseView.bind(this)}>
            Request a Sitter
          </button>
          <button 
            className="button-secondary pure-button"
            value="allDogs"
            onClick={this.chooseView.bind(this)}>
            See All Pets
          </button>

          {this.state.currentView === 'allDogs' &&
            <Pets 
              view={this.state.currentView} 
              pets={this.state.pets}
            />
          }

          {this.state.currentView === 'petSitting' && 
            <Pets 
              view={this.state.currentView} 
              pets={this.state.pets.filter((pet) => {
                return pet.status === true;
              })}
            />
          }

          { this.state.currentView === 'requestSitter' &&
            <RequestSitter update={this.updatePets.bind(this)} initialProps={this.state}/>
          }

          { this.state.currentView === 'myPetList' &&
            this.state.currentUser.hasTakenCareOf.length > 0 ?
            <Pets view={this.state.currentView} pets={this.state.currentUser.hasTakenCareOf}/>:
            this.state.currentView === 'myPetList' && 
            <div className="empty-list">
              <h4>Empty list!</h4>
              <h6>Start taking care of someone else pet and become happier.</h6>
            </div>
          }
          
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));