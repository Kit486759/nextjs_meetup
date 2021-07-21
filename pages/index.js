import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';
import Head from 'next/head'


export default function HomePage(props) {


    return (
        <>
            <Head>
                <title>Nextjs Meetup</title>
                <meta
                    name="description"
                    content="Meetup page created by Nextjs" />
            </Head>
            <MeetupList meetups={props.meetups} />
        </>

    )
}

// // pre-render on server side (fetch/ run every request)
// export async function getServerSideProps(context) {

//     const req = context.req
//     const res = context.res

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         },
// 
//     }
// }

// pre-render on building(fetch/ run once)
export async function getStaticProps() {

    const client = await MongoClient.connect(`mongodb+srv://kit:xxivLr5EVmcPPjy@cluster0.ufguu.mongodb.net/meetups?retryWrites=true&w=majority`)
    const db = client.db();
    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();
    client.close();
    console.log(`getstatic run`)

    return {
        props: {
            meetups: meetups.map((meetup) => {
                return {
                    title: meetup.title,
                    image: meetup.image,
                    address: meetup.address,
                    description: meetup.description,
                    id: meetup._id.toString()
                }
            })
        },
        // fetch every ()second
        revalidate: 5,
    }
}