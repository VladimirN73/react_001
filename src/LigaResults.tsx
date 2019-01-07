import React from 'react';

interface LigaResultsProps {
    day: number;
  }

export class LigaResults extends React.Component<LigaResultsProps> {
  render() {
    const title = 'Results';

    return (
      <div>{title}</div>
    );
  }
}
