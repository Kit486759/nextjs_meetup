import MeetupDetail from "../../components/meetups/MeetupDetail"
import { MongoClient, ObjectId } from 'mongodb';

export default function MeetupDetails(props) {

    return (
        <>
            <MeetupDetail
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />

        </>
    )
}

export async function getStaticPaths() {

    const client = await MongoClient.connect(`mongodb+srv://kit:${process.env.MONGODB_USER_PW}@cluster0.ufguu.mongodb.net/meetups?retryWrites=true&w=majority`)
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray()
    client.close();

    return {
        fallback: false,
        paths: meetups.map((meetup) => {
            return {
                params: {
                    meetupId: meetup._id.toString()
                }
            }
        })

        // paths: [
        //     {
        //         params: {
        //             meetupId: 'm1'
        //         }
        //     },
        //     {
        //         params: {
        //             meetupId: 'm2'
        //         }
        //     }
        // ]
    }
}

export async function getStaticProps(context) {
    // fetch data
    const meetupId = context.params.meetupId
    console.log(meetupId)

    const client = await MongoClient.connect(`mongodb+srv://kit:${process.env.MONGODB_USER_PW}@cluster0.ufguu.mongodb.net/meetups?retryWrites=true&w=majority`)
    const db = client.db();
    const meetupsCollection = db.collection('meetups');

    // ObjectId() convert string to MongoDB object id
    const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) })
    client.close();
    console.log(selectedMeetup.description)
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                image: selectedMeetup.image,
                description: selectedMeetup.description,
                address: selectedMeetup.address,
                title: selectedMeetup.title
            }
        }
    }


}