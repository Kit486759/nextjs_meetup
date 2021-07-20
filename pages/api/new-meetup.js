import {MongoClient} from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup

function handler(req, res) {

    if (req.method === 'POST') {
        const data = req.body;
        const { title, img, address, description } = data

        MongoClient.connect(`mongodb+srv://kit:${process.env.MONGODB_USER_PW}@cluster0.ufguu.mongodb.net/meetups?retryWrites=true&w=majority`)
    }

}

export default handler