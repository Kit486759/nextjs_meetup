import MeetupDetail from "../../components/meetups/MeetupDetail"

export default function MeetupDetails() {
    console.log(process.env.MONGODB_USER_PW)
    return (
        <>
            <MeetupDetail
                img='https://upload.wikimedia.org/wikipedia/commons/5/57/Concord_Pacific_Master_Plan_Area.jpg'
                title='First meetup'
                address='999 deman street'
                description='the first meetup'
            />

        </>
    )
}

export async function getStaticPaths() {
    return {
        fallback:  false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            }
        ]
    }
}

export async function getStaticProps(context) {
    // fetch data

    const meetupId = context.params.meetupId
    console.log(meetupId)
    return {
        props: {
            meetupData: {
                id: meetupId,
                img: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Concord_Pacific_Master_Plan_Area.jpg',
                title: 'First meetup',
                address: '999 deman street',
                description: 'the first meetup'
            }
        }
    }


}