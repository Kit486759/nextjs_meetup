import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Concord_Pacific_Master_Plan_Area.jpg',
        address: '1999, Burrard St, ,Vancouver',
        description: 'This is the first meetup'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Concord_Pacific_Master_Plan_Area.jpg',
        address: '768, Denman St, ,Vancouver',
        description: 'This is the second meetup'
    }

]

export default function HomePage(props) {


    console.log(props.meetups)
    return (
        <>
            {/* {state.length !== 0 && */}
            <MeetupList meetups={props.meetups} />
            {/* } */}
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
//         // fetch every ()second
//         revalidate: 5
//     }
// }

// pre-render on building(fetch/ run once)
export async function getStaticProps(){
    return{
        props:{
            meetups : DUMMY_MEETUPS
        },
        // fetch every ()second
        revalidate:5
    }
}