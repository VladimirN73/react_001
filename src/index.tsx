import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';


class LigaTitle extends React.Component {
  render() {
    const title = 'Bundesliga';

    return (
      <div>{title}</div>
    );
  }
}

interface LigaDayProps {
  day: number,
  onDayChange: (day: number) => void;
}

class LigaDay extends React.Component<LigaDayProps> {

  SquareX(iNumber: any) {
    return (
      <button 
        style={{ backgroundColor: iNumber === this.props.day ? "red" : "white" }} 
        key={iNumber} className="square" onClick={() => this.props.onDayChange(iNumber)}>
        {iNumber}
      </button>
    );
  }

  render() {
    const title = 'Day';
    const iAmount: number = 34; // TODO to be provided from outside ...

    var days = [];
    for (var i = 1; i < iAmount + 1; i++) {
      days.push(this.SquareX(i));
    }

    return (
      <div>
        <div>{title}</div>
        <div className="board-row">
          {days}

          {/*[0, 1, 2].map( 
           day => <div>{i}</div> )
         */}

        </div>
      </div>
    );
  }
}

class LigaResults extends React.Component {
  render() {
    const title = 'Results';

    return (
      <div>{title}</div>
    );
  }
}

interface BundesligaProps {
  day: number
  onDayChange: (day: number) => void;
}

class Bundesliga extends React.Component<BundesligaProps> {
  
  
  render() {
    return (
      <div className="bundesliga">
        <div className="bundesliga-header">
          <LigaTitle />
        </div>
        <div className="bundesliga-day-select">
          <LigaDay day={this.props.day} onDayChange={day => this.props.onDayChange(day)} />
        </div>
        <div className="bundesliga-day-results">
          <LigaResults />
        </div>
      </div>
    );
  }
}


interface State {
  day: number
}
// functions
//  LoadData
//  ShowResults
//
// state/event 
//  OnDayChange
//  OnDataLoading
//  OnDataLoaded
//  OnCancelDataLoading


class BundesligaContainer extends React.Component<{}, State> {

  
  state: State = {
    day: 1
  }

  render() {
    return (
      <Bundesliga day={this.state.day} onDayChange={day => this.setDay(day)} />
    );
  }

  setDay(day: number) {
    this.setState({ day: day});
  }
}

const SET_CURRENT_DAY = 'SET_CURRENT_DAY';

function SetCurrentDay(day: number) {

  alert(day);

  return {
    type: SET_CURRENT_DAY,
    day,
  };
}


function ShowResults(state = [], action: any) {
  switch (action.type) {
    default:
      return state
  }
}

// loads data/results for the selected day
function LoadData(iDay: number) {

}


// ========================================

ReactDOM.render(
  <BundesligaContainer />,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

