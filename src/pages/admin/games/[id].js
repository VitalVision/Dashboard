import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Content from '../../../components/content';
import GamePage from '../../../components/game/GamePage';

export default function GamesPage() {
  const router = useRouter();
  const { id } = router.query;
  const [gameData, setGameData] = useState(null);

  async function fetchGameData() {
    try {
      const res = await fetch(`/api/games/${id}`);
      const data = await res.json();
      console.log(data)
      setGameData(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchGameData();
  }, [id]);

  return (
    <>
      {gameData ?
        <Content title={gameData.name}>
          <GamePage game={gameData} />
        </Content>
        : <p>Loading...</p>}
    </>
  );
}
