import React from 'react';


interface LigaDayProps {
  day: number,
  onDayChange: (day: number) => void;
}

export class LigaDay extends React.Component<LigaDayProps> {

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
        </div>
      </div>
    );
  }
}
