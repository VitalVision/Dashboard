import { useEffect, useState } from 'react';
import Content from '../../../components/content';
import VrGameCard from '../../../components/game/VRGameCard';

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
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-2">
          {games.map((game, index) => (
            <VrGameCard key={index} game={game} />
          ))}
        </div>
      </div>
    </Content >);


}
