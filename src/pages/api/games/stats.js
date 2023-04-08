import { connectToDatabase } from "../../../lib/mongodb";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const db = await connectToDatabase();
        const stats = await db.collection("stats").find({}).toArray();
        res.status(200).json(stats);
    } else if (req.method === "POST") {
        const db = await connectToDatabase();
        const stats = req.body.stats;

        try {
            await db.collection("stats").insertOne({
                gameId: stats[0],
                userId: stats[1],
                level: stats[2],
                timetocompletion: stats[3]
            });
            res.status(201).json({ message: "Stats saved successfully" });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Error saving stats" });
        }
    } else {
        res.status(400).json({ message: "Invalid request method" });
    }
}
