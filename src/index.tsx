import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {LigaDay} from './LigaDay'
import {LigaResults} from './LigaResults'

class LigaTitle extends React.Component {
  render() {
    const title = 'Bundesliga';

    return (
      <div>{title}</div>
    );
  }
}


interface BundesligaProps {
  day: number
  onDayChange: (day: number) => void;
  data:any
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
          <LigaResults day={this.props.day} data={this.props.data} />
        </div>
      </div>
    );
  }
}


interface State {
  day: number,
  loading: boolean,
  data:any
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
    day: 0,
    loading: false,
    data:null
  }

  render() {
    return (
      <Bundesliga 
        day={this.state.day} 
        onDayChange={day => this.setDay(day)}
        data={this.state.data}
      />
    );
  }

  setDay(day: number) {
    this.setState({ day: day});
    // alert(day);
    this.loadData(day);
  }

  // loads data/results for the selected day
  loadData(day: number) {
    this.setState({ loading:true})

    let url='https://www.openligadb.de/api/getmatchdata/bl1/2017/' + day;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {     
      this.setState(
        { data:data},
        () => {console.log(this.state);}  // a hack to avoid async/late setting
      );

    });

    this.setState({ loading:false})
  }

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

