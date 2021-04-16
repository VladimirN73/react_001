import React from 'react';

interface LigaResultsProps {
  day: number,
  data: any
}

export interface GameProps {
  id: string;
  day: string;
  teamA: string;
  teamB: string;
  scoreA: string;
  scoreB: string;
}

export class LigaResults extends React.Component<LigaResultsProps> {

  Game(game: GameProps) {
    return (
      <ol key={game.id}>
        {game.day} {game.teamA} {game.scoreA} : {game.scoreB} {game.teamB}
      </ol>
    );
  }

  render() {
    const title = 'Results';

    const data = this.props.data;

    return (
      <div>
        <div>{title}</div>
        
          {data && data.map((g: any) => {
            
            const game = {
              id: g.MatchID,
              day: g.MatchDateTime,
              teamA: g.Team1.TeamName,
              teamB: g.Team2.TeamName,
              scoreA: g.MatchResults[0].PointsTeam1,
              scoreB: g.MatchResults[0].PointsTeam2,
            };

            return <GameItem key={g.MatchID} {...game}/>;
          })
        }
        
      </div>

    );
  }
}

const GameItem: React.StatelessComponent<{
  id: string;
  day: string;
  teamA: string;
  scoreA: string;
  scoreB: string;
  teamB: string;
}> = (props) => <li key={props.id}>
{props.day} {props.teamA} {props.scoreA} : {props.scoreB} {props.teamB}
</li>;