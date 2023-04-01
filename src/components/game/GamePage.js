// pages/gamePage.js
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Image from 'next/image';

const GamePage = ({ game }) => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const { name, rehabTarget, difficulty } = game;

  const onSubmit = async (data) => {
    // Send form data as JSON vr headset
    await fetch('/api/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Game Details</h1>
      <div className="relative w-full h-96 mb-4">
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
            <option value="patient2">Patient 2</option>
            {/* Add more patients */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="difficulty" className="block mb-2">
            Select Difficulty
          </label>
          <select id="difficulty" {...register('difficulty')} className="block w-full">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="toggle" className="inline-block mb-2">
            Sample Toggle
          </label>
          <input
            type="checkbox"
            id="toggle"
            {...register('toggle')}
            className="block"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default GamePage;
