import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {

    if (req.method === 'POST') {

        // json string convert to object
        const data = JSON.parse(req.body);

        try {

            const client = await MongoClient.connect(`mongodb+srv://kit:${process.env.MONGODB_USER_PW}@cluster0.ufguu.mongodb.net/meetups?retryWrites=true&w=majority`)
            const db = client.db();

            const meetupsCollection = db.collection('meetups');

            const result = await meetupsCollection.insertOne(data)

            client.close()

            res.status(201).json({ message: 'Meetup inserted!' })
         
        } catch (err) {
            console.log(`THere is an error ${err}`)
        }

    }

}

export default handler