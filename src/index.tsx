import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import {LigaDay} from './LigaDay'


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

