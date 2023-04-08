import { useEffect, useState } from 'react';
import Content from '../../../components/content';
import VrGameCard from '../../../components/game/VrGameCard';

export default function GamesPage() {
  const [games, setGames] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch('/data/games.json');
      const data = await response.json();
      setGames(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Content title="Games" >
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-2">
          {games.map((game, index) => (
            <VrGameCard key={index} game={game} />
          ))}
        </div>
      </div>
    </Content >);


}
