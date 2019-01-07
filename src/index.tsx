import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


class LigaTitle extends React.Component {
  render() {
    const title = 'Bundesliga';

    return (
        <div>{title}</div>     
    );
  }
}

class LigaDay extends React.Component {

  SquareX(iNumber:any) {
    return (
      <button key={iNumber} className="square" onClick={() => this.HandleClick(iNumber)}>
        {iNumber}      
      </button>
    );
  }

  HandleClick(iDay:any)
  {
    console.log(iDay);
    
  }

  render() {
    const title = 'Day';
    const iAmount:number = 34; // TODO to be provided from outside ...

    var days = [];
    for (var i = 1; i < iAmount+1; i++) {
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


class Bundesliga extends React.Component {
  render() {
    return (
      <div className="bundesliga">
        <div className="bundesliga-header">
          <LigaTitle />
        </div>
        <div className="bundesliga-day-select">
          <LigaDay />
        </div>
        <div className="bundesliga-day-results">
          <LigaResults />
        </div>
      </div>
    );
  }
}

class BundesligaContainer extends React.Component {
  render() {
    return (
      <Bundesliga />
    );
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

