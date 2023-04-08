// pages/gamePage.js
import { useForm } from 'react-hook-form';
import Image from 'next/image';

const GamePage = ({ game }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      difficulty: game.difficulty,
      toggleLeft: game.leftHand,
      toggleRight: game.rightHand,
    }
  });

  const onSubmit = async (data) => {
    // merge data with existing game data
    data = { ...game, ...data };
    console.log("🚀 ~ file: GamePage.js:18 ~ onSubmit ~ data:", data)

    // Send form data as JSON vr headset
    await fetch('/api/games/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <div className="container px-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Game Details</h1>
      <div className="relative w-full mb-4 h-96">
        <Image
          src={game.imageUrl}
          alt="Game video thumbnail"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="patient" className="block mb-2">
            Select Patient
          </label>
          <select id="patient" {...register('patient')} className="block w-full">
            <option value="patient1">Patient 1</option>
            {/* Add more patients */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="difficulty" className="block mb-2">
            Select Difficulty
          </label>
          <select id="difficulty" {...register('difficulty')} className="block w-full">
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="toggleLeft" className="inline-block mb-2">
            Toggle Left hand
          </label>
          <input
            type="checkbox"
            id="toggleLeft"
            {...register('toggleLeft')}
            className="block"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="toggleRight" className="inline-block mb-2">
            Toggle Right hand
          </label>
          <input
            type="checkbox"
            id="toggleRight"
            {...register('toggleRight')}
            className="block"
          />
        </div>
        <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default GamePage;
