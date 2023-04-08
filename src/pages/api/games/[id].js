import { connectToDatabase } from "../../../lib/mongodb";
// import fs from 'fs';
// import path from 'path';

// const dataFilePath = path.join(process.cwd(), 'public/data/games.json');

// export default function handler(req, res) {
//   try {
//     const data = fs.readFileSync(dataFilePath, 'utf8');
//     const gamesData = JSON.parse(data);

//     const { id } = req.query;
//     const game = gamesData.find(g => g.gameId === id);

//     if (!game) {
//       return res.status(404).json({ message: 'Game not found' });
//     }

//     res.status(200).json(game);
//   } catch {
//     res.status(500).json({ message: 'Error reading data file' });
//   }
// }

export default async function handler(req, res) {
  try {
    const db = await connectToDatabase();
    const { id } = req.query;
    const game = await db.collection('games').findOne({ gameId: id });
    if (!game) {
      return res.status(404).json({ message: 'Game not found' });
    }
    res.status(200).json(game);
  } catch {
    res.status(500).json({ message: 'Error reading data file' });
  }
}
