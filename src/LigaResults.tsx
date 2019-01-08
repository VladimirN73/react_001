import React from 'react';

interface LigaResultsProps {
    day: number,
    data:any
  }

  export interface GameProps {
    id:string;
    day: string;
    teamA:string;
    teamB:string;
    scoreA:string;
    scoreB:string;
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

    let data = this.props.data;

    if (data)
    {
      var games = data.map((game:any)=>{
        return (this.Game({
          id:game.MatchID, 
          day:game.MatchDateTime,
          teamA:game.Team1.TeamName,
          teamB:game.Team2.TeamName,
          scoreA:game.MatchResults[0].PointsTeam1,
          scoreB:game.MatchResults[0].PointsTeam2,
        }))});
    }
    return (
      <div>        
        <div>{title}</div>
        {games}
      </div>
      
    );
  }
}
